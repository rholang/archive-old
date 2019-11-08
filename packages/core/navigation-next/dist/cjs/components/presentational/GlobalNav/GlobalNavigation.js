"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _primitives = require("./primitives");

/**
 * NOTE: 'GlobalNav' is the layout primitive, which will be wrapped by the more
 * opinionated 'GlobalNavigation' component.
 */
var GlobalNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GlobalNavigation, _Component);

  function GlobalNavigation() {
    (0, _classCallCheck2.default)(this, GlobalNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(GlobalNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ItemComponent = _this$props.itemComponent,
          primaryItems = _this$props.primaryItems,
          secondaryItems = _this$props.secondaryItems,
          theme = _this$props.theme;
      var wrapperStyles = theme.mode.globalNav({
        topOffset: theme.topOffset
      });
      return (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationLayer: 'global'
          },
          componentName: 'globalNav'
        }
      }, (0, _core.jsx)("div", {
        css: wrapperStyles
      }, (0, _core.jsx)(_primitives.PrimaryItemsList, null, (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationIconGrouping: 'primary'
          }
        }
      }, (0, _core.jsx)(_react.Fragment, null, primaryItems.map(function (props, index) {
        // Render the first item with a margin beneath it and a large icon
        if (!index) {
          var Icon = props.icon,
              rest = (0, _objectWithoutProperties2.default)(props, ["icon"]);
          return (0, _core.jsx)(_primitives.FirstPrimaryItemWrapper, {
            key: props.id
          }, (0, _core.jsx)(ItemComponent, (0, _extends2.default)({}, rest, {
            icon: function icon(provided) {
              return (0, _core.jsx)(Icon, (0, _extends2.default)({}, provided, {
                size: "large"
              }));
            },
            size: "large",
            index: index
          })));
        }

        return (0, _core.jsx)(ItemComponent, (0, _extends2.default)({}, props, {
          key: props.id,
          size: "small",
          index: index
        }));
      })))), (0, _core.jsx)(_primitives.SecondaryItemsList, null, (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationIconGrouping: 'secondary'
          }
        }
      }, (0, _core.jsx)(_react.Fragment, null, secondaryItems.map(function (props, index) {
        return (0, _core.jsx)(ItemComponent, (0, _extends2.default)({}, props, {
          key: props.id,
          size: "small",
          index: index
        }));
      }))))));
    }
  }]);
  return GlobalNavigation;
}(_react.Component);

exports.default = GlobalNavigation;