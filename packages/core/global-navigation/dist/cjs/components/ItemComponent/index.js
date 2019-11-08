"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf4 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _dropdownMenu = require("@atlaskit/dropdown-menu");

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _navigationNext = require("@atlaskit/navigation-next");

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenChange", function (_ref) {
      var isOpen = _ref.isOpen;
      return _this.setState({
        isOpen: isOpen
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          Trigger = _this$props.trigger;
      var isOpen = this.state.isOpen;
      return (0, _core.jsx)(_dropdownMenu.DropdownMenuStateless, {
        appearance: "tall",
        boundariesElement: "window",
        isOpen: isOpen,
        onOpenChange: this.handleOpenChange,
        position: "right bottom",
        trigger: (0, _core.jsx)(Trigger, {
          isOpen: isOpen
        })
      }, items);
    }
  }]);
  return DropdownItem;
}(_react.Component);

var ItemComponent = function ItemComponent(props) {
  var DropdownItems = props.dropdownItems,
      CustomItemComponent = props.itemComponent,
      badgeCount = props.badgeCount,
      itemProps = (0, _objectWithoutProperties2.default)(props, ["dropdownItems", "itemComponent", "badgeCount"]);

  if (CustomItemComponent) {
    return (0, _core.jsx)(CustomItemComponent, itemProps);
  }

  if (DropdownItems) {
    return (0, _core.jsx)(DropdownItem, {
      trigger: function trigger(_ref2) {
        var isOpen = _ref2.isOpen;
        return (0, _core.jsx)(_navigationNext.GlobalItem, (0, _extends2.default)({
          isSelected: isOpen
        }, itemProps));
      },
      items: (0, _core.jsx)(DropdownItems, null)
    });
  }

  if (badgeCount !== undefined) {
    return (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
      data: {
        attributes: {
          badgeCount: badgeCount
        }
      }
    }, (0, _core.jsx)(_navigationNext.GlobalItem, itemProps));
  }

  return (0, _core.jsx)(_navigationNext.GlobalItem, itemProps);
};

// eslint-disable-next-line react/no-multi-comp
var ItemComponentWithRef =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(ItemComponentWithRef, _Component2);

  function ItemComponentWithRef() {
    var _getPrototypeOf3;

    var _this2;

    (0, _classCallCheck2.default)(this, ItemComponentWithRef);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(ItemComponentWithRef)).call.apply(_getPrototypeOf3, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "node", (0, _react.createRef)());
    return _this2;
  }

  (0, _createClass2.default)(ItemComponentWithRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.publishRef();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.publishRef();
    }
  }, {
    key: "publishRef",
    value: function publishRef() {
      var getRef = this.props.getRef;

      if (typeof getRef === 'function') {
        getRef(this.node);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ref = _this$props2.ref,
          itemProps = (0, _objectWithoutProperties2.default)(_this$props2, ["ref"]);
      return (0, _core.jsx)("span", {
        ref: this.node
      }, (0, _core.jsx)(ItemComponent, itemProps));
    }
  }]);
  return ItemComponentWithRef;
}(_react.Component);

exports.default = ItemComponentWithRef;