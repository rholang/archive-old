import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Select, { CheckboxOption } from '@atlaskit/select';
import SearchIcon from '@atlaskit/icon/glyph/editor/search';
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import { colors, gridSize } from '@atlaskit/theme';
import Spinner from '@atlaskit/spinner'; // ==============================
// React-Select Replacements
// ==============================

var DropdownIndicator = function DropdownIndicator() {
  return jsx("div", {
    css: {
      marginRight: 2,
      textAlign: 'center',
      width: 32
    }
  }, jsx(SearchIcon, null));
};

var Menu = function Menu(_ref) {
  var innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      children = _ref.children;
  return jsx("div", _extends({
    ref: innerRef
  }, innerProps), children);
};

var Control = function Control(_ref2) {
  var children = _ref2.children,
      innerProps = _ref2.innerProps,
      innerRef = _ref2.innerRef;
  return jsx("div", _extends({
    ref: innerRef,
    css: {
      boxShadow: "0 2px 0 ".concat(colors.N30A),
      display: 'flex',
      padding: 4
    }
  }, innerProps), children);
}; // ==============================
// Prop-based
// ==============================


var Box = function Box(_ref3) {
  var height = _ref3.height,
      props = _objectWithoutProperties(_ref3, ["height"]);

  return jsx("div", _extends({
    css: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: height,
      justifyContent: 'center'
    }
  }, props));
};

Box.defaultProps = {
  height: 140
};

var Text = function Text(props) {
  return jsx("div", _extends({
    css: {
      fontWeight: 500,
      fontSize: '0.85rem',
      color: colors.N100,
      marginTop: gridSize() * 2
    }
  }, props));
};

var noOptionsMessage = function noOptionsMessage() {
  return jsx(Box, null, jsx(QuestionCircleIcon, {
    primaryColor: colors.N100,
    size: "xlarge"
  }), jsx(Text, null, "No matches found"));
};

var loadingMessage = function loadingMessage() {
  return jsx(Box, null, jsx(Box, {
    height: 75
  }, jsx(Spinner, {
    size: "large"
  })), jsx(Text, null, "Loading..."));
}; // ==============================
// Exports
// ==============================


var Option = function Option(props) {
  return jsx(CheckboxOption, _extends({
    css: {
      paddingLeft: "8px !important"
    }
  }, props));
};

export var selectComponents = {
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  IndicatorSeparator: null,
  LoadingIndicator: null,
  Menu: Menu,
  Option: Option
};
export var BaseSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseSelect, _React$Component);

  function BaseSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: _this.props.inputValue || ''
    });

    _defineProperty(_assertThisInitialized(_this), "selectRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (inputValue, meta) {
      if (_this.props.onInputChange) {
        _this.props.onInputChange(inputValue, meta);
      }

      _this.setState({
        inputValue: inputValue
      });
    });

    return _this;
  }

  _createClass(BaseSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.selectRef.current) {
        this.selectRef.current.select.openMenu('first');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(p, s) {
      var diffInput = s.inputValue !== this.state.inputValue;
      var diffLoading = p.isLoading !== this.props.isLoading;
      var diffValue = p.value !== this.props.value; // call the `scheduleUpdate` function provided by "react-popper" when
      // there's potential for the dialog to shift position

      if ((diffInput || diffLoading || diffValue) && typeof this.props.scheduleUpdate === 'function') {
        this.props.scheduleUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return jsx(Select, _extends({
        innerRef: this.selectRef,
        backspaceRemovesValue: false,
        closeMenuOnSelect: false,
        controlShouldRenderValue: false,
        hideSelectedOptions: false,
        isClearable: false,
        isMulti: true,
        menuIsOpen: true,
        menuShouldScrollIntoView: false,
        tabSelectsValue: false,
        noOptionsMessage: noOptionsMessage,
        loadingMessage: loadingMessage
      }, this.props, {
        onInputChange: this.handleInputChange
      }));
    }
  }]);

  return BaseSelect;
}(React.Component);