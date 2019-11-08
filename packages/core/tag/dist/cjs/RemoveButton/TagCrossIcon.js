"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var CrossIconSvg = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\">\n<path d=\"M8,6.58578644 L9.29289322,5.29289322 C9.68341751,4.90236893 10.3165825,4.90236893 10.7071068,5.29289322 C11.0976311,5.68341751 11.0976311,6.31658249 10.7071068,6.70710678 L9.41421356,8 L10.7071068,9.29289322 C11.0976311,9.68341751 11.0976311,10.3165825 10.7071068,10.7071068 C10.3165825,11.0976311 9.68341751,11.0976311 9.29289322,10.7071068 L8,9.41421356 L6.70710678,10.7071068 C6.31658249,11.0976311 5.68341751,11.0976311 5.29289322,10.7071068 C4.90236893,10.3165825 4.90236893,9.68341751 5.29289322,9.29289322 L6.58578644,8 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L8,6.58578644 Z\" fill=\"currentColor\"></path>\n</svg>";
var IconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    height: 16px;\n    width: 16px;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n"], ["\n  height: 16px;\n  width: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    height: 16px;\n    width: 16px;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n"])));
exports.default = (function () {
    return (react_1.default.createElement(IconWrapper, { dangerouslySetInnerHTML: {
            __html: CrossIconSvg,
        } }));
});
var templateObject_1;
//# sourceMappingURL=TagCrossIcon.js.map