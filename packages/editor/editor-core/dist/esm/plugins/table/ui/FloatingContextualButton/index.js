import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { Popup } from '@atlaskit/editor-common';
import { findDomRefAtPos } from 'prosemirror-utils';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import ExpandIcon from '@atlaskit/icon/glyph/chevron-down';
import { tableFloatingCellButtonStyles } from '../styles';
import ToolbarButton from '../../../../ui/ToolbarButton';
import { TableCssClassName as ClassName } from '../../types';
import messages from '../../ui/messages';
import { toggleContextualMenu } from '../../commands';
import { closestElement } from '../../../../utils';
var ButtonWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), tableFloatingCellButtonStyles);
var FloatingContextualButton = /** @class */ (function (_super) {
    __extends(FloatingContextualButton, _super);
    function FloatingContextualButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            toggleContextualMenu()(state, dispatch);
        };
        return _this;
    }
    FloatingContextualButton.prototype.render = function () {
        var _a = this.props, mountPoint = _a.mountPoint, scrollableElement = _a.scrollableElement, editorView = _a.editorView, targetCellPosition = _a.targetCellPosition, isContextualMenuOpen = _a.isContextualMenuOpen, formatMessage = _a.intl.formatMessage; //  : Props & InjectedIntlProps
        var domAtPos = editorView.domAtPos.bind(editorView);
        var targetCellRef = findDomRefAtPos(targetCellPosition, domAtPos);
        if (!targetCellRef || !(targetCellRef instanceof HTMLElement)) {
            return null;
        }
        var tableWrapper = closestElement(targetCellRef, "." + ClassName.TABLE_NODE_WRAPPER);
        var labelCellOptions = formatMessage(messages.cellOptions);
        return (React.createElement(Popup, { alignX: "right", alignY: "start", target: targetCellRef, mountTo: tableWrapper || mountPoint, boundariesElement: targetCellRef, scrollableElement: scrollableElement, offset: [3, -3], forcePlacement: true, allowOutOfBounds: true },
            React.createElement(ButtonWrapper, null,
                React.createElement(ToolbarButton, { className: ClassName.CONTEXTUAL_MENU_BUTTON, selected: isContextualMenuOpen, title: labelCellOptions, onClick: this.handleClick, iconBefore: React.createElement(ExpandIcon, { label: labelCellOptions }) }))));
    };
    FloatingContextualButton.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.targetCellPosition !== nextProps.targetCellPosition ||
            this.props.layout !== nextProps.layout ||
            this.props.isContextualMenuOpen !== nextProps.isContextualMenuOpen);
    };
    return FloatingContextualButton;
}(React.Component));
export default injectIntl(FloatingContextualButton);
var templateObject_1;
//# sourceMappingURL=index.js.map