"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOutlookConditional = function (ifOutlook, ifNotOutlook) {
    return "<!--[if mso]>" + ifOutlook + "<![endif]--><!--[if !mso]><!-- -->" + ifNotOutlook + "<!--<![endif]-->";
};
exports.escapeHtmlString = function (content) {
    if (!content)
        return '';
    // We need to first replace with temp placeholders to avoid recursion, as buildOutlookConditional() returns html, too!
    var escapedContent = content
        .replace(/</g, '$TMP_LT$')
        .replace(/>/g, '$TMP_GT$')
        .replace(/\$TMP_LT\$/g, exports.buildOutlookConditional('≺', '&lt;'))
        .replace(/\$TMP_GT\$/g, exports.buildOutlookConditional('≻', '&gt;'));
    return escapedContent;
};
//# sourceMappingURL=escape-html-string.js.map