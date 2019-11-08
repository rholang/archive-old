import { createTag } from '../create-tag';
import { isPastDate, timestampToString } from '../date-helper';
import { R50, R500, N40, N500 } from '@atlaskit/adf-schema';
import { createClassName } from '../styles/util';
var className = createClassName('date');
export var styles = "\n." + className + " {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  max-width: 100%;\n  vertical-align: baseline;\n  border-width: 3px;\n  padding: 2px 4px 3px 4px;\n}\n." + className + "-red {\n  background-color: " + R50 + ";\n  color: " + R500 + ";\n}\n." + className + "-neutral {\n  background-color: " + N40 + ";\n  color: " + N500 + ";\n}\n";
export default function status(_a) {
    var attrs = _a.attrs, parent = _a.parent;
    var timestamp = attrs.timestamp;
    var isParentToDoTask = false;
    if (parent &&
        parent.type.name === 'taskItem' &&
        parent.attrs.state === 'TODO') {
        isParentToDoTask = true;
    }
    var colorClass = !!isParentToDoTask && isPastDate(timestamp)
        ? className + "-red"
        : className + "-neutral";
    var text = timestampToString(timestamp);
    return createTag('span', { class: className + ' ' + colorClass }, text);
}
//# sourceMappingURL=date.js.map