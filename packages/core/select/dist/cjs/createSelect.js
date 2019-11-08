"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSelect;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = require("react-select");

var _animated = _interopRequireDefault(require("react-select/animated"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _constants = require("@atlaskit/theme/constants");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var defaultComponents = _interopRequireWildcard(require("./components"));

function baseStyles(validationState, isCompact) {
  var BORDER_WIDTH = 2;
  var ICON_PADDING = 2;
  var paddingExcludingBorder = (0, _constants.gridSize)() - BORDER_WIDTH;
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
      return (0, _objectSpread2.default)({}, css, {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderStyle: 'solid',
        borderRadius: '3px',
        borderWidth: '2px',
        boxShadow: 'none',
        minHeight: isCompact ? (0, _constants.gridSize)() * 4 : (0, _constants.gridSize)() * 5,
        padding: 0,
        transition: "background-color ".concat(transitionDuration, " ease-in-out,\n        border-color ").concat(transitionDuration, " ease-in-out"),
        msOverflowStyle: '-ms-autohiding-scrollbar',
        '::-webkit-scrollbar': {
          height: (0, _constants.gridSize)(),
          width: (0, _constants.gridSize)()
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
      return (0, _objectSpread2.default)({}, css, {
        paddingLeft: paddingExcludingBorder,
        paddingRight: paddingExcludingBorder,
        paddingBottom: isCompact ? 0 : 2,
        paddingTop: isCompact ? 0 : 2
      });
    },
    clearIndicator: function clearIndicator(css) {
      return (0, _objectSpread2.default)({}, css, {
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
      return (0, _objectSpread2.default)({}, css, {
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

      return (0, _objectSpread2.default)({}, css, {
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
      return (0, _objectSpread2.default)({}, css, {
        paddingRight: paddingExcludingBorder - ICON_PADDING
      });
    },
    option: function option(css, _ref3) {
      var isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      var color = isSelected ? colors.N0 : null;
      var backgroundColor;
      if (isSelected) backgroundColor = colors.N500;else if (isFocused) backgroundColor = colors.N30;
      return (0, _objectSpread2.default)({}, css, {
        paddingTop: '6px',
        paddingBottom: '6px',
        backgroundColor: backgroundColor,
        color: color
      });
    },
    placeholder: function placeholder(css) {
      return (0, _objectSpread2.default)({}, css, {
        color: colors.N100
      });
    },
    singleValue: function singleValue(css, _ref4) {
      var isDisabled = _ref4.isDisabled;
      return (0, _objectSpread2.default)({}, css, {
        color: isDisabled ? colors.N70 : colors.N800,
        lineHeight: "".concat((0, _constants.gridSize)() * 2, "px") // 16px

      });
    },
    menuList: function menuList(css) {
      return (0, _objectSpread2.default)({}, css, {
        paddingTop: (0, _constants.gridSize)(),
        paddingBottom: (0, _constants.gridSize)()
      });
    },
    multiValue: function multiValue(css) {
      return (0, _objectSpread2.default)({}, css, {
        borderRadius: '2px',
        backgroundColor: colors.N40,
        color: colors.N500,
        maxWidth: '100%'
      });
    },
    multiValueLabel: function multiValueLabel(css) {
      return (0, _objectSpread2.default)({}, css, {
        padding: '2px',
        paddingRight: '2px'
      });
    },
    multiValueRemove: function multiValueRemove(css, _ref5) {
      var isFocused = _ref5.isFocused;
      return (0, _objectSpread2.default)({}, css, {
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

function createSelect(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(AtlaskitSelect, _Component);

    function AtlaskitSelect(props) {
      var _this;

      (0, _classCallCheck2.default)(this, AtlaskitSelect);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AtlaskitSelect).call(this, props));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "components", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "select", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cacheComponents", function (components, enableAnimation) {
        if (enableAnimation) {
          _this.components = (0, _animated.default)((0, _objectSpread2.default)({}, defaultComponents, components));
        } else {
          _this.components = (0, _objectSpread2.default)({}, defaultComponents, components);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectRef", function (ref) {
        _this.select = ref;
        var innerRef = _this.props.innerRef;

        if ((0, _typeof2.default)(innerRef) === 'object') {
          innerRef.current = ref;
        }

        if (typeof innerRef === 'function') {
          innerRef(ref);
        }
      });
      _this.cacheComponents = (0, _memoizeOne.default)(_this.cacheComponents, _reactFastCompare.default).bind((0, _assertThisInitialized2.default)(_this));

      _this.cacheComponents(props.components, props.enableAnimation);

      return _this;
    }

    (0, _createClass2.default)(AtlaskitSelect, [{
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
            props = (0, _objectWithoutProperties2.default)(_this$props, ["styles", "validationState", "spacing", "isMulti"]); // eslint-disable-line

        var isCompact = spacing === 'compact'; // props must be spread first to stop `components` being overridden

        return (0, _core.jsx)(WrappedComponent, (0, _extends2.default)({
          ref: this.onSelectRef,
          isMulti: isMulti
        }, props, {
          components: this.components,
          styles: (0, _reactSelect.mergeStyles)(baseStyles(validationState, isCompact), styles)
        }));
      }
    }]);
    return AtlaskitSelect;
  }(_react.Component), (0, _defineProperty2.default)(_class, "defaultProps", {
    enableAnimation: true,
    validationState: 'default',
    spacing: 'default',
    onClickPreventDefault: true,
    tabSelectsValue: false
  }), _temp;
}