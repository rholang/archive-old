"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = tslib_1.__importDefault(require("react"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var Content_1 = require("../styled/Content");
var TitleIcon = function (_a) {
    var appearance = _a.appearance;
    if (!appearance)
        return null;
    var Icon = appearance === 'danger' ? error_1.default : warning_1.default;
    return (core_1.jsx("span", { css: Content_1.titleIconWrapperStyles(appearance) },
        core_1.jsx(Icon, { label: appearance + " icon" })));
};
var ModalHeader = /** @class */ (function (_super) {
    tslib_1.__extends(ModalHeader, _super);
    function ModalHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalHeader.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, component = _a.component, heading = _a.heading, onClose = _a.onClose, showKeyline = _a.showKeyline, isHeadingMultiline = _a.isHeadingMultiline;
        var warning = 'You can provide `component` OR `heading`, not both.';
        if (!component && !heading)
            return null;
        if (component && heading) {
            console.warn(warning); // eslint-disable-line no-console
            return null;
        }
        if (component) {
            return react_1.default.createElement(component, {
                appearance: appearance,
                onClose: onClose,
                showKeyline: showKeyline,
                isHeadingMultiline: isHeadingMultiline,
            });
        }
        return (core_1.jsx(Content_1.Header, { showKeyline: showKeyline },
            core_1.jsx(Content_1.Title, null,
                core_1.jsx(TitleIcon, { appearance: appearance }),
                core_1.jsx(Content_1.TitleText, { isHeadingMultiline: isHeadingMultiline }, heading))));
    };
    ModalHeader.defaultProps = {
        isHeadingMultiline: true,
    };
    return ModalHeader;
}(react_1.default.Component));
exports.default = ModalHeader;
//# sourceMappingURL=Header.js.map