"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
exports.toggleBold = makeKeyMapWithCommon('Bold', 'Mod-b');
exports.toggleItalic = makeKeyMapWithCommon('Italic', 'Mod-i');
exports.toggleUnderline = makeKeyMapWithCommon('Underline', 'Mod-u');
exports.toggleStrikethrough = makeKeyMapWithCommon('Strikethrough', 'Mod-Shift-s');
exports.toggleCode = makeKeyMapWithCommon('Code', 'Mod-Shift-m');
exports.pastePlainText = makeKeyMapWithCommon('Paste Plain Text', 'Mod-Shift-v');
exports.clearFormatting = makeKeyMapWithCommon('Clear formatting', 'Mod-\\');
exports.setNormalText = makeKeyMapWithCommon('Normal text', 'Mod-Alt-0');
exports.toggleHeading1 = makeKeyMapWithCommon('Heading 1', 'Mod-Alt-1');
exports.toggleHeading2 = makeKeyMapWithCommon('Heading 2', 'Mod-Alt-2');
exports.toggleHeading3 = makeKeyMapWithCommon('Heading 3', 'Mod-Alt-3');
exports.toggleHeading4 = makeKeyMapWithCommon('Heading 4', 'Mod-Alt-4');
exports.toggleHeading5 = makeKeyMapWithCommon('Heading 5', 'Mod-Alt-5');
exports.toggleHeading6 = makeKeyMapWithCommon('Heading 6', 'Mod-Alt-6');
exports.toggleOrderedList = makeKeyMapWithCommon('Numbered list', 'Mod-Shift-7');
exports.toggleBulletList = makeKeyMapWithCommon('Bullet list', 'Mod-Shift-8');
exports.toggleBlockQuote = makeKeymap('Quote', '', 'Cmd-Alt-9');
exports.insertNewLine = makeKeyMapWithCommon('Insert new line', 'Shift-Enter');
exports.shiftBackspace = makeKeyMapWithCommon('Shift Backspace', 'Shift-Backspace');
exports.splitCodeBlock = makeKeyMapWithCommon('Split code block', 'Enter');
exports.splitListItem = makeKeyMapWithCommon('Split list item', 'Enter');
exports.insertRule = makeKeyMapWithCommon('Insert horizontal rule', 'Mod-Shift--');
exports.undo = makeKeyMapWithCommon('Undo', 'Mod-z');
exports.moveUp = makeKeyMapWithCommon('Move up', 'ArrowUp');
exports.moveDown = makeKeyMapWithCommon('Move down', 'ArrowDown');
exports.moveLeft = makeKeyMapWithCommon('Move left', 'ArrowLeft');
exports.moveRight = makeKeyMapWithCommon('Move right', 'ArrowRight');
exports.indentList = makeKeyMapWithCommon('Indent List', 'Tab');
exports.outdentList = makeKeyMapWithCommon('Outdent List', 'Shift-Tab');
exports.redo = makeKeymap('Redo', 'Ctrl-y', 'Cmd-Shift-z');
exports.redoBarred = makeKeymap('Redo Barred', 'Ctrl-Shift-z', 'Cmd-y');
exports.openHelp = makeKeyMapWithCommon('Open Help', 'Mod-/');
exports.addLink = makeKeyMapWithCommon('Link', 'Mod-k');
exports.submit = makeKeyMapWithCommon('Submit Content', 'Mod-Enter');
exports.enter = makeKeyMapWithCommon('Enter', 'Enter');
exports.tab = makeKeyMapWithCommon('Tab', 'Tab');
exports.indent = makeKeyMapWithCommon('Indent', 'Tab');
exports.outdent = makeKeyMapWithCommon('Outdent', 'Shift-Tab');
exports.backspace = makeKeyMapWithCommon('Backspace', 'Backspace');
exports.deleteKey = makeKeyMapWithCommon('Delete', 'Delete');
exports.space = makeKeyMapWithCommon('Space', 'Space');
exports.escape = makeKeyMapWithCommon('Escape', 'Escape');
exports.nextCell = makeKeyMapWithCommon('Next cell', 'Tab');
exports.previousCell = makeKeyMapWithCommon('Previous cell', 'Shift-Tab');
exports.toggleTable = makeKeyMapWithCommon('Table', 'Shift-Alt-t');
exports.addRowBefore = makeKeyMapWithCommon('Add Row Above', 'Ctrl-Alt-ArrowUp');
exports.addRowAfter = makeKeyMapWithCommon('Add Row Below', 'Ctrl-Alt-ArrowDown');
exports.addColumnAfter = makeKeyMapWithCommon('Add Column After', 'Ctrl-Alt-ArrowRight');
exports.addColumnBefore = makeKeyMapWithCommon('Add Column Before', 'Ctrl-Alt-ArrowLeft');
exports.cut = makeKeyMapWithCommon('Cut', 'Mod-x');
exports.copy = makeKeyMapWithCommon('Copy', 'Mod-c');
exports.paste = makeKeyMapWithCommon('Paste', 'Mod-v');
exports.altPaste = makeKeyMapWithCommon('Paste', 'Mod-Shift-v');
var arrowKeysMap = {
    // for reference: https://wincent.com/wiki/Unicode_representations_of_modifier_keys
    ARROWLEFT: '\u2190',
    ARROWRIGHT: '\u2192',
    ARROWUP: '\u2191',
    ARROWDOWN: '\u2193',
};
exports.TooltipShortcut = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  border-radius: 2px;\n  background-color: ", ";\n  padding: 0 2px;\n"], ["\n  border-radius: 2px;\n  background-color: ", ";\n  padding: 0 2px;\n"])), theme_1.colors.N400);
function formatShortcut(keymap) {
    var shortcut;
    if (editor_common_1.browser.mac) {
        // for reference: https://wincent.com/wiki/Unicode_representations_of_modifier_keys
        shortcut = keymap.mac
            .replace(/Cmd/i, '\u2318')
            .replace(/Shift/i, '\u21E7')
            .replace(/Ctrl/i, '\u2303')
            .replace(/Alt/i, '\u2325')
            .replace(/Backspace/i, '\u232B');
    }
    else {
        shortcut = keymap.windows.replace(/Backspace/i, '\u232B');
    }
    var keys = shortcut.split('-');
    var lastKey = keys[keys.length - 1].toUpperCase();
    keys[keys.length - 1] = arrowKeysMap[lastKey] || lastKey;
    return keys.join(editor_common_1.browser.mac ? '' : '+');
}
function tooltip(keymap, description) {
    if (keymap) {
        var shortcut = formatShortcut(keymap);
        return description ? description + " " + shortcut : shortcut;
    }
    return;
}
exports.tooltip = tooltip;
function renderTooltipContent(description, keymap, shortcutOverride) {
    var shortcut = shortcutOverride || (keymap && formatShortcut(keymap));
    return shortcut || description ? (React.createElement(React.Fragment, null,
        description,
        shortcut && description && '\u00A0',
        shortcut && React.createElement(exports.TooltipShortcut, null, shortcut))) : null;
}
exports.renderTooltipContent = renderTooltipContent;
function findKeymapByDescription(description) {
    var matches = ALL.filter(function (keymap) { return keymap.description.toUpperCase() === description.toUpperCase(); });
    return matches[0];
}
exports.findKeymapByDescription = findKeymapByDescription;
function findShortcutByDescription(description) {
    var keymap = findKeymapByDescription(description);
    if (keymap) {
        return findShortcutByKeymap(keymap);
    }
    return;
}
exports.findShortcutByDescription = findShortcutByDescription;
function findShortcutByKeymap(keymap) {
    if (editor_common_1.browser.mac) {
        return keymap.mac;
    }
    return keymap.windows;
}
exports.findShortcutByKeymap = findShortcutByKeymap;
var ALL = [
    exports.toggleOrderedList,
    exports.toggleBulletList,
    exports.toggleBold,
    exports.toggleItalic,
    exports.toggleUnderline,
    exports.toggleStrikethrough,
    exports.toggleCode,
    exports.setNormalText,
    exports.toggleHeading1,
    exports.toggleHeading2,
    exports.toggleHeading3,
    exports.toggleHeading4,
    exports.toggleHeading5,
    exports.toggleHeading6,
    exports.toggleBlockQuote,
    exports.insertNewLine,
    exports.insertRule,
    exports.splitCodeBlock,
    exports.splitListItem,
    exports.redo,
    exports.undo,
];
function makeKeymap(description, windows, mac, common) {
    return {
        description: description,
        windows: windows,
        mac: mac,
        common: common,
    };
}
function makeKeyMapWithCommon(description, common) {
    var windows = common.replace(/Mod/i, 'Ctrl');
    var mac = common.replace(/Mod/i, 'Cmd');
    return makeKeymap(description, windows, mac, common);
}
function bindKeymapWithCommand(shortcut, cmd, keymap) {
    var oldCmd = keymap[shortcut];
    var newCmd = cmd;
    if (keymap[shortcut]) {
        newCmd = function (state, dispatch, editorView) {
            return oldCmd(state, dispatch) || cmd(state, dispatch, editorView);
        };
    }
    keymap[shortcut] = newCmd;
}
exports.bindKeymapWithCommand = bindKeymapWithCommand;
function findKeyMapForBrowser(keyMap) {
    if (keyMap) {
        if (editor_common_1.browser.mac) {
            return keyMap.mac;
        }
        return keyMap.windows;
    }
    return;
}
exports.findKeyMapForBrowser = findKeyMapForBrowser;
exports.LEFT = 37;
exports.RIGHT = 39;
exports.UP = 38;
exports.DOWN = 40;
exports.KEY_0 = 48;
exports.KEY_1 = 49;
exports.KEY_2 = 50;
exports.KEY_3 = 51;
exports.KEY_4 = 52;
exports.KEY_5 = 53;
exports.KEY_6 = 54;
exports.HEADING_KEYS = [exports.KEY_0, exports.KEY_1, exports.KEY_2, exports.KEY_3, exports.KEY_4, exports.KEY_5, exports.KEY_6];
var templateObject_1;
//# sourceMappingURL=index.js.map