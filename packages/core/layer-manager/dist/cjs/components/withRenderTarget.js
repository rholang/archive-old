"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRenderTarget;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gateway = require("./gateway");

var _Portal = _interopRequireDefault(require("./Portal"));

var _withContextFromProps = _interopRequireDefault(require("./withContextFromProps"));

function withRenderTarget(_ref, WrappedComponent) {
  var _class, _temp;

  var target = _ref.target,
      withTransitionGroup = _ref.withTransitionGroup;
  // Access the analytics context types so we can provide them across portal boundaries
  // until we can support React 16 where it can be provided natively
  var analyticsContextTypes = {
    // Old analytics keys
    onAnalyticsEvent: _propTypes.default.func,
    getParentAnalyticsData: _propTypes.default.func,
    // New analytics-next keys,
    getAtlaskitAnalyticsContext: _propTypes.default.func,
    getAtlaskitAnalyticsEventHandlers: _propTypes.default.func
  }; // These context types have been copied from jira-frontend to temporarily fix context issues for jira-frontend with other
  // layer-manager rendered components like flag - AK-4281

  var jiraContextTypes = {
    // For react-redux
    store: _propTypes.default.object,
    // For react-intl
    intl: _propTypes.default.object,
    // For common/analytics/analytics-provider
    triggerAnalytics: _propTypes.default.func,
    // For portfolio/common/view-awesome/validation/form/connect-to-form
    internalFormContext: _propTypes.default.object,
    // For board-v2/column/column-create/column-create-form
    validateColumn: _propTypes.default.func,
    // For board-v2/column/column-header/column-header
    createColumnMenu: _propTypes.default.func,
    // For board-v2/column/draggable-column/draggable-column
    getScrollTop: _propTypes.default.func,
    // For board/view/components/done-issues-button/done-issues-button
    configuration: _propTypes.default.object,
    // For board/view/components/drag-handle/drag-handle
    getDraggableOriginCenterPos: _propTypes.default.func,
    // For board/view/components/drag-handle/drag-handle
    getDraggableTranslatedCenterPos: _propTypes.default.func,
    // For common/components/profilecard/profilecard-view
    akProfileClient: _propTypes.default.object,
    // For common/components/profilecard/profilecard-view
    cloudId: _propTypes.default.string,
    // For common/engagement/with-engagement
    subscribeEngagementState: _propTypes.default.func,
    // For navigation/view/navigation-group-item/index
    perfMetricsStart: _propTypes.default.func,
    // For navigation/view/onboarding/components/onboarding-manager
    spotlightRegistry: _propTypes.default.object,
    // For navigation/view/project-header/index
    slideRight: _propTypes.default.func,
    // For portfolio/common/view/components/tree-table/view/details/index
    consumerStore: _propTypes.default.object,
    // For portfolio/page-plan/view-awesome/main/planning/schedule/schedule/lane/bar/index-dumb
    onBarSelected: _propTypes.default.func
  };
  var portalledContextTypes = (0, _objectSpread2.default)({}, analyticsContextTypes, jiraContextTypes);
  var ContextProvider = (0, _withContextFromProps.default)(portalledContextTypes, null); // eslint-disable-next-line react/prefer-stateless-function

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(_class, _Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "gatewayOrPortalChildRef", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getWrappedComponentRef", function (ref) {
        _this.gatewayOrPortalChildRef = ref;
      });
      return _this;
    }

    (0, _createClass2.default)(_class, [{
      key: "render",
      value: function render() {
        var _this$context = this.context,
            gatewayRegistry = _this$context.gatewayRegistry,
            portalledContext = (0, _objectWithoutProperties2.default)(_this$context, ["gatewayRegistry"]);
        var GatewayOrPortal = gatewayRegistry ? _gateway.Gateway : _Portal.default;
        return _react.default.createElement(GatewayOrPortal, {
          id: process.env.NODE_ENV === 'test' ? 'gateway-or-portal' : '',
          into: target,
          withTransitionGroup: withTransitionGroup,
          shouldBlockRender: this.context.blockChildGatewayRender
        }, _react.default.createElement(ContextProvider, portalledContext, _react.default.createElement(WrappedComponent, (0, _extends2.default)({
          ref: this.getWrappedComponentRef
        }, this.props))));
      }
    }]);
    return _class;
  }(_react.Component), (0, _defineProperty2.default)(_class, "contextTypes", (0, _objectSpread2.default)({
    gatewayRegistry: _propTypes.default.instanceOf(_gateway.GatewayRegistry),
    blockChildGatewayRender: _propTypes.default.bool
  }, analyticsContextTypes, jiraContextTypes)), _temp;
}