"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Controller = _interopRequireDefault(require("../Controller"));

var _utils = require("../../utils");

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
  (0, _inherits2.default)(NumberController, _FieldController);

  function NumberController(config) {
    var _this;

    (0, _classCallCheck2.default)(this, NumberController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NumberController).call(this, config));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "note", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formatLabel", function (_ref) {
      var type = _ref.type,
          value = _ref.value;

      // $FlowFixMe
      var typeLabel = _this.getFilterTypes().find(function (f) {
        return f.type === type;
      }).label;

      var showValue = type !== 'is_not_set';
      var valueLabel = (0, _utils.isObject)(value) ? Object.values(value).join(' and ') : value;

      if (!_this.hasValue({
        type: type,
        value: value
      })) {
        return _this.label;
      }

      return _react.default.createElement("span", null, _react.default.createElement("strong", null, _this.label, ":"), " ", typeLabel, showValue ? " ".concat(valueLabel) : null);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasValue", function (_ref2) {
      var type = _ref2.type,
          value = _ref2.value;
      if (type === 'is_not_set') return true;
      var bool = typeof value === 'number';

      if ((0, _utils.isObject)(value)) {
        Object.values(value).forEach(function (v) {
          bool = typeof v === 'number';
        });
      }

      return bool;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getInitialValue", function () {
      return {
        type: 'is',
        value: ''
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getFilterTypes", function () {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultValidate", function (_ref3) {
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

      if ((0, _utils.isObject)(value)) {
        // make sure both values are present
        if (value.lt === undefined || value.gt === undefined) {
          return 'Both inputs are required.';
        } // check for a valid range


        if (value.lt <= value.gt) {
          return 'Invalid range; the second input must be greater than the first.';
        }

        (0, _utils.objectMap)(value, function (val, key) {
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
}(_Controller.default);

exports.default = NumberController;