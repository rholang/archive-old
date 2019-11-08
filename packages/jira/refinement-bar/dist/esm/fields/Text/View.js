import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Fragment } from 'react';
import Input from '@atlaskit/textfield';
import { Note } from '../../components/common';
import { Group, Radio } from '../../components/InputGroup';
import { DialogInner } from '../../components/Popup';

var NOOP = function NOOP() {};

var TextView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextView, _React$Component);

  function TextView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _this.props.storedValue);

    _defineProperty(_assertThisInitialized(_this), "nextInputRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "focusTimeoutId", undefined);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      if (_this.props.invalidMessage) return;

      if (typeof _this.props.closePopup === 'function') {
        _this.props.closePopup(); // HACK? (imperative)

      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeCheckbox", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "focusNextInput", function () {
      var target = _this.nextInputRef.current;

      if (target) {
        // wait for the focus trap (Popup) to grab the node that envoked the
        // dialog, before assigning focus within
        _this.focusTimeoutId = setTimeout(function () {
          target.focus();
        }, 10);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInput", function (_ref) {
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

  _createClass(TextView, [{
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
      return React.createElement(DialogInner, {
        isPadded: true,
        maxWidth: 160
      }, React.createElement(Group, {
        onSubmit: this.handleSubmit
      }, this.filterTypes.map(function (m) {
        var isCurrent = m.type === type;
        return React.createElement(Fragment, {
          key: m.type
        }, React.createElement(Radio, {
          checked: isCurrent,
          name: "mode",
          onChange: _this2.onChangeCheckbox,
          type: "radio",
          value: m.type
        }, m.label), isCurrent && m.hasInput ? React.createElement(React.Fragment, null, React.createElement(Input, {
          key: m.type,
          ref: _this2.nextInputRef,
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          value: _this2.state.value
        }), invalidMessage && React.createElement(Note, null, invalidMessage)) : null);
      })), field.note && React.createElement(Note, null, field.note));
    }
  }, {
    key: "filterTypes",
    // TODO: Move to field controller???
    get: function get() {
      return this.props.field.getFilterTypes();
    }
  }]);

  return TextView;
}(React.Component);

export default TextView;