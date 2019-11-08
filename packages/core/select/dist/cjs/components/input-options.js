"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioOption = exports.CheckboxOption = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = require("react");

var _radio = _interopRequireDefault(require("@atlaskit/icon/glyph/radio"));

var _checkbox = _interopRequireDefault(require("@atlaskit/icon/glyph/checkbox"));

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

/** @jsx jsx */
var getPrimitiveStyles = function getPrimitiveStyles(props) {
  var cx = props.cx,
      className = props.className,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected;
  var styles = {
    alignItems: 'center',
    backgroundColor: isFocused ? colors.N30 : 'transparent',
    color: 'inherit',
    display: 'flex ',
    paddingBottom: 4,
    paddingLeft: "".concat((0, _constants.gridSize)() * 2, "px"),
    paddingTop: 4,
    ':active': {
      backgroundColor: colors.B50
    }
  };
  var augmentedStyles = (0, _objectSpread2.default)({}, getStyles('option', props), styles);
  var bemClasses = {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }; // maintain react-select API

  return [augmentedStyles, cx(null, bemClasses, className)];
}; // maintains function shape


var backgroundColor = (0, _components.themed)({
  light: colors.N40A,
  dark: colors.DN10
});
var transparent = (0, _components.themed)({
  light: 'transparent',
  dark: 'transparent'
}); // state of the parent option

// the primary color represents the outer or background element
var getPrimaryColor = function getPrimaryColor(_ref) {
  var isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["isActive", "isDisabled", "isFocused", "isSelected"]);
  var color = backgroundColor;

  if (isDisabled && isSelected) {
    color = (0, _components.themed)({
      light: colors.B75,
      dark: colors.DN200
    });
  } else if (isDisabled) {
    color = (0, _components.themed)({
      light: colors.N20A,
      dark: colors.DN10
    });
  } else if (isActive) {
    color = (0, _components.themed)({
      light: colors.B75,
      dark: colors.B200
    });
  } else if (isFocused && isSelected) {
    color = (0, _components.themed)({
      light: colors.B300,
      dark: colors.B75
    });
  } else if (isFocused) {
    color = (0, _components.themed)({
      light: colors.N50A,
      dark: colors.DN30
    });
  } else if (isSelected) {
    color = colors.blue;
  } // $FlowFixMe - theme is not found in props


  return color(rest);
}; // the secondary color represents the radio dot or checkmark


var getSecondaryColor = function getSecondaryColor(_ref2) {
  var isActive = _ref2.isActive,
      isDisabled = _ref2.isDisabled,
      isSelected = _ref2.isSelected,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["isActive", "isDisabled", "isSelected"]);
  var color = (0, _components.themed)({
    light: colors.N0,
    dark: colors.DN10
  });

  if (isDisabled && isSelected) {
    color = (0, _components.themed)({
      light: colors.N70,
      dark: colors.DN10
    });
  } else if (isActive && isSelected && !isDisabled) {
    color = (0, _components.themed)({
      light: colors.B400,
      dark: colors.DN10
    });
  } else if (!isSelected) {
    color = transparent;
  } // $FlowFixMe - theme is not found in props


  return color(rest);
};

var ControlOption =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ControlOption, _Component);

  function ControlOption() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ControlOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ControlOption)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isActive: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseDown", function () {
      return _this.setState({
        isActive: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseUp", function () {
      return _this.setState({
        isActive: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseLeave", function () {
      return _this.setState({
        isActive: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ControlOption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          getStyles = _this$props.getStyles,
          Icon = _this$props.Icon,
          children = _this$props.children,
          innerProps = _this$props.innerProps,
          innerRef = _this$props.innerRef,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["getStyles", "Icon", "children", "innerProps", "innerRef"]); // prop assignment

      var props = (0, _objectSpread2.default)({}, innerProps, {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave
      });

      var _getPrimitiveStyles = getPrimitiveStyles((0, _objectSpread2.default)({
        getStyles: getStyles
      }, rest)),
          _getPrimitiveStyles2 = (0, _slicedToArray2.default)(_getPrimitiveStyles, 2),
          styles = _getPrimitiveStyles2[0],
          classes = _getPrimitiveStyles2[1];

      return (0, _core.jsx)("div", (0, _extends2.default)({
        css: styles,
        className: classes,
        ref: innerRef
      }, props), (0, _core.jsx)("div", {
        css: iconWrapperCSS()
      }, (0, _core.jsx)(Icon, {
        primaryColor: getPrimaryColor((0, _objectSpread2.default)({}, this.props, this.state)),
        secondaryColor: getSecondaryColor((0, _objectSpread2.default)({}, this.props, this.state))
      })), (0, _core.jsx)("div", {
        css: truncateCSS()
      }, children));
    }
  }]);
  return ControlOption;
}(_react.Component);

var iconWrapperCSS = function iconWrapperCSS() {
  return {
    alignItems: 'center',
    display: 'flex ',
    flexShrink: 0,
    paddingRight: '4px'
  };
};

var truncateCSS = function truncateCSS() {
  return {
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
    flexGrow: 1,
    whiteSpace: 'nowrap'
  };
};

var CheckboxOption = function CheckboxOption(props) {
  return (0, _core.jsx)(ControlOption, (0, _extends2.default)({
    Icon: _checkbox.default
  }, props));
};

exports.CheckboxOption = CheckboxOption;

var RadioOption = function RadioOption(props) {
  return (0, _core.jsx)(ControlOption, (0, _extends2.default)({
    Icon: _radio.default
  }, props));
};

exports.RadioOption = RadioOption;