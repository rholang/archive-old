import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DOMSerializer } from 'prosemirror-model';
import InfoIcon from '@atlaskit/icon/glyph/editor/info';
import SuccessIcon from '@atlaskit/icon/glyph/editor/success';
import NoteIcon from '@atlaskit/icon/glyph/editor/note';
import WarningIcon from '@atlaskit/icon/glyph/editor/warning';
import ErrorIcon from '@atlaskit/icon/glyph/editor/error';
import TipIcon from '@atlaskit/icon/glyph/editor/hint';
var panelIcons = {
    info: InfoIcon,
    success: SuccessIcon,
    note: NoteIcon,
    tip: TipIcon,
    warning: WarningIcon,
    error: ErrorIcon,
};
var toDOM = function (node) {
    return [
        'div',
        {
            class: 'ak-editor-panel',
            'data-panel-type': node.attrs.panelType || 'info',
        },
        ['span', { class: 'ak-editor-panel__icon' }],
        ['div', { class: 'ak-editor-panel__content' }, 0],
    ];
};
var PanelNodeView = /** @class */ (function () {
    function PanelNodeView(node) {
        var _a = DOMSerializer.renderSpec(document, toDOM(node)), dom = _a.dom, contentDOM = _a.contentDOM;
        this.node = node;
        this.dom = dom;
        this.contentDOM = contentDOM;
        this.icon = this.dom.querySelector('.ak-editor-panel__icon');
        this.renderIcon(node.attrs.panelType);
    }
    PanelNodeView.prototype.renderIcon = function (panelType) {
        var Icon = panelIcons[panelType];
        ReactDOM.render(React.createElement(Icon, { label: "Panel " + panelType }), this.icon);
    };
    return PanelNodeView;
}());
export var panelNodeView = function () { return function (node) {
    return new PanelNodeView(node);
}; };
//# sourceMappingURL=panel.js.map