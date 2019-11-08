import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Fragment, PureComponent } from 'react';
import Button from '@atlaskit/button';
import MenuIcon from '@atlaskit/icon/glyph/menu';
import * as styles from '../styled';

var MobileHeader =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MobileHeader, _PureComponent);

  function MobileHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MobileHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MobileHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isAnimatingNavigation: false,
      isAnimatingSidebar: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleNavSlideFinish", function () {
      _this.setState({
        isAnimatingNavigation: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSidebarSlideFinish", function () {
      _this.setState({
        isAnimatingSidebar: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSlider", function (isOpen, isAnimating, renderFn, onTransitionEnd, topOffset) {
      var side = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'left';
      return React.createElement(styles.MobileNavSlider, {
        isOpen: isOpen,
        onTransitionEnd: onTransitionEnd,
        side: side,
        topOffset: topOffset
      }, (isOpen || isAnimating) && renderFn && renderFn(isOpen));
    });

    return _this;
  }

  _createClass(MobileHeader, [{
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
      var menu = customMenu || React.createElement(Button, {
        appearance: "subtle",
        iconBefore: React.createElement(MenuIcon, {
          label: menuIconLabel,
          size: "large"
        }),
        onClick: this.props.onNavigationOpen
      });
      return React.createElement(Fragment, null, React.createElement(styles.MobilePageHeader, null, React.createElement(styles.MobilePageHeaderContent, {
        topOffset: topOffset
      }, menu, React.createElement(styles.PageHeading, null, this.props.pageHeading), this.props.secondaryContent)), this.renderSlider(isNavigationOpen, isAnimatingNavigation, this.props.navigation, this.handleNavSlideFinish, topOffset), this.renderSlider(isSidebarOpen, isAnimatingSidebar, this.props.sidebar, this.handleSidebarSlideFinish, topOffset, 'right'), (isNavigationOpen || isSidebarOpen || isAnimatingNavigation || isAnimatingSidebar) && React.createElement(styles.FakeBlanket, {
        isOpen: isNavigationOpen || isSidebarOpen,
        onClick: this.props.onDrawerClose
      }));
    }
  }]);

  return MobileHeader;
}(PureComponent);

_defineProperty(MobileHeader, "defaultProps", {
  topOffset: 0
});

export default MobileHeader;