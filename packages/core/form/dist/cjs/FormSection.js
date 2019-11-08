"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _FormSection = _interopRequireWildcard(require("./styled/FormSection"));

var FormSection =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FormSection, _Component);

  function FormSection() {
    (0, _classCallCheck2.default)(this, FormSection);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormSection).apply(this, arguments));
  }

  (0, _createClass2.default)(FormSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children;
      return _react.default.createElement(_FormSection.default, null, title && _react.default.createElement(_FormSection.FormSectionTitle, null, title), description && _react.default.createElement(_FormSection.FormSectionDescription, null, description), children);
    }
  }]);
  return FormSection;
}(_react.Component);

exports.default = FormSection;