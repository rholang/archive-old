import { applyMarks } from '../apply-marks';
import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { lineHeight, fontSize } from '../styles/common';
import { className as panelClassName } from './panel';
var className = createClassName('p');
export var styles = "\n." + className + " {\n  margin: 0;\n  padding: 0px;\n  margin-bottom: 7px;\n  padding-top: 7px;\n  mso-line-height-rule: exactly;\n  line-height: " + lineHeight + ";\n  font-size: " + fontSize + ";\n}\ntable td > ." + className + ":first-child,\ntable th > ." + className + ":first-child {\n  padding-top: 0px;\n}\ntable td > ." + className + ":last-child,\ntable th > ." + className + ":last-child {\n  margin-bottom: 0;\n}\n." + panelClassName + "-inner > ." + className + " {\n  margin-bottom: 7px;\n  padding-top: 7px;\n}\n";
export default function paragraph(_a) {
    var text = _a.text, marks = _a.marks;
    var paragraph = createTag('p', { class: className }, text);
    return applyMarks(marks, paragraph);
}
//# sourceMappingURL=paragraph.js.map