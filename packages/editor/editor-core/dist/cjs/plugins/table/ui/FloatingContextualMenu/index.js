"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var ContextualMenu_1 = tslib_1.__importDefault(require("./ContextualMenu"));
var styles_1 = require("../styles");
var main_1 = require("../../pm-plugins/main");
var MenuWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styles_1.tablePopupStyles);
// offset of the contextual menu dropdown
var calculateOffset = function (targetCellRef, state) {
    var tableRef = main_1.pluginKey.getState(state).tableRef;
    var top = -styles_1.contextualMenuTriggerSize;
    if (tableRef && targetCellRef) {
        var targetOffset = targetCellRef.getBoundingClientRect();
        var tableOffset = tableRef.getBoundingClientRect();
        var topDiff = targetOffset.top - tableOffset.top;
        if (topDiff < 200) {
            top -= topDiff + 2;
        }
    }
    return [styles_1.contextualMenuTriggerSize / 2, top];
};
var FloatingContextualMenu = function (_a) {
    var mountPoint = _a.mountPoint, boundariesElement = _a.boundariesElement, scrollableElement = _a.scrollableElement, editorView = _a.editorView, isOpen = _a.isOpen, targetCellPosition = _a.targetCellPosition, pluginConfig = _a.pluginConfig;
    if (!isOpen || !targetCellPosition) {
        return null;
    }
    var selection = editorView.state.selection;
    var selectionRect = prosemirror_utils_1.isCellSelection(selection)
        ? prosemirror_utils_1.getSelectionRect(selection)
        : prosemirror_utils_1.findCellRectClosestToPos(selection.$from);
    if (!selectionRect) {
        return null;
    }
    var domAtPos = editorView.domAtPos.bind(editorView);
    var targetCellRef = prosemirror_utils_1.findDomRefAtPos(targetCellPosition, domAtPos);
    if (!targetCellRef) {
        return null;
    }
    return (React.createElement(editor_common_1.Popup, { alignX: "right", alignY: "top", target: targetCellRef, mountTo: mountPoint, boundariesElement: boundariesElement, scrollableElement: scrollableElement, fitHeight: 188, fitWidth: styles_1.contextualMenuDropdownWidth, 
        // z-index value below is to ensure that this menu is above other floating menu
        // in table, but below floating dialogs like typeaheads, pickers, etc.
        zIndex: editor_common_1.akEditorFloatingOverlapPanelZIndex, forcePlacement: true, offset: [-7, 0] },
        React.createElement(MenuWrapper, null,
            React.createElement(ContextualMenu_1.default, { editorView: editorView, offset: calculateOffset(targetCellRef, editorView.state), isOpen: isOpen, targetCellPosition: targetCellPosition, allowColumnSorting: pluginConfig && pluginConfig.allowColumnSorting, allowMergeCells: pluginConfig.allowMergeCells, allowBackgroundColor: pluginConfig.allowBackgroundColor, selectionRect: selectionRect }))));
};
exports.default = FloatingContextualMenu;
var templateObject_1;
//# sourceMappingURL=index.js.map