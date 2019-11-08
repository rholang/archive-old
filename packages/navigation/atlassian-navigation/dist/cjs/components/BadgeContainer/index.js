"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("./styles");
exports.BadgeContainer = function (props) {
    var Badge = props.badge, children = props.children;
    return (core_1.jsx("div", { css: styles_1.containerCSS },
        children,
        core_1.jsx("div", { css: styles_1.badgeContainerCSS },
            core_1.jsx(Badge, null))));
};
//# sourceMappingURL=index.js.map