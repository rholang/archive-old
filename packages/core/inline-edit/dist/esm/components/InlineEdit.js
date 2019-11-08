import { __assign, __extends } from "tslib";
import React from 'react';
import InlineEditUncontrolled from './InlineEditUncontrolled';
var InlineEdit = /** @class */ (function (_super) {
    __extends(InlineEdit, _super);
    function InlineEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editViewRef = React.createRef();
        _this.state = {
            isEditing: _this.props.startWithEditViewOpen || false,
        };
        _this.onConfirm = function (value, analyticsEvent) {
            _this.setState({
                isEditing: false,
            });
            _this.props.onConfirm(value, analyticsEvent);
        };
        _this.onCancel = function () {
            _this.setState({
                isEditing: false,
            });
        };
        _this.onEditRequested = function () {
            _this.setState({ isEditing: true }, function () {
                if (_this.editViewRef.current) {
                    _this.editViewRef.current.focus();
                }
            });
        };
        return _this;
    }
    InlineEdit.prototype.componentDidMount = function () {
        if (this.props.startWithEditViewOpen && this.editViewRef.current) {
            this.editViewRef.current.focus();
        }
    };
    InlineEdit.prototype.render = function () {
        var _this = this;
        return (React.createElement(InlineEditUncontrolled, __assign({}, this.props, { defaultValue: this.props.defaultValue, editView: function (fieldProps) {
                return _this.props.editView(fieldProps, _this.editViewRef);
            }, readView: this.props.readView, onConfirm: this.onConfirm, onCancel: this.onCancel, isEditing: this.state.isEditing, onEditRequested: this.onEditRequested })));
    };
    InlineEdit.defaultProps = {
        startWithEditViewOpen: false,
    };
    return InlineEdit;
}(React.Component));
export default InlineEdit;
//# sourceMappingURL=InlineEdit.js.map