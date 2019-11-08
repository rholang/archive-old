"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _mapNavigationThemeToItemTheme = _interopRequireDefault(require("./map-navigation-theme-to-item-theme"));

var _util = require("./util");

var WithRootTheme =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(WithRootTheme, _PureComponent);

  function WithRootTheme() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, WithRootTheme);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithRootTheme)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getWithOuterTheme", (0, _memoizeOne.default)(function (provided, isCollapsed) {
      return function () {
        var _objectSpread2;

        var outerTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var theme = {
          isCollapsed: isCollapsed || false,
          provided: provided
        };
        return (0, _objectSpread3.default)({}, outerTheme, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, _util.rootKey, theme), (0, _defineProperty2.default)(_objectSpread2, _item.itemThemeNamespace, (0, _mapNavigationThemeToItemTheme.default)(provided)), _objectSpread2));
      };
    }));
    return _this;
  }

  (0, _createClass2.default)(WithRootTheme, [{
    key: "render",
    value: function render() {
      var withOuterTheme = this.getWithOuterTheme(this.props.provided, this.props.isCollapsed);
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: withOuterTheme
      }, this.props.children);
    }
  }]);
  return WithRootTheme;
}(_react.PureComponent);

exports.default = WithRootTheme;
(0, _defineProperty2.default)(WithRootTheme, "defaultProps", {
  isCollapsed: false
});