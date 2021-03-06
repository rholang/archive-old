import { __read } from "tslib";
import { isRgb, rgbToHex, N0, N20, N60, B50, B75, B100, T50, T75, T100, P50, P75, P100, R50, R75, R100, G50, G75, G200, Y50, Y75, Y200, hexToRgba, N800, } from '../../utils/colors';
export var tablePrefixSelector = 'pm-table';
export var tableCellSelector = tablePrefixSelector + "-cell-content-wrap";
export var tableHeaderSelector = tablePrefixSelector + "-header-content-wrap";
export var tableCellContentWrapperSelector = tablePrefixSelector + "-cell-nodeview-wrapper";
export var tableCellContentDomSelector = tablePrefixSelector + "-cell-nodeview-content-dom";
var DEFAULT_TABLE_HEADER_CELL_BACKGROUND = N20.toLocaleLowerCase();
var getCellAttrs = function (dom, defaultValues) {
    if (defaultValues === void 0) { defaultValues = {}; }
    var widthAttr = dom.getAttribute('data-colwidth');
    var width = widthAttr && /^\d+(,\d+)*$/.test(widthAttr)
        ? widthAttr.split(',').map(function (str) { return Number(str); })
        : null;
    var colspan = Number(dom.getAttribute('colspan') || 1);
    var backgroundColor = dom.style.backgroundColor;
    if (backgroundColor && isRgb(backgroundColor)) {
        backgroundColor = rgbToHex(backgroundColor);
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
export var setCellAttrs = function (node, cell) {
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
            background === tableBackgroundColorNames.get('light gray')) ||
            (nodeType === 'tableCell' &&
                background === tableBackgroundColorNames.get('white'));
        if (ignored) {
            attrs.style = '';
        }
        else {
            var color = isRgb(background) ? rgbToHex(background) : background;
            attrs.style = (attrs.style || '') + "background-color: " + color + ";";
        }
    }
    if (nodeType === 'tableHeader') {
        attrs.class = tableHeaderSelector;
    }
    else {
        attrs.class = tableCellSelector;
    }
    return attrs;
};
export var tableBackgroundColorPalette = new Map();
export var tableBackgroundBorderColor = hexToRgba(N800, 0.12) || N0;
export var tableBackgroundColorNames = new Map();
[
    [N0, 'White'],
    [B50, 'Light blue'],
    [T50, 'Light teal'],
    [G50, 'Light green'],
    [Y50, 'Light yellow'],
    [R50, 'Light red'],
    [P50, 'Light purple'],
    [N20, 'Light gray'],
    [B75, 'Blue'],
    [T75, 'Teal'],
    [G75, 'Green'],
    [Y75, 'Yellow'],
    [R75, 'Red'],
    [P75, 'Purple'],
    [N60, 'Gray'],
    [B100, 'Dark blue'],
    [T100, 'Dark teal'],
    [G200, 'Dark green'],
    [Y200, 'Dark yellow'],
    [R100, 'Dark red'],
    [P100, 'Dark purple'],
].forEach(function (_a) {
    var _b = __read(_a, 2), colorValue = _b[0], colorName = _b[1];
    tableBackgroundColorPalette.set(colorValue.toLowerCase(), colorName);
    tableBackgroundColorNames.set(colorName.toLowerCase(), colorValue.toLowerCase());
});
// TODO: Fix any, potential issue. ED-5048
export var table = {
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
export var tableToJSON = function (node) { return ({
    attrs: Object.keys(node.attrs)
        .filter(function (key) { return !key.startsWith('__'); })
        .reduce(function (obj, key) {
        obj[key] = node.attrs[key];
        return obj;
    }, {}),
}); };
export var tableRow = {
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
export var tableCell = {
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
    toDOM: function (node) { return ['td', setCellAttrs(node), 0]; },
};
export var toJSONTableCell = function (node) { return ({
    attrs: Object.keys(node.attrs).reduce(function (obj, key) {
        if (cellAttrs[key].default !== node.attrs[key]) {
            obj[key] = node.attrs[key];
        }
        return obj;
    }, {}),
}); };
export var tableHeader = {
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
    toDOM: function (node) { return ['th', setCellAttrs(node), 0]; },
};
export var toJSONTableHeader = toJSONTableCell;
//# sourceMappingURL=tableNodes.js.map