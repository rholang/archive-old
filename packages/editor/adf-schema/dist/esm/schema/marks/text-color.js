var _a;
import { __read } from "tslib";
import { COLOR } from '../groups';
import { rgbToHex, N90, Y500, T500, R500, P500, G500, N80, Y400, T300, R300, P300, G300, } from '../../utils/colors';
/** New borders for colors in the color picker */
export var borderColorPalette = (_a = {},
    _a[N80] = N90,
    _a[P300] = P500,
    _a[T300] = T500,
    _a[G300] = G500,
    _a[R300] = R500,
    _a[Y400] = Y500,
    _a);
// @see https://product-fabric.atlassian.net/wiki/spaces/E/pages/55979455/Colour+picker+decisions#Colourpickerdecisions-Visualdesigndecisions
export var colorPalette = new Map();
var colorArrayPalette = [
    // [N800, default],
    [N80, 'Light gray'],
    [P300, 'Purple'],
    [T300, 'Teal'],
    [G300, 'Green'],
    [R300, 'Red'],
    [Y400, 'Orange'],
];
colorArrayPalette.forEach(function (_a) {
    var _b = __read(_a, 2), color = _b[0], label = _b[1];
    return colorPalette.set(color.toLowerCase(), label);
});
export var textColor = {
    attrs: { color: {} },
    inclusive: true,
    group: COLOR,
    parseDOM: [
        {
            style: 'color',
            getAttrs: function (maybeValue) {
                var value = maybeValue;
                var hexColor;
                if (value.match(/^rgb/i)) {
                    hexColor = rgbToHex(value);
                }
                else if (value[0] === '#') {
                    hexColor = value.toLowerCase();
                }
                // else handle other colour formats
                return hexColor && colorPalette.has(hexColor)
                    ? { color: hexColor }
                    : false;
            },
        },
    ],
    toDOM: function (mark) {
        return [
            'span',
            {
                style: "color: " + mark.attrs.color,
            },
        ];
    },
};
//# sourceMappingURL=text-color.js.map