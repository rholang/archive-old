import { N30 } from '@atlaskit/adf-schema';
import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('rule') + " {\n  border: none;\n  border-bottom: 1px solid " + N30 + ";\n}\n";
export default function rule() {
    return createTag('hr', { class: createClassName('rule') });
}
//# sourceMappingURL=rule.js.map