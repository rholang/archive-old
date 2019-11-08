"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _textfield = _interopRequireDefault(require("@atlaskit/textfield"));

var _common = require("../../components/common");

var _InputGroup = require("../../components/InputGroup");

var _Popup = require("../../components/Popup");

var _utils = require("../../utils");

var getInitialState = function getInitialState(storedValue) {
  var type = storedValue.type,
      value = storedValue.value;
  var base = {
    gt: '',
    lt: '',
    type: type,
    single: ''
  };
  return typeof value === 'number' ? (0, _objectSpread2.default)({}, base, {
    single: value
  }) : (0, _objectSpread2.default)({}, base, value);
};

var NumberView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(NumberView, _PureComponent);

  function NumberView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NumberView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NumberView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", getInitialState(_this.props.storedValue));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nextInputRef", (0, _react.createRef)());
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
      var isNotSet = type === 'is_not_set';
      var isKeyboardEvent = event.nativeEvent.screenX === 0 && event.nativeEvent.screenY === 0;

      _this.setState({
        type: type
      }, function () {
        if (!isKeyboardEvent) {
          _this.focusNextInput();
        } // avoid creating an invalid state where '' === NaN


        if ((0, _utils.isEmptyString)(_this.state.single) && !isNotSet) {
          return;
        }

        var _this$state = _this.state,
            gt = _this$state.gt,
            lt = _this$state.lt;
        var value = _this.state.single;

        if (_this.isBetween) {
          value = {
            gt: gt,
            lt: lt
          };
        } else if (isNotSet) {
          value = null;
        }

        onChange({
          type: type,
          value: value
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeInput", function (event) {
      var name = event.target.name;
      var val = Number(event.target.value);
      var onChange = _this.props.onChange;
      var type = _this.state.type;

      _this.setState((0, _defineProperty2.default)({}, name, val), function () {
        var _this$state2 = _this.state,
            gt = _this$state2.gt,
            lt = _this$state2.lt;
        var value = _this.isBetween ? {
          gt: gt,
          lt: lt
        } : val;
        onChange({
          type: type,
          value: value
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusNextInput", function () {
      var el = _this.nextInputRef.current;

      if (el && typeof el.focus === 'function') {
        // wait for the focus trap (Popup) to grab the node that envoked the
        // dialog, before assigning focus within
        setTimeout(function () {
          el.focus();
        }, 10);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(NumberView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusNextInput();
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
        }, m.label), isCurrent && m.hasInput ? _react.default.createElement(_react.default.Fragment, null, m.type === 'between' ? _react.default.createElement(InputRow, null, _react.default.createElement(_textfield.default, {
          ref: _this2.nextInputRef,
          name: "gt",
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.gt
        }), _react.default.createElement(_textfield.default, {
          name: "lt",
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.lt
        })) : _react.default.createElement(_textfield.default, {
          ref: _this2.nextInputRef,
          isInvalid: isInvalid,
          name: "single",
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.single
        }), invalidMessage && _react.default.createElement(_common.Note, null, invalidMessage)) : null);
      })), field.note && _react.default.createElement(_common.Note, null, field.note));
    }
  }, {
    key: "isBetween",
    get: function get() {
      return this.state.type === 'between';
    }
  }, {
    key: "filterTypes",
    get: function get() {
      return this.props.field.getFilterTypes();
    }
  }]);
  return NumberView;
}(_react.PureComponent); // ==============================
// Styled Components
// ==============================


var InputRow = function InputRow(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    style: {
      display: 'flex',
      marginLeft: -4,
      marginRight: -4
    }
  }), _react.Children.map(children, function (c) {
    return _react.default.createElement("div", {
      style: {
        marginLeft: 4,
        marginRight: 4
      }
    }, c);
  }));
};

var _default = NumberView;
exports.default = _default;