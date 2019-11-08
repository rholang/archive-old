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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _util = require("../../theme/util");

var _GlobalPrimaryActions = _interopRequireDefault(require("./GlobalPrimaryActions"));

var _GlobalSecondaryActions = _interopRequireDefault(require("./GlobalSecondaryActions"));

var _GlobalNavigationInner = _interopRequireDefault(require("../styled/GlobalNavigationInner"));

var _GlobalNavigationPrimaryContainer = _interopRequireDefault(require("../styled/GlobalNavigationPrimaryContainer"));

var _GlobalNavigationSecondaryContainer = _interopRequireDefault(require("../styled/GlobalNavigationSecondaryContainer"));

var _presets = require("../../theme/presets");

var GlobalNavigation =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GlobalNavigation, _PureComponent);

  function GlobalNavigation() {
    (0, _classCallCheck2.default)(this, GlobalNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(GlobalNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          createIcon = _this$props.createIcon,
          linkComponent = _this$props.linkComponent,
          onCreateActivate = _this$props.onCreateActivate,
          onSearchActivate = _this$props.onSearchActivate,
          primaryActions = _this$props.primaryActions,
          primaryIcon = _this$props.primaryIcon,
          primaryIconAppearance = _this$props.primaryIconAppearance,
          primaryItemHref = _this$props.primaryItemHref,
          searchIcon = _this$props.searchIcon,
          secondaryActions = _this$props.secondaryActions,
          theme = _this$props.theme;
      return _react.default.createElement(_util.WithRootTheme, {
        provided: theme
      }, _react.default.createElement(_GlobalNavigationInner.default, null, _react.default.createElement(_GlobalNavigationPrimaryContainer.default, null, _react.default.createElement(_GlobalPrimaryActions.default, {
        actions: primaryActions,
        createIcon: createIcon,
        linkComponent: linkComponent,
        onCreateActivate: onCreateActivate,
        onSearchActivate: onSearchActivate,
        primaryIcon: primaryIcon,
        primaryIconAppearance: primaryIconAppearance,
        primaryItemHref: primaryItemHref,
        searchIcon: searchIcon
      })), _react.default.createElement(_GlobalNavigationSecondaryContainer.default, null, secondaryActions.length ? _react.default.createElement(_GlobalSecondaryActions.default, {
        actions: secondaryActions
      }) : null)));
    }
  }]);
  return GlobalNavigation;
}(_react.PureComponent);

exports.default = GlobalNavigation;
(0, _defineProperty2.default)(GlobalNavigation, "defaultProps", {
  primaryIconAppearance: 'round',
  secondaryActions: [],
  theme: _presets.global
});