"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var React = tslib_1.__importStar(require("react"));
var i18n_1 = require("../util/i18n");
exports.NoAccessTooltip = function (_a) {
    var name = _a.name, children = _a.children;
    return (React.createElement(i18n_1.NoAccessWarning, { name: name }, function (text) { return (React.createElement(tooltip_1.default, { content: text, position: "right" }, children)); }));
};
//# sourceMappingURL=NoAccessTooltip.js.map