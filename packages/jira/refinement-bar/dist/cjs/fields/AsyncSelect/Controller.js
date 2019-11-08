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

var _Controller = _interopRequireDefault(require("../Select/Controller"));

var AsyncSelectController =
/*#__PURE__*/
function (_SelectController) {
  (0, _inherits2.default)(AsyncSelectController, _SelectController);

  function AsyncSelectController() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AsyncSelectController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AsyncSelectController)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cacheOptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultOptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultOptionsLabel", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputValue", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "loadOptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputChange", void 0);
    _this.cacheOptions = _this.config.cacheOptions;
    _this.defaultOptions = _this.config.defaultOptions;
    _this.defaultOptionsLabel = _this.config.defaultOptionsLabel;
    _this.inputValue = _this.config.inputValue;
    _this.loadOptions = _this.config.loadOptions;
    _this.onInputChange = _this.config.onInputChange;
    return _this;
  }

  return AsyncSelectController;
}(_Controller.default);

exports.default = AsyncSelectController;