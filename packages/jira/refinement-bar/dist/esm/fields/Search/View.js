import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/** @jsx jsx */
// $FlowFixMe "there is no `forwardRef` export in `react`"
import { createRef, forwardRef, PureComponent } from 'react';
import { applyRefs } from 'apply-ref';
import { jsx } from '@emotion/core';
import { borderRadius, colors, gridSize } from '@atlaskit/theme';
import SearchIcon from '@atlaskit/icon/glyph/search';
import { ClearButton, HiddenButton, HiddenLabel } from '../../components/common';

var SearchView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SearchView, _PureComponent);

  function SearchView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      // $FlowFixMe "property `value` is missing in `EventTarget`"
      _this.props.onChange(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      _this.props.onClear();

      var el = _this.inputRef.current;

      if (el && typeof el.focus === 'function') {
        el.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFocus", function (isFocused) {
      return function () {
        _this.setState({
          isFocused: isFocused
        });
      };
    });

    return _this;
  }

  _createClass(SearchView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          field = _this$props.field,
          innerRef = _this$props.innerRef,
          value = _this$props.value;
      var isFocused = this.state.isFocused;
      var width = isFocused || value && value.length ? 160 : 80;
      var id = "refinement-bar-".concat(field.key);
      return jsx(Form, {
        onSubmit: this.handleSubmit
      }, jsx(HiddenLabel, {
        htmlFor: id
      }, field.label), jsx(Input, {
        id: id,
        ref: applyRefs(innerRef, this.inputRef),
        onChange: this.handleChange,
        onBlur: this.toggleFocus(false),
        onFocus: this.toggleFocus(true),
        value: value,
        style: {
          width: width
        }
      }), value ? jsx(ClearButton, {
        onClick: this.handleClear,
        label: "Clear search"
      }) : jsx(SearchIndicator, null), jsx(HiddenButton, {
        tabIndex: "-1",
        type: "submit"
      }, "Submit"));
    }
  }]);

  return SearchView;
}(PureComponent); // ==============================
// Styled Components
// ==============================


export { SearchView as default };

var Form = function Form(props) {
  return jsx("form", _extends({
    css: {
      position: 'relative'
    }
  }, props));
};

var SearchIndicator = function SearchIndicator(props) {
  return jsx("div", _extends({
    css: {
      alignItems: 'center',
      background: 0,
      border: 0,
      borderRadius: borderRadius(),
      color: colors.N400,
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
  }, props), jsx(SearchIcon, {
    label: "Submit"
  }));
}; // eslint-disable-next-line react/no-multi-comp


var Input = forwardRef(function (props, ref) {
  return jsx("input", _extends({
    ref: ref,
    css: {
      background: 0,
      backgroundColor: colors.N20A,
      border: 0,
      borderRadius: borderRadius(),
      color: colors.N400,
      fontSize: 'inherit',
      lineHeight: 1.3,
      padding: "".concat(gridSize(), "px ").concat(gridSize() * 1.5, "px"),
      paddingRight: 40,
      outline: 0,
      transition: 'background-color 150ms, width 200ms cubic-bezier(0.2, 0.0, 0.0, 1)',
      ':hover': {
        backgroundColor: colors.N30A
      },
      ':focus, :active': {
        backgroundColor: colors.N40A
      }
    }
  }, props));
});