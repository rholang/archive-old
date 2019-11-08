import { createTable } from '../table-util';
import { createTag } from '../create-tag';
import { createContentId } from '../static';
import { createClassName } from '../styles/util';
var TaskState;
(function (TaskState) {
    TaskState["TODO"] = "TODO";
    TaskState["DONE"] = "DONE";
})(TaskState || (TaskState = {}));
var className = createClassName('taskItem');
export var styles = "\n." + className + "-img {\n  width: 16px;\n  height: 16px;\n}\n." + className + "-iconTd {\n  vertical-align: top;\n  padding: 10px 0px 0px 8px;\n  line-height: 20px;\n  width: 24px;\n  height: 24px;\n}\n." + className + "-textTd {\n  font-size: 14px;\n  line-height: 20px;\n  padding: 8px 8px 8px 0;\n}\n." + className + "-mainContent {\n  border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + className + "-wrapper {\n  padding: 4px 0px 4px 0;\n}\n";
var icons = {
    TODO: createTag('img', {
        class: className + '-img',
        src: createContentId('taskItemUnchecked'),
    }),
    DONE: createTag('img', {
        class: className + '-img',
        src: createContentId('taskItemChecked'),
    }),
};
export default function taskItem(_a) {
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
    var mainContentTable = createTable([[iconTd, textTd]], {}, { class: className + "-mainContent" });
    return createTable([
        [
            {
                text: mainContentTable,
                attrs: { class: className + "-wrapper" },
            },
        ],
    ]);
}
//# sourceMappingURL=task-item.js.map