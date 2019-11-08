import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import FieldController from '../Controller';

var TextController =
/*#__PURE__*/
function (_FieldController) {
  _inherits(TextController, _FieldController);

  function TextController(config) {
    var _this;

    _classCallCheck(this, TextController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextController).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "note", void 0);

    _defineProperty(_assertThisInitialized(_this), "formatLabel", function (_ref) {
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

      return React.createElement("span", null, React.createElement("strong", null, _this.label, ": "), typeLabel, type !== 'is_not_set' ? " \"".concat(value, "\"") : null);
    });

    _defineProperty(_assertThisInitialized(_this), "hasValue", function (_ref2) {
      var type = _ref2.type,
          value = _ref2.value;

      if (type === 'is_not_set') {
        return true;
      }

      return typeof value === 'string' && value.length;
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialValue", function () {
      return {
        type: 'contains',
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getFilterTypes", function () {
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

    _defineProperty(_assertThisInitialized(_this), "defaultValidate", function (_ref3) {
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
}(FieldController);

export { TextController as default };