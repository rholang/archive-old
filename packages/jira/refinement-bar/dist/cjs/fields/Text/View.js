"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _textfield = _interopRequireDefault(require("@atlaskit/textfield"));

var _common = require("../../components/common");

var _InputGroup = require("../../components/InputGroup");

var _Popup = require("../../components/Popup");

var NOOP = function NOOP() {};

var TextView =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TextView, _React$Component);

  function TextView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TextView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", _this.props.storedValue);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nextInputRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusTimeoutId", undefined);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      e.preventDefault();
      if (_this.props.invalidMessage) return;

      if (typeof _this.props.closePopup === 'function') {
        _this.props.closePopup(); // HACK? (imperative)

      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeCheckbox", function (event) {
      var onChange = _this.props.onChange;
      var type = event.target.value;
      var isKeyboardEvent = event.nativeEvent.screenX === 0 && event.nativeEvent.screenY === 0;
      var callback = isKeyboardEvent ? NOOP : _this.focusNextInput;

      _this.setState({
        type: type
      }, callback);

      var value = type === 'is_not_set' ? null : _this.state.value;
      onChange({
        type: type,
        value: value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusNextInput", function () {
      var target = _this.nextInputRef.current;

      if (target) {
        // wait for the focus trap (Popup) to grab the node that envoked the
        // dialog, before assigning focus within
        _this.focusTimeoutId = setTimeout(function () {
          target.focus();
        }, 10);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeInput", function (_ref) {
      var target = _ref.target;
      var onChange = _this.props.onChange;
      var type = _this.state.type;

      _this.setState({
        value: target.value
      });

      var value = type === 'is_not_set' ? null : target.value;
      onChange({
        type: type,
        value: value
      });
    });
    return _this;
  }

  (0, _createClass2.default)(TextView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusNextInput();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          field = _this$props.field,
          invalidMessage = _this$props.invalidMessage;
      var type = this.state.type;
      var isInvalid = Boolean(invalidMessage);
      return _react.default.createElement(_Popup.DialogInner, {
        isPadded: true,
        maxWidth: 160
      }, _react.default.createElement(_InputGroup.Group, {
        onSubmit: this.handleSubmit
      }, this.filterTypes.map(function (m) {
        var isCurrent = m.type === type;
        return _react.default.createElement(_react.Fragment, {
          key: m.type
        }, _react.default.createElement(_InputGroup.Radio, {
          checked: isCurrent,
          name: "mode",
          onChange: _this2.onChangeCheckbox,
          type: "radio",
          value: m.type
        }, m.label), isCurrent && m.hasInput ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_textfield.default, {
          key: m.type,
          ref: _this2.nextInputRef,
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          value: _this2.state.value
        }), invalidMessage && _react.default.createElement(_common.Note, null, invalidMessage)) : null);
      })), field.note && _react.default.createElement(_common.Note, null, field.note));
    }
  }, {
    key: "filterTypes",
    // TODO: Move to field controller???
    get: function get() {
      return this.props.field.getFilterTypes();
    }
  }]);
  return TextView;
}(_react.default.Component);

var _default = TextView;
exports.default = _default;