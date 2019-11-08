"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var collapse_whitespace_1 = tslib_1.__importDefault(require("./collapse-whitespace"));
var utils_1 = require("./utils");
var encode_cxhtml_1 = require("./encode-cxhtml");
function default_1(xhtml) {
    var nsHtml = "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ac=\"" + encode_cxhtml_1.AC_XMLNS + "\" xmlns:ri=\"" + encode_cxhtml_1.RI_XMLNS + "\" xmlns:fab=\"" + encode_cxhtml_1.FAB_XMLNS + "\"><body>" + xhtml + "</body></html>";
    var parser = new window.DOMParser();
    var tree = parser.parseFromString(nsHtml, 'application/xhtml+xml');
    collapse_whitespace_1.default(tree.documentElement, isBlock, isPre);
    return tree;
}
exports.default = default_1;
function isBlock(node) {
    // these blocks are mainly used to collapse whitespace between the blocks
    // (preventing spurious text nodes of ' ')
    switch (utils_1.getNodeName(node)) {
        case 'ADDRESS':
        case 'ARTICLE':
        case 'ASIDE':
        case 'AUDIO':
        case 'BLOCKQUOTE':
        case 'BODY':
        case 'CANVAS':
        case 'CENTER':
        case 'DD':
        case 'DIR':
        case 'DIV':
        case 'DL':
        case 'DT':
        case 'FIELDSET':
        case 'FIGCAPTION':
        case 'FIGURE':
        case 'FOOTER':
        case 'FORM':
        case 'FRAMESET':
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
        case 'HEADER':
        case 'HGROUP':
        case 'HR':
        case 'HTML':
        case 'ISINDEX':
        case 'LI':
        case 'MAIN':
        case 'MENU':
        case 'NAV':
        case 'NOFRAMES':
        case 'NOSCRIPT':
        case 'OL':
        case 'OUTPUT':
        case 'P':
        case 'PRE':
        case 'SECTION':
        case 'TABLE':
        case 'TBODY':
        case 'TD':
        case 'TFOOT':
        case 'TH':
        case 'THEAD':
        case 'TR':
        case 'UL':
        case 'AC:IMAGE':
        case 'AC:LINK':
        case 'AC:MACRO':
        case 'AC:STRUCTURED-MACRO':
        case 'AC:PLAIN-TEXT-BODY':
        case 'AC:RICH-TEXT-BODY':
        case 'AC:PARAMETER':
        case 'AC:TASK-LIST':
        case 'AC:TASK':
        case 'AC:TASK-BODY':
        case 'AC:TASK-ID':
        case 'AC:TASK-STATUS':
        case 'AC:LAYOUT':
        case 'AC:LAYOUT-SECTION':
        case 'AC:LAYOUT-CELL':
        case 'RI:USER':
        case 'RI:PAGE':
        case 'RI:URL':
        case 'RI:ATTACHMENT':
        case 'FAB:MEDIA-GROUP':
        case 'FAB:MEDIA-SINGLE':
            return true;
    }
    return false;
}
function isPre(node) {
    switch (utils_1.getNodeName(node)) {
        case 'PRE':
        case 'AC:PLAIN-TEXT-BODY':
            return true;
    }
    return false;
}
//# sourceMappingURL=parse-cxhtml.js.map