"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getTextContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _droplist = _interopRequireWildcard(require("@atlaskit/droplist"));

var _fieldBase = _interopRequireWildcard(require("@atlaskit/field-base"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _appearances = require("./appearances");

var _Autocomplete = require("../styled/Autocomplete");

var _Content = _interopRequireDefault(require("../styled/Content"));

var _ElemBefore = _interopRequireDefault(require("../styled/ElemBefore"));

var _Expand = _interopRequireDefault(require("../styled/Expand"));

var _InitialLoading = _interopRequireDefault(require("./InitialLoading"));

var _NothingWasFound = _interopRequireDefault(require("./NothingWasFound"));

var _Placeholder = _interopRequireDefault(require("../styled/Placeholder"));

var _StatelessSelectWrapper = _interopRequireDefault(require("../styled/StatelessSelectWrapper"));

var _Trigger = _interopRequireDefault(require("../styled/Trigger"));

// =============================================================
// NOTE: Duplicated in ./internal/appearances until docgen can follow imports.
// -------------------------------------------------------------
// DO NOT update values here without updating the other.
// =============================================================
var appearances = {
  values: ['default', 'subtle'],
  default: 'default'
};

var getTextContent = function getTextContent(item) {
  if (!item || Object.keys(item).length === 0) {
    return '';
  }

  if (typeof item.content === 'string') {
    return item.content;
  }

  if (!item.label && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('SingleSelect: item.label must be set when item.content is JSX');
  }

  return item.label || '';
};

exports.getTextContent = getTextContent;

var isMatched = function isMatched(item, matchingValue) {
  var filterValues = item.filterValues;

  if (filterValues && filterValues.length > 0) {
    return filterValues.some(function (value) {
      return value.toLowerCase().indexOf(matchingValue) > -1;
    });
  }

  return getTextContent(item).toLowerCase().indexOf(matchingValue) > -1;
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/single-select has been deprecated. Please use the @atlaskit/select package instead.');
}

var StatelessSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(StatelessSelect, _PureComponent);

  function StatelessSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StatelessSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StatelessSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "containerNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "droplistNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nativeSearchKey", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "previousKey", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nativeSearchCounter", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      focusedItemIndex: undefined,
      droplistWidth: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      if (_this.props.isOpen || _this.props.shouldFocus) {
        _this.focus();
      }

      if (!_this.props.droplistShouldFitContainer && _this.droplistNode) {
        _this.setDroplistMinWidth();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidUpdate", function (prevProps) {
      if (!prevProps.shouldFocus && _this.props.shouldFocus || !prevProps.isOpen && _this.props.isOpen) {
        _this.focus();
      }

      if (!_this.props.droplistShouldFitContainer && _this.droplistNode) {
        _this.setDroplistMinWidth();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOpenChange", function (attrs) {
      _this.props.onOpenChange(attrs);

      _this.setState({
        focusedItemIndex: undefined
      });

      if (attrs.isOpen) {
        _this.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getNextFocusable", function (indexItem, length) {
      var currentItem = indexItem;

      if (currentItem === undefined) {
        currentItem = 0;
      } else if (currentItem < length) {
        currentItem++;
      } else {
        currentItem = 0;
      }

      return currentItem;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPrevFocusable", function (indexItem, length) {
      var currentItem = indexItem;

      if (currentItem && currentItem > 0) {
        currentItem--;
      } else {
        currentItem = length;
      }

      return currentItem;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getAllItems", function (groups) {
      var allItems = [];
      groups.forEach(function (val) {
        allItems = allItems.concat(val.items);
      });
      return allItems;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getAllVisibleItems", function (groups) {
      return groups ? _this.filterItems(_this.getAllItems(groups)) : [];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getNextNativeSearchItem", function (items, key, currentIndex, isSecondStep) {
      var result;
      var res = items.find(function (item, index) {
        var content = getTextContent(item).toLowerCase();

        if (index <= currentIndex) {
          return false;
        }

        return content && content.indexOf(key.toLowerCase()) === 0;
      });

      if (res) {
        result = res;
      } else if (!res && !isSecondStep) {
        result = _this.getNextNativeSearchItem(items, key, -1, true);
      }

      return result;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setDroplistMinWidth", function () {
      var width = _this.triggerNode ? _this.triggerNode.getBoundingClientRect().width : undefined;

      _this.setState({
        droplistWidth: width
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getItemTrueIndex", function (itemIndex) {
      var groupIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return itemIndex + _this.props.items.filter(function (group, thisGroupIndex) {
        return thisGroupIndex < groupIndex;
      }).reduce(function (totalItems, group) {
        return totalItems + group.items.length;
      }, 0);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focus", function () {
      if (_this.inputNode) {
        _this.inputNode.focus();
      } else if (_this.triggerNode) {
        _this.triggerNode.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearNativeSearch", function () {
      _this.nativeSearchKey = '';
      _this.nativeSearchCounter = undefined;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "filterItems", function (items) {
      var value = _this.props.filterValue;
      var trimmedValue = value && value.toLowerCase().trim();
      var selectedItem = _this.props.selectedItem;
      var unselectedItems = items.filter(function (item) {
        return selectedItem && selectedItem.value !== item.value;
      });
      var selectedItemContent = getTextContent(selectedItem).toLowerCase();
      return trimmedValue && trimmedValue !== selectedItemContent ? unselectedItems.filter(function (item) {
        return isMatched(item, trimmedValue);
      }) : unselectedItems;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "scrollToFocused", function (index) {
      var scrollable = _this.containerNode ? _this.containerNode.querySelector('[data-role="droplistContent"]') : undefined;
      var item;

      if (scrollable && index !== undefined) {
        item = scrollable.querySelectorAll('[data-role="droplistItem"]')[index];
      }

      if (item && scrollable) {
        scrollable.scrollTop = item.offsetTop - scrollable.clientHeight + item.clientHeight;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusNextItem", function () {
      var filteredItems = _this.getAllVisibleItems(_this.props.items);

      var length = filteredItems.length - 1;

      var index = _this.getNextFocusable(_this.state.focusedItemIndex, length);

      _this.setState({
        focusedItemIndex: index
      });

      _this.scrollToFocused(index);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusPreviousItem", function () {
      var filteredItems = _this.getAllVisibleItems(_this.props.items);

      var length = filteredItems.length - 1;

      var index = _this.getPrevFocusable(_this.state.focusedItemIndex, length);

      _this.setState({
        focusedItemIndex: index
      });

      _this.scrollToFocused(index);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusItem", function (item) {
      var filteredItems = _this.getAllVisibleItems(_this.props.items);

      var index = filteredItems.indexOf(item);

      _this.setState({
        focusedItemIndex: index
      });

      _this.scrollToFocused(index);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNativeSearch", function (event) {
      var _this$props = _this.props,
          selectedItem = _this$props.selectedItem,
          items = _this$props.items;
      var eventKey = event.key;

      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          nativeSearchKey = _assertThisInitialize.nativeSearchKey;

      var allItems = _this.getAllItems(items);

      if (!_this.nativeSearchCounter) {
        nativeSearchKey = eventKey;
      } else {
        nativeSearchKey += eventKey;
      }

      var current = _this.state.focusedItemIndex !== undefined ? _this.state.focusedItemIndex : allItems.indexOf(selectedItem);
      var allItemsWithoutSelected = selectedItem && selectedItem.value ? allItems.filter(function (item) {
        return item.value !== selectedItem.value;
      }) : allItems;

      if (!_this.props.isOpen) {
        var matchingItem = _this.getNextNativeSearchItem(allItems, nativeSearchKey, current);

        _this.handleItemSelect(matchingItem, {
          event: event
        });
      } else {
        var _matchingItem = _this.getNextNativeSearchItem(allItemsWithoutSelected, nativeSearchKey, current);

        _this.focusItem(_matchingItem);
      }

      if (_this.nativeSearchCounter) {
        clearTimeout(_this.nativeSearchCounter);
      }

      _this.nativeSearchCounter = setTimeout(_this.clearNativeSearch, 200);
      _this.previousKey = eventKey;
      _this.nativeSearchKey = nativeSearchKey;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboardInteractions", function (event) {
      var isSelectOpen = _this.props.isOpen;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();

          if (!isSelectOpen) {
            _this.onOpenChange({
              event: event,
              isOpen: true
            });
          }

          _this.focusNextItem();

          break;

        case 'ArrowUp':
          event.preventDefault();

          if (isSelectOpen) {
            _this.focusPreviousItem();
          }

          break;

        case 'Enter':
          if (isSelectOpen) {
            event.preventDefault();

            var visibleItems = _this.getAllVisibleItems(_this.props.items);

            if (_this.state.focusedItemIndex !== undefined) {
              _this.handleItemSelect(visibleItems.length ? visibleItems[_this.state.focusedItemIndex] : undefined, {
                event: event
              });
            }
          }

          break;

        default:
          if (!_this.props.hasAutocomplete) {
            _this.handleNativeSearch(event);
          }

          break;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInputOnChange", function (event) {
      var value = event.currentTarget.value;

      if (value !== _this.props.filterValue) {
        _this.props.onFilterChange(value);

        _this.onOpenChange({
          event: event,
          isOpen: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTriggerClick", function (event) {
      if (!_this.props.isDisabled) {
        _this.onOpenChange({
          event: event,
          isOpen: !_this.props.isOpen
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOnBlur", function (event) {
      _this.onOpenChange({
        event: event,
        isOpen: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemSelect", function (item, attrs) {
      if (item && !item.isDisabled) {
        _this.props.onOpenChange({
          isOpen: false,
          event: attrs.event
        });

        _this.props.onSelected(item);

        _this.props.onFilterChange(getTextContent(item));

        _this.setState({
          focusedItemIndex: undefined
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderItems", function (items) {
      var groupIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var filteredItems = _this.filterItems(items);

      if (filteredItems.length) {
        return filteredItems.map(function (item, itemIndex) {
          return _react.default.createElement(_droplist.Item, (0, _extends2.default)({}, item, {
            isFocused: _this.getItemTrueIndex(itemIndex, groupIndex) === _this.state.focusedItemIndex,
            key: itemIndex // eslint-disable-line react/no-array-index-key
            ,
            onActivate: function onActivate(attrs) {
              _this.handleItemSelect(item, attrs);
            },
            type: "option"
          }), item.content);
        });
      }

      return _react.default.createElement(_NothingWasFound.default, {
        noMatchesFound: _this.props.noMatchesFound
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderGroups", function (groups) {
      if (_this.props.isLoading) {
        return _react.default.createElement(_InitialLoading.default, null, _this.props.loadingMessage);
      }

      var filteredGroups = groups.filter(function (group) {
        return _this.filterItems(group.items).length;
      }).map(function (group, groupIndex) {
        return _react.default.createElement(_droplist.Group, {
          heading: group.heading,
          key: groupIndex // eslint-disable-line react/no-array-index-key

        }, _this.renderItems(group.items, groupIndex));
      });

      if (filteredGroups.length === 0) {
        return _react.default.createElement(_NothingWasFound.default, {
          noMatchesFound: _this.props.noMatchesFound
        });
      }

      return filteredGroups;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderOptions", function (items) {
      return items.map(function (item, itemIndex) {
        return _react.default.createElement("option", {
          disabled: item.isDisabled,
          key: itemIndex // eslint-disable-line react/no-array-index-key
          ,
          value: item.value
        }, getTextContent(item));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderOptGroups", function (groups) {
      return groups.map(function (group, groupIndex) {
        return _react.default.createElement("optgroup", {
          label: group.heading,
          key: groupIndex // eslint-disable-line react/no-array-index-key

        }, _this.renderOptions(group.items));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelect", function () {
      return _react.default.createElement("select", {
        disabled: _this.props.isDisabled,
        id: _this.props.id,
        name: _this.props.name,
        readOnly: true,
        required: _this.props.isRequired,
        style: {
          display: 'none'
        },
        value: _this.props.selectedItem ? _this.props.selectedItem.value : undefined
      }, _react.default.createElement("option", {
        value: ""
      }), _this.renderOptGroups(_this.props.items));
    });
    return _this;
  }

  (0, _createClass2.default)(StatelessSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          appearance = _this$props2.appearance,
          droplistShouldFitContainer = _this$props2.droplistShouldFitContainer,
          filterValue = _this$props2.filterValue,
          hasAutocomplete = _this$props2.hasAutocomplete,
          id = _this$props2.id,
          invalidMessage = _this$props2.invalidMessage,
          isDisabled = _this$props2.isDisabled,
          isFirstChild = _this$props2.isFirstChild,
          isInvalid = _this$props2.isInvalid,
          isLoading = _this$props2.isLoading,
          isOpen = _this$props2.isOpen,
          isRequired = _this$props2.isRequired,
          items = _this$props2.items,
          label = _this$props2.label,
          placeholder = _this$props2.placeholder,
          position = _this$props2.position,
          selectedItem = _this$props2.selectedItem,
          shouldFitContainer = _this$props2.shouldFitContainer,
          shouldFlip = _this$props2.shouldFlip,
          maxHeight = _this$props2.maxHeight; // disabled because all of the accessibility is handled manually

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return _react.default.createElement(_StatelessSelectWrapper.default, {
        onKeyDown: this.handleKeyboardInteractions,
        innerRef: function innerRef(ref) {
          _this2.containerNode = ref;
        },
        shouldFitContainer: shouldFitContainer
      }, this.renderSelect(), label ? _react.default.createElement(_fieldBase.Label, {
        htmlFor: id,
        isFirstChild: isFirstChild,
        isRequired: isRequired,
        label: label
      }) : null, _react.default.createElement(_droplist.default, {
        isKeyboardInteractionDisabled: true,
        isOpen: isOpen,
        isTriggerDisabled: true,
        isTriggerNotTabbable: true,
        onOpenChange: this.onOpenChange,
        position: position,
        shouldFitContainer: droplistShouldFitContainer,
        shouldFlip: shouldFlip,
        maxHeight: maxHeight,
        trigger: _react.default.createElement(_fieldBase.default, {
          appearance: (0, _appearances.mapAppearanceToFieldBase)(appearance),
          isDisabled: isDisabled,
          isFitContainerWidthEnabled: true,
          isInvalid: isInvalid,
          invalidMessage: invalidMessage,
          isPaddingDisabled: true,
          onBlur: this.handleOnBlur
        }, _react.default.createElement(_Trigger.default, {
          onClick: this.handleTriggerClick,
          tabIndex: !isDisabled && !hasAutocomplete ? '0' : null,
          innerRef: function innerRef(ref) {
            _this2.triggerNode = ref;
          }
        }, !hasAutocomplete || isDisabled ? _react.default.createElement(_Content.default, null, selectedItem && selectedItem.elemBefore ? _react.default.createElement(_ElemBefore.default, null, selectedItem.elemBefore) : null, selectedItem && selectedItem.content ? _react.default.createElement("span", null, getTextContent(selectedItem)) : _react.default.createElement(_Placeholder.default, null, placeholder)) : _react.default.createElement(_Autocomplete.AutocompleteWrapper, null, _react.default.createElement(_Autocomplete.AutocompleteInput, {
          autoComplete: "off",
          onChange: this.handleInputOnChange,
          placeholder: placeholder,
          innerRef: function innerRef(ref) {
            _this2.inputNode = ref;
          },
          type: "text",
          value: filterValue,
          disabled: isDisabled
        })), _react.default.createElement(_Expand.default, null, isOpen && isLoading ? _react.default.createElement(_spinner.default, null) : _react.default.createElement(_chevronDown.default, {
          label: ""
        }))))
      }, _react.default.createElement("div", {
        ref: function ref(_ref) {
          _this2.droplistNode = _ref;
        },
        style: {
          minWidth: this.state.droplistWidth
        }
      }, this.renderGroups(items))));
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);
  return StatelessSelect;
}(_react.PureComponent);

exports.default = StatelessSelect;
(0, _defineProperty2.default)(StatelessSelect, "defaultProps", {
  appearance: appearances.default,
  droplistShouldFitContainer: true,
  filterValue: '',
  hasAutocomplete: false,
  isLoading: false,
  isOpen: false,
  isRequired: false,
  items: [],
  label: '',
  loadingMessage: 'Receiving information',
  noMatchesFound: 'No matches found',
  onFilterChange: function onFilterChange() {},
  onSelected: function onSelected() {},
  onOpenChange: function onOpenChange() {},
  placeholder: '',
  position: 'bottom left',
  shouldFocus: false,
  selectedItem: {},
  shouldFlip: true
});