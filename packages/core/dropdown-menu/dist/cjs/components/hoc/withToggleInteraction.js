"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _colors = require("@atlaskit/theme/colors");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getDisplayName = _interopRequireDefault(require("../../util/getDisplayName"));

var _safeContextCall = _interopRequireDefault(require("../../util/safeContextCall"));

var _contextNamespace = require("../../util/contextNamespace");

var _keys = require("../../util/keys");

// HOC that typically wraps @atlaskit/item
var withToggleInteraction = function withToggleInteraction(WrappedComponent, SelectionIcon, getAriaRole) {
  var WithToggleInteraction =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithToggleInteraction, _Component);

    function WithToggleInteraction() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithToggleInteraction);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithToggleInteraction)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "getIconColors", function () {
        var isSelected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (isSelected) {
          return {
            primary: _colors.B400,
            secondary: _colors.N40
          };
        }

        return {
          primary: _colors.N40,
          secondary: _colors.N40
        };
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "warnIfUseControlledAndUncontrolledState", function () {
        if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
          if (_this.props.defaultSelected && _this.props.isSelected) {
            // eslint-disable-next-line no-console
            console.warn('DropdownItem defaultSelected and isSelected props should not be used at the same time.');
          }
        }
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "callContextFn", (0, _safeContextCall.default)((0, _assertThisInitialized2.default)(_this), _contextNamespace.selectionManagerContext));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboard", function (event) {
        var key = event.key;

        if (key === _keys.KEY_ENTER || key === _keys.KEY_SPACE) {
          // We prevent default here to avoid page scroll
          event.preventDefault();

          _this.handleItemActivated(event);
        }
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemActivated", function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        _this.callContextFn('itemClicked', _this.props.id);
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isSelectedInDropdown", function () {
        return _this.callContextFn('isItemSelected', _this.props.id);
      });
      return _this;
    }

    (0, _createClass2.default)(WithToggleInteraction, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            defaultSelected = _this$props.defaultSelected,
            isSelected = _this$props.isSelected,
            id = _this$props.id;
        this.warnIfUseControlledAndUncontrolledState();
        this.callContextFn('setItemSelected', id, isSelected, defaultSelected);
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var id = nextProps.id,
            defaultSelected = nextProps.defaultSelected,
            isSelected = nextProps.isSelected;

        if (this.props.isSelected !== isSelected) {
          this.callContextFn('setItemSelected', id, isSelected, defaultSelected);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props2, ["children"]);
        var isSelected = this.isSelectedInDropdown();
        var iconColors = this.getIconColors(isSelected);
        var ariaRole = getAriaRole();
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, otherProps, {
          role: ariaRole,
          "aria-checked": isSelected,
          isSelected: isSelected,
          onClick: this.handleItemActivated,
          onKeyDown: this.handleKeyboard,
          elemBefore: _react.default.createElement(SelectionIcon, {
            primaryColor: iconColors.primary,
            secondaryColor: iconColors.secondary,
            size: "medium",
            label: ""
          })
        }), children);
      }
    }]);
    return WithToggleInteraction;
  }(_react.Component);

  (0, _defineProperty3.default)(WithToggleInteraction, "defaultProps", {
    onClick: function onClick() {}
  });
  (0, _defineProperty3.default)(WithToggleInteraction, "contextTypes", (0, _defineProperty3.default)({}, _contextNamespace.selectionManagerContext, _propTypes.default.object.isRequired));
  WithToggleInteraction.displayName = "WithToggleInteraction(".concat((0, _getDisplayName.default)(WrappedComponent), ")");
  return WithToggleInteraction;
};

var _default = withToggleInteraction;
exports.default = _default;