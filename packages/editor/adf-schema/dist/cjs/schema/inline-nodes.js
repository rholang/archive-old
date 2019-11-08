"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nodes = tslib_1.__importStar(require("./nodes"));
var typedNodes = nodes;
exports.inlineNodes = new Set(Object.keys(typedNodes).filter(function (key) { return typedNodes[key] && typedNodes[key].group === 'inline'; }));
//# sourceMappingURL=inline-nodes.js.map