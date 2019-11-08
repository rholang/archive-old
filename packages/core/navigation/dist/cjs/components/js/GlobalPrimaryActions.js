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

var _react = _interopRequireWildcard(require("react"));

var _GlobalItem = _interopRequireDefault(require("./GlobalItem"));

var _DrawerTrigger = _interopRequireDefault(require("./DrawerTrigger"));

var _GlobalPrimaryActionsList = _interopRequireDefault(require("./GlobalPrimaryActionsList"));

var _GlobalPrimaryActionsInner = _interopRequireDefault(require("../styled/GlobalPrimaryActionsInner"));

var _GlobalPrimaryActionsPrimaryItem = _interopRequireDefault(require("../styled/GlobalPrimaryActionsPrimaryItem"));

var _GlobalPrimaryActionsItemsWrapper = _interopRequireDefault(require("../styled/GlobalPrimaryActionsItemsWrapper"));

var GlobalPrimaryActions =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GlobalPrimaryActions, _PureComponent);

  function GlobalPrimaryActions() {
    (0, _classCallCheck2.default)(this, GlobalPrimaryActions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalPrimaryActions).apply(this, arguments));
  }

  (0, _createClass2.default)(GlobalPrimaryActions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actions = _this$props.actions,
          createIcon = _this$props.createIcon,
          linkComponent = _this$props.linkComponent,
          onCreateActivate = _this$props.onCreateActivate,
          onSearchActivate = _this$props.onSearchActivate,
          primaryIcon = _this$props.primaryIcon,
          primaryIconAppearance = _this$props.primaryIconAppearance,
          primaryItemHref = _this$props.primaryItemHref,
          searchIcon = _this$props.searchIcon;
      return _react.default.createElement(_GlobalPrimaryActionsInner.default, null, primaryIcon ? _react.default.createElement(_GlobalPrimaryActionsPrimaryItem.default, null, _react.default.createElement(_GlobalItem.default, {
        id: "productLogo",
        href: primaryItemHref,
        linkComponent: linkComponent,
        size: "medium",
        appearance: primaryIconAppearance
      }, primaryIcon)) : null, _react.default.createElement(_GlobalPrimaryActionsItemsWrapper.default, null, actions ? _react.default.createElement(_GlobalPrimaryActionsList.default, {
        actions: actions
      }) : _react.default.createElement("div", null, searchIcon ? _react.default.createElement(_DrawerTrigger.default, {
        onActivate: onSearchActivate
      }, searchIcon) : null, createIcon ? _react.default.createElement(_DrawerTrigger.default, {
        onActivate: onCreateActivate
      }, createIcon) : null)));
    }
  }]);
  return GlobalPrimaryActions;
}(_react.PureComponent);

exports.default = GlobalPrimaryActions;