"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefetch_1 = require("@atlaskit/atlassian-switcher/prefetch");
var render_1 = require("./render");
exports.prepareAtlassianSwitcher = function (switcherProps, analyticsListener) {
    if (!analyticsListener) {
        throw new Error('Atlassian switcher: Missing analytics listener');
    }
    var hasPrefetched = false;
    return {
        prefetch: function () {
            if (hasPrefetched) {
                return;
            }
            prefetch_1.prefetch(switcherProps);
            hasPrefetched = true;
        },
        renderAt: function (container) {
            return render_1.render(switcherProps, analyticsListener, container);
        },
    };
};
//# sourceMappingURL=prepare.js.map