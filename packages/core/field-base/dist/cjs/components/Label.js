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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Label = require("../styled/Label");

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/field-base package has been deprecated. Please use the Form/Textfield/Textarea/etc packages instead.');
}

var Label =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Label, _Component);

  function Label() {
    (0, _classCallCheck2.default)(this, Label);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
  }

  (0, _createClass2.default)(Label, [{
    key: "render",

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          children = _this$props.children,
          htmlFor = _this$props.htmlFor,
          isFirstChild = _this$props.isFirstChild,
          isLabelHidden = _this$props.isLabelHidden,
          isDisabled = _this$props.isDisabled,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          onClick = _this$props.onClick;
      /* eslint-disable jsx-a11y/click-events-have-key-events */

      return _react.default.createElement(_Label.LabelWrapper, {
        htmlFor: htmlFor
      }, _react.default.createElement(_Label.LabelInner, {
        isHidden: isLabelHidden,
        inlineEdit: appearance === 'inline-edit',
        firstChild: isFirstChild,
        isDisabled: isDisabled
      }, _react.default.createElement("span", {
        onClick: onClick
      }, label), isRequired ? _react.default.createElement(_Label.RequiredIndicator, {
        role: "presentation"
      }, "*") : null), children);
    }
  }]);
  return Label;
}(_react.Component);

exports.default = Label;
(0, _defineProperty2.default)(Label, "defaultProps", {
  appearance: 'default'
});