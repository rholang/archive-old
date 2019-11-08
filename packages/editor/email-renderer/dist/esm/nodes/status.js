import { createTag } from '../create-tag';
import { createClassName } from '../styles/util';
import { B50, B500, R50, R500, Y75, N800, G50, G500, P50, P500, N40, N500, } from '@atlaskit/adf-schema';
var commonStyle = "\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  max-width: 100%;\n  text-transform: uppercase;\n  vertical-align: baseline;\n  padding: 2px 4px 3px 4px;\n";
export var styles = "\n." + createClassName('status-blue') + " {\n  " + commonStyle + "\n  background-color: " + B50 + ";\n  color: " + B500 + ";\n}\n." + createClassName('status-red') + " {\n  " + commonStyle + "\n  background-color: " + R50 + ";\n  color: " + R500 + ";\n}\n." + createClassName('status-yellow') + " {\n  " + commonStyle + "\n  background-color: " + Y75 + ";\n  color: " + N800 + ";\n}\n." + createClassName('status-green') + " {\n  " + commonStyle + "\n  background-color: " + G50 + ";\n  color: " + G500 + ";\n}\n." + createClassName('status-purple') + " {\n  " + commonStyle + "\n  background-color: " + P50 + ";\n  color: " + P500 + ";\n}\n." + createClassName('status-neutral') + " {\n  " + commonStyle + "\n  background-color: " + N40 + ";\n  color: " + N500 + ";\n}\n";
var ALLOWED_COLORS = new Set([
    'blue',
    'red',
    'yellow',
    'green',
    'purple',
    'neutral',
]);
export default function status(_a) {
    var attrs = _a.attrs, text = _a.text;
    var color = ALLOWED_COLORS.has(attrs.color) ? attrs.color : 'neutral';
    return createTag('span', { class: createClassName("status-" + color) }, text);
}
//# sourceMappingURL=status.js.map