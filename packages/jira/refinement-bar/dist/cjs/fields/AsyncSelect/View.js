"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _core = require("@emotion/core");

var _select = require("@atlaskit/select");

var _Select = require("../../components/Select");

var _Popup = require("../../components/Popup");

/** @jsx jsx */
var AsyncSelect = (0, _select.makeAsyncSelect)(_Select.BaseSelect);

var AsyncSelectView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(AsyncSelectView, _PureComponent);

  function AsyncSelectView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AsyncSelectView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AsyncSelectView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      inputValue: ''
    });
    return _this;
  }

  (0, _createClass2.default)(AsyncSelectView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          storedValue = _this$props.storedValue,
          field = _this$props.field,
          isRemovable = _this$props.isRemovable,
          onRemove = _this$props.onRemove,
          loadOptions = _this$props.loadOptions,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["storedValue", "field", "isRemovable", "onRemove", "loadOptions"]);
      var defaultOptions = props.value;

      if (Array.isArray(field.defaultOptions)) {
        // Show only visible options
        defaultOptions = props.value.filter(function (o) {
          return !field.defaultOptions.includes(o);
        }).concat([{
          label: field.defaultOptionsLabel,
          options: field.defaultOptions
        }]);
      } else if (typeof field.defaultOptions === 'boolean') {
        defaultOptions = field.defaultOptions; // eslint-disable-line prefer-destructuring
      }

      return (0, _core.jsx)(_Popup.DialogInner, {
        minWidth: 220
      }, (0, _core.jsx)(AsyncSelect, (0, _extends2.default)({
        cacheOptions: field.cacheOptions,
        components: _Select.selectComponents,
        defaultOptions: defaultOptions,
        defaultOptionsLabel: field.defaultOptionsLabel,
        inputValue: field.inputValue,
        loadOptions: field.loadOptions,
        onInputChange: field.onInputChange,
        onMenuScrollToBottom: field.onMenuScrollToBottom,
        onMenuScrollToTop: field.onMenuScrollToTop,
        placeholder: field.placeholder
      }, props)));
    }
  }]);
  return AsyncSelectView;
}(_react.PureComponent);

exports.default = AsyncSelectView;