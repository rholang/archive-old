"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OverflowHeightReportEnabler = _interopRequireDefault(require("./OverflowHeightReportEnabler"));

var _OverflowDropdown = _interopRequireDefault(require("./OverflowDropdown"));

var _HeightDetector = _interopRequireDefault(require("./HeightDetector"));

var _sharedVariables = require("./shared-variables");

var OverflowManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OverflowManager, _Component);
  (0, _createClass2.default)(OverflowManager, [{
    key: "getChildContext",
    value: function getChildContext() {
      return (0, _defineProperty3.default)({}, _sharedVariables.overflowManagerNamespace, {
        reportGroupHeightToManager: this.handleItemGroupHeightReport,
        isGroupVisibleInNav: this.isGroupVisibleInNav,
        isGroupItemVisibleInNav: this.isGroupItemVisibleInNav,
        isGroupVisibleInDropdown: this.isGroupVisibleInDropdown,
        isGroupItemVisibleInDropdown: this.isGroupItemVisibleInDropdown
      });
    }
  }]);

  function OverflowManager(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OverflowManager);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OverflowManager).call(this, props));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "state", {
      // eslint-disable-line react/sort-comp
      breakAt: {
        group: 999,
        item: 999
      }
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "availableHeight", 0);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "groupHeights", []);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isGroupVisibleInNav", function (groupIndex) {
      return groupIndex < _this.state.breakAt.group || groupIndex === _this.state.breakAt.group && _this.state.breakAt.item !== 0;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isGroupItemVisibleInNav", function (groupIndex, itemIndex) {
      return groupIndex < _this.state.breakAt.group || groupIndex === _this.state.breakAt.group && itemIndex < _this.state.breakAt.item;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isGroupVisibleInDropdown", function (groupIndex) {
      return groupIndex >= _this.state.breakAt.group;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isGroupItemVisibleInDropdown", function (groupIndex, itemIndex) {
      return groupIndex > _this.state.breakAt.group || groupIndex === _this.state.breakAt.group && itemIndex >= _this.state.breakAt.item;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "calculateBreakItem", function () {
      if (!_this.hasAllGroupHeights()) {
        return;
      }

      var newBreak = {
        group: 999,
        item: 999
      };

      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          availableHeight = _assertThisInitialize.availableHeight,
          groupHeights = _assertThisInitialize.groupHeights;

      var cumulativeHeight = _sharedVariables.dropdownHeight + _sharedVariables.reservedGapHeight; // eslint-disable-line no-restricted-syntax,no-labels

      groupLoop: for (var g = 0; g < _this.props.groupCount; g++) {
        var group = groupHeights[g];
        cumulativeHeight += group.nonItemHeight;

        if (cumulativeHeight >= availableHeight) {
          newBreak.group = g;
          newBreak.item = 0;
          break;
        }

        var itemCount = group.itemHeights.length;

        for (var i = 0; i < itemCount; i++) {
          cumulativeHeight += group.itemHeights[i];

          if (cumulativeHeight >= availableHeight) {
            newBreak.group = g;
            newBreak.item = i;
            break groupLoop; // eslint-disable-line no-restricted-syntax,no-labels
          }
        }
      }

      if (_this.state.breakAt.group !== newBreak.group || _this.state.breakAt.item !== newBreak.item) {
        _this.setState({
          breakAt: newBreak
        });
      }
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "hasAllGroupHeights", function () {
      return (0, _sharedVariables.isArrayFilled)(_this.groupHeights);
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemGroupHeightReport", function (_ref2) {
      var groupIndex = _ref2.groupIndex,
          groupHeightInfo = (0, _objectWithoutProperties2.default)(_ref2, ["groupIndex"]);
      _this.groupHeights[groupIndex] = groupHeightInfo;

      _this.calculateBreakItem();
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleAvailableHeightChange", function (availableHeight) {
      if (availableHeight === _this.availableHeight) {
        return;
      }

      _this.availableHeight = availableHeight;

      _this.calculateBreakItem();
    });
    _this.groupHeights = new Array(_this.props.groupCount);
    return _this;
  }

  (0, _createClass2.default)(OverflowManager, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          position: 'relative',
          height: '100%'
        }
      }, _react.default.createElement(_HeightDetector.default, {
        onHeightChange: this.handleAvailableHeightChange
      }, _react.default.createElement(_OverflowHeightReportEnabler.default, null, this.props.children), this.state.breakAt.group <= this.props.groupCount ? _react.default.createElement(_OverflowDropdown.default, null, this.props.children) : null));
    }
  }]);
  return OverflowManager;
}(_react.Component);

exports.default = OverflowManager;
(0, _defineProperty3.default)(OverflowManager, "childContextTypes", (0, _defineProperty3.default)({}, _sharedVariables.overflowManagerNamespace, _propTypes.default.object));