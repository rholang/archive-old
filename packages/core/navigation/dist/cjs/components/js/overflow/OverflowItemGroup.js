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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty4 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sharedVariables = require("./shared-variables");

var _defineProperty3;

var OverflowItemGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OverflowItemGroup, _Component);

  function OverflowItemGroup(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OverflowItemGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OverflowItemGroup).call(this, props));
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "rootNode", void 0);
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "heights", void 0);
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "isInNavigation", function () {
      return !!_this.context[_sharedVariables.shouldReportItemHeight];
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "shouldRender", function () {
      var overflowGroupIndex = _this.props.overflowGroupIndex;

      if (_this.isInNavigation()) {
        return _this.context[_sharedVariables.overflowManagerNamespace].isGroupVisibleInNav(overflowGroupIndex);
      }

      return _this.context[_sharedVariables.overflowManagerNamespace].isGroupVisibleInDropdown(overflowGroupIndex);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "shouldRenderItem", function (overflowItemIndex) {
      if (_this.isInNavigation()) {
        return _this.context[_sharedVariables.overflowManagerNamespace].isGroupItemVisibleInNav(_this.props.overflowGroupIndex, overflowItemIndex);
      }

      return _this.context[_sharedVariables.overflowManagerNamespace].isGroupItemVisibleInDropdown(_this.props.overflowGroupIndex, overflowItemIndex);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "hasAllItemHeights", function () {
      return (0, _sharedVariables.isArrayFilled)(_this.heights);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "combinedItemHeights", function () {
      return _this.heights.reduce(function (sum, value, i) {
        return sum + (_this.shouldRenderItem(i) ? value : 0);
      }, 0);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "nonItemHeight", function () {
      return _this.groupHeight() - _this.combinedItemHeights();
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "groupHeight", function () {
      return _this.rootNode ? _this.rootNode.clientHeight : 0;
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "reportHeightsToOverflowManager", function () {
      if (!_this.isInNavigation() || !_this.rootNode || !_this.hasAllItemHeights()) {
        return;
      }

      _this.context[_sharedVariables.overflowManagerNamespace].reportGroupHeightToManager({
        groupIndex: _this.props.overflowGroupIndex,
        itemHeights: _this.heights,
        nonItemHeight: _this.nonItemHeight()
      });
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "handleItemHeightReport", function (overflowItemIndex, height) {
      _this.heights[overflowItemIndex] = height;

      _this.reportHeightsToOverflowManager();
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "handleRootNodeRef", function (ref) {
      _this.rootNode = ref;

      _this.reportHeightsToOverflowManager();
    });
    _this.heights = new Array(_this.props.itemCount);
    return _this;
  }

  (0, _createClass2.default)(OverflowItemGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return (0, _defineProperty4.default)({}, _sharedVariables.overflowGroupNamespace, {
        reportItemHeightToGroup: this.handleItemHeightReport,
        shouldRenderItem: this.shouldRenderItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.shouldRender()) {
        return null;
      }

      if (this.context[_sharedVariables.shouldReportItemHeight]) {
        return _react.default.createElement("div", {
          ref: this.handleRootNodeRef
        }, this.props.children);
      }

      return this.props.children;
    }
  }]);
  return OverflowItemGroup;
}(_react.Component);

exports.default = OverflowItemGroup;
(0, _defineProperty4.default)(OverflowItemGroup, "childContextTypes", (0, _defineProperty4.default)({}, _sharedVariables.overflowGroupNamespace, _propTypes.default.object));
(0, _defineProperty4.default)(OverflowItemGroup, "contextTypes", (_defineProperty3 = {}, (0, _defineProperty4.default)(_defineProperty3, _sharedVariables.overflowManagerNamespace, _propTypes.default.object), (0, _defineProperty4.default)(_defineProperty3, _sharedVariables.shouldReportItemHeight, _propTypes.default.bool), _defineProperty3));