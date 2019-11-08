"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var plugin_1 = tslib_1.__importDefault(require("./plugin"));
var toolbar_1 = require("./toolbar");
var extensionPlugin = function (options) { return ({
    name: 'extension',
    nodes: function () {
        return [
            { name: 'extension', node: adf_schema_1.extension },
            { name: 'bodiedExtension', node: adf_schema_1.bodiedExtension },
            { name: 'inlineExtension', node: adf_schema_1.inlineExtension },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'extension',
                plugin: function (_a) {
                    var props = _a.props, dispatch = _a.dispatch, providerFactory = _a.providerFactory, portalProviderAPI = _a.portalProviderAPI;
                    var allowBreakout = (typeof props.allowExtension === 'object'
                        ? props.allowExtension
                        : { allowBreakout: false }).allowBreakout &&
                        options &&
                        options.breakoutEnabled;
                    return plugin_1.default(dispatch, providerFactory, props.extensionHandlers || {}, portalProviderAPI, typeof props.allowExtension === 'object'
                        ? tslib_1.__assign(tslib_1.__assign({}, props.allowExtension), { allowBreakout: allowBreakout }) : props.allowExtension);
                },
            },
        ];
    },
    pluginsOptions: {
        floatingToolbar: toolbar_1.getToolbarConfig(options && options.breakoutEnabled),
    },
}); };
exports.default = extensionPlugin;
//# sourceMappingURL=index.js.map