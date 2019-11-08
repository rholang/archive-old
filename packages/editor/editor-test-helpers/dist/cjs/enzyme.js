"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */
var enzyme_1 = require("enzyme");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
// Create the IntlProvider to retrieve context for wrapping around.
var intlProvider = new react_intl_1.IntlProvider({ locale: 'en' });
var intl = intlProvider.getChildContext().intl;
/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
    return React.cloneElement(node, { intl: intl });
}
function shallowWithIntl(node, _a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.context, context = _b === void 0 ? {} : _b, additionalOptions = tslib_1.__rest(_a, ["context"]);
    if (typeof node.type !== 'string' && node.type.name === 'InjectIntl') {
        var unwrappedType = node.type.WrappedComponent;
        node = React.createElement(unwrappedType, node.props);
    }
    return enzyme_1.shallow(nodeWithIntlProp(node), tslib_1.__assign({ context: tslib_1.__assign(tslib_1.__assign({}, context), { intl: intl }) }, additionalOptions));
}
exports.shallowWithIntl = shallowWithIntl;
function mountWithIntl(node, _a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.childContextTypes, childContextTypes = _c === void 0 ? {} : _c, additionalOptions = tslib_1.__rest(_a, ["context", "childContextTypes"]);
    if (typeof node.type !== 'string' && node.type.name === 'InjectIntl') {
        var unwrappedType = node.type.WrappedComponent;
        node = React.createElement(unwrappedType, node.props);
    }
    return enzyme_1.mount(nodeWithIntlProp(node), tslib_1.__assign({ context: tslib_1.__assign(tslib_1.__assign({}, context), { intl: intl }), childContextTypes: tslib_1.__assign(tslib_1.__assign({}, childContextTypes), { intl: react_intl_1.intlShape }) }, additionalOptions));
}
exports.mountWithIntl = mountWithIntl;
//# sourceMappingURL=enzyme.js.map