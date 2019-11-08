import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import FieldController from '../Controller';
import { isObject, objectMap } from '../../utils';

var validateInput = function validateInput(label, value, name) {
  var result = null;
  var prefix = name ? "".concat(label, " \"").concat(name, "\"") : label;

  if (Number.isNaN(value)) {
    result = "".concat(prefix, " must be a number");
  } else if (!Number.isInteger(value)) {
    result = "".concat(prefix, " must be a whole number");
  } else if (value < 0) {
    result = "".concat(prefix, " must be a positive number");
  }

  return result;
};

var NumberController =
/*#__PURE__*/
function (_FieldController) {
  _inherits(NumberController, _FieldController);

  function NumberController(config) {
    var _this;

    _classCallCheck(this, NumberController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberController).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "note", void 0);

    _defineProperty(_assertThisInitialized(_this), "formatLabel", function (_ref) {
      var type = _ref.type,
          value = _ref.value;

      // $FlowFixMe
      var typeLabel = _this.getFilterTypes().find(function (f) {
        return f.type === type;
      }).label;

      var showValue = type !== 'is_not_set';
      var valueLabel = isObject(value) ? Object.values(value).join(' and ') : value;

      if (!_this.hasValue({
        type: type,
        value: value
      })) {
        return _this.label;
      }

      return React.createElement("span", null, React.createElement("strong", null, _this.label, ":"), " ", typeLabel, showValue ? " ".concat(valueLabel) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "hasValue", function (_ref2) {
      var type = _ref2.type,
          value = _ref2.value;
      if (type === 'is_not_set') return true;
      var bool = typeof value === 'number';

      if (isObject(value)) {
        Object.values(value).forEach(function (v) {
          bool = typeof v === 'number';
        });
      }

      return bool;
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialValue", function () {
      return {
        type: 'is',
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getFilterTypes", function () {
      return [{
        type: 'is',
        label: 'is',
        hasInput: true
      }, {
        type: 'not',
        label: 'is not',
        hasInput: true
      }, {
        type: 'gt',
        label: 'greater than',
        hasInput: true
      }, {
        type: 'lt',
        label: 'less than',
        hasInput: true
      }, {
        type: 'between',
        label: 'between',
        hasInput: true
      }, {
        type: 'is_not_set',
        label: 'has no value'
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "defaultValidate", function (_ref3) {
      var type = _ref3.type,
          value = _ref3.value;
      var result = null;
      var nameMap = {
        lt: 'to',
        gt: 'from'
      };

      if (type === 'is_not_set') {
        return result;
      }

      if (isObject(value)) {
        // make sure both values are present
        if (value.lt === undefined || value.gt === undefined) {
          return 'Both inputs are required.';
        } // check for a valid range


        if (value.lt <= value.gt) {
          return 'Invalid range; the second input must be greater than the first.';
        }

        objectMap(value, function (val, key) {
          var r = validateInput(_this.label, val, nameMap[key]);
          if (r) result = r;
          return null;
        });
      } else {
        result = validateInput(_this.label, value);
      }

      return result;
    });

    _this.note = config.note;
    _this.validate = config.validate || _this.defaultValidate;
    return _this;
  }

  return NumberController;
}(FieldController);

export { NumberController as default };