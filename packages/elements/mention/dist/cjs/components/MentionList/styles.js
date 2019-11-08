"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var shared_styles_1 = require("../../shared-styles");
exports.MentionListStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: ", ";\n\n  /* list style */\n  width: ", ";\n  color: #333;\n\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  display: ",
    ";\n\n  /* list style */\n  width: ", ";\n  color: #333;\n\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (props) {
    return props.empty ? 'none' : 'block';
}, shared_styles_1.mentionListWidth, shared_styles_1.noDialogContainerBorderColor, shared_styles_1.noDialogContainerBorderRadius, shared_styles_1.noDialogContainerBoxShadow);
var templateObject_1;
//# sourceMappingURL=styles.js.map