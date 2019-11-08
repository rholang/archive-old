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

var _styledComponents = require("styled-components");

var _item = require("@atlaskit/item");

var _dropdownMenu = _interopRequireDefault(require("@atlaskit/dropdown-menu"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _NavigationItem = _interopRequireDefault(require("./NavigationItem"));

var _ContainerTitleIcon = _interopRequireDefault(require("../styled/ContainerTitleIcon"));

var _ContainerTitleText = _interopRequireDefault(require("../styled/ContainerTitleText"));

var _util = require("../../theme/util");

var _createContainerTitleItemTheme = _interopRequireDefault(require("../../theme/create-container-title-item-theme"));

var key = _item.itemThemeNamespace;

var ContainerTitleDropdown =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ContainerTitleDropdown, _PureComponent);

  function ContainerTitleDropdown() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ContainerTitleDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ContainerTitleDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "withOuterTheme", (0, _memoizeOne.default)(function (outerTheme) {
      return (0, _createContainerTitleItemTheme.default)(outerTheme, key);
    }));
    return _this;
  }

  (0, _createClass2.default)(ContainerTitleDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          subText = _this$props.subText,
          text = _this$props.text,
          defaultDropdownOpen = _this$props.defaultDropdownOpen,
          isDropdownOpen = _this$props.isDropdownOpen,
          isDropdownLoading = _this$props.isDropdownLoading,
          onDropdownOpenChange = _this$props.onDropdownOpenChange;
      /* eslint-disable react/prop-types */
      // theme is passed in via context and not part of the props API for this component

      var isNavCollapsed = this.props.theme[_util.rootKey] ? this.props.theme[_util.rootKey].isCollapsed : false;
      var theme = this.withOuterTheme(this.props.theme);
      /* eslint-enable react/prop-types */

      return _react.default.createElement(_dropdownMenu.default, {
        appearance: "tall",
        shouldFitContainer: !isNavCollapsed,
        position: isNavCollapsed ? 'right top' : 'bottom left',
        shouldFlip: false,
        defaultOpen: defaultDropdownOpen,
        isLoading: isDropdownLoading,
        isOpen: isDropdownOpen,
        onOpenChange: onDropdownOpenChange,
        trigger: _react.default.createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, _react.default.createElement(_NavigationItem.default, {
          dropIcon: isNavCollapsed ? null : _react.default.createElement(_chevronDown.default, {
            label: "chevron"
          }),
          isDropdownTrigger: true,
          icon: isNavCollapsed ? null : _react.default.createElement(_ContainerTitleIcon.default, null, icon),
          subText: isNavCollapsed ? null : subText,
          text: isNavCollapsed ? _react.default.createElement(_ContainerTitleIcon.default, {
            "aria-label": text
          }, icon) : _react.default.createElement(_ContainerTitleText.default, null, text)
        }))
      }, children);
    }
  }]);
  return ContainerTitleDropdown;
}(_react.PureComponent);

var _default = (0, _styledComponents.withTheme)(ContainerTitleDropdown);

exports.default = _default;