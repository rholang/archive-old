"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var constants_1 = require("@atlaskit/theme/constants");
var utils_1 = require("./utils");
exports.default = (function (_a) {
    var children = _a.children, followsIcon = _a.followsIcon, spacing = _a.spacing, isLoading = _a.isLoading, rest = tslib_1.__rest(_a, ["children", "followsIcon", "spacing", "isLoading"]);
    return (core_1.jsx("span", tslib_1.__assign({ css: tslib_1.__assign({ alignItems: followsIcon ? 'baseline' : 'center', alignSelf: followsIcon ? 'baseline' : 'center', flex: '1 1 auto', margin: spacing === 'none' ? 0 : "0 " + constants_1.gridSize() / 2 + "px", maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, utils_1.getLoadingStyle(isLoading)) }, rest), children));
});
//# sourceMappingURL=Content.js.map