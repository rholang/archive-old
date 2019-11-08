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

var TextController =
/*#__PURE__*/
function (_FieldController) {
  (0, _inherits2.default)(TextController, _FieldController);

  function TextController(config) {
    var _this;

    (0, _classCallCheck2.default)(this, TextController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextController).call(this, config));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "note", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formatLabel", function (_ref) {
      var type = _ref.type,
          value = _ref.value;

      // $FlowFixMe
      var typeLabel = _this.getFilterTypes().find(function (f) {
        return f.type === type;
      }).label;

      var hasValue = _this.hasValue({
        type: type,
        value: value
      });

      if (!hasValue) {
        return _this.label;
      }

      return _react.default.createElement("span", null, _react.default.createElement("strong", null, _this.label, ": "), typeLabel, type !== 'is_not_set' ? " \"".concat(value, "\"") : null);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasValue", function (_ref2) {
      var type = _ref2.type,
          value = _ref2.value;

      if (type === 'is_not_set') {
        return true;
      }

      return typeof value === 'string' && value.length;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getInitialValue", function () {
      return {
        type: 'contains',
        value: ''
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getFilterTypes", function () {
      return [{
        type: 'contains',
        label: 'contains',
        hasInput: true
      }, {
        type: 'not_contains',
        label: 'does not contain',
        hasInput: true
      }, {
        type: 'is',
        label: 'exactly matches',
        hasInput: true
      }, {
        type: 'is_not_set',
        label: 'is empty'
      }];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultValidate", function (_ref3) {
      var type = _ref3.type,
          value = _ref3.value;

      if (type === 'is_not_set') {
        return null;
      }

      if (!value || !value.length) {
        return 'Please provide some text.';
      }

      return null;
    });
    _this.note = config.note;
    _this.validate = config.validate || _this.defaultValidate;
    return _this;
  }

  return TextController;
}(_Controller.default);

exports.default = TextController;