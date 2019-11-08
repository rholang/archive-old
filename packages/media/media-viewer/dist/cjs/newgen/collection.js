"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("@atlaskit/media-client");
var domain_1 = require("./domain");
var error_1 = tslib_1.__importStar(require("./error"));
var list_1 = require("./list");
var utils_1 = require("./utils");
var loading_1 = require("./loading");
var initialState = { items: domain_1.Outcome.pending() };
var Collection = /** @class */ (function (_super) {
    tslib_1.__extends(Collection, _super);
    function Collection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.onNavigationChange = function (item) {
            var _a = _this.props, mediaClient = _a.mediaClient, collectionName = _a.collectionName, pageSize = _a.pageSize;
            if (_this.shouldLoadNext(item)) {
                mediaClient.collection.loadNextPage(collectionName, {
                    limit: pageSize,
                });
            }
        };
        return _this;
    }
    Collection.prototype.UNSAFE_componentWillUpdate = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.init(nextProps);
        }
    };
    Collection.prototype.componentWillUnmount = function () {
        this.release();
    };
    Collection.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    Collection.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultSelectedItem = _a.defaultSelectedItem, mediaClient = _a.mediaClient, onClose = _a.onClose, collectionName = _a.collectionName, showControls = _a.showControls;
        return this.state.items.match({
            pending: function () { return React.createElement(loading_1.Spinner, null); },
            successful: function (items) {
                var identifiers = items.map(function (x) { return utils_1.toIdentifier(x, collectionName); });
                var item = defaultSelectedItem
                    ? tslib_1.__assign(tslib_1.__assign({}, defaultSelectedItem), { collectionName: collectionName }) : identifiers[0];
                return (React.createElement(list_1.List, { items: identifiers, defaultSelectedItem: item, mediaClient: mediaClient, onClose: onClose, onNavigationChange: _this.onNavigationChange, showControls: showControls }));
            },
            failed: function (err) { return React.createElement(error_1.default, { error: err }); },
        });
    };
    Collection.prototype.init = function (props) {
        var _this = this;
        this.setState(initialState);
        var collectionName = props.collectionName, mediaClient = props.mediaClient, defaultSelectedItem = props.defaultSelectedItem, pageSize = props.pageSize;
        this.subscription = mediaClient.collection
            .getItems(collectionName, { limit: pageSize })
            .subscribe({
            next: function (items) {
                _this.setState({
                    items: domain_1.Outcome.successful(items),
                });
                if (defaultSelectedItem && _this.shouldLoadNext(defaultSelectedItem)) {
                    mediaClient.collection.loadNextPage(collectionName, {
                        limit: pageSize,
                    });
                }
            },
            error: function () {
                _this.setState({
                    items: domain_1.Outcome.failed(error_1.createError('metadataFailed')),
                });
            },
        });
    };
    Collection.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    Collection.prototype.needsReset = function (propsA, propsB) {
        return (propsA.collectionName !== propsB.collectionName ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    Collection.prototype.shouldLoadNext = function (selectedItem) {
        var _this = this;
        if (media_client_1.isExternalImageIdentifier(selectedItem)) {
            return false;
        }
        var items = this.state.items;
        return items.match({
            pending: function () { return false; },
            failed: function () { return false; },
            successful: function (items) {
                return items.length !== 0 && _this.isLastItem(selectedItem, items);
            },
        });
    };
    Collection.prototype.isLastItem = function (selectedItem, items) {
        var lastItem = items[items.length - 1];
        var isLastItem = selectedItem.id === lastItem.id &&
            selectedItem.occurrenceKey === lastItem.occurrenceKey;
        return isLastItem;
    };
    return Collection;
}(React.Component));
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map