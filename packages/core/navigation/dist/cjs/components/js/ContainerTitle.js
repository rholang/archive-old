"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _item = require("@atlaskit/item");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _NavigationItem = _interopRequireDefault(require("./NavigationItem"));

var _ContainerTitleIcon = _interopRequireDefault(require("../styled/ContainerTitleIcon"));

var _ContainerTitleText = _interopRequireDefault(require("../styled/ContainerTitleText"));

var _util = require("../../theme/util");

var _createContainerTitleItemTheme = _interopRequireDefault(require("../../theme/create-container-title-item-theme"));

var key = _item.itemThemeNamespace;

var ContainerTitle =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ContainerTitle, _PureComponent);

  function ContainerTitle() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ContainerTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ContainerTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "withOuterTheme", (0, _memoizeOne.default)(function (outerTheme) {
      return (0, _createContainerTitleItemTheme.default)(outerTheme, key);
    }));
    return _this;
  }

  (0, _createClass2.default)(ContainerTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          subText = _this$props.subText,
          icon = _this$props.icon;
      /* eslint-disable react/prop-types */
      // theme is passed in via context and not part of the props API for this component

      var isNavCollapsed = this.props.theme[_util.rootKey] ? this.props.theme[_util.rootKey].isCollapsed : false;
      var theme = this.withOuterTheme(this.props.theme);
      /* eslint-enable react/prop-types */

      var interactiveWrapperProps = {
        onClick: this.props.onClick,
        onKeyDown: this.props.onKeyDown,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        href: this.props.href,
        linkComponent: this.props.linkComponent
      };
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react.default.createElement(_NavigationItem.default, (0, _extends2.default)({
        icon: isNavCollapsed ? null : _react.default.createElement(_ContainerTitleIcon.default, null, icon),
        subText: isNavCollapsed ? null : subText,
        text: isNavCollapsed ? _react.default.createElement(_ContainerTitleIcon.default, {
          "aria-label": text
        }, icon) : _react.default.createElement(_ContainerTitleText.default, null, text)
      }, interactiveWrapperProps)));
    }
  }]);
  return ContainerTitle;
}(_react.PureComponent);

var _default = (0, _styledComponents.withTheme)(ContainerTitle);

exports.default = _default;