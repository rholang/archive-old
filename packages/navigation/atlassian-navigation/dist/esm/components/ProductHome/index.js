/** @jsx jsx */
import { jsx } from '@emotion/core';
import { containerCSS, customProductIconCSS, customProductLogoCSS, productIconCSS, productLogoCSS, } from './styles';
export var ProductHome = function (_a) {
    var Icon = _a.icon, Logo = _a.logo, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    return (jsx("div", { css: containerCSS, onClick: onClick },
        jsx("div", { css: productLogoCSS },
            jsx(Logo, null)),
        jsx("div", { css: productIconCSS },
            jsx(Icon, { size: "small" }))));
};
export var CustomProductHome = function (props) {
    var iconAlt = props.iconAlt, iconUrl = props.iconUrl, logoAlt = props.logoAlt, logoUrl = props.logoUrl, onClick = props.onClick;
    return (jsx("div", { css: containerCSS, onClick: onClick },
        jsx("img", { css: customProductLogoCSS, src: logoUrl, alt: logoAlt }),
        jsx("img", { css: customProductIconCSS, src: iconUrl, alt: iconAlt })));
};
//# sourceMappingURL=index.js.map