import { __assign } from "tslib";
import { createDashTokenParser } from './dash-token-creator';
var token = {
    type: 'text',
    text: '\u2014',
    length: 3,
};
var fallback = __assign(__assign({}, token), { text: '---' });
export var tripleDashSymbol = createDashTokenParser(token, fallback);
//# sourceMappingURL=triple-dash-symbol.js.map