"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var core_1 = require("@emotion/core");
var react_1 = require("react");
var PrimaryButton_1 = require("../PrimaryButton");
var styles_1 = require("./styles");
exports.PrimaryDropdownButton = react_1.forwardRef(function (props, ref) {
    return (core_1.jsx(PrimaryButton_1.PrimaryButton, tslib_1.__assign({ iconAfter: core_1.jsx("span", { css: styles_1.chevronIconCSS },
            core_1.jsx(chevron_down_1.default, { label: "" })), ref: ref }, props)));
});
//# sourceMappingURL=index.js.map