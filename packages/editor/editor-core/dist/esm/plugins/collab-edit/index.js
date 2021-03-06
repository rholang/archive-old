import { __read, __spread } from "tslib";
import { collab } from 'prosemirror-collab';
import { createPlugin, pluginKey } from './plugin';
export { CollabProvider } from './provider';
export { pluginKey };
var collabEditPlugin = function (options, sanitizePrivateContent) { return ({
    name: 'collabEdit',
    pmPlugins: function () {
        var _a = options || {}, _b = _a.useNativePlugin, useNativePlugin = _b === void 0 ? false : _b, _c = _a.userId, userId = _c === void 0 ? null : _c;
        return __spread((useNativePlugin
            ? [
                {
                    name: 'pmCollab',
                    plugin: function () { return collab({ clientID: userId }); },
                },
            ]
            : []), [
            {
                name: 'collab',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, providerFactory = _a.providerFactory;
                    return createPlugin(dispatch, providerFactory, options, sanitizePrivateContent);
                },
            },
        ]);
    },
}); };
export default collabEditPlugin;
//# sourceMappingURL=index.js.map