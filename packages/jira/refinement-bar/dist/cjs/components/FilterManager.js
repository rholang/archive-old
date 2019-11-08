"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterManager = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _core = require("@emotion/core");

var _theme = require("@atlaskit/theme");

var _Select = require("./Select");

/** @jsx jsx */
var CLEAR_DATA = {
  value: '__remove-all',
  label: 'Remove all filters'
}; // ==============================
// Styled Components
// ==============================

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

var FilterManager =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FilterManager, _PureComponent);

  function FilterManager(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FilterManager);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FilterManager).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "filterOptionFn", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "options", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "components", (0, _objectSpread2.default)({}, _Select.selectComponents, {
      Option: Option
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (value, meta) {
      var onChange = _this.props.onChange;

      if (value && Array.isArray(value) && value.includes(CLEAR_DATA)) {
        onChange(_this.props.value, {
          action: 'clear-options'
        });
      } else {
        onChange(value, meta);
      }
    });
    var options = props.options,
        _value = props.value; // set options here ONCE when the dialog opens, so they don't jostle about
    // as users select/deselect values

    _this.options = getOptions(_value, options);
    _this.filterOptionFn = filterOptions(_value);
    return _this;
  }

  (0, _createClass2.default)(FilterManager, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          storedValue = _this$props.storedValue,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["onChange", "storedValue"]);
      return (0, _core.jsx)(_Select.BaseSelect, (0, _extends2.default)({
        components: this.components,
        filterOption: this.filterOptionFn,
        onChange: this.handleChange
      }, props, {
        options: this.options,
        closeMenuOnSelect: true
      }));
    }
  }]);
  return FilterManager;
}(_react.PureComponent); // ==============================
// Helper Utilities
// ==============================


exports.FilterManager = FilterManager;

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