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

var _reactAddonsTextContent = _interopRequireDefault(require("react-addons-text-content"));

var _ItemGroup = require("../styled/ItemGroup");

var ItemGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ItemGroup, _Component);

  function ItemGroup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ItemGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ItemGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "headingAfterElement", void 0);
    return _this;
  }

  (0, _createClass2.default)(ItemGroup, [{
    key: "render",
    // eslint-disable-line react/sort-comp
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          elemAfter = _this$props.elemAfter,
          isCompact = _this$props.isCompact,
          title = _this$props.title,
          label = _this$props.label,
          innerRef = _this$props.innerRef,
          role = _this$props.role;

      var ariaLabel = function () {
        if (label) {
          return (0, _reactAddonsTextContent.default)(label);
        }

        if (title) {
          return (0, _reactAddonsTextContent.default)(title);
        }

        return '';
      }();

      return _react.default.createElement("div", {
        "aria-label": ariaLabel,
        role: role,
        ref: innerRef
      }, title ? _react.default.createElement(_ItemGroup.GroupTitle, {
        "aria-hidden": "true",
        isCompact: isCompact
      }, _react.default.createElement(_ItemGroup.GroupTitleText, null, title), elemAfter ? _react.default.createElement(_ItemGroup.GroupTitleAfter, {
        innerRef: function innerRef(r) {
          _this2.headingAfterElement = r;
        }
      }, elemAfter) : null) : null, children);
    }
  }]);
  return ItemGroup;
}(_react.Component);

exports.default = ItemGroup;
(0, _defineProperty2.default)(ItemGroup, "defaultProps", {
  role: 'group'
});