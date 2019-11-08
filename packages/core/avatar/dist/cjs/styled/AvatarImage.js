"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var theme_1 = require("../theme");
exports.ShapeGroup = components_1.withTheme(styled_components_1.default.g(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  & circle,\n  & rect {\n    fill: ", ";\n  }\n  & g {\n    fill: ", ";\n  }\n"], ["\n  & circle,\n  & rect {\n    fill: ", ";\n  }\n  & g {\n    fill: ", ";\n  }\n"])), components_1.themed({ light: colors_1.N50, dark: colors_1.DN100 }), colors_1.background));
exports.Slot = function (_a) {
    var isLoading = _a.isLoading, appearance = _a.appearance, size = _a.size, backgroundImage = _a.backgroundImage, label = _a.label, role = _a.role;
    return (react_1.default.createElement(theme_1.Theme.Consumer, { appearance: appearance, isLoading: isLoading, size: size }, function (_a) {
        var backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius;
        return (react_1.default.createElement("span", { style: {
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage
                    ? "url(" + backgroundImage + ")"
                    : undefined,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: borderRadius,
                display: 'flex',
                flex: '1 1 100%',
                height: '100%',
                width: '100%',
            }, role: role, "aria-label": label }));
    }));
};
exports.Svg = function (_a) {
    var appearance = _a.appearance, size = _a.size, children = _a.children, isLoading = _a.isLoading, otherProps = tslib_1.__rest(_a, ["appearance", "size", "children", "isLoading"]);
    return (react_1.default.createElement(theme_1.Theme.Consumer, { appearance: appearance, isLoading: isLoading, size: size }, function (_a) {
        var backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius;
        return (react_1.default.createElement("svg", tslib_1.__assign({ style: {
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                height: '100%',
                width: '100%',
            } }, otherProps), children));
    }));
};
var templateObject_1;
//# sourceMappingURL=AvatarImage.js.map