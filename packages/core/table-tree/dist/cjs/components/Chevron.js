"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _button = _interopRequireDefault(require("@atlaskit/button"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _chevronRight = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-right"));

var _styled = require("../styled");

var Chevron =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Chevron, _Component);

  function Chevron() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Chevron);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Chevron)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function () {
      if (_this.props.onExpandToggle) {
        _this.props.onExpandToggle();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Chevron, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isExpanded = _this$props.isExpanded,
          ariaControls = _this$props.ariaControls,
          collapseLabel = _this$props.collapseLabel,
          expandLabel = _this$props.expandLabel;
      var iconProps = {
        size: 'medium',
        primaryColor: _styled.iconColor
      };
      return _react.default.createElement(_styled.ChevronContainer, null, _react.default.createElement(_button.default, {
        spacing: "none",
        appearance: "subtle",
        "aria-controls": ariaControls,
        onClick: this.handleClick
      }, _react.default.createElement(_styled.ChevronIconContainer, null, isExpanded ? _react.default.createElement(_chevronDown.default, (0, _extends2.default)({
        label: collapseLabel
      }, iconProps)) : _react.default.createElement(_chevronRight.default, (0, _extends2.default)({
        label: expandLabel
      }, iconProps)))));
    }
  }]);
  return Chevron;
}(_react.Component);

exports.default = Chevron;
(0, _defineProperty2.default)(Chevron, "defaultProps", {
  expandLabel: 'Expand',
  collapseLabel: 'Collapse'
});