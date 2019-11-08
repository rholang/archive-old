"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CLEAR_DATA = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _core = require("@emotion/core");

var _theme = require("@atlaskit/theme");

var _Select = require("../../components/Select");

var _Popup = require("../../components/Popup");

/** @jsx jsx */
// TODO: there's probably a better way to do this, but it's late, and i'm tired.
var CLEAR_DATA = {
  value: '__clear-selected',
  label: 'Clear selected items'
}; // ==============================
// Styled Components
// ==============================

exports.CLEAR_DATA = CLEAR_DATA;

var ClearOption = function ClearOption(_ref) {
  var children = _ref.children,
      innerProps = _ref.innerProps,
      isFocused = _ref.isFocused;
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: {
      boxSizing: 'border-box',
      color: _theme.colors.primary(),
      cursor: 'pointer',
      fontSize: 'inherit',
      padding: '8px 12px',
      userSelect: 'none',
      textDecoration: isFocused ? 'underline' : null,
      webkitTapHighlightColor: 'rgba(0,0,0,0)',
      width: '100%',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }, innerProps), children);
}; // NOTE: fork the option renderer based on a "clear marker", which needs to look
// and behave in a different way


var Option = function Option(props) {
  return props.data === CLEAR_DATA ? (0, _core.jsx)(ClearOption, props) : (0, _core.jsx)(_Select.selectComponents.Option, props);
};

var defaultComponents = (0, _objectSpread2.default)({}, _Select.selectComponents, {
  Option: Option
});

var SelectView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectView, _PureComponent);

  function SelectView(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectView).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      components: {}
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "filterOptionFn", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "options", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (value) {
      var onChange = _this.props.onChange;

      if (value && Array.isArray(value) && value.includes(CLEAR_DATA)) {
        onChange([]);
      } else {
        onChange(value);
      }
    });
    var field = props.field,
        refinementBarValue = props.refinementBarValue,
        storedValue = props.storedValue; // NOTE: support array or function that resolves to an array.

    var resolvedOptions = field.options;

    if (typeof field.options === 'function') {
      resolvedOptions = field.options(refinementBarValue);
    } // set options here ONCE when the dialog opens, so they don't jostle about
    // as users select/deselect values


    _this.options = getOptions(storedValue, resolvedOptions);
    _this.filterOptionFn = filterOptions(storedValue);
    return _this;
  }

  (0, _createClass2.default)(SelectView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          field = _this$props.field,
          onChange = _this$props.onChange,
          storedValue = _this$props.storedValue,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["field", "onChange", "storedValue"]);
      return (0, _core.jsx)(_Popup.DialogInner, {
        minWidth: 220
      }, (0, _core.jsx)(_Select.BaseSelect, (0, _extends2.default)({
        components: this.state.components,
        filterOption: this.filterOptionFn,
        onChange: this.handleChange,
        onMenuScrollToBottom: field.onMenuScrollToBottom,
        onMenuScrollToTop: field.onMenuScrollToTop,
        options: this.options,
        placeholder: field.placeholder
      }, props)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(p, s) {
      if (p.components !== s.components) {
        return {
          components: (0, _objectSpread2.default)({}, defaultComponents, p.components)
        };
      }

      return null;
    }
  }]);
  return SelectView;
}(_react.PureComponent); // ==============================
// Helper Utilities
// ==============================


exports.default = SelectView;

var lcase = function lcase(str) {
  return str.toLowerCase();
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var stringify = function stringify(option) {
  return "".concat(option.label, " ").concat(option.value);
}; // NOTE: determine which options should be visible to the user
// - reimplements react-select's input matching
// - checks (and hides) if the option already exists "above the fold"


var filterOptions = function filterOptions(storedValue) {
  return function (option, rawInput) {
    var data = option.data,
        value = option.value;
    var notCurrentlySelected = !storedValue || !storedValue.some(function (o) {
      return o.value === value;
    });

    if (rawInput) {
      var input = lcase(trim(rawInput));
      var candidate = lcase(trim(stringify(option)));
      var isMatch = candidate.includes(input);
      return isMatch && !data.aboveTheFold;
    }

    return notCurrentlySelected || data.aboveTheFold;
  };
}; // NOTE: prepends the options array with all the currently selected options
// - selected options are marked with an `aboveTheFold` data key
// - also adds a special "clear" option


var getOptions = function getOptions(current, resolved) {
  if (!current || !current.length) return resolved;
  return current.map(function (o) {
    return (0, _objectSpread2.default)({}, o, {
      aboveTheFold: true
    });
  }).concat([CLEAR_DATA]).concat(resolved);
};