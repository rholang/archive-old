"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var InlineEditUncontrolled_1 = tslib_1.__importDefault(require("./InlineEditUncontrolled"));
var InlineEdit = /** @class */ (function (_super) {
    tslib_1.__extends(InlineEdit, _super);
    function InlineEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editViewRef = react_1.default.createRef();
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
        return (react_1.default.createElement(InlineEditUncontrolled_1.default, tslib_1.__assign({}, this.props, { defaultValue: this.props.defaultValue, editView: function (fieldProps) {
                return _this.props.editView(fieldProps, _this.editViewRef);
            }, readView: this.props.readView, onConfirm: this.onConfirm, onCancel: this.onCancel, isEditing: this.state.isEditing, onEditRequested: this.onEditRequested })));
    };
    InlineEdit.defaultProps = {
        startWithEditViewOpen: false,
    };
    return InlineEdit;
}(react_1.default.Component));
exports.default = InlineEdit;
//# sourceMappingURL=InlineEdit.js.map