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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/field-range has been deprecated. Please use the @atlaskit/range package instead.');
}

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Slider, _Component);

  // eslint-disable-next-line
  function Slider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Slider).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "props", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPercentValue", function (value, min, max) {
      var percent = '0';

      if (min < max && value > min) {
        percent = ((value - min) / (max - min) * 100).toFixed(2);
      }

      return percent;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (e) {
      // Event.target is typed as an EventTarget but we need to access properties on it which are
      // specific to HTMLInputElement. Due limitations of the HTML spec flow doesn't know that an
      // EventTarget can have these properties, so we cast it to Element through Object. This is
      // the safest thing we can do in this situation.
      var target = e.target;
      var value = parseFloat(target.value);
      var _this$props = _this.props,
          max = _this$props.max,
          onChange = _this$props.onChange,
          min = _this$props.min;

      var valuePercent = _this.getPercentValue(value, min, max);

      _this.setState({
        value: value,
        valuePercent: valuePercent
      });

      if (onChange) {
        onChange(value);
      }
    });
    _this.inputElement = null;
    _this.state = {
      value: props.value,
      valuePercent: _this.getPercentValue(props.value, props.min, props.max)
    };
    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var nextValue = _ref.value,
          min = _ref.min,
          max = _ref.max;
      var currentValue = this.props.value;

      if (currentValue !== nextValue) {
        var valuePercent = this.getPercentValue(nextValue, min, max);
        this.setState({
          value: nextValue,
          valuePercent: valuePercent
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          disabled = _this$props2.disabled;
      var _this$state = this.state,
          value = _this$state.value,
          valuePercent = _this$state.valuePercent;
      return _react.default.createElement(_styled.Input, {
        type: "range",
        value: value.toString(),
        min: min,
        max: max,
        step: step,
        onChange: this.handleChange,
        disabled: disabled,
        valuePercent: valuePercent
      });
    }
  }]);
  return Slider;
}(_react.Component);

exports.default = Slider;
(0, _defineProperty2.default)(Slider, "defaultProps", {
  disabled: false,
  value: 0,
  min: 0,
  max: 100,
  step: 0.1,
  onChange: function onChange() {}
});