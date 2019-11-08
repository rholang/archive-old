import { __assign } from "tslib";
import { inlineExtension, extension, bodiedExtension, } from '@atlaskit/adf-schema';
import createPlugin from './plugin';
import { getToolbarConfig } from './toolbar';
var extensionPlugin = function (options) { return ({
    name: 'extension',
    nodes: function () {
        return [
            { name: 'extension', node: extension },
            { name: 'bodiedExtension', node: bodiedExtension },
            { name: 'inlineExtension', node: inlineExtension },
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
                    return createPlugin(dispatch, providerFactory, props.extensionHandlers || {}, portalProviderAPI, typeof props.allowExtension === 'object'
                        ? __assign(__assign({}, props.allowExtension), { allowBreakout: allowBreakout }) : props.allowExtension);
                },
            },
        ];
    },
    pluginsOptions: {
        floatingToolbar: getToolbarConfig(options && options.breakoutEnabled),
    },
}); };
export default extensionPlugin;
//# sourceMappingURL=index.js.map