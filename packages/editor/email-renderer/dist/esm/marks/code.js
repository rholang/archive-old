import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { codeFontFamily } from '../styles/common';
import { N20 } from '@atlaskit/adf-schema';
export var styles = "\n." + createClassName('mark-code') + " {\n  background: " + N20 + ";\n  color: rgb(23, 43, 77);\n  border-radius: 3px;\n  padding: 2px 4px;\n  font-size: 12px;\n  line-height: 24px;\n  font-family: " + codeFontFamily + ";\n}";
export default function code(_a) {
    var text = _a.text;
    return createTag('code', { class: createClassName('mark-code') }, text);
}
//# sourceMappingURL=code.js.map