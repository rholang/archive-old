import { __assign, __extends } from "tslib";
import React from 'react';
import Textfield from '@atlaskit/textfield';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { R400 } from '@atlaskit/theme/colors';
import InlineEdit from './InlineEdit';
import ReadViewContainer from '../styled/ReadViewContainer';
import ErrorIconContainer from '../styled/ErrorIconContainer';
var InlineEditableTextfield = /** @class */ (function (_super) {
    __extends(InlineEditableTextfield, _super);
    function InlineEditableTextfield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineEditableTextfield.prototype.render = function () {
        var _a = this.props, defaultValue = _a.defaultValue, isCompact = _a.isCompact, placeholder = _a.placeholder;
        return (React.createElement(InlineEdit, __assign({}, this.props, { defaultValue: defaultValue, editView: function (fieldProps) { return (React.createElement(Textfield, __assign({}, fieldProps, { elemAfterInput: fieldProps.isInvalid && (React.createElement(ErrorIconContainer, null,
                    React.createElement(ErrorIcon, { label: "error", primaryColor: R400 }))), isCompact: isCompact, autoFocus: true }))); }, readView: function () { return (React.createElement(ReadViewContainer, { isCompact: isCompact }, defaultValue || placeholder)); } })));
    };
    InlineEditableTextfield.defaultProps = {
        isCompact: false,
    };
    return InlineEditableTextfield;
}(React.Component));
export default InlineEditableTextfield;
//# sourceMappingURL=InlineEditableTextfield.js.map