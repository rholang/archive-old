"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WarningIcon = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _colors = require("@atlaskit/theme/colors");

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _warning = _interopRequireDefault(require("@atlaskit/icon/glyph/warning"));

// exported for testing
var WarningIcon = _styledComponents.default.div.withConfig({
  displayName: "ValidationElement__WarningIcon",
  componentId: "sc-1fk9yms-0"
})(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-shrink: 0;\n"], _colors.yellow); // Spinner needs set height to avoid height jumping
// Also needs a margin so there is space between it and preceding text


exports.WarningIcon = WarningIcon;

var SpinnerParent = _styledComponents.default.div.withConfig({
  displayName: "ValidationElement__SpinnerParent",
  componentId: "sc-1fk9yms-1"
})(["\n  height: 20px;\n  margin-left: 10px;\n"]);

var ValidationElement =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ValidationElement, _Component);

  function ValidationElement() {
    (0, _classCallCheck2.default)(this, ValidationElement);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ValidationElement).apply(this, arguments));
  }

  (0, _createClass2.default)(ValidationElement, [{
    key: "render",
    value: function render() {
      if (!this.props.isDisabled && this.props.isInvalid) {
        return _react.default.createElement(WarningIcon, null, _react.default.createElement(_warning.default, {
          label: "warning"
        }));
      }

      return this.props.isLoading ? _react.default.createElement(SpinnerParent, null, _react.default.createElement(_spinner.default, {
        size: "small"
      })) : null;
    }
  }]);
  return ValidationElement;
}(_react.Component);

exports.default = ValidationElement;
(0, _defineProperty2.default)(ValidationElement, "defaultProps", {
  isDisabled: false,
  isInvalid: false,
  isLoading: false
});