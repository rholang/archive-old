"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DrawerImpl = exports.analyticsNamespace = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _blanket = _interopRequireDefault(require("@atlaskit/blanket"));

var _analytics = require("@atlaskit/analytics");

var _reactScrolllock = _interopRequireDefault(require("react-scrolllock"));

var _DrawerTrigger = _interopRequireDefault(require("./DrawerTrigger"));

var _DrawerBackIcon = _interopRequireDefault(require("./DrawerBackIcon"));

var _ContainerHeader = _interopRequireDefault(require("./ContainerHeader"));

var _DrawerSide = _interopRequireDefault(require("../styled/DrawerSide"));

var _DrawerInner = _interopRequireDefault(require("../styled/DrawerInner"));

var _DrawerPrimaryIcon = _interopRequireDefault(require("../styled/DrawerPrimaryIcon"));

var _DrawerMain = _interopRequireDefault(require("../styled/DrawerMain"));

var _DrawerContent = _interopRequireDefault(require("../styled/DrawerContent"));

var _DrawerBackIconWrapper = _interopRequireDefault(require("../styled/DrawerBackIconWrapper"));

var _util = require("../../theme/util");

var _presets = require("../../theme/presets");

var escKeyCode = 27;
var analyticsNamespace = 'atlaskit.navigation.drawer';
exports.analyticsNamespace = analyticsNamespace;

var DrawerImpl =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DrawerImpl, _PureComponent);

  function DrawerImpl() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DrawerImpl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DrawerImpl)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isAnimating: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "createBackButtonHandler", function (method) {
      return function (e) {
        if (_this.props.isOpen) {
          _this.props.onBackButton(e);

          _this.props.fireAnalyticsEvent('close', {
            method: method
          });
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBackButtonByBackButton", _this.createBackButtonHandler('back-btn'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBackButtonByBlanket", _this.createBackButtonHandler('blanket'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBackButtonByEscKey", _this.createBackButtonHandler('esc-key'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (event) {
      // The reason we have onKeyDown living together with onBackButton is because
      // some apps living in Focused task need the ability to handle on key down by itself.
      // However, some other apps don't really care about it
      // and leave it to the Focused task to handle.
      // Calling onKeyDown first can either supplement or override onBackButton.
      var onKeyDown = _this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown(event);
      }

      if (!event.defaultPrevented && event.keyCode === escKeyCode) {
        _this.onBackButtonByEscKey(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAnimationEnd", function () {
      return _this.setState({
        isAnimating: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DrawerImpl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({
          isAnimating: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Fire analytics event upon drawer opening
      if (!prevProps.isOpen && this.props.isOpen) {
        this.props.fireAnalyticsEvent('open');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    } // eslint-disable-next-line react/sort-comp

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backIcon = _this$props.backIcon,
          header = _this$props.header,
          isOpen = _this$props.isOpen,
          primaryIcon = _this$props.primaryIcon,
          width = _this$props.width,
          iconOffset = _this$props.iconOffset;
      var actualFullWidth = width === 'full';
      var sidebar = isOpen ? _react.default.createElement(_DrawerSide.default, null, _react.default.createElement(_DrawerPrimaryIcon.default, null, primaryIcon), _react.default.createElement(_DrawerBackIconWrapper.default, {
        iconOffset: iconOffset
      }, _react.default.createElement(_DrawerTrigger.default, {
        onActivate: this.onBackButtonByBackButton
      }, _react.default.createElement(_DrawerBackIcon.default, {
        isVisible: isOpen
      }, backIcon)))) : null;
      var content = isOpen ? _react.default.createElement(_DrawerMain.default, null, _react.default.createElement(_ContainerHeader.default, {
        isInDrawer: true,
        iconOffset: iconOffset,
        isFullWidth: actualFullWidth
      }, width !== 'full' ? header : _react.default.createElement(_reactScrolllock.default, null)), _react.default.createElement(_DrawerContent.default, null, this.props.children)) : null; // Note: even though we are using WithRootTheme here, the Drawer appearance is not able
      // to be customised via a preset or custom theme.

      return _react.default.createElement(_util.WithRootTheme, {
        provided: _presets.container
      }, _react.default.createElement("div", null, _react.default.createElement(_blanket.default, {
        isTinted: isOpen,
        canClickThrough: !isOpen,
        onBlanketClicked: this.onBackButtonByBlanket
      }), (this.state.isAnimating || isOpen) && _react.default.createElement(_DrawerInner.default, {
        isOpen: isOpen,
        width: width,
        isAnimating: this.state.isAnimating,
        onAnimationEnd: this.handleAnimationEnd
      }, sidebar, content)));
    }
  }]);
  return DrawerImpl;
}(_react.PureComponent);

exports.DrawerImpl = DrawerImpl;
(0, _defineProperty2.default)(DrawerImpl, "defaultProps", {
  iconOffset: 0,
  isOpen: false,
  onBackButton: function onBackButton() {},
  primaryIcon: null,
  width: 'narrow'
});

var _default = (0, _analytics.withAnalytics)(DrawerImpl, {}, {
  analyticsId: analyticsNamespace
});

exports.default = _default;