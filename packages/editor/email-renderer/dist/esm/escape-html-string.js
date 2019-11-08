export var buildOutlookConditional = function (ifOutlook, ifNotOutlook) {
    return "<!--[if mso]>" + ifOutlook + "<![endif]--><!--[if !mso]><!-- -->" + ifNotOutlook + "<!--<![endif]-->";
};
export var escapeHtmlString = function (content) {
    if (!content)
        return '';
    // We need to first replace with temp placeholders to avoid recursion, as buildOutlookConditional() returns html, too!
    var escapedContent = content
        .replace(/</g, '$TMP_LT$')
        .replace(/>/g, '$TMP_GT$')
        .replace(/\$TMP_LT\$/g, buildOutlookConditional('≺', '&lt;'))
        .replace(/\$TMP_GT\$/g, buildOutlookConditional('≻', '&gt;'));
    return escapedContent;
};
//# sourceMappingURL=escape-html-string.js.map