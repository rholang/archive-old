import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { MediaButton, hideControlsClassName, InactivityDetector, } from '@atlaskit/media-ui';
import { CloseButtonWrapper } from './styled';
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
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
        return (React.createElement(InactivityDetector, null, function (triggerActivityCallback) {
            var children = React.cloneElement(_this.props.children, {
                showControls: triggerActivityCallback,
            });
            return (React.createElement(React.Fragment, null,
                React.createElement(CloseButtonWrapper, { className: hideControlsClassName },
                    React.createElement(MediaButton, { appearance: 'toolbar', onClick: onClose, iconBefore: React.createElement(CrossIcon, { label: "Close" }) })),
                children));
        }));
    };
    return Content;
}(Component));
export { Content };
//# sourceMappingURL=content.js.map