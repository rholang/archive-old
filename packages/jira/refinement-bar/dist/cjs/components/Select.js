"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSelect = exports.selectComponents = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _select = _interopRequireWildcard(require("@atlaskit/select"));

var _search = _interopRequireDefault(require("@atlaskit/icon/glyph/editor/search"));

var _questionCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/question-circle"));

var _theme = require("@atlaskit/theme");

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

/** @jsx jsx */
// ==============================
// React-Select Replacements
// ==============================
var DropdownIndicator = function DropdownIndicator() {
  return (0, _core.jsx)("div", {
    css: {
      marginRight: 2,
      textAlign: 'center',
      width: 32
    }
  }, (0, _core.jsx)(_search.default, null));
};

var Menu = function Menu(_ref) {
  var innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      children = _ref.children;
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: innerRef
  }, innerProps), children);
};

var Control = function Control(_ref2) {
  var children = _ref2.children,
      innerProps = _ref2.innerProps,
      innerRef = _ref2.innerRef;
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: innerRef,
    css: {
      boxShadow: "0 2px 0 ".concat(_theme.colors.N30A),
      display: 'flex',
      padding: 4
    }
  }, innerProps), children);
}; // ==============================
// Prop-based
// ==============================


var Box = function Box(_ref3) {
  var height = _ref3.height,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["height"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
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
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: {
      fontWeight: 500,
      fontSize: '0.85rem',
      color: _theme.colors.N100,
      marginTop: (0, _theme.gridSize)() * 2
    }
  }, props));
};

var noOptionsMessage = function noOptionsMessage() {
  return (0, _core.jsx)(Box, null, (0, _core.jsx)(_questionCircle.default, {
    primaryColor: _theme.colors.N100,
    size: "xlarge"
  }), (0, _core.jsx)(Text, null, "No matches found"));
};

var loadingMessage = function loadingMessage() {
  return (0, _core.jsx)(Box, null, (0, _core.jsx)(Box, {
    height: 75
  }, (0, _core.jsx)(_spinner.default, {
    size: "large"
  })), (0, _core.jsx)(Text, null, "Loading..."));
}; // ==============================
// Exports
// ==============================


var Option = function Option(props) {
  return (0, _core.jsx)(_select.CheckboxOption, (0, _extends2.default)({
    css: {
      paddingLeft: "8px !important"
    }
  }, props));
};

var selectComponents = {
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  IndicatorSeparator: null,
  LoadingIndicator: null,
  Menu: Menu,
  Option: Option
};
exports.selectComponents = selectComponents;

var BaseSelect =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BaseSelect, _React$Component);

  function BaseSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BaseSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BaseSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      inputValue: _this.props.inputValue || ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInputChange", function (inputValue, meta) {
      if (_this.props.onInputChange) {
        _this.props.onInputChange(inputValue, meta);
      }

      _this.setState({
        inputValue: inputValue
      });
    });
    return _this;
  }

  (0, _createClass2.default)(BaseSelect, [{
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
      return (0, _core.jsx)(_select.default, (0, _extends2.default)({
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
}(_react.default.Component);

exports.BaseSelect = BaseSelect;