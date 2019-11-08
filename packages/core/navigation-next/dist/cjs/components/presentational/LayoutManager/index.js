"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _uiController = require("../../../ui-controller");

var _LayoutManager = _interopRequireDefault(require("./LayoutManager"));

function defaultTooltipContent(isCollapsed) {
  return isCollapsed ? {
    text: 'Expand',
    char: '['
  } : {
    text: 'Collapse',
    char: '['
  };
}

var LayoutManagerWithNavigationUIController = (0, _uiController.withNavigationUIController)(_LayoutManager.default);

var ConnectedLayoutManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ConnectedLayoutManager, _Component);

  function ConnectedLayoutManager() {
    (0, _classCallCheck2.default)(this, ConnectedLayoutManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConnectedLayoutManager).apply(this, arguments));
  }

  (0, _createClass2.default)(ConnectedLayoutManager, [{
    key: "render",
    value: function render() {
      return (0, _core.jsx)(LayoutManagerWithNavigationUIController, this.props);
    }
  }]);
  return ConnectedLayoutManager;
}(_react.Component);

exports.default = ConnectedLayoutManager;
(0, _defineProperty2.default)(ConnectedLayoutManager, "defaultProps", {
  collapseToggleTooltipContent: defaultTooltipContent,
  experimental_alternateFlyoutBehaviour: false,
  experimental_flyoutOnHover: false,
  experimental_fullWidthFlyout: false,
  experimental_hideNavVisuallyOnCollapse: false,
  experimental_horizontalGlobalNav: false,
  topOffset: 0
});