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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _contextNamespace = require("../../util/contextNamespace");

var _keys = require("../../util/keys");

var DropdownItemFocusManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItemFocusManager, _Component);

  function DropdownItemFocusManager() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownItemFocusManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownItemFocusManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "registeredItems", []);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "focusedItemId", void 0);
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemRegistered", function (itemId, itemNode) {
      _this.registeredItems.push({
        itemId: itemId,
        itemNode: itemNode
      });

      if (_this.props.autoFocus && _this.registeredItems.length === 1) {
        _this.focusedItemId = itemId;
        itemNode.focus();
      }
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemDeregistered", function (itemId) {
      _this.registeredItems = _this.registeredItems.filter(function (item) {
        return item.itemId !== itemId;
      });
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemFocused", function (itemId) {
      _this.focusedItemId = itemId;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemUpdated", function (itemId, itemNode) {
      var matchingIndex = -1;

      for (var i = 0; i < _this.registeredItems.length; i++) {
        if (_this.registeredItems[i].itemId === itemId) {
          matchingIndex = i;
          break;
        }
      }

      if (matchingIndex === -1) {
        _this.handleItemRegistered(itemId, itemNode);

        return;
      }

      _this.registeredItems[matchingIndex].itemNode = itemNode;

      if (_this.focusedItemIndex() === matchingIndex) {
        itemNode.focus();
      }
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "focusedItemIndex", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          focusedItemId = _assertThisInitialize.focusedItemId,
          registeredItems = _assertThisInitialize.registeredItems;

      for (var i = 0; i < registeredItems.length; i++) {
        if (registeredItems[i].itemId === focusedItemId) {
          return i;
        }
      }

      return -1;
    });
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboard", function (event) {
      var key = event.key,
          shiftKey = event.shiftKey;

      var focusedItemIndex = _this.focusedItemIndex();

      if (key === _keys.KEY_UP || key === _keys.KEY_DOWN) {
        // We prevent default here to avoid page scrolling when up/down
        // pressed while dropdown is focused.
        event.preventDefault();

        if (focusedItemIndex < 0) {
          return;
        }

        var nextItemIndex = key === _keys.KEY_UP ? Math.max(0, focusedItemIndex - 1) : Math.min(_this.registeredItems.length - 1, focusedItemIndex + 1);

        _this.registeredItems[nextItemIndex].itemNode.focus();
      }

      if (key === _keys.KEY_TAB) {
        if (!shiftKey && focusedItemIndex === _this.registeredItems.length - 1) {
          if (_this.props.close) _this.props.close({
            event: event,
            source: 'keydown'
          });
        }

        if (shiftKey && focusedItemIndex === 0) {
          if (_this.props.close) _this.props.close({
            event: event,
            source: 'keydown'
          });
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownItemFocusManager, [{
    key: "getChildContext",
    value: function getChildContext() {
      return (0, _defineProperty3.default)({}, _contextNamespace.focusManagerContext, {
        itemFocused: this.handleItemFocused,
        registerItem: this.handleItemRegistered,
        deregisterItem: this.handleItemDeregistered,
        updateItem: this.handleItemUpdated
      });
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      return _react.default.createElement("div", {
        onKeyDown: this.handleKeyboard
      }, this.props.children);
    }
  }]);
  return DropdownItemFocusManager;
}(_react.Component);

exports.default = DropdownItemFocusManager;
(0, _defineProperty3.default)(DropdownItemFocusManager, "childContextTypes", (0, _defineProperty3.default)({}, _contextNamespace.focusManagerContext, _propTypes.default.object));