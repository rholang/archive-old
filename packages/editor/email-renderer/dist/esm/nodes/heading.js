import { createTag } from '../create-tag';
import { applyMarks } from '../apply-marks';
import { createClassName } from '../styles/util';
import { N800 } from '@atlaskit/adf-schema';
var commonStyle = "\nfont-style: inherit;\ncolor: " + N800 + ";\nfont-weight: 600;\nmargin-bottom: 0;\n";
export var styles = "\n." + createClassName('h1') + " {\n  " + commonStyle + "\n  font-size: 23px;\n  line-height: 1.1034;\n  margin-top: 40px;\n  letter-spacing: -0.01em;\n}\n." + createClassName('h2') + " {\n  " + commonStyle + "\n  font-size: 20px;\n  line-height: 1.1666;\n  margin-top: 36px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n}\n." + createClassName('h3') + " {\n  " + commonStyle + "\n  font-size: 16px;\n  line-height: 1.2;\n  margin-top: 32px;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n}\n." + createClassName('h4') + " {\n  " + commonStyle + "\n  font-size: 14px;\n  line-height: 1.25;\n  margin-top: 20px;\n  letter-spacing: -0.006em;\n}\n." + createClassName('h5') + " {\n  " + commonStyle + "\n  font-size: 11px;\n  line-height: 1.4286;\n  margin-top: 20px;\n  letter-spacing: -0.003em;\n}\n." + createClassName('h6') + " {\n  " + commonStyle + "\n  font-size: 11px;\n  line-height: 1.3333;\n  text-transform: uppercase;\n  margin-top: 16px;\n}\n";
export default function heading(_a) {
    var attrs = _a.attrs, marks = _a.marks, text = _a.text;
    var tagName = "h" + attrs.level;
    var headingTag = createTag(tagName, { class: createClassName(tagName) }, text);
    return applyMarks(marks, headingTag);
}
//# sourceMappingURL=heading.js.map