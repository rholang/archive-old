"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
exports.getAnalyticsAppearance = function (appearance) {
    switch (appearance) {
        case 'full-page':
            return analytics_namespaced_context_1.EDITOR_APPEARANCE_CONTEXT.FIXED_WIDTH;
        case 'full-width':
            return analytics_namespaced_context_1.EDITOR_APPEARANCE_CONTEXT.FULL_WIDTH;
        case 'comment':
            return analytics_namespaced_context_1.EDITOR_APPEARANCE_CONTEXT.COMMENT;
        case 'chromeless':
            return analytics_namespaced_context_1.EDITOR_APPEARANCE_CONTEXT.CHROMELESS;
        case 'mobile':
            return analytics_namespaced_context_1.EDITOR_APPEARANCE_CONTEXT.MOBILE;
    }
};
//# sourceMappingURL=analytics.js.map