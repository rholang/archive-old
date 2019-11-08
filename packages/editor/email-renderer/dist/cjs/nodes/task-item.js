"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_util_1 = require("../table-util");
var create_tag_1 = require("../create-tag");
var static_1 = require("../static");
var util_1 = require("../styles/util");
var TaskState;
(function (TaskState) {
    TaskState["TODO"] = "TODO";
    TaskState["DONE"] = "DONE";
})(TaskState || (TaskState = {}));
var className = util_1.createClassName('taskItem');
exports.styles = "\n." + className + "-img {\n  width: 16px;\n  height: 16px;\n}\n." + className + "-iconTd {\n  vertical-align: top;\n  padding: 10px 0px 0px 8px;\n  line-height: 20px;\n  width: 24px;\n  height: 24px;\n}\n." + className + "-textTd {\n  font-size: 14px;\n  line-height: 20px;\n  padding: 8px 8px 8px 0;\n}\n." + className + "-mainContent {\n  border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + className + "-wrapper {\n  padding: 4px 0px 4px 0;\n}\n";
var icons = {
    TODO: create_tag_1.createTag('img', {
        class: className + '-img',
        src: static_1.createContentId('taskItemUnchecked'),
    }),
    DONE: create_tag_1.createTag('img', {
        class: className + '-img',
        src: static_1.createContentId('taskItemChecked'),
    }),
};
function taskItem(_a) {
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
    var mainContentTable = table_util_1.createTable([[iconTd, textTd]], {}, { class: className + "-mainContent" });
    return table_util_1.createTable([
        [
            {
                text: mainContentTable,
                attrs: { class: className + "-wrapper" },
            },
        ],
    ]);
}
exports.default = taskItem;
//# sourceMappingURL=task-item.js.map