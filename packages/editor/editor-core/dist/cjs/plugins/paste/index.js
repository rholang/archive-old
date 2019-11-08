"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./pm-plugins/main");
var pastePlugin = function () { return ({
    name: 'paste',
    pmPlugins: function () {
        return [
            {
                name: 'paste',
                plugin: function (_a) {
                    var schema = _a.schema, props = _a.props;
                    return main_1.createPlugin(schema, props.UNSAFE_cards, props.sanitizePrivateContent);
                },
            },
        ];
    },
}); };
exports.default = pastePlugin;
//# sourceMappingURL=index.js.map