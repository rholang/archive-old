"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dash_token_creator_1 = require("./dash-token-creator");
var token = {
    type: 'text',
    text: '\u2014',
    length: 3,
};
var fallback = tslib_1.__assign(tslib_1.__assign({}, token), { text: '---' });
exports.tripleDashSymbol = dash_token_creator_1.createDashTokenParser(token, fallback);
//# sourceMappingURL=triple-dash-symbol.js.map