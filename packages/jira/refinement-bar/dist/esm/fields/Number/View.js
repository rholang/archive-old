import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React, { createRef, Children, Fragment, PureComponent } from 'react';
import Input from '@atlaskit/textfield';
import { Note } from '../../components/common';
import { Group, Radio } from '../../components/InputGroup';
import { DialogInner } from '../../components/Popup';
import { isEmptyString } from '../../utils';

var getInitialState = function getInitialState(storedValue) {
  var type = storedValue.type,
      value = storedValue.value;
  var base = {
    gt: '',
    lt: '',
    type: type,
    single: ''
  };
  return typeof value === 'number' ? _objectSpread({}, base, {
    single: value
  }) : _objectSpread({}, base, value);
};

var NumberView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NumberView, _PureComponent);

  function NumberView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumberView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", getInitialState(_this.props.storedValue));

    _defineProperty(_assertThisInitialized(_this), "nextInputRef", createRef());

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
      var isNotSet = type === 'is_not_set';
      var isKeyboardEvent = event.nativeEvent.screenX === 0 && event.nativeEvent.screenY === 0;

      _this.setState({
        type: type
      }, function () {
        if (!isKeyboardEvent) {
          _this.focusNextInput();
        } // avoid creating an invalid state where '' === NaN


        if (isEmptyString(_this.state.single) && !isNotSet) {
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

    _defineProperty(_assertThisInitialized(_this), "onChangeInput", function (event) {
      var name = event.target.name;
      var val = Number(event.target.value);
      var onChange = _this.props.onChange;
      var type = _this.state.type;

      _this.setState(_defineProperty({}, name, val), function () {
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

    _defineProperty(_assertThisInitialized(_this), "focusNextInput", function () {
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

  _createClass(NumberView, [{
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
        }, m.label), isCurrent && m.hasInput ? React.createElement(React.Fragment, null, m.type === 'between' ? React.createElement(InputRow, null, React.createElement(Input, {
          ref: _this2.nextInputRef,
          name: "gt",
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.gt
        }), React.createElement(Input, {
          name: "lt",
          isInvalid: isInvalid,
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.lt
        })) : React.createElement(Input, {
          ref: _this2.nextInputRef,
          isInvalid: isInvalid,
          name: "single",
          onChange: _this2.onChangeInput,
          type: "number",
          value: _this2.state.single
        }), invalidMessage && React.createElement(Note, null, invalidMessage)) : null);
      })), field.note && React.createElement(Note, null, field.note));
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
}(PureComponent); // ==============================
// Styled Components
// ==============================


var InputRow = function InputRow(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("div", _extends({}, props, {
    style: {
      display: 'flex',
      marginLeft: -4,
      marginRight: -4
    }
  }), Children.map(children, function (c) {
    return React.createElement("div", {
      style: {
        marginLeft: 4,
        marginRight: 4
      }
    }, c);
  }));
};

export default NumberView;