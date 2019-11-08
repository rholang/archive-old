"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sharedVariables = require("./shared-variables");

var _defineProperty2;

var OverflowItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OverflowItem, _Component);

  function OverflowItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, OverflowItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(OverflowItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "measureHeight", function (ref) {
      if (ref) {
        _this.context[_sharedVariables.overflowGroupNamespace].reportItemHeightToGroup(_this.props.overflowItemIndex, ref.clientHeight);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(OverflowItem, [{
    key: "render",
    value: function render() {
      if (!this.context[_sharedVariables.overflowGroupNamespace].shouldRenderItem(this.props.overflowItemIndex)) {
        return null;
      }

      if (this.context[_sharedVariables.shouldReportItemHeight]) {
        return _react.default.createElement("div", {
          ref: this.measureHeight
        }, this.props.children);
      }

      return this.props.children;
    }
  }]);
  return OverflowItem;
}(_react.Component);

exports.default = OverflowItem;
(0, _defineProperty3.default)(OverflowItem, "contextTypes", (_defineProperty2 = {}, (0, _defineProperty3.default)(_defineProperty2, _sharedVariables.overflowGroupNamespace, _propTypes.default.object), (0, _defineProperty3.default)(_defineProperty2, _sharedVariables.shouldReportItemHeight, _propTypes.default.bool), _defineProperty2));