import { B50, R50, Y50, G50, P50 } from '@atlaskit/adf-schema';
import { createTable } from '../table-util';
import { createTag } from '../create-tag';
import { createContentId } from '../static';
import { createClassName } from '../styles/util';
import { fontFamily, fontSize, lineHeight, fontWeight } from '../styles/common';
export var className = createClassName('panel');
export var styles = "\n." + className + " {\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  line-height: " + lineHeight + ";\n  font-weight: " + fontWeight + ";\n  padding: 8px 0px 8px 0px;\n  margin: 0px;\n  width: 100%;\n}\n." + className + "-innerTable {\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  line-height: " + lineHeight + ";\n  font-weight: " + fontWeight + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + className + "-inner {\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  line-height: " + lineHeight + ";\n  font-weight: " + fontWeight + ";\n  font-size: 14px;\n  width: 100%;\n  padding: 1px 8px 1px 0;\n  margin: 0px;\n}\n." + className + "-icon {\n  width: 16px;\n  height: 16px;\n}\n." + className + "-iconTd {\n  vertical-align: top;\n  width: 24px;\n  height: 24px;\n  padding: 12px 0px 0px 8px;\n}\n." + className + "-type-info {\n    background: " + B50 + ";\n}\n." + className + "-type-note {\n    background: " + P50 + ";\n}\n." + className + "-type-tip {\n    background: " + G50 + ";\n}\n." + className + "-type-success {\n    background: " + G50 + ";\n}\n." + className + "-type-warning {\n    background: " + Y50 + ";\n}\n." + className + "-type-error {\n    background: " + R50 + ";\n}\n";
export default function panel(_a) {
    var attrs = _a.attrs, text = _a.text;
    var type = attrs.panelType;
    var panelIcon = createTag('img', {
        class: className + '-icon',
        src: createContentId(type),
    });
    var iconTd = {
        text: panelIcon,
        attrs: { class: className + '-iconTd' },
    };
    var textTd = {
        text: text,
        attrs: { class: className + '-inner' },
    };
    var innerTable = createTable([[iconTd, textTd]], {}, { class: className + "-innerTable " + className + "-type-" + type });
    return createTable([[{ attrs: { class: className }, text: innerTable }]]);
}
//# sourceMappingURL=panel.js.map