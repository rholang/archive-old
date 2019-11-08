import { createPlugin } from './pm-plugins/main';
var pastePlugin = function () { return ({
    name: 'paste',
    pmPlugins: function () {
        return [
            {
                name: 'paste',
                plugin: function (_a) {
                    var schema = _a.schema, props = _a.props;
                    return createPlugin(schema, props.UNSAFE_cards, props.sanitizePrivateContent);
                },
            },
        ];
    },
}); };
export default pastePlugin;
//# sourceMappingURL=index.js.map