"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var field_text_area_1 = tslib_1.__importDefault(require("@atlaskit/field-text-area"));
var form_1 = require("@atlaskit/form");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
exports.CommentField = function (_a) {
    var defaultValue = _a.defaultValue;
    return (React.createElement(form_1.Field, { name: "comment", defaultValue: defaultValue }, function (_a) {
        var fieldProps = _a.fieldProps;
        return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.commentPlaceholder), function (placeholder) { return (React.createElement(field_text_area_1.default, tslib_1.__assign({}, fieldProps, { onChange: function (event) {
                return fieldProps.onChange({
                    format: 'plain_text',
                    value: event.target.value,
                });
            }, value: fieldProps.value && fieldProps.value.value, maxLength: 500, minimumRows: 3, shouldFitContainer: true, isLabelHidden: true, placeholder: placeholder }))); }));
    }));
};
//# sourceMappingURL=CommentField.js.map