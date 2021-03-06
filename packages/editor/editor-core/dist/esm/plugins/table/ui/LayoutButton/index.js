import { __extends } from "tslib";
import * as React from 'react';
import { injectIntl } from 'react-intl';
import classnames from 'classnames';
import { Popup } from '@atlaskit/editor-common';
import ExpandIcon from '@atlaskit/icon/glyph/editor/expand';
import CollapseIcon from '@atlaskit/icon/glyph/editor/collapse';
import commonMessages from '../../../../messages';
import ToolbarButton from '../../../../ui/ToolbarButton';
import { TableCssClassName as ClassName } from '../../types';
import { toggleTableLayoutWithAnalytics } from '../../commands-with-analytics';
var POPUP_OFFSET = [
    0,
    // -22 pixels to align y position with
    // the columns controls
    -22,
];
var getTitle = function (layout) {
    switch (layout) {
        case 'default':
            return commonMessages.layoutWide;
        case 'wide':
            return commonMessages.layoutFullWidth;
        default:
            return commonMessages.layoutFixedWidth;
    }
};
var LayoutButton = /** @class */ (function (_super) {
    __extends(LayoutButton, _super);
    function LayoutButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props.editorView, state = _a.state, dispatch = _a.dispatch;
            toggleTableLayoutWithAnalytics()(state, dispatch);
        };
        return _this;
    }
    LayoutButton.prototype.render = function () {
        var _a;
        var _b = this.props, formatMessage = _b.intl.formatMessage, mountPoint = _b.mountPoint, boundariesElement = _b.boundariesElement, scrollableElement = _b.scrollableElement, targetRef = _b.targetRef, isResizing = _b.isResizing, _c = _b.layout, layout = _c === void 0 ? 'default' : _c;
        if (!targetRef) {
            return null;
        }
        var title = formatMessage(getTitle(layout));
        return (React.createElement(Popup, { ariaLabel: title, offset: POPUP_OFFSET, target: targetRef, alignY: "start", alignX: "end", stick: true, mountTo: mountPoint, boundariesElement: boundariesElement, scrollableElement: scrollableElement, forcePlacement: true },
            React.createElement("div", { className: classnames(ClassName.LAYOUT_BUTTON, (_a = {},
                    _a[ClassName.IS_RESIZING] = isResizing,
                    _a)) },
                React.createElement(ToolbarButton, { title: title, onClick: this.handleClick, iconBefore: layout === 'full-width' ? (React.createElement(CollapseIcon, { label: title })) : (React.createElement(ExpandIcon, { label: title })) }))));
    };
    LayoutButton.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.targetRef !== nextProps.targetRef ||
            this.props.layout !== nextProps.layout ||
            this.props.isResizing !== nextProps.isResizing);
    };
    return LayoutButton;
}(React.Component));
export default injectIntl(LayoutButton);
//# sourceMappingURL=index.js.map