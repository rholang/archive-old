"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("@atlaskit/theme/constants");

var _Section = _interopRequireDefault(require("../Section"));

var gridSize = (0, _constants.gridSize)();

var HeaderSection =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeaderSection, _Component);

  function HeaderSection() {
    (0, _classCallCheck2.default)(this, HeaderSection);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderSection).apply(this, arguments));
  }

  (0, _createClass2.default)(HeaderSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id,
          parentId = _this$props.parentId;
      return (0, _core.jsx)(_Section.default, {
        id: id,
        key: id,
        parentId: parentId
      }, function (_ref) {
        var css = _ref.css;
        var headerCss = (0, _objectSpread2.default)({}, css, {
          paddingTop: gridSize * 2.5
        });
        return (0, _core.jsx)(_core.ClassNames, null, function (_ref2) {
          var getClassName = _ref2.css;
          return children({
            css: headerCss,
            className: getClassName(headerCss)
          });
        });
      });
    }
  }]);
  return HeaderSection;
}(_react.Component);

exports.default = HeaderSection;