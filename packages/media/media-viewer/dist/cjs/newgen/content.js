"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var media_ui_1 = require("@atlaskit/media-ui");
var styled_1 = require("./styled");
var Content = /** @class */ (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
     * Here we get called by InactivityDetector and given a function we
     * pass down as "showControls" to out children.
     */
    Content.prototype.render = function () {
        var _this = this;
        var onClose = this.props.onClose;
        return (React.createElement(media_ui_1.InactivityDetector, null, function (triggerActivityCallback) {
            var children = React.cloneElement(_this.props.children, {
                showControls: triggerActivityCallback,
            });
            return (React.createElement(React.Fragment, null,
                React.createElement(styled_1.CloseButtonWrapper, { className: media_ui_1.hideControlsClassName },
                    React.createElement(media_ui_1.MediaButton, { appearance: 'toolbar', onClick: onClose, iconBefore: React.createElement(cross_1.default, { label: "Close" }) })),
                children));
        }));
    };
    return Content;
}(react_1.Component));
exports.Content = Content;
//# sourceMappingURL=content.js.map