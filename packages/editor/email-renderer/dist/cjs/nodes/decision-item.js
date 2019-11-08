"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_util_1 = require("../table-util");
var create_tag_1 = require("../create-tag");
var static_1 = require("../static");
var util_1 = require("../styles/util");
var DecisionState;
(function (DecisionState) {
    DecisionState["DECIDED"] = "DECIDED";
})(DecisionState || (DecisionState = {}));
var className = util_1.createClassName('decision');
exports.styles = "\n." + className + " {\n  padding: 4px 0px 4px 0;\n}\n." + className + "-content {\n  border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + className + "-icon {\n  width: 16px;\n  height: 16px;\n}\n." + className + "-iconTd {\n  vertical-align: top;\n  padding: 11px 0px 0px 8px;\n  width: 24px;\n  height: 24px;\n}\n." + className + "-textTd {\n  font-size: 14px;\n  padding: 8px 8px 8px 0;\n}\n";
var icons = {
    DECIDED: create_tag_1.createTag('img', {
        class: className + '-icon',
        src: static_1.createContentId('decision'),
    }),
};
function decisionItem(_a) {
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
    var mainContentTable = table_util_1.createTable([[iconTd, textTd]], {}, { class: className + '-content' });
    return table_util_1.createTable([
        [
            {
                text: mainContentTable,
                attrs: { class: className },
            },
        ],
    ]);
}
exports.default = decisionItem;
//# sourceMappingURL=decision-item.js.map