"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _constants = require("../../../common/constants");

var _primitives = require("./primitives");

var ToggleContent = function ToggleContent(_ref) {
  var isVisible = _ref.isVisible,
      EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE = _ref.experimental_hideNavVisuallyOnCollapse,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["isVisible", "experimental_hideNavVisuallyOnCollapse"]);

  // If FF is false, retain the old behaviour of
  // un-mounting navigation components on collapse
  if (!EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE && !isVisible) {
    return null;
  }

  return (0, _core.jsx)(_react.Fragment, rest);
};

var productNavigationAnalytics = {
  attributes: {
    navigationLayer: 'product'
  }
};
var containerNavigationAnalytics = {
  attributes: {
    navigationLayer: 'container'
  }
};

var ContentNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ContentNavigation, _Component);

  function ContentNavigation() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ContentNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ContentNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      cachedContainer: null
    });
    return _this;
  }

  (0, _createClass2.default)(ContentNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      return !(0, _reactFastCompare.default)(props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          container = _this$props.container,
          isVisible = _this$props.isVisible,
          Product = _this$props.product,
          EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE = _this$props.experimental_hideNavVisuallyOnCollapse;
      var CachedContainer = this.state.cachedContainer;
      var shouldRenderContainer = Boolean(container);
      var ContainerComponent = CachedContainer || _react.Fragment;
      return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)(_primitives.ProductNavigation, {
        isVisible: isVisible
      }, (0, _core.jsx)(ToggleContent, {
        experimental_hideNavVisuallyOnCollapse: EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE,
        isVisible: isVisible
      }, (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: productNavigationAnalytics
      }, (0, _core.jsx)(Product, null)))), (0, _core.jsx)(_Transition.default, {
        in: shouldRenderContainer,
        timeout: this.isMounted ? _constants.transitionDurationMs : 0,
        mountOnEnter: true,
        unmountOnExit: true
      }, function (state) {
        return (0, _core.jsx)(_primitives.ContainerNavigation, {
          isEntering: state === 'entering',
          isExiting: state === 'exiting',
          isVisible: isVisible
        }, (0, _core.jsx)(ToggleContent, {
          experimental_hideNavVisuallyOnCollapse: EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE,
          isVisible: isVisible
        }, (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
          data: containerNavigationAnalytics
        }, (0, _core.jsx)(ContainerComponent, null))));
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var container = _ref2.container;

      if (container && container !== state.cachedContainer) {
        // We cache the most recent container component in state so that we can
        // render it while the container layer is transitioning out, which is
        // triggered by setting the container prop to null.
        return (0, _objectSpread2.default)({}, state, {
          cachedContainer: container
        });
      }

      return null;
    }
  }]);
  return ContentNavigation;
}(_react.Component);

exports.default = ContentNavigation;