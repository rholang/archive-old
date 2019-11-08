"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var question_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/question"));
var ToolbarButton_1 = tslib_1.__importDefault(require("../ToolbarButton"));
var WithHelpTrigger_1 = tslib_1.__importDefault(require("../WithHelpTrigger"));
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Open help dialog' : _b, _c = _a.titlePosition, titlePosition = _c === void 0 ? 'left' : _c;
    return (React.createElement(WithHelpTrigger_1.default, { render: function (showHelp) { return (React.createElement(ToolbarButton_1.default, { onClick: showHelp, title: title, titlePosition: titlePosition, iconBefore: React.createElement(question_1.default, { label: title }) })); } }));
});
//# sourceMappingURL=index.js.map