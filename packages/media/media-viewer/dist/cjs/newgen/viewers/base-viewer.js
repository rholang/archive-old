"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var media_client_1 = require("@atlaskit/media-client");
var error_1 = tslib_1.__importDefault(require("../error"));
var loading_1 = require("../loading");
var download_1 = require("../download");
var BaseViewer = /** @class */ (function (_super) {
    tslib_1.__extends(BaseViewer, _super);
    function BaseViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = _this.getInitialState();
        _this.onMediaDisplayed = function () {
            var item = _this.props.item;
            media_client_1.globalMediaEventEmitter.emit('media-viewed', {
                fileId: item.id,
                viewingLevel: 'full',
            });
        };
        return _this;
    }
    BaseViewer.prototype.componentDidMount = function () {
        this.init();
    };
    BaseViewer.prototype.componentWillUnmount = function () {
        this.release();
    };
    // NOTE: We've moved parts of the logic to reset a component into this method
    // to optimise the performance. Resetting the state before the `componentDidUpdate`
    // lifecycle event allows us avoid one additional render cycle.
    // However, this lifecycle method might eventually be deprecated, so be careful
    // when working with it.
    BaseViewer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.needsReset(nextProps, this.props)) {
            this.release();
            this.setState(this.initialState);
        }
    };
    BaseViewer.prototype.componentDidUpdate = function (prevProps) {
        if (this.needsReset(prevProps, this.props)) {
            this.init();
        }
    };
    BaseViewer.prototype.render = function () {
        var _this = this;
        return this.state.content.match({
            pending: function () { return React.createElement(loading_1.Spinner, null); },
            successful: function (content) { return _this.renderSuccessful(content); },
            failed: function (err) { return (React.createElement(error_1.default, { error: err },
                React.createElement("p", null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.try_downloading_file))),
                _this.renderDownloadButton(err))); },
        });
    };
    // Accessing abstract getters in a constructor is not allowed
    BaseViewer.prototype.getInitialState = function () {
        return this.initialState;
    };
    BaseViewer.prototype.renderDownloadButton = function (err) {
        var _a = this.props, item = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
        return (React.createElement(download_1.ErrorViewDownloadButton, { state: item, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    BaseViewer.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_1.default(propsA.item, propsB.item) ||
            propsA.mediaClient !== propsB.mediaClient ||
            propsA.collectionName !== propsB.collectionName);
    };
    return BaseViewer;
}(React.Component));
exports.BaseViewer = BaseViewer;
//# sourceMappingURL=base-viewer.js.map