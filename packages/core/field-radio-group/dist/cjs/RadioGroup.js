"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _RadioGroupStateless = _interopRequireDefault(require("./RadioGroupStateless"));

var defaultItems = [];

var FieldRadioGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldRadioGroup, _Component);

  function FieldRadioGroup() {
    var _this;

    (0, _classCallCheck2.default)(this, FieldRadioGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldRadioGroup).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getItems", function () {
      // If there is a user-selected value, then select that item
      if (_this.props.items) {
        if (_this.state.selectedValue) {
          return _this.props.items.map(function (item) {
            return item.value === _this.state.selectedValue ? (0, _objectSpread2.default)({}, item, {
              isSelected: true
            }) : item;
          });
        } // Otherwise, look for a defaultSelected item and select that item


        var hasDefaultSelected = _this.props.items.some(function (item) {
          return item.defaultSelected;
        });

        if (hasDefaultSelected && _this.props.items) {
          return _this.props.items.map(function (item) {
            return item.defaultSelected ? (0, _objectSpread2.default)({}, item, {
              isSelected: true
            }) : item;
          });
        }
      }

      return _this.props.items;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changeHandler", function (event) {
      _this.props.onRadioChange(event);

      _this.setState({
        selectedValue: event.target.value
      });
    });
    _this.state = {
      selectedValue: null // Overrides default once user selects a value.

    };
    return _this;
  }

  (0, _createClass2.default)(FieldRadioGroup, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_RadioGroupStateless.default, {
        label: this.props.label,
        onRadioChange: this.changeHandler,
        isRequired: this.props.isRequired,
        items: this.getItems()
      });
    }
  }]);
  return FieldRadioGroup;
}(_react.Component);

exports.default = FieldRadioGroup;
(0, _defineProperty2.default)(FieldRadioGroup, "defaultProps", {
  isRequired: false,
  items: defaultItems,
  onRadioChange: function onRadioChange() {}
});