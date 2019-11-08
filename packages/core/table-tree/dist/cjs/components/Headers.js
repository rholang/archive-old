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

var _Header = _interopRequireDefault(require("./Header"));

var _styled = require("../styled");

var Headers =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Headers, _Component);

  function Headers() {
    (0, _classCallCheck2.default)(this, Headers);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Headers).apply(this, arguments));
  }

  (0, _createClass2.default)(Headers, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_styled.HeadersContainer, {
        role: "row"
      }, _react.default.Children.map(this.props.children, function (header, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.cloneElement(header, {
            key: index,
            columnIndex: index
          })
        );
      }));
    }
  }]);
  return Headers;
}(_react.Component);

exports.default = Headers;