import { createTable } from '../table-util';
import { createTag } from '../create-tag';
import { createContentId } from '../static';
import { createClassName } from '../styles/util';
var DecisionState;
(function (DecisionState) {
    DecisionState["DECIDED"] = "DECIDED";
})(DecisionState || (DecisionState = {}));
var className = createClassName('decision');
export var styles = "\n." + className + " {\n  padding: 4px 0px 4px 0;\n}\n." + className + "-content {\n  border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + className + "-icon {\n  width: 16px;\n  height: 16px;\n}\n." + className + "-iconTd {\n  vertical-align: top;\n  padding: 11px 0px 0px 8px;\n  width: 24px;\n  height: 24px;\n}\n." + className + "-textTd {\n  font-size: 14px;\n  padding: 8px 8px 8px 0;\n}\n";
var icons = {
    DECIDED: createTag('img', {
        class: className + '-icon',
        src: createContentId('decision'),
    }),
};
export default function decisionItem(_a) {
    var attrs = _a.attrs, text = _a.text;
    // If there is no content, we shouldn't render anything
    if (!text) {
        return '';
    }
    var state = attrs.state;
    var iconTd = {
        text: icons[state],
        attrs: { class: className + '-iconTd' },
    };
    var textTd = {
        text: text,
        attrs: { class: className + '-textTd' },
    };
    var mainContentTable = createTable([[iconTd, textTd]], {}, { class: className + '-content' });
    return createTable([
        [
            {
                text: mainContentTable,
                attrs: { class: className },
            },
        ],
    ]);
}
//# sourceMappingURL=decision-item.js.map