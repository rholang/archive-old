import { __assign, __extends } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { messages } from '@atlaskit/media-ui';
import deepEqual from 'deep-equal';
import { globalMediaEventEmitter, } from '@atlaskit/media-client';
import ErrorMessage from '../error';
import { Spinner } from '../loading';
import { ErrorViewDownloadButton } from '../download';
var BaseViewer = /** @class */ (function (_super) {
    __extends(BaseViewer, _super);
    function BaseViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = _this.getInitialState();
        _this.onMediaDisplayed = function () {
            var item = _this.props.item;
            globalMediaEventEmitter.emit('media-viewed', {
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
            pending: function () { return React.createElement(Spinner, null); },
            successful: function (content) { return _this.renderSuccessful(content); },
            failed: function (err) { return (React.createElement(ErrorMessage, { error: err },
                React.createElement("p", null,
                    React.createElement(FormattedMessage, __assign({}, messages.try_downloading_file))),
                _this.renderDownloadButton(err))); },
        });
    };
    // Accessing abstract getters in a constructor is not allowed
    BaseViewer.prototype.getInitialState = function () {
        return this.initialState;
    };
    BaseViewer.prototype.renderDownloadButton = function (err) {
        var _a = this.props, item = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
        return (React.createElement(ErrorViewDownloadButton, { state: item, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    BaseViewer.prototype.needsReset = function (propsA, propsB) {
        return (!deepEqual(propsA.item, propsB.item) ||
            propsA.mediaClient !== propsB.mediaClient ||
            propsA.collectionName !== propsB.collectionName);
    };
    return BaseViewer;
}(React.Component));
export { BaseViewer };
//# sourceMappingURL=base-viewer.js.map