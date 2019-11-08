"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var theme_1 = require("@atlaskit/theme");
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/info"));
var hint_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/hint"));
var success_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/success"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/error"));
var note_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/note"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var G50 = theme_1.colors.G50, G400 = theme_1.colors.G400, P50 = theme_1.colors.P50, P400 = theme_1.colors.P400, B400 = theme_1.colors.B400, Y50 = theme_1.colors.Y50, B50 = theme_1.colors.B50, Y400 = theme_1.colors.Y400, R50 = theme_1.colors.R50, R400 = theme_1.colors.R400;
var config = {
    info: {
        icon: info_1.default,
        background: B50,
        iconColor: B400,
    },
    note: {
        icon: note_1.default,
        background: P50,
        iconColor: P400,
    },
    tip: {
        icon: hint_1.default,
        background: G50,
        iconColor: G400,
    },
    success: {
        icon: success_1.default,
        background: G50,
        iconColor: G400,
    },
    warning: {
        icon: warning_1.default,
        background: Y50,
        iconColor: Y400,
    },
    error: {
        icon: error_1.default,
        background: R50,
        iconColor: R400,
    },
};
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var _a = this.props, panelType = _a.panelType, children = _a.children;
        return (React.createElement("div", { style: { background: config[panelType].background }, className: "ak-editor-panel", "data-panel-type": panelType },
            React.createElement("span", { style: { color: config[panelType].iconColor }, className: "ak-editor-panel__icon" }, this.getIcon()),
            React.createElement("div", { className: "ak-editor-panel__content" }, children)));
    };
    Panel.prototype.getIcon = function () {
        var panelType = this.props.panelType;
        var Icon = config[panelType].icon;
        return React.createElement(Icon, { label: "Panel " + panelType });
    };
    return Panel;
}(react_1.PureComponent));
exports.default = Panel;
//# sourceMappingURL=panel.js.map