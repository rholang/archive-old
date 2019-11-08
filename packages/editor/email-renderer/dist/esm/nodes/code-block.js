import { createTag } from '../create-tag';
import { codeFontFamily } from '../styles/common';
import { N20 } from '@atlaskit/adf-schema';
import { createClassName } from '../styles/util';
var className = createClassName("codeBlock");
export var styles = "\n." + className + "-pre {\n  white-space: pre-wrap;\n  font-size: 12px;\n  line-height: 20px;\n  font-family: " + codeFontFamily + ";\n  color: rgb(23, 43, 77);\n  background: " + N20 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  margin: 0px;\n  overflow-wrap: break-word;\n}\n." + className + "-div {\n  padding: 8px 16px;\n  background-color: " + N20 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: rgb(23, 43, 77);\n}\n";
export default function codeBlock(_a) {
    var text = _a.text;
    var sanitizedText = (text || '').replace(/\n/g, '<br/>');
    var pre = createTag('pre', { class: className + "-pre" }, sanitizedText);
    return createTag('div', { class: className + "-div" }, pre);
}
//# sourceMappingURL=code-block.js.map