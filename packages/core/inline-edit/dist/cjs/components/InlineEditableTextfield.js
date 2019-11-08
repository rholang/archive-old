"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var textfield_1 = tslib_1.__importDefault(require("@atlaskit/textfield"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var colors_1 = require("@atlaskit/theme/colors");
var InlineEdit_1 = tslib_1.__importDefault(require("./InlineEdit"));
var ReadViewContainer_1 = tslib_1.__importDefault(require("../styled/ReadViewContainer"));
var ErrorIconContainer_1 = tslib_1.__importDefault(require("../styled/ErrorIconContainer"));
var InlineEditableTextfield = /** @class */ (function (_super) {
    tslib_1.__extends(InlineEditableTextfield, _super);
    function InlineEditableTextfield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineEditableTextfield.prototype.render = function () {
        var _a = this.props, defaultValue = _a.defaultValue, isCompact = _a.isCompact, placeholder = _a.placeholder;
        return (react_1.default.createElement(InlineEdit_1.default, tslib_1.__assign({}, this.props, { defaultValue: defaultValue, editView: function (fieldProps) { return (react_1.default.createElement(textfield_1.default, tslib_1.__assign({}, fieldProps, { elemAfterInput: fieldProps.isInvalid && (react_1.default.createElement(ErrorIconContainer_1.default, null,
                    react_1.default.createElement(error_1.default, { label: "error", primaryColor: colors_1.R400 }))), isCompact: isCompact, autoFocus: true }))); }, readView: function () { return (react_1.default.createElement(ReadViewContainer_1.default, { isCompact: isCompact }, defaultValue || placeholder)); } })));
    };
    InlineEditableTextfield.defaultProps = {
        isCompact: false,
    };
    return InlineEditableTextfield;
}(react_1.default.Component));
exports.default = InlineEditableTextfield;
//# sourceMappingURL=InlineEditableTextfield.js.map