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

var _uuid = _interopRequireDefault(require("uuid"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _Stateless = _interopRequireDefault(require("./Stateless"));

// =============================================================
// NOTE: Duplicated in ./internal/appearances until docgen can follow imports.
// -------------------------------------------------------------
// DO NOT update values here without updating the other.
// =============================================================
var appearances = {
  values: ['default', 'subtle'],
  default: 'default'
};

var MultiSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(MultiSelect, _PureComponent);

  function MultiSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MultiSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MultiSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: _this.props.isDefaultOpen,
      selectedItems: _this.props.defaultSelected,
      filterValue: '',
      items: _this.props.items
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectItem", function (item) {
      var selectedItems = [].concat((0, _toConsumableArray2.default)(_this.state.selectedItems), [item]);

      _this.setState({
        selectedItems: selectedItems
      });

      _this.props.onSelectedChange({
        items: selectedItems,
        action: 'select',
        changed: item
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeItem", function (item) {
      var selectedItems = _this.state.selectedItems.filter(function (i) {
        return i.value !== item.value;
      });

      _this.setState({
        selectedItems: selectedItems
      });

      _this.props.onSelectedChange({
        items: selectedItems,
        action: 'remove',
        changed: item
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectedChange", function (item) {
      if (_this.state.selectedItems.some(function (i) {
        return i.value === item.value;
      })) {
        _this.removeItem(item);
      } else {
        _this.selectItem(item);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFilterChange", function (value) {
      _this.props.onFilterChange(value);

      _this.setState({
        filterValue: value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenChange", function (attrs) {
      if (_this.state.isOpen !== attrs.isOpen) {
        _this.props.onOpenChange(attrs);
      }

      _this.setState({
        isOpen: attrs.isOpen
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNewItemCreate", function (_ref) {
      var textValue = _ref.value;
      // eslint-disable-line react/no-unused-prop-types
      var _this$state = _this.state,
          items = _this$state.items,
          selectedItems = _this$state.selectedItems;
      var id = (0, _uuid.default)();
      var newItem = {
        value: id,
        content: textValue
      };
      var newItemsArray = (0, _toConsumableArray2.default)(items);
      newItemsArray[newItemsArray.length - 1].items.push(newItem);

      _this.setState({
        items: newItemsArray,
        selectedItems: [].concat((0, _toConsumableArray2.default)(selectedItems), [newItem]),
        filterValue: ''
      });

      _this.props.onNewItemCreated({
        value: textValue,
        item: newItem
      });
    });
    return _this;
  }

  (0, _createClass2.default)(MultiSelect, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.items !== this.state.items) {
        this.setState({
          items: (0, _toConsumableArray2.default)(nextProps.items)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          createNewItemLabel = _this$props.createNewItemLabel,
          footer = _this$props.footer,
          id = _this$props.id,
          isDisabled = _this$props.isDisabled,
          isFirstChild = _this$props.isFirstChild,
          isInvalid = _this$props.isInvalid,
          invalidMessage = _this$props.invalidMessage,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          name = _this$props.name,
          noMatchesFound = _this$props.noMatchesFound,
          placeholder = _this$props.placeholder,
          position = _this$props.position,
          shouldAllowCreateItem = _this$props.shouldAllowCreateItem,
          shouldFitContainer = _this$props.shouldFitContainer,
          shouldFocus = _this$props.shouldFocus,
          shouldFlip = _this$props.shouldFlip,
          icon = _this$props.icon;
      var _this$state2 = this.state,
          filterValue = _this$state2.filterValue,
          isOpen = _this$state2.isOpen,
          items = _this$state2.items,
          selectedItems = _this$state2.selectedItems;
      return _react.default.createElement(_Stateless.default, {
        appearance: appearance,
        createNewItemLabel: createNewItemLabel,
        filterValue: filterValue,
        footer: footer,
        id: id,
        isDisabled: isDisabled,
        isFirstChild: isFirstChild,
        isInvalid: isInvalid,
        invalidMessage: invalidMessage,
        isOpen: isOpen,
        isRequired: isRequired,
        items: items,
        label: label,
        name: name,
        noMatchesFound: noMatchesFound,
        onFilterChange: this.handleFilterChange,
        onNewItemCreated: this.handleNewItemCreate,
        onOpenChange: this.handleOpenChange,
        onRemoved: this.selectedChange,
        onSelected: this.selectedChange,
        placeholder: placeholder,
        position: position,
        selectedItems: selectedItems,
        shouldAllowCreateItem: shouldAllowCreateItem,
        shouldFitContainer: shouldFitContainer,
        shouldFocus: shouldFocus,
        shouldFlip: shouldFlip,
        icon: icon
      });
    }
  }]);
  return MultiSelect;
}(_react.PureComponent);

exports.default = MultiSelect;
(0, _defineProperty2.default)(MultiSelect, "defaultProps", {
  appearance: appearances.default,
  createNewItemLabel: 'New item',
  defaultSelected: [],
  shouldFocus: false,
  shouldFlip: true,
  isRequired: false,
  items: [],
  label: '',
  onFilterChange: function onFilterChange() {},
  onNewItemCreated: function onNewItemCreated() {},
  onOpenChange: function onOpenChange() {},
  onSelectedChange: function onSelectedChange() {},
  position: 'bottom left',
  shouldAllowCreateItem: false,
  icon: _react.default.createElement(_chevronDown.default, {
    label: ""
  })
});