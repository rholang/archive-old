import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import SelectController from '../Select/Controller';

var AsyncSelectController =
/*#__PURE__*/
function (_SelectController) {
  _inherits(AsyncSelectController, _SelectController);

  function AsyncSelectController() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsyncSelectController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsyncSelectController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "cacheOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultOptionsLabel", void 0);

    _defineProperty(_assertThisInitialized(_this), "inputValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "loadOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "onInputChange", void 0);

    _this.cacheOptions = _this.config.cacheOptions;
    _this.defaultOptions = _this.config.defaultOptions;
    _this.defaultOptionsLabel = _this.config.defaultOptionsLabel;
    _this.inputValue = _this.config.inputValue;
    _this.loadOptions = _this.config.loadOptions;
    _this.onInputChange = _this.config.onInputChange;
    return _this;
  }

  return AsyncSelectController;
}(SelectController);

export { AsyncSelectController as default };