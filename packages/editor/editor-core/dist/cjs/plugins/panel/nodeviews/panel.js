"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var prosemirror_model_1 = require("prosemirror-model");
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/info"));
var success_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/success"));
var note_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/note"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/warning"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/error"));
var hint_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/hint"));
var panelIcons = {
    info: info_1.default,
    success: success_1.default,
    note: note_1.default,
    tip: hint_1.default,
    warning: warning_1.default,
    error: error_1.default,
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
        var _a = prosemirror_model_1.DOMSerializer.renderSpec(document, toDOM(node)), dom = _a.dom, contentDOM = _a.contentDOM;
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
exports.panelNodeView = function () { return function (node) {
    return new PanelNodeView(node);
}; };
//# sourceMappingURL=panel.js.map