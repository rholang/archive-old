"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("./styles");
exports.ProductHome = function (_a) {
    var Icon = _a.icon, Logo = _a.logo, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    return (core_1.jsx("div", { css: styles_1.containerCSS, onClick: onClick },
        core_1.jsx("div", { css: styles_1.productLogoCSS },
            core_1.jsx(Logo, null)),
        core_1.jsx("div", { css: styles_1.productIconCSS },
            core_1.jsx(Icon, { size: "small" }))));
};
exports.CustomProductHome = function (props) {
    var iconAlt = props.iconAlt, iconUrl = props.iconUrl, logoAlt = props.logoAlt, logoUrl = props.logoUrl, onClick = props.onClick;
    return (core_1.jsx("div", { css: styles_1.containerCSS, onClick: onClick },
        core_1.jsx("img", { css: styles_1.customProductLogoCSS, src: logoUrl, alt: logoAlt }),
        core_1.jsx("img", { css: styles_1.customProductIconCSS, src: iconUrl, alt: iconAlt })));
};
//# sourceMappingURL=index.js.map