"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var constants_1 = require("@atlaskit/theme/constants");
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var overlayZindex = constants_1.layers.modal() + 10;
exports.Blanket = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: ", ";\n"])), overlayZindex);
exports.Blanket.displayName = 'Blanket';
exports.SpinnerWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
exports.SpinnerWrapper.displayName = 'SpinnerWrapper';
var defaultProps = {
    blankedColor: 'none',
    invertSpinnerColor: false,
};
exports.default = (function (_a) {
    var blankedColor = _a.blankedColor, invertSpinnerColor = _a.invertSpinnerColor;
    return (React.createElement(exports.Blanket, { style: { backgroundColor: blankedColor || defaultProps.blankedColor } },
        React.createElement(exports.SpinnerWrapper, null,
            React.createElement(spinner_1.default, { size: "large", invertColor: invertSpinnerColor || defaultProps.invertSpinnerColor }))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=modalSpinner.js.map