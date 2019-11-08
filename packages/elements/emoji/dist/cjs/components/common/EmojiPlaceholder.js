"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var styles_1 = require("./styles");
var constants_1 = require("../../util/constants");
var type_helpers_1 = require("../../util/type-helpers");
var EmojiPlaceholder = function (props) {
    var _a;
    var shortName = props.shortName, _b = props.size, size = _b === void 0 ? constants_1.defaultEmojiHeight : _b, showTooltip = props.showTooltip, representation = props.representation;
    var scaledWidth;
    var scaledHeight;
    if (representation &&
        size &&
        (type_helpers_1.isImageRepresentation(representation) ||
            type_helpers_1.isMediaRepresentation(representation))) {
        var width_1 = representation.width;
        var height_1 = representation.height;
        if (width_1 && height_1) {
            scaledWidth = (size / height_1) * width_1;
            scaledHeight = size;
        }
    }
    var width = scaledWidth || size;
    var height = scaledHeight || size;
    var style = {
        fill: 'f7f7f7',
        width: width + "px",
        height: height + "px",
    };
    var classes = (_a = {},
        _a[styles_1.placeholder] = true,
        _a[styles_1.placeholderContainer] = true,
        _a);
    var placeholderNode = (React.createElement("span", { "aria-label": shortName, className: classnames_1.default(classes), style: style }));
    return showTooltip ? (React.createElement(tooltip_1.default, { tag: "span", content: shortName }, placeholderNode)) : (placeholderNode);
};
exports.default = EmojiPlaceholder;
//# sourceMappingURL=EmojiPlaceholder.js.map