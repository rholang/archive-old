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

var _FieldTextStateless = _interopRequireDefault(require("./FieldTextStateless"));

var FieldText =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldText, _Component);

  function FieldText() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldText)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "input", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      value: _this.props.value
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOnChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(FieldText, [{
    key: "focus",
    value: function focus() {
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_FieldTextStateless.default, (0, _extends2.default)({}, this.props, {
        value: this.state.value,
        onChange: this.handleOnChange,
        innerRef: function innerRef(fieldRef) {
          _this2.input = fieldRef;
        }
      }));
    }
  }]);
  return FieldText;
}(_react.Component);

exports.default = FieldText;
(0, _defineProperty2.default)(FieldText, "defaultProps", {
  onChange: function onChange() {}
});