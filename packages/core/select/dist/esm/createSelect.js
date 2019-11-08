import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { mergeStyles } from 'react-select';
import makeAnimated from 'react-select/animated';
import memoizeOne from 'memoize-one';
import isEqual from 'react-fast-compare';
import { gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
import * as defaultComponents from './components'; // NOTE in the future, `Props` and `defaultProps` should come
// directly from react-select

function baseStyles(validationState, isCompact) {
  var BORDER_WIDTH = 2;
  var ICON_PADDING = 2;
  var paddingExcludingBorder = gridSize() - BORDER_WIDTH;
  return {
    control: function control(css, _ref) {
      var isFocused = _ref.isFocused,
          isDisabled = _ref.isDisabled;
      var borderColor = isFocused ? colors.B100 : colors.N20;
      var backgroundColor = isFocused ? colors.N0 : colors.N20;

      if (isDisabled) {
        backgroundColor = colors.N20;
      }

      if (validationState === 'error') borderColor = colors.R400;
      if (validationState === 'success') borderColor = colors.G400;
      var borderColorHover = isFocused ? colors.B100 : colors.N30;
      if (validationState === 'error') borderColorHover = colors.R400;
      if (validationState === 'success') borderColorHover = colors.G400;
      var transitionDuration = '200ms';
      return _objectSpread({}, css, {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderStyle: 'solid',
        borderRadius: '3px',
        borderWidth: '2px',
        boxShadow: 'none',
        minHeight: isCompact ? gridSize() * 4 : gridSize() * 5,
        padding: 0,
        transition: "background-color ".concat(transitionDuration, " ease-in-out,\n        border-color ").concat(transitionDuration, " ease-in-out"),
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '::-webkit-scrollbar': {
          height: gridSize(),
          width: gridSize()
        },
        '::-webkit-scrollbar-corner': {
          display: 'none'
        },
        ':hover': {
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)'
          },
          cursor: 'pointer',
          backgroundColor: isFocused ? colors.N0 : colors.N30,
          borderColor: borderColorHover
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(0,0,0,0.4)'
        }
      });
    },
    valueContainer: function valueContainer(css) {
      return _objectSpread({}, css, {
        paddingLeft: paddingExcludingBorder,
        paddingRight: paddingExcludingBorder,
        paddingBottom: isCompact ? 0 : 2,
        paddingTop: isCompact ? 0 : 2
      });
    },
    clearIndicator: function clearIndicator(css) {
      return _objectSpread({}, css, {
        color: colors.N70,
        paddingLeft: ICON_PADDING,
        paddingRight: ICON_PADDING,
        paddingBottom: isCompact ? 0 : 6,
        paddingTop: isCompact ? 0 : 6,
        ':hover': {
          color: colors.N500
        }
      });
    },
    loadingIndicator: function loadingIndicator(css) {
      return _objectSpread({}, css, {
        paddingBottom: isCompact ? 0 : 6,
        paddingTop: isCompact ? 0 : 6
      });
    },
    dropdownIndicator: function dropdownIndicator(css, _ref2) {
      var isDisabled = _ref2.isDisabled;
      var color = colors.N500;

      if (isDisabled) {
        color = colors.N70;
      }

      return _objectSpread({}, css, {
        color: color,
        paddingLeft: ICON_PADDING,
        paddingRight: ICON_PADDING,
        paddingBottom: isCompact ? 0 : 6,
        paddingTop: isCompact ? 0 : 6,
        ':hover': {
          color: colors.N200
        }
      });
    },
    indicatorsContainer: function indicatorsContainer(css) {
      return _objectSpread({}, css, {
        paddingRight: paddingExcludingBorder - ICON_PADDING
      });
    },
    option: function option(css, _ref3) {
      var isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      var color = isSelected ? colors.N0 : null;
      var backgroundColor;
      if (isSelected) backgroundColor = colors.N500;else if (isFocused) backgroundColor = colors.N30;
      return _objectSpread({}, css, {
        paddingTop: '6px',
        paddingBottom: '6px',
        backgroundColor: backgroundColor,
        color: color
      });
    },
    placeholder: function placeholder(css) {
      return _objectSpread({}, css, {
        color: colors.N100
      });
    },
    singleValue: function singleValue(css, _ref4) {
      var isDisabled = _ref4.isDisabled;
      return _objectSpread({}, css, {
        color: isDisabled ? colors.N70 : colors.N800,
        lineHeight: "".concat(gridSize() * 2, "px") // 16px

      });
    },
    menuList: function menuList(css) {
      return _objectSpread({}, css, {
        paddingTop: gridSize(),
        paddingBottom: gridSize()
      });
    },
    multiValue: function multiValue(css) {
      return _objectSpread({}, css, {
        borderRadius: '2px',
        backgroundColor: colors.N40,
        color: colors.N500,
        maxWidth: '100%'
      });
    },
    multiValueLabel: function multiValueLabel(css) {
      return _objectSpread({}, css, {
        padding: '2px',
        paddingRight: '2px'
      });
    },
    multiValueRemove: function multiValueRemove(css, _ref5) {
      var isFocused = _ref5.isFocused;
      return _objectSpread({}, css, {
        backgroundColor: isFocused && colors.R75,
        color: isFocused && colors.R400,
        paddingLeft: '2px',
        paddingRight: '2px',
        borderRadius: '0px 2px 2px 0px',
        ':hover': {
          color: colors.R400,
          backgroundColor: colors.R75
        }
      });
    }
  };
}

export default function createSelect(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AtlaskitSelect, _Component);

    function AtlaskitSelect(props) {
      var _this;

      _classCallCheck(this, AtlaskitSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AtlaskitSelect).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "components", void 0);

      _defineProperty(_assertThisInitialized(_this), "select", void 0);

      _defineProperty(_assertThisInitialized(_this), "cacheComponents", function (components, enableAnimation) {
        if (enableAnimation) {
          _this.components = makeAnimated(_objectSpread({}, defaultComponents, components));
        } else {
          _this.components = _objectSpread({}, defaultComponents, components);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onSelectRef", function (ref) {
        _this.select = ref;
        var innerRef = _this.props.innerRef;

        if (_typeof(innerRef) === 'object') {
          innerRef.current = ref;
        }

        if (typeof innerRef === 'function') {
          innerRef(ref);
        }
      });

      _this.cacheComponents = memoizeOne(_this.cacheComponents, isEqual).bind(_assertThisInitialized(_this));

      _this.cacheComponents(props.components, props.enableAnimation);

      return _this;
    }

    _createClass(AtlaskitSelect, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.cacheComponents(nextProps.components, nextProps.enableAnimation);
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            styles = _this$props.styles,
            validationState = _this$props.validationState,
            spacing = _this$props.spacing,
            isMulti = _this$props.isMulti,
            props = _objectWithoutProperties(_this$props, ["styles", "validationState", "spacing", "isMulti"]); // eslint-disable-line


        var isCompact = spacing === 'compact'; // props must be spread first to stop `components` being overridden

        return ___EmotionJSX(WrappedComponent, _extends({
          ref: this.onSelectRef,
          isMulti: isMulti
        }, props, {
          components: this.components,
          styles: mergeStyles(baseStyles(validationState, isCompact), styles)
        }));
      }
    }]);

    return AtlaskitSelect;
  }(Component), _defineProperty(_class, "defaultProps", {
    enableAnimation: true,
    validationState: 'default',
    spacing: 'default',
    onClickPreventDefault: true,
    tabSelectsValue: false
  }), _temp;
}