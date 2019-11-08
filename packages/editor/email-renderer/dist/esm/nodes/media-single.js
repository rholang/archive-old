import { createTag } from '../create-tag';
import { serializeStyle } from '../serialize-style';
import { createClassName } from '../styles/util';
var className = createClassName('media-single');
export var styles = "\n." + className + "-wide {\n  width: 100%;\n}\n." + className + "-full-width {\n  width: 100%;\n}\n." + className + "-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n." + className + "-wrap-right {\n  float: right;\n}\n." + className + "-wrap-left {\n  float: left;\n}\n." + className + "-align-end {\n  margin-left: auto;\n  margin-right: 0px;\n}\n." + className + "-align-start {\n  margin-left: 0px;\n  margin-right: auto;\n}\n\n";
export default function mediaSingle(_a) {
    var attrs = _a.attrs, text = _a.text;
    var honorWidth = !['wide', 'full-width'].includes(attrs.layout);
    var style = {
        width: honorWidth ? (attrs.width || 100) + "%" : '100%',
        'max-width': '100%',
    };
    var layoutClass = className + "-" + attrs.layout;
    return createTag('div', { style: serializeStyle(style), class: layoutClass }, text);
}
//# sourceMappingURL=media-single.js.map