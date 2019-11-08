"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _button = _interopRequireDefault(require("@atlaskit/button"));

var _menu = _interopRequireDefault(require("@atlaskit/icon/glyph/menu"));

var styles = _interopRequireWildcard(require("../styled"));

var MobileHeader =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(MobileHeader, _PureComponent);

  function MobileHeader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MobileHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MobileHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isAnimatingNavigation: false,
      isAnimatingSidebar: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNavSlideFinish", function () {
      _this.setState({
        isAnimatingNavigation: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSidebarSlideFinish", function () {
      _this.setState({
        isAnimatingSidebar: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSlider", function (isOpen, isAnimating, renderFn, onTransitionEnd, topOffset) {
      var side = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'left';
      return _react.default.createElement(styles.MobileNavSlider, {
        isOpen: isOpen,
        onTransitionEnd: onTransitionEnd,
        side: side,
        topOffset: topOffset
      }, (isOpen || isAnimating) && renderFn && renderFn(isOpen));
    });
    return _this;
  }

  (0, _createClass2.default)(MobileHeader, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.drawerState === 'none') {
        if (this.props.drawerState === 'navigation') {
          this.setState({
            isAnimatingNavigation: true
          });
        } else if (this.props.drawerState === 'sidebar') {
          this.setState({
            isAnimatingSidebar: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isAnimatingNavigation = _this$state.isAnimatingNavigation,
          isAnimatingSidebar = _this$state.isAnimatingSidebar;
      var _this$props = this.props,
          drawerState = _this$props.drawerState,
          menuIconLabel = _this$props.menuIconLabel,
          customMenu = _this$props.customMenu,
          topOffset = _this$props.topOffset;
      var isNavigationOpen = drawerState === 'navigation';
      var isSidebarOpen = drawerState === 'sidebar';

      var menu = customMenu || _react.default.createElement(_button.default, {
        appearance: "subtle",
        iconBefore: _react.default.createElement(_menu.default, {
          label: menuIconLabel,
          size: "large"
        }),
        onClick: this.props.onNavigationOpen
      });

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(styles.MobilePageHeader, null, _react.default.createElement(styles.MobilePageHeaderContent, {
        topOffset: topOffset
      }, menu, _react.default.createElement(styles.PageHeading, null, this.props.pageHeading), this.props.secondaryContent)), this.renderSlider(isNavigationOpen, isAnimatingNavigation, this.props.navigation, this.handleNavSlideFinish, topOffset), this.renderSlider(isSidebarOpen, isAnimatingSidebar, this.props.sidebar, this.handleSidebarSlideFinish, topOffset, 'right'), (isNavigationOpen || isSidebarOpen || isAnimatingNavigation || isAnimatingSidebar) && _react.default.createElement(styles.FakeBlanket, {
        isOpen: isNavigationOpen || isSidebarOpen,
        onClick: this.props.onDrawerClose
      }));
    }
  }]);
  return MobileHeader;
}(_react.PureComponent);

(0, _defineProperty2.default)(MobileHeader, "defaultProps", {
  topOffset: 0
});
var _default = MobileHeader;
exports.default = _default;