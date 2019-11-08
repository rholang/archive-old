import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import { colors } from '@atlaskit/theme';
import { BaseSelect, selectComponents } from '../../components/Select';
import { DialogInner } from '../../components/Popup'; // TODO: there's probably a better way to do this, but it's late, and i'm tired.

export var CLEAR_DATA = {
  value: '__clear-selected',
  label: 'Clear selected items'
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

var defaultComponents = _objectSpread({}, selectComponents, {
  Option: Option
});

var SelectView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectView, _PureComponent);

  function SelectView(props) {
    var _this;

    _classCallCheck(this, SelectView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      components: {}
    });

    _defineProperty(_assertThisInitialized(_this), "filterOptionFn", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
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

  _createClass(SelectView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          field = _this$props.field,
          onChange = _this$props.onChange,
          storedValue = _this$props.storedValue,
          props = _objectWithoutProperties(_this$props, ["field", "onChange", "storedValue"]);

      return jsx(DialogInner, {
        minWidth: 220
      }, jsx(BaseSelect, _extends({
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
          components: _objectSpread({}, defaultComponents, p.components)
        };
      }

      return null;
    }
  }]);

  return SelectView;
}(PureComponent); // ==============================
// Helper Utilities
// ==============================


export { SelectView as default };

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