"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var React = tslib_1.__importStar(require("react"));
exports.ShareButton = function (_a) {
    var text = _a.text, props = tslib_1.__rest(_a, ["text"]);
    return React.createElement(button_1.default, tslib_1.__assign({}, props), text);
};
exports.default = exports.ShareButton;
//# sourceMappingURL=ShareButton.js.map