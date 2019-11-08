"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var question_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/question-circle"));
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var IconButton_1 = require("../IconButton");
exports.Help = react_1.forwardRef(function (props, ref) {
    var tooltip = props.tooltip, iconButtonProps = tslib_1.__rest(props, ["tooltip"]);
    var navigation = theme_1.useTheme().mode.navigation;
    return (react_1.default.createElement(IconButton_1.IconButton, tslib_1.__assign({ icon: react_1.default.createElement(question_circle_1.default, { label: tooltip, secondaryColor: navigation.backgroundColor }), ref: ref, tooltip: tooltip }, iconButtonProps)));
});
//# sourceMappingURL=index.js.map