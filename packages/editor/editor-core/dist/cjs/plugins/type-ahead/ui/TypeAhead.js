"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
var TypeAheadItemsList_1 = require("./TypeAheadItemsList");
var select_item_1 = require("../commands/select-item");
var set_current_index_1 = require("../commands/set-current-index");
exports.TypeAheadContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px ", ", 0 4px 8px -2px ", ";\n  padding: ", "px 0;\n  width: 320px;\n  max-height: 380px; /* ~5.5 visibile items */\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n"], ["\n  background: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px ", ", 0 4px 8px -2px ", ";\n  padding: ", "px 0;\n  width: 320px;\n  max-height: 380px; /* ~5.5 visibile items */\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n"])), theme_1.colors.N0, theme_1.borderRadius(), theme_1.colors.N60A, theme_1.colors.N50A, theme_1.math.divide(theme_1.gridSize, 2));
var TypeAhead = /** @class */ (function (_super) {
    tslib_1.__extends(TypeAhead, _super);
    function TypeAhead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.insertByIndex = function (index) {
            select_item_1.selectByIndex(index)(_this.props.editorView.state, _this.props.editorView.dispatch);
        };
        _this.setCurrentIndex = function (index) {
            if (index !== _this.props.currentIndex) {
                set_current_index_1.setCurrentIndex(index)(_this.props.editorView.state, _this.props.editorView.dispatch);
            }
        };
        return _this;
    }
    TypeAhead.prototype.render = function () {
        var _a = this.props, active = _a.active, items = _a.items, isLoading = _a.isLoading, anchorElement = _a.anchorElement, currentIndex = _a.currentIndex, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, highlight = _a.highlight;
        if (!active || !anchorElement || !items || !items.length) {
            return null;
        }
        return (React.createElement(editor_common_1.Popup, { zIndex: editor_common_1.akEditorFloatingDialogZIndex, target: anchorElement, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, fitHeight: 300, fitWidth: 340, offset: [0, 8] },
            React.createElement(exports.TypeAheadContent, { className: "fabric-editor-typeahead" },
                highlight,
                Array.isArray(items) ? (React.createElement(TypeAheadItemsList_1.TypeAheadItemsList, { insertByIndex: this.insertByIndex, setCurrentIndex: this.setCurrentIndex, items: items, currentIndex: currentIndex })) : !items && isLoading ? ('loading...') : ('no items'))));
    };
    return TypeAhead;
}(React.Component));
exports.TypeAhead = TypeAhead;
var templateObject_1;
//# sourceMappingURL=TypeAhead.js.map