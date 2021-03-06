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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _DropdownMenuStateless = _interopRequireDefault(require("./DropdownMenuStateless"));

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownMenu, _Component);

  function DropdownMenu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownMenu);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownMenu)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: _this.props.defaultOpen,
      items: (0, _toConsumableArray2.default)(_this.props.items)
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "findActivatedGroup", function (item) {
      return _this.state.items.filter(function (group) {
        return group.items.indexOf(item) > -1;
      })[0];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemActivation", function (attrs) {
      var activatedItem = attrs.item;

      var activatedGroup = _this.findActivatedGroup(activatedItem);

      var items = (0, _toConsumableArray2.default)(_this.state.items);

      switch (activatedItem.type) {
        case 'checkbox':
          activatedItem.isChecked = !activatedItem.isChecked;

          _this.props.onItemActivated({
            item: activatedItem
          });

          _this.setState({
            items: items
          });

          break;

        case 'radio':
          activatedGroup.items.forEach(function (i) {
            if (i === activatedItem) {
              i.isChecked = true; // eslint-disable-line no-param-reassign
            } else {
              i.isChecked = false; // eslint-disable-line no-param-reassign
            }
          });

          _this.props.onItemActivated({
            item: activatedItem
          });

          _this.setState({
            items: items
          });

          break;

        case 'link':
        default:
          _this.props.onItemActivated({
            item: activatedItem
          });

          _this.close();

          break;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenChange", function (attrs) {
      var _this$props;

      if (_this.state.isOpen === attrs.isOpen) return;

      _this.setState({
        isOpen: attrs.isOpen
      });

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_this$props = _this.props).onOpenChange.apply(_this$props, [attrs].concat(args));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function () {
      var _this$props2;

      if (_this.state.isOpen === false) return;

      _this.setState({
        isOpen: false
      });

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_this$props2 = _this.props).onOpenChange.apply(_this$props2, [{
        isOpen: false
      }].concat(args));
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownMenu, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.items !== this.state.items) {
        this.setState({
          items: (0, _toConsumableArray2.default)(nextProps.items)
        });
      }

      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props3 = this.props,
          appearance = _this$props3.appearance,
          boundariesElement = _this$props3.boundariesElement,
          children = _this$props3.children,
          isLoading = _this$props3.isLoading,
          items = _this$props3.items,
          position = _this$props3.position,
          isMenuFixed = _this$props3.isMenuFixed,
          shouldAllowMultilineItems = _this$props3.shouldAllowMultilineItems,
          shouldFitContainer = _this$props3.shouldFitContainer,
          shouldFlip = _this$props3.shouldFlip,
          testId = _this$props3.testId,
          trigger = _this$props3.trigger,
          triggerButtonProps = _this$props3.triggerButtonProps,
          triggerType = _this$props3.triggerType,
          onPositioned = _this$props3.onPositioned;
      return _react.default.createElement(_DropdownMenuStateless.default, {
        appearance: appearance,
        boundariesElement: boundariesElement,
        isOpen: isOpen,
        isLoading: isLoading,
        items: items,
        onItemActivated: this.handleItemActivation,
        onOpenChange: this.handleOpenChange,
        position: position,
        isMenuFixed: isMenuFixed,
        shouldAllowMultilineItems: shouldAllowMultilineItems,
        shouldFitContainer: shouldFitContainer,
        shouldFlip: shouldFlip,
        trigger: trigger,
        triggerButtonProps: triggerButtonProps,
        triggerType: triggerType,
        onPositioned: onPositioned,
        testId: testId
      }, children);
    }
  }]);
  return DropdownMenu;
}(_react.Component);

exports.default = DropdownMenu;
(0, _defineProperty2.default)(DropdownMenu, "defaultProps", {
  appearance: 'default',
  boundariesElement: 'viewport',
  defaultOpen: false,
  isLoading: false,
  isOpen: false,
  items: [],
  onItemActivated: function onItemActivated() {},
  onOpenChange: function onOpenChange() {},
  position: 'bottom left',
  isMenuFixed: false,
  shouldAllowMultilineItems: false,
  shouldFitContainer: false,
  shouldFlip: true,
  triggerType: 'default',
  onPositioned: function onPositioned() {}
});