"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevPreviewWarning = exports.AtlassianInternalWarning = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _sectionMessage = _interopRequireDefault(require("@atlaskit/section-message"));

var AtlassianInternalWarning =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AtlassianInternalWarning, _React$Component);

  function AtlassianInternalWarning() {
    (0, _classCallCheck2.default)(this, AtlassianInternalWarning);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AtlassianInternalWarning).apply(this, arguments));
  }

  (0, _createClass2.default)(AtlassianInternalWarning, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_sectionMessage.default, {
        title: "Note: This component is designed for internal Atlassian development.",
        appearance: "warning"
      }, _react.default.createElement("p", null, "External contributors will be able to use this component but will not be able to submit issues."));
    }
  }]);
  return AtlassianInternalWarning;
}(_react.default.Component);

exports.AtlassianInternalWarning = AtlassianInternalWarning;

var DevPreviewWarning =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(DevPreviewWarning, _React$Component2);

  function DevPreviewWarning() {
    (0, _classCallCheck2.default)(this, DevPreviewWarning);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DevPreviewWarning).apply(this, arguments));
  }

  (0, _createClass2.default)(DevPreviewWarning, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_sectionMessage.default, {
        title: "Note: This component is currently in developer preview.",
        appearance: "warning"
      }, _react.default.createElement("p", null, "Please experiment with and test this package, but be aware that the API may change at any time. Use at your own risk, preferably not in production."));
    }
  }]);
  return DevPreviewWarning;
}(_react.default.Component);

exports.DevPreviewWarning = DevPreviewWarning;