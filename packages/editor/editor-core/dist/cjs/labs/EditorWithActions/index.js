"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var editor_1 = tslib_1.__importDefault(require("../../editor"));
var EditorContext_1 = tslib_1.__importDefault(require("../../ui/EditorContext"));
var WithEditorActions_1 = tslib_1.__importDefault(require("../../ui/WithEditorActions"));
var EditorWithActions = /** @class */ (function (_super) {
    tslib_1.__extends(EditorWithActions, _super);
    function EditorWithActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function (actions) { return function () {
            _this.props.onSave(actions);
        }; };
        _this.handleCancel = function (actions) { return function () {
            _this.props.onCancel(actions);
        }; };
        _this.handleChange = function (actions) { return function () {
            _this.props.onChange(actions);
        }; };
        return _this;
    }
    EditorWithActions.prototype.render = function () {
        var _this = this;
        if (this.context.editorActions) {
            var actions = this.context.editorActions;
            return (React.createElement(editor_1.default, tslib_1.__assign({}, this.props, { onSave: this.props.onSave ? this.handleSave(actions) : undefined, onChange: this.props.onChange ? this.handleChange(actions) : undefined, onCancel: this.props.onCancel ? this.handleCancel(actions) : undefined })));
        }
        return (React.createElement(EditorContext_1.default, null,
            React.createElement(WithEditorActions_1.default, { render: function (actions) { return (React.createElement(editor_1.default, tslib_1.__assign({}, _this.props, { onSave: _this.props.onSave ? _this.handleSave(actions) : undefined, onChange: _this.props.onChange ? _this.handleChange(actions) : undefined, onCancel: _this.props.onCancel ? _this.handleCancel(actions) : undefined }))); } })));
    };
    EditorWithActions.contextTypes = {
        editorActions: PropTypes.object.isRequired,
    };
    return EditorWithActions;
}(React.Component));
exports.default = EditorWithActions;
//# sourceMappingURL=index.js.map