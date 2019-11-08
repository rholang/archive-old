"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dash_token_creator_1 = require("./dash-token-creator");
var token = {
    type: 'text',
    text: '\u2013',
    length: 2,
};
var fallback = tslib_1.__assign(tslib_1.__assign({}, token), { text: '--' });
exports.doubleDashSymbol = dash_token_creator_1.createDashTokenParser(token, fallback);
//# sourceMappingURL=double-dash-symbol.js.map