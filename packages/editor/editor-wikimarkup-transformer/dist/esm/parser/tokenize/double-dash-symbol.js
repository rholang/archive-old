import { __assign } from "tslib";
import { createDashTokenParser } from './dash-token-creator';
var token = {
    type: 'text',
    text: '\u2013',
    length: 2,
};
var fallback = __assign(__assign({}, token), { text: '--' });
export var doubleDashSymbol = createDashTokenParser(token, fallback);
//# sourceMappingURL=double-dash-symbol.js.map