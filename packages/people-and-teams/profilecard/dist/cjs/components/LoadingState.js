"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var Card_1 = require("../styled/Card");
var LoadingState = function () { return (React.createElement(Card_1.SpinnerContainer, null,
    React.createElement(spinner_1.default, null))); };
exports.default = LoadingState;
//# sourceMappingURL=LoadingState.js.map