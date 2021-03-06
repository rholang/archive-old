import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { borderRadius, colors, gridSize, math } from '@atlaskit/theme';
import { Popup, akEditorFloatingDialogZIndex } from '@atlaskit/editor-common';
import { TypeAheadItemsList } from './TypeAheadItemsList';
import { selectByIndex } from '../commands/select-item';
import { setCurrentIndex } from '../commands/set-current-index';
export var TypeAheadContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px ", ", 0 4px 8px -2px ", ";\n  padding: ", "px 0;\n  width: 320px;\n  max-height: 380px; /* ~5.5 visibile items */\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n"], ["\n  background: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px ", ", 0 4px 8px -2px ", ";\n  padding: ", "px 0;\n  width: 320px;\n  max-height: 380px; /* ~5.5 visibile items */\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n"])), colors.N0, borderRadius(), colors.N60A, colors.N50A, math.divide(gridSize, 2));
var TypeAhead = /** @class */ (function (_super) {
    __extends(TypeAhead, _super);
    function TypeAhead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.insertByIndex = function (index) {
            selectByIndex(index)(_this.props.editorView.state, _this.props.editorView.dispatch);
        };
        _this.setCurrentIndex = function (index) {
            if (index !== _this.props.currentIndex) {
                setCurrentIndex(index)(_this.props.editorView.state, _this.props.editorView.dispatch);
            }
        };
        return _this;
    }
    TypeAhead.prototype.render = function () {
        var _a = this.props, active = _a.active, items = _a.items, isLoading = _a.isLoading, anchorElement = _a.anchorElement, currentIndex = _a.currentIndex, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, highlight = _a.highlight;
        if (!active || !anchorElement || !items || !items.length) {
            return null;
        }
        return (React.createElement(Popup, { zIndex: akEditorFloatingDialogZIndex, target: anchorElement, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, fitHeight: 300, fitWidth: 340, offset: [0, 8] },
            React.createElement(TypeAheadContent, { className: "fabric-editor-typeahead" },
                highlight,
                Array.isArray(items) ? (React.createElement(TypeAheadItemsList, { insertByIndex: this.insertByIndex, setCurrentIndex: this.setCurrentIndex, items: items, currentIndex: currentIndex })) : !items && isLoading ? ('loading...') : ('no items'))));
    };
    return TypeAhead;
}(React.Component));
export { TypeAhead };
var templateObject_1;
//# sourceMappingURL=TypeAhead.js.map