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

var _styledComponents = require("styled-components");

var _ContainerLogo = _interopRequireDefault(require("../styled/ContainerLogo"));

var _util = require("../../theme/util");

var ContainerLogo =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ContainerLogo, _PureComponent);

  function ContainerLogo() {
    (0, _classCallCheck2.default)(this, ContainerLogo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContainerLogo).apply(this, arguments));
  }

  (0, _createClass2.default)(ContainerLogo, [{
    key: "render",
    value: function render() {
      /* eslint-disable react/prop-types */
      // theme is passed in via context and not part of the props API for this component
      var isNavCollapsed = this.props.theme[_util.rootKey] ? this.props.theme[_util.rootKey].isCollapsed : false;
      /* eslint-enable react/prop-types */

      return isNavCollapsed ? null : _react.default.createElement(_ContainerLogo.default, null, this.props.children);
    }
  }]);
  return ContainerLogo;
}(_react.PureComponent);

var _default = (0, _styledComponents.withTheme)(ContainerLogo);

exports.default = _default;