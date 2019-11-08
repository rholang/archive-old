"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavigationItemWithoutAnalytics = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _analyticsNext = require("@atlaskit/analytics-next");

var _item = _interopRequireWildcard(require("@atlaskit/item"));

var _version = require("../../version.json");

var _NavigationItemAction = _interopRequireDefault(require("../styled/NavigationItemAction"));

var _NavigationItemAfter = _interopRequireDefault(require("../styled/NavigationItemAfter"));

var _NavigationItemCaption = _interopRequireDefault(require("../styled/NavigationItemCaption"));

var _NavigationItemIcon = _interopRequireDefault(require("../styled/NavigationItemIcon"));

var _NavigationItemTextAfter = _interopRequireDefault(require("../styled/NavigationItemTextAfter"));

var _NavigationItemAfterWrapper = _interopRequireDefault(require("../styled/NavigationItemAfterWrapper"));

var _util = require("../../theme/util");

var Item = (0, _item.withItemClick)((0, _item.withItemFocus)(_item.default));

var NavigationItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(NavigationItem, _PureComponent);

  function NavigationItem() {
    (0, _classCallCheck2.default)(this, NavigationItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NavigationItem).apply(this, arguments));
  }

  (0, _createClass2.default)(NavigationItem, [{
    key: "render",
    value: function render() {
      var icon = this.props.icon ? _react.default.createElement(_NavigationItemIcon.default, null, this.props.icon) : null;
      var dropIcon = this.props.dropIcon && this.props.isDropdownTrigger ? _react.default.createElement(_NavigationItemIcon.default, {
        isDropdownTrigger: true
      }, this.props.dropIcon) : null;
      var textAfter = this.props.textAfter ? _react.default.createElement(_NavigationItemTextAfter.default, null, this.props.textAfter) : null;
      var action = this.props.action ? _react.default.createElement(_NavigationItemAction.default, null, this.props.action) : null;
      var after = this.props.textAfter ? _react.default.createElement(_NavigationItemAfter.default, {
        shouldTakeSpace: this.props.action || this.props.textAfter,
        isDropdownTrigger: this.props.isDropdownTrigger
      }, textAfter) : null; // There are various 'after' elements which are all optional. If any of them are present we
      // render those inside a shared wrapper.

      var allAfter = after || dropIcon || action ? _react.default.createElement(_NavigationItemAfterWrapper.default, null, after, dropIcon, action) : null;
      var wrappedCaption = this.props.caption ? _react.default.createElement(_NavigationItemCaption.default, null, this.props.caption) : null;
      var interactiveWrapperProps = {
        onClick: this.props.onClick,
        onKeyDown: this.props.onKeyDown,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        href: this.props.href,
        linkComponent: this.props.linkComponent
      }; // Theme prop is provided via withTheme(...) and is not public API

      /* eslint-disable react/prop-types */
      // $FlowFixMe

      var role = (0, _util.isInOverflowDropdown)(this.props.theme) ? 'menuitem' : null;
      /* eslint-enable react/prop-types */

      return _react.default.createElement(Item, (0, _extends2.default)({
        elemBefore: icon,
        elemAfter: allAfter,
        description: this.props.subText,
        isSelected: this.props.isSelected,
        isDragging: this.props.isDragging,
        isDropdown: this.props.isDropdownTrigger,
        isCompact: this.props.isCompact,
        dnd: this.props.dnd,
        autoFocus: this.props.autoFocus,
        target: this.props.target,
        role: role
      }, interactiveWrapperProps), this.props.text, wrappedCaption);
    }
  }]);
  return NavigationItem;
}(_react.PureComponent);

(0, _defineProperty2.default)(NavigationItem, "defaultProps", {
  isSelected: false,
  isDropdownTrigger: false,
  autoFocus: false
});
var NavigationItemWithoutAnalytics = (0, _styledComponents.withTheme)(NavigationItem);
exports.NavigationItemWithoutAnalytics = NavigationItemWithoutAnalytics;
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'navigationItem',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onClick: createAndFireEventOnAtlaskit({
    action: 'clicked',
    actionSubject: 'navigationItem',
    attributes: {
      componentName: 'navigationItem',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(NavigationItemWithoutAnalytics));

exports.default = _default;