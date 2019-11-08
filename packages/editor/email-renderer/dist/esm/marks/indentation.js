import { createTable } from '../table-util';
import { createClassName } from '../styles/util';
export var styles = "\n." + createClassName('mark-indentation-1') + " {\n  padding-left: 30px;\n}\n." + createClassName('mark-indentation-2') + " {\n  padding-left: 60px;\n}\n." + createClassName('mark-indentation-3') + " {\n  padding-left: 90px;\n}\n." + createClassName('mark-indentation-4') + " {\n  padding-left: 120px;\n}\n." + createClassName('mark-indentation-5') + " {\n  padding-left: 150px;\n}\n." + createClassName('mark-indentation-6') + " {\n  padding-left: 180px;\n}\n";
export default function code(_a) {
    var mark = _a.mark, text = _a.text;
    // Outlook accepts padding on <td> element, thus we wrap it with table here
    return createTable([
        [
            {
                text: text,
                attrs: {
                    class: createClassName("mark-indentation-" + mark.attrs.level),
                },
            },
        ],
    ]);
}
//# sourceMappingURL=indentation.js.map