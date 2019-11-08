"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var typestyle_1 = require("typestyle");
var containerStyle = typestyle_1.style({
    width: '100%',
    height: '100%',
});
var flashTime = 700;
var flashAnimation = typestyle_1.keyframes({
    '0%': {
        backgroundColor: 'transparent',
    },
    '20%': {
        backgroundColor: theme_1.colors.B75,
    },
    '75%': {
        backgroundColor: theme_1.colors.B75,
    },
    '100%': {
        backgroundColor: 'transparent',
    },
});
exports.flashStyle = typestyle_1.style({
    animation: flashAnimation + " " + flashTime + "ms ease-in-out",
});
/**
 * Flash animation background component. See Reaction component for usage.
 */
exports.FlashAnimation = function (props) {
    var _a;
    return (React.createElement("div", { className: classnames_1.default(containerStyle, props.className, (_a = {},
            _a[exports.flashStyle] = props.flash,
            _a)) }, props.children));
};
//# sourceMappingURL=FlashAnimation.js.map