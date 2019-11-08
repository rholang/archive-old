"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Controller = _interopRequireDefault(require("../Controller"));

var _utils = require("../../utils");

var SelectController =
/*#__PURE__*/
function (_FieldController) {
  (0, _inherits2.default)(SelectController, _FieldController);

  function SelectController() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SelectController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SelectController)).call.apply(_getPrototypeOf2, [this].concat(args))); // FIXME this would be nice, but shouldn't be inherited by async...
    // if (!this.config.options) {
    //   throw new Error(
    //     'Select type requires an options array or a function that resolves to an array.',
    //   );
    // }

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "options", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMenuScrollToBottom", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMenuScrollToTop", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "placeholder", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasValue", function (value) {
      return Array.isArray(value) ? value.length > 0 : (0, _utils.isObject)(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getInitialValue", function () {
      return [];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formatLabel", function (value) {
      var separator = ', ';
      var max = 3;

      var makeLabel = function makeLabel(suffix) {
        return _react.default.createElement("span", null, _react.default.createElement("strong", null, _this.label, ":"), " ", suffix);
      }; // no value


      if (!_this.hasValue(value)) return _this.label; // value is object

      if (!Array.isArray(value)) return makeLabel(value.label); // value is array
      // create comma separated list of values
      // maximum 3 visible

      var valueMap = value.map(function (v) {
        return v.label;
      });
      var valueLength = valueMap.length;
      return makeLabel(valueLength > max ? "".concat(valueMap.slice(0, max).join(separator), " +").concat(valueLength - max, " more") : valueMap.join(separator));
    });
    _this.onMenuScrollToBottom = _this.config.onMenuScrollToBottom;
    _this.onMenuScrollToTop = _this.config.onMenuScrollToTop;
    _this.options = _this.config.options;
    _this.placeholder = _this.config.placeholder;
    return _this;
  }

  return SelectController;
}(_Controller.default);

exports.default = SelectController;