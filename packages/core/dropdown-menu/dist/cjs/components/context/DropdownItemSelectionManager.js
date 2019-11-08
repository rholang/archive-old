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

var _defineProperty4 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _contextNamespace = require("../../util/contextNamespace");

var DropdownItemSelectionManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItemSelectionManager, _Component);

  function DropdownItemSelectionManager() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownItemSelectionManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownItemSelectionManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "setItemSelected", function (itemId, isSelected, defaultSelected) {
      var _this$props = _this.props,
          behavior = _this$props.behavior,
          groupId = _this$props.groupId;

      var setSelected = function setSelected(finalBool) {
        if (behavior === 'checkbox' || behavior === 'menuitemcheckbox') {
          _this.setCheckboxItemSelected(itemId, finalBool);
        } else if (behavior === 'radio' || behavior === 'menuitemradio') {
          _this.setRadioItemSelected(itemId, finalBool);
        }
      }; // If a radio or checkbox item has defaultSelected set on it, that it will try to set its
      // selected state to true each time it mounts (which happens whenever the dropdown is re-
      // opened by the user. The following check makes sure that the defaultSelected behaviour
      // only applies on the first mount of the radio/checkbox.


      if (typeof isSelected === 'boolean') {
        // If isSelected is explicitly provided, set it to that
        setSelected(isSelected);
      } else if (defaultSelected) {
        if (!_this.hasAlreadyAppliedDefaultSelected(itemId)) {
          // If using defaultSelected and this is first mount, select the item
          setSelected(true);

          _this.context[_contextNamespace.selectionCacheContext].markItemAsDefaultApplied(groupId, itemId);
        } else {
          // If using defaultSelected and not first mount, set isSelected to cached value
          setSelected(_this.isItemSelectedInCache(itemId));
        }
      } else {
        setSelected(_this.isItemSelectedInCache(itemId));
      }
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "setCheckboxItemSelected", function (itemId, isSelected) {
      var cache = _this.context[_contextNamespace.selectionCacheContext];
      var alreadySelected = cache.itemsInGroup(_this.props.groupId);
      var isAlreadySelected = cache.isItemSelected(_this.props.groupId, itemId);

      if (isSelected && !isAlreadySelected) {
        _this.updateCacheContextWithSelections([].concat((0, _toConsumableArray2.default)(alreadySelected), [{
          id: itemId,
          groupId: _this.props.groupId
        }]));
      } else if (!isSelected && isAlreadySelected) {
        var withoutCurrentItem = alreadySelected.filter(function (item) {
          return item.id !== itemId;
        });

        _this.updateCacheContextWithSelections(withoutCurrentItem);
      }
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "setRadioItemSelected", function (itemId, isSelected) {
      var cache = _this.context[_contextNamespace.selectionCacheContext];
      var isAlreadySelected = cache.isItemSelected(_this.props.groupId, itemId);

      if (isAlreadySelected && !isSelected) {
        _this.updateCacheContextWithSelections([]);
      } else if (!isAlreadySelected && isSelected) {
        _this.updateCacheContextWithSelections([{
          id: itemId,
          groupId: _this.props.groupId
        }]);
      }
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "isItemSelectedInCache", function (itemId) {
      return _this.context[_contextNamespace.selectionCacheContext].isItemSelected(_this.props.groupId, itemId);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "handleItemClicked", function (clickedItemId) {
      var behavior = _this.props.behavior;

      if (behavior === 'checkbox' || behavior === 'menuitemcheckbox') {
        _this.handleCheckboxItemClicked(clickedItemId);
      } else if (behavior === 'radio' || behavior === 'menuitemradio') {
        _this.handleRadioItemClicked(clickedItemId);
      }
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "hasAlreadyAppliedDefaultSelected", function (itemId) {
      return _this.context[_contextNamespace.selectionCacheContext].hasItemAlreadyHadDefaultSelectedApplied(_this.props.groupId, itemId);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "handleCheckboxItemClicked", function (clickedItemId) {
      var cache = _this.context[_contextNamespace.selectionCacheContext];
      var itemsInGroup = cache.itemsInGroup(_this.props.groupId);
      var newSelections = cache.isItemSelected(_this.props.groupId, clickedItemId) ? itemsInGroup.filter(function (item) {
        return item.id !== clickedItemId;
      }) : [].concat((0, _toConsumableArray2.default)(itemsInGroup), [{
        id: clickedItemId,
        groupId: _this.props.groupId
      }]);

      _this.updateCacheContextWithSelections(newSelections);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "handleRadioItemClicked", function (clickedItemId) {
      _this.updateCacheContextWithSelections([{
        id: clickedItemId,
        groupId: _this.props.groupId
      }]);
    });
    (0, _defineProperty4.default)((0, _assertThisInitialized2.default)(_this), "updateCacheContextWithSelections", function (itemSelections) {
      _this.context[_contextNamespace.selectionCacheContext].itemSelectionsChanged(_this.props.groupId, itemSelections);
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownItemSelectionManager, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return (0, _defineProperty4.default)({}, _contextNamespace.selectionManagerContext, {
        isItemSelected: function isItemSelected(itemId) {
          return _this2.context[_contextNamespace.selectionCacheContext].isItemSelected(_this2.props.groupId, itemId);
        },
        itemClicked: this.handleItemClicked,
        setItemSelected: this.setItemSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.props.children);
    }
  }]);
  return DropdownItemSelectionManager;
}(_react.Component);

exports.default = DropdownItemSelectionManager;
(0, _defineProperty4.default)(DropdownItemSelectionManager, "childContextTypes", (0, _defineProperty4.default)({}, _contextNamespace.selectionManagerContext, _propTypes.default.object));
(0, _defineProperty4.default)(DropdownItemSelectionManager, "contextTypes", (0, _defineProperty4.default)({}, _contextNamespace.selectionCacheContext, _propTypes.default.object.isRequired));