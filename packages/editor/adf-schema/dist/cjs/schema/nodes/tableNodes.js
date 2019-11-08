"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors_1 = require("../../utils/colors");
exports.tablePrefixSelector = 'pm-table';
exports.tableCellSelector = exports.tablePrefixSelector + "-cell-content-wrap";
exports.tableHeaderSelector = exports.tablePrefixSelector + "-header-content-wrap";
exports.tableCellContentWrapperSelector = exports.tablePrefixSelector + "-cell-nodeview-wrapper";
exports.tableCellContentDomSelector = exports.tablePrefixSelector + "-cell-nodeview-content-dom";
var DEFAULT_TABLE_HEADER_CELL_BACKGROUND = colors_1.N20.toLocaleLowerCase();
var getCellAttrs = function (dom, defaultValues) {
    if (defaultValues === void 0) { defaultValues = {}; }
    var widthAttr = dom.getAttribute('data-colwidth');
    var width = widthAttr && /^\d+(,\d+)*$/.test(widthAttr)
        ? widthAttr.split(',').map(function (str) { return Number(str); })
        : null;
    var colspan = Number(dom.getAttribute('colspan') || 1);
    var backgroundColor = dom.style.backgroundColor;
    if (backgroundColor && colors_1.isRgb(backgroundColor)) {
        backgroundColor = colors_1.rgbToHex(backgroundColor);
    }
    return {
        colspan: colspan,
        rowspan: Number(dom.getAttribute('rowspan') || 1),
        colwidth: width && width.length === colspan ? width : null,
        background: backgroundColor && backgroundColor !== defaultValues['background']
            ? backgroundColor
            : null,
    };
};
exports.setCellAttrs = function (node, cell) {
    var attrs = {};
    var nodeType = node.type.name;
    var colspan = cell ? parseInt(cell.getAttribute('colspan') || '1', 10) : 1;
    var rowspan = cell ? parseInt(cell.getAttribute('rowspan') || '1', 10) : 1;
    if (node.attrs.colspan !== colspan) {
        attrs.colspan = node.attrs.colspan;
    }
    if (node.attrs.rowspan !== rowspan) {
        attrs.rowspan = node.attrs.rowspan;
    }
    if (node.attrs.colwidth) {
        attrs['data-colwidth'] = node.attrs.colwidth.join(',');
    }
    if (node.attrs.background) {
        var background = node.attrs.background;
        // to ensure that we don't overwrite product's style:
        // - it clears background color for <th> if its set to gray
        // - it clears background color for <td> if its set to white
        var ignored = (nodeType === 'tableHeader' &&
            background === exports.tableBackgroundColorNames.get('light gray')) ||
            (nodeType === 'tableCell' &&
                background === exports.tableBackgroundColorNames.get('white'));
        if (ignored) {
            attrs.style = '';
        }
        else {
            var color = colors_1.isRgb(background) ? colors_1.rgbToHex(background) : background;
            attrs.style = (attrs.style || '') + "background-color: " + color + ";";
        }
    }
    if (nodeType === 'tableHeader') {
        attrs.class = exports.tableHeaderSelector;
    }
    else {
        attrs.class = exports.tableCellSelector;
    }
    return attrs;
};
exports.tableBackgroundColorPalette = new Map();
exports.tableBackgroundBorderColor = colors_1.hexToRgba(colors_1.N800, 0.12) || colors_1.N0;
exports.tableBackgroundColorNames = new Map();
[
    [colors_1.N0, 'White'],
    [colors_1.B50, 'Light blue'],
    [colors_1.T50, 'Light teal'],
    [colors_1.G50, 'Light green'],
    [colors_1.Y50, 'Light yellow'],
    [colors_1.R50, 'Light red'],
    [colors_1.P50, 'Light purple'],
    [colors_1.N20, 'Light gray'],
    [colors_1.B75, 'Blue'],
    [colors_1.T75, 'Teal'],
    [colors_1.G75, 'Green'],
    [colors_1.Y75, 'Yellow'],
    [colors_1.R75, 'Red'],
    [colors_1.P75, 'Purple'],
    [colors_1.N60, 'Gray'],
    [colors_1.B100, 'Dark blue'],
    [colors_1.T100, 'Dark teal'],
    [colors_1.G200, 'Dark green'],
    [colors_1.Y200, 'Dark yellow'],
    [colors_1.R100, 'Dark red'],
    [colors_1.P100, 'Dark purple'],
].forEach(function (_a) {
    var _b = tslib_1.__read(_a, 2), colorValue = _b[0], colorName = _b[1];
    exports.tableBackgroundColorPalette.set(colorValue.toLowerCase(), colorName);
    exports.tableBackgroundColorNames.set(colorName.toLowerCase(), colorValue.toLowerCase());
});
// TODO: Fix any, potential issue. ED-5048
exports.table = {
    content: 'tableRow+',
    attrs: {
        isNumberColumnEnabled: { default: false },
        layout: { default: 'default' },
        __autoSize: { default: false },
    },
    tableRole: 'table',
    isolating: true,
    selectable: false,
    group: 'block',
    parseDOM: [
        {
            tag: 'table',
            getAttrs: function (dom) { return ({
                isNumberColumnEnabled: dom.getAttribute('data-number-column') === 'true' ? true : false,
                layout: dom.getAttribute('data-layout') || 'default',
                __autoSize: dom.getAttribute('data-autosize') === 'true' ? true : false,
            }); },
        },
    ],
    toDOM: function (node) {
        var attrs = {
            'data-number-column': node.attrs.isNumberColumnEnabled,
            'data-layout': node.attrs.layout,
            'data-autosize': node.attrs.__autoSize,
        };
        return ['table', attrs, ['tbody', 0]];
    },
};
exports.tableToJSON = function (node) { return ({
    attrs: Object.keys(node.attrs)
        .filter(function (key) { return !key.startsWith('__'); })
        .reduce(function (obj, key) {
        obj[key] = node.attrs[key];
        return obj;
    }, {}),
}); };
exports.tableRow = {
    content: '(tableCell | tableHeader)+',
    tableRole: 'row',
    parseDOM: [{ tag: 'tr' }],
    toDOM: function () {
        return ['tr', 0];
    },
};
var cellAttrs = {
    colspan: { default: 1 },
    rowspan: { default: 1 },
    colwidth: { default: null },
    background: { default: null },
};
exports.tableCell = {
    content: '(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaSingle |  mediaGroup | decisionList | taskList | blockCard | extension | unsupportedBlock)+',
    attrs: cellAttrs,
    tableRole: 'cell',
    marks: 'alignment',
    isolating: true,
    parseDOM: [
        // Ignore number cell copied from renderer
        {
            tag: '.ak-renderer-table-number-column',
            ignore: true,
        },
        {
            tag: 'td',
            getAttrs: function (dom) { return getCellAttrs(dom); },
        },
    ],
    toDOM: function (node) { return ['td', exports.setCellAttrs(node), 0]; },
};
exports.toJSONTableCell = function (node) { return ({
    attrs: Object.keys(node.attrs).reduce(function (obj, key) {
        if (cellAttrs[key].default !== node.attrs[key]) {
            obj[key] = node.attrs[key];
        }
        return obj;
    }, {}),
}); };
exports.tableHeader = {
    content: '(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaSingle |  mediaGroup | decisionList | taskList | blockCard | extension)+',
    attrs: cellAttrs,
    tableRole: 'header_cell',
    isolating: true,
    marks: 'alignment',
    parseDOM: [
        {
            tag: 'th',
            getAttrs: function (dom) {
                return getCellAttrs(dom, { background: DEFAULT_TABLE_HEADER_CELL_BACKGROUND });
            },
        },
    ],
    toDOM: function (node) { return ['th', exports.setCellAttrs(node), 0]; },
};
exports.toJSONTableHeader = exports.toJSONTableCell;
//# sourceMappingURL=tableNodes.js.map