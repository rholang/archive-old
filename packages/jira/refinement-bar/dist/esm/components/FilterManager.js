import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import { colors } from '@atlaskit/theme';
import { BaseSelect, selectComponents } from './Select';
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
  return jsx("div", _extends({
    css: {
      boxSizing: 'border-box',
      color: colors.primary(),
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
  return props.data === CLEAR_DATA ? jsx(ClearOption, props) : jsx(selectComponents.Option, props);
};

export var FilterManager =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FilterManager, _PureComponent);

  function FilterManager(props) {
    var _this;

    _classCallCheck(this, FilterManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterManager).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "filterOptionFn", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "components", _objectSpread({}, selectComponents, {
      Option: Option
    }));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value, meta) {
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

  _createClass(FilterManager, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          storedValue = _this$props.storedValue,
          props = _objectWithoutProperties(_this$props, ["onChange", "storedValue"]);

      return jsx(BaseSelect, _extends({
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
}(PureComponent); // ==============================
// Helper Utilities
// ==============================

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
    return _objectSpread({}, o, {
      aboveTheFold: true
    });
  }).concat([CLEAR_DATA]).concat(resolved);
};