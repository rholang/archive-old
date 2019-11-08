"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pubnub_1 = tslib_1.__importDefault(require("pubnub"));
var types_1 = require("../../types");
var types_2 = require("../types");
var logger_1 = require("../../util/logger");
var eventemitter2_1 = require("eventemitter2");
var pubNubHistoryFetcher_1 = tslib_1.__importDefault(require("./pubNubHistoryFetcher"));
var REQUEST_MESSAGE_COUNT_THRESHOLD = 100;
var PubNubProtocol = /** @class */ (function () {
    function PubNubProtocol(featureFlags) {
        var _this = this;
        this.eventEmitter = new eventemitter2_1.EventEmitter2();
        this.onMessageEvent = function (messageEvent) {
            var e_1, _a;
            if (!_this.lastTimeToken || _this.lastTimeToken < messageEvent.timetoken) {
                _this.lastTimeToken = messageEvent.timetoken;
            }
            var payload = messageEvent.message;
            try {
                for (var _b = tslib_1.__values(payload.messages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var message = _c.value;
                    _this.eventEmitter.emit(types_1.EventType.MESSAGE, message.type, message.payload);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.onStatusEvent = function (statusEvent) {
            switch (statusEvent.category) {
                case 'PNConnectedCategory':
                    _this.onConnected();
                    break;
                case 'PNNetworkIssuesCategory':
                case 'PNNetworkDownCategory':
                    _this.onNetworkDown();
                    break;
                case 'PNAccessDeniedCategory':
                    _this.onAccessDenied();
                    break;
                case 'PNNetworkUpCategory':
                case 'PNReconnectedCategory':
                    _this.onReconnect();
                    break;
                case 'PNRequestMessageCountExceededCategory':
                    _this.onMessageCountExceeded();
                    break;
                default:
                    break;
            }
        };
        this.featureFlags = featureFlags;
        this.connectionState = types_2.ConnectionState.OFFLINE;
    }
    PubNubProtocol.prototype.getType = function () {
        return 'pubnub';
    };
    PubNubProtocol.prototype.getCapabilities = function () {
        return ['PUBNUB'];
    };
    PubNubProtocol.prototype.subscribe = function (config) {
        logger_1.logDebug('Subscribing');
        this.connectionState = types_2.ConnectionState.CONNECTING;
        if (!this.pubNubClient ||
            config.subscribeKey !== this.config.subscribeKey) {
            this.pubNubClient = this.initializeClient(config);
        }
        else {
            this.updateClientConfig(config);
        }
        this.config = config;
        var subscribeParams = {
            channels: config.channels,
            channelGroups: config.channelGroups,
        };
        this.pubNubClient.subscribe(subscribeParams);
    };
    PubNubProtocol.prototype.unsubscribeAll = function () {
        if (this.pubNubClient) {
            this.pubNubClient.unsubscribeAll();
            this.eventEmitter.removeAllListeners();
        }
    };
    PubNubProtocol.prototype.on = function (event, handler) {
        this.eventEmitter.on(event, handler);
    };
    PubNubProtocol.prototype.off = function (event, handler) {
        this.eventEmitter.off(event, handler);
    };
    PubNubProtocol.prototype.networkUp = function () {
        // if no connected yet
        if (this.connectionState === types_2.ConnectionState.OFFLINE && this.pubNubClient) {
            this.connectionState = types_2.ConnectionState.CONNECTING;
            this.pubNubClient.reconnect();
        }
    };
    PubNubProtocol.prototype.networkDown = function () {
        if (this.pubNubClient) {
            // Check for ourselves
            this.pubNubClient.reconnect();
        }
    };
    PubNubProtocol.prototype.getLastTimeToken = function () {
        return this.lastTimeToken;
    };
    PubNubProtocol.prototype.getConnectionState = function () {
        return this.connectionState;
    };
    PubNubProtocol.prototype.updateClientConfig = function (config) {
        if (this.pubNubClient) {
            this.pubNubClient.setAuthKey(config.authKey);
            this.pubNubClient.setUUID(config.userUuid);
        }
    };
    PubNubProtocol.prototype.initializeClient = function (config) {
        var _this = this;
        var pubNubClient = new pubnub_1.default({
            subscribeKey: config.subscribeKey,
            authKey: config.authKey,
            uuid: config.userUuid,
            dedupeOnSubscribe: true,
            restore: true,
            ssl: true,
            requestMessageCountThreshold: REQUEST_MESSAGE_COUNT_THRESHOLD,
        });
        this.historyFetcher = new pubNubHistoryFetcher_1.default({
            pubNubClient: pubNubClient,
            messageHandler: this.onMessageEvent,
            tooMuchHistoryHandler: function () { return _this.eventEmitter.emit(types_1.EventType.RECONNECT); },
        });
        pubNubClient.addListener({
            message: this.onMessageEvent,
            status: this.onStatusEvent,
        });
        return pubNubClient;
    };
    PubNubProtocol.prototype.onConnected = function () {
        logger_1.logDebug('Connected');
        this.connectionState = types_2.ConnectionState.CONNECTED;
        this.eventEmitter.emit(types_1.EventType.NETWORK_UP, {});
    };
    PubNubProtocol.prototype.onNetworkDown = function () {
        if (this.connectionState === types_2.ConnectionState.OFFLINE) {
            return;
        }
        logger_1.logDebug('Network down');
        this.connectionState = types_2.ConnectionState.OFFLINE;
        var lastTimeToken = this.lastTimeToken;
        if (!lastTimeToken) {
            lastTimeToken = new Date().getTime() + '0000';
        }
        this.lastTimeTokenBeforeNetworkDisconnection = lastTimeToken;
        logger_1.logDebug('Last time token: ' + this.lastTimeTokenBeforeNetworkDisconnection);
        this.eventEmitter.emit(types_1.EventType.NETWORK_DOWN, {});
    };
    PubNubProtocol.prototype.onAccessDenied = function () {
        if (this.connectionState === types_2.ConnectionState.ACCESS_DENIED) {
            // We've already signaled the access denied error. Nothing to do here
            return;
        }
        logger_1.logDebug('Access denied');
        this.connectionState = types_2.ConnectionState.ACCESS_DENIED;
        this.eventEmitter.emit(types_1.EventType.ACCESS_DENIED, {});
    };
    PubNubProtocol.prototype.onReconnect = function () {
        logger_1.logDebug('Reconnected');
        this.eventEmitter.emit(types_1.EventType.NETWORK_UP, {});
    };
    PubNubProtocol.prototype.onMessageCountExceeded = function () {
        logger_1.logDebug('Message count exceeded, fetching history');
        if (this.historyFetcher) {
            this.historyFetcher.fetch(this.config.channels, this.lastTimeTokenBeforeNetworkDisconnection);
        }
    };
    return PubNubProtocol;
}());
exports.default = PubNubProtocol;
//# sourceMappingURL=index.js.map