"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
exports.default = (function (props) { return (react_1.default.createElement(button_1.default, { appearance: "subtle", onClick: props.onClick, spacing: "none", tabIndex: -1, iconBefore: props.children, testId: props.testId })); });
//# sourceMappingURL=Btn.js.map