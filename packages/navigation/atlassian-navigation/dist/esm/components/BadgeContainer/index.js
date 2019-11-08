/** @jsx jsx */
import { jsx } from '@emotion/core';
import { badgeContainerCSS, containerCSS } from './styles';
export var BadgeContainer = function (props) {
    var Badge = props.badge, children = props.children;
    return (jsx("div", { css: containerCSS },
        children,
        jsx("div", { css: badgeContainerCSS },
            jsx(Badge, null))));
};
//# sourceMappingURL=index.js.map