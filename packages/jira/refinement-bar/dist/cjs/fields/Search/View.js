"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _applyRef = require("apply-ref");

var _core = require("@emotion/core");

var _theme = require("@atlaskit/theme");

var _search = _interopRequireDefault(require("@atlaskit/icon/glyph/search"));

var _common = require("../../components/common");

/** @jsx jsx */
// $FlowFixMe "there is no `forwardRef` export in `react`"
var SearchView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SearchView, _PureComponent);

  function SearchView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SearchView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SearchView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isFocused: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRef", (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (event) {
      // $FlowFixMe "property `value` is missing in `EventTarget`"
      _this.props.onChange(event.target.value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClear", function () {
      _this.props.onClear();

      var el = _this.inputRef.current;

      if (el && typeof el.focus === 'function') {
        el.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (event) {
      event.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleFocus", function (isFocused) {
      return function () {
        _this.setState({
          isFocused: isFocused
        });
      };
    });
    return _this;
  }

  (0, _createClass2.default)(SearchView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          field = _this$props.field,
          innerRef = _this$props.innerRef,
          value = _this$props.value;
      var isFocused = this.state.isFocused;
      var width = isFocused || value && value.length ? 160 : 80;
      var id = "refinement-bar-".concat(field.key);
      return (0, _core.jsx)(Form, {
        onSubmit: this.handleSubmit
      }, (0, _core.jsx)(_common.HiddenLabel, {
        htmlFor: id
      }, field.label), (0, _core.jsx)(Input, {
        id: id,
        ref: (0, _applyRef.applyRefs)(innerRef, this.inputRef),
        onChange: this.handleChange,
        onBlur: this.toggleFocus(false),
        onFocus: this.toggleFocus(true),
        value: value,
        style: {
          width: width
        }
      }), value ? (0, _core.jsx)(_common.ClearButton, {
        onClick: this.handleClear,
        label: "Clear search"
      }) : (0, _core.jsx)(SearchIndicator, null), (0, _core.jsx)(_common.HiddenButton, {
        tabIndex: "-1",
        type: "submit"
      }, "Submit"));
    }
  }]);
  return SearchView;
}(_react.PureComponent); // ==============================
// Styled Components
// ==============================


exports.default = SearchView;

var Form = function Form(props) {
  return (0, _core.jsx)("form", (0, _extends2.default)({
    css: {
      position: 'relative'
    }
  }, props));
};

var SearchIndicator = function SearchIndicator(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: {
      alignItems: 'center',
      background: 0,
      border: 0,
      borderRadius: (0, _theme.borderRadius)(),
      color: _theme.colors.N400,
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      outline: 0,
      padding: 0,
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'background-color 150ms',
      width: 40
    }
  }, props), (0, _core.jsx)(_search.default, {
    label: "Submit"
  }));
}; // eslint-disable-next-line react/no-multi-comp


var Input = (0, _react.forwardRef)(function (props, ref) {
  return (0, _core.jsx)("input", (0, _extends2.default)({
    ref: ref,
    css: {
      background: 0,
      backgroundColor: _theme.colors.N20A,
      border: 0,
      borderRadius: (0, _theme.borderRadius)(),
      color: _theme.colors.N400,
      fontSize: 'inherit',
      lineHeight: 1.3,
      padding: "".concat((0, _theme.gridSize)(), "px ").concat((0, _theme.gridSize)() * 1.5, "px"),
      paddingRight: 40,
      outline: 0,
      transition: 'background-color 150ms, width 200ms cubic-bezier(0.2, 0.0, 0.0, 1)',
      ':hover': {
        backgroundColor: _theme.colors.N30A
      },
      ':focus, :active': {
        backgroundColor: _theme.colors.N40A
      }
    }
  }, props));
});