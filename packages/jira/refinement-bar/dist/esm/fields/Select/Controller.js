import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import FieldController from '../Controller';
import { isObject } from '../../utils';

var SelectController =
/*#__PURE__*/
function (_FieldController) {
  _inherits(SelectController, _FieldController);

  function SelectController() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectController)).call.apply(_getPrototypeOf2, [this].concat(args))); // FIXME this would be nice, but shouldn't be inherited by async...
    // if (!this.config.options) {
    //   throw new Error(
    //     'Select type requires an options array or a function that resolves to an array.',
    //   );
    // }

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "onMenuScrollToBottom", void 0);

    _defineProperty(_assertThisInitialized(_this), "onMenuScrollToTop", void 0);

    _defineProperty(_assertThisInitialized(_this), "placeholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasValue", function (value) {
      return Array.isArray(value) ? value.length > 0 : isObject(value);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialValue", function () {
      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "formatLabel", function (value) {
      var separator = ', ';
      var max = 3;

      var makeLabel = function makeLabel(suffix) {
        return React.createElement("span", null, React.createElement("strong", null, _this.label, ":"), " ", suffix);
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
}(FieldController);

export { SelectController as default };