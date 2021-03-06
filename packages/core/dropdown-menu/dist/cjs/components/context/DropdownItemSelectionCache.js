"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrayFind = _interopRequireDefault(require("array-find"));

var _contextNamespace = require("../../util/contextNamespace");

var isItemInList = function isItemInList(itemList, itemId, groupId) {
  return Boolean((0, _arrayFind.default)(itemList, function (item) {
    return item.id === itemId && item.groupId === groupId;
  }));
};

var DropdownItemSelectionCache =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItemSelectionCache, _Component);

  function DropdownItemSelectionCache() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownItemSelectionCache);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownItemSelectionCache)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "state", {
      lastCacheUpdate: 0
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "selectedItems", []);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "alreadyDefaultedItems", []);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemSelectionsChanged", function (groupId, newGroupSelections) {
      var newSelectedItems = [].concat((0, _toConsumableArray2.default)(_this.selectedItems.filter(function (item) {
        return item.groupId !== groupId;
      })), (0, _toConsumableArray2.default)(newGroupSelections));
      _this.selectedItems = newSelectedItems; // We store selectedItems in an instance variable (this.selectedItems) instead of state,
      // because if multiple children update the cache at the same time it causes unexpected
      // behaviour due to the asynchronous behaviour of setState. So we need to trigger setState
      // with a different value to cause the children to be updated with their new selection values.

      _this.setState({
        lastCacheUpdate: Date.now()
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownItemSelectionCache, [{
    key: "getChildContext",
    // eslint-disable-line react/sort-comp
    value: function getChildContext() {
      var _this2 = this;

      return (0, _defineProperty3.default)({}, _contextNamespace.selectionCacheContext, {
        // This function returns true/false describing whether the supplied navigation item
        // (which must have a unique item and group ID) is currently selected - this is used
        // by radio and checkbox dropdown items to retreive their 'selected' state when they
        // re-mount, which happens when the dropdown is closed and then re-opened.
        isItemSelected: function isItemSelected(groupId, itemId) {
          return isItemInList(_this2.selectedItems, itemId, groupId);
        },
        itemsInGroup: function itemsInGroup(groupId) {
          return _this2.selectedItems.filter(function (item) {
            return item.groupId === groupId;
          });
        },
        itemSelectionsChanged: this.handleItemSelectionsChanged,
        hasItemAlreadyHadDefaultSelectedApplied: function hasItemAlreadyHadDefaultSelectedApplied(groupId, itemId) {
          return isItemInList(_this2.alreadyDefaultedItems, itemId, groupId);
        },
        markItemAsDefaultApplied: function markItemAsDefaultApplied(groupId, itemId) {
          _this2.alreadyDefaultedItems.push({
            id: itemId,
            groupId: groupId
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.props.children);
    }
  }]);
  return DropdownItemSelectionCache;
}(_react.Component);

exports.default = DropdownItemSelectionCache;
(0, _defineProperty3.default)(DropdownItemSelectionCache, "childContextTypes", (0, _defineProperty3.default)({}, _contextNamespace.selectionCacheContext, _propTypes.default.shape({
  isItemSelected: _propTypes.default.func,
  itemsInGroup: _propTypes.default.func,
  itemSelectionsChanged: _propTypes.default.func
})));