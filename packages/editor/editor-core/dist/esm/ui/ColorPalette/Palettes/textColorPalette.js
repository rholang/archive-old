import { colorPalette, borderColorPalette } from '@atlaskit/adf-schema';
import getColorMessage from './getColorMessage';
import paletteMessages from './paletteMessages';
var textColorPalette = [];
colorPalette.forEach(function (label, color) {
    var border = borderColorPalette[color.toUpperCase()];
    var key = label.toLowerCase().replace(' ', '-');
    var message = getColorMessage(paletteMessages, key);
    if (!border) {
        // eslint-disable-next-line no-console
        console.warn("Text color palette doest not have a border for " + color + " color.\nYou must add the respective border color in 'borderColorPalette' in 'adf-schema'.\nThis could be happen when someone change the colorPalette from 'adf-schema', without updating 'borderColorPalette'.\n");
    }
    textColorPalette.push({
        value: color,
        label: label,
        border: border,
        message: message,
    });
});
export default textColorPalette;
//# sourceMappingURL=textColorPalette.js.map