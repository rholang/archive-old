"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _droplist = _interopRequireDefault(require("@atlaskit/droplist"));

var _fieldBase = require("@atlaskit/field-base");

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _Stateless = require("../styled/Stateless");

var _Trigger = _interopRequireDefault(require("./Trigger"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _sharedFunctions = require("../internal/sharedFunctions");

var _Groups = _interopRequireDefault(require("./Groups"));

var _Options = _interopRequireDefault(require("./Options"));

// =============================================================
// NOTE: Duplicated in ./internal/appearances until docgen can follow imports.
// -------------------------------------------------------------
// DO NOT update values here without updating the other.
// =============================================================
var appearances = {
  values: ['default', 'subtle'],
  default: 'default'
};

var getAllValues = function getAllValues(selectedItems) {
  return selectedItems.map(function (item) {
    return item.value;
  });
};
/*

==============================+
COMPONENT CODE BEGINS HERE
==============================+

*/


if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/multi-select has been deprecated. Please use the @atlaskit/select package instead.');
}

var StatelessMultiSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(StatelessMultiSelect, _PureComponent);

  function StatelessMultiSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StatelessMultiSelect);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StatelessMultiSelect)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "tagGroup", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isFocused: _this.props.isOpen || _this.props.shouldFocus,
      focusedItemIndex: undefined,
      groupedItems: (0, _sharedFunctions.groupItems)(_this.props.items)
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      if (_this.state.isFocused && _this.inputNode) {
        _this.inputNode.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      if (_this.props.items !== nextProps.items) {
        _this.setState({
          groupedItems: (0, _sharedFunctions.groupItems)(nextProps.items)
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidUpdate", function (prevProps) {
      if (!prevProps.shouldFocus && _this.props.shouldFocus && _this.inputNode) {
        _this.inputNode.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function () {
      if (!_this.props.isDisabled) {
        _this.setState({
          isFocused: true
        });
        /**
         * Check if we're tabbing to the Remove button on a tag.
         * This is a hacky workaround for now and should be fixed when
         * we implement proper traversal for tags with the keyboard.
         *
         * @see {@link https://ecosystem.atlassian.net/browse/AK-2250}
         * @todo Implement traversal of tags with arrow keys, then remove this.
         */


        if (document.activeElement && document.activeElement.tagName.toLowerCase() !== 'button' && _this.inputNode) {
          _this.inputNode.focus();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function () {
      if (!_this.props.isDisabled) {
        _this.setState({
          isFocused: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOpenChange", function (attrs) {
      var target = attrs.event.currentTarget; // eslint-disable-next-line react/no-find-dom-node

      var tagGroup = _reactDom.default.findDOMNode(_this.tagGroup); // $FlowFixMe children method not found in Text Element property


      var tagGroupElements = tagGroup ? tagGroup.children : [];
      var isInsideTagGroup = (0, _toConsumableArray2.default)(tagGroupElements).some(function (node) {
        return node.contains(target) && node.tagName !== 'INPUT';
      });
      var args = (0, _objectSpread2.default)({}, attrs, {
        inputNode: _this.inputNode
      });

      if (!isInsideTagGroup) {
        _this.props.onOpenChange(args);
      } // $FlowFixMe querySelector method not found in Text Element property


      var tagInput = tagGroup ? tagGroup.querySelector('input') : undefined;

      if (attrs.isOpen && tagInput) {
        tagInput.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPlaceholder", function () {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          selectedItems = _this$props.selectedItems,
          placeholder = _this$props.placeholder;

      if (!isOpen && selectedItems.length === 0) {
        return placeholder;
      }

      return undefined;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getAllVisibleItems", function (groups) {
      var _this$props2 = _this.props,
          filterValue = _this$props2.filterValue,
          selectedItems = _this$props2.selectedItems;
      return groups.reduce(function (allFilteredItems, val) {
        var filteredItems = (0, _sharedFunctions.filterItems)(val.items, filterValue, selectedItems);
        return allFilteredItems.concat(filteredItems);
      }, []);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemCreate", function (event) {
      var _this$props3 = _this.props,
          value = _this$props3.filterValue,
          items = _this$props3.items;

      if (value) {
        var allVisible = _this.getAllVisibleItems(items);

        var matchingElement = allVisible.filter(function (item) {
          return item.content === value;
        });

        if (!matchingElement.length) {
          if (_this.props.onNewItemCreated) {
            _this.props.onNewItemCreated({
              value: value
            });
          }
        } else {
          _this.handleItemSelect(matchingElement[0], {
            event: event
          });
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemSelect", function (item, attrs) {
      if (!_this.isFooterFocused()) {
        // we short circuit above because when focusing on footer we don't have `item`.
        // We could look at adding item.disabled in the future though if required.
        if (!item.isDisabled) {
          _this.props.onOpenChange({
            isOpen: false,
            event: attrs.event
          });

          _this.props.onSelected(item);

          _this.props.onFilterChange('');

          _this.setState({
            focusedItemIndex: undefined
          });
        }
      } else if (_this.props.shouldAllowCreateItem) {
        _this.handleItemCreate(attrs.event);
      } else {
        // footer is focused and we dont have shouldAllowCreateItem so call the footer's onActivate
        _this.handleFooterActivate(attrs.event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemRemove", function (item) {
      _this.props.onRemoved(item);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeLatestItem", function () {
      if (_this.props.selectedItems.length) {
        var selectedItems = _this.props.selectedItems;

        _this.handleItemRemove(selectedItems[selectedItems.length - 1]);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasVisibleFooter", function () {
      var _this$props4 = _this.props,
          footer = _this$props4.footer,
          shouldAllowCreateItem = _this$props4.shouldAllowCreateItem,
          filterValue = _this$props4.filterValue; // This logic is interesting because we explicitly check !multiSelectContainer with footer
      // because if you have both turned on but you havent typed anything, there will be no footer

      return footer && footer.content && !shouldAllowCreateItem || shouldAllowCreateItem && !!filterValue;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isFooterFocused", function () {
      var _this$state = _this.state,
          focusedItemIndex = _this$state.focusedItemIndex,
          groupedItems = _this$state.groupedItems;

      var selectableItems = _this.getAllVisibleItems(groupedItems); // if our selected index is outside of our array bounds, the footer should be selected


      return focusedItemIndex === selectableItems.length;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOnChange", function (event) {
      var value = event.currentTarget.value;

      if (value !== _this.props.filterValue) {
        // We want to get rid of the focus on the items when the shouldAllowCreateItem enabled.
        // When a user presses Enter multi-select should create a new value if nothing is focused, but
        // it still should allow to focus an item in the list and select it by pressing Enter
        // as normal multi-select does.
        if (_this.props.shouldAllowCreateItem) {
          _this.setState({
            focusedItemIndex: undefined
          });
        }

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
          isOpen: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFooterActivate", function (event) {
      var footer = _this.props.footer;

      if (footer && footer.onActivate) {
        footer.onActivate(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusNextItem", function () {
      var filteredItems = _this.getAllVisibleItems(_this.props.items);

      var footerIsFocusable = _this.hasVisibleFooter();

      var focusedItemIndex = _this.state.focusedItemIndex;

      _this.setState({
        focusedItemIndex: (0, _sharedFunctions.getNextFocusable)(focusedItemIndex, filteredItems.length, footerIsFocusable)
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusPreviousItem", function () {
      var filteredItems = _this.getAllVisibleItems(_this.props.items);

      var footerIsFocusable = _this.hasVisibleFooter();

      var focusedItemIndex = _this.state.focusedItemIndex;

      _this.setState({
        focusedItemIndex: (0, _sharedFunctions.getPrevFocusable)(focusedItemIndex, filteredItems.length, footerIsFocusable)
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboardInteractions", function (event) {
      var _this$props5 = _this.props,
          isOpen = _this$props5.isOpen,
          items = _this$props5.items,
          filterValue = _this$props5.filterValue;
      var focusedItemIndex = _this.state.focusedItemIndex;
      var isSelectOpen = isOpen;

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

            if (focusedItemIndex != null) {
              _this.handleItemSelect(_this.getAllVisibleItems(items)[focusedItemIndex], {
                event: event
              });
            } else if (_this.props.shouldAllowCreateItem) {
              _this.handleItemCreate(event);
            }
          }

          break;

        case 'Backspace':
          if (!filterValue) {
            _this.removeLatestItem();

            _this.onOpenChange({
              event: event,
              isOpen: true
            });
          }

          break;

        case 'Tab':
          // tabbing from within the multi select should move focus to the next form element
          // hence, we close the dropdown and clear the focusedItemIndex
          _this.onOpenChange({
            event: event,
            isOpen: false
          });

          _this.setState({
            focusedItemIndex: undefined
          });

          break;

        default:
          break;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderFooter", function () {
      var _this$props6 = _this.props,
          newValue = _this$props6.filterValue,
          shouldAllowCreateItem = _this$props6.shouldAllowCreateItem,
          footer = _this$props6.footer,
          createNewItemLabel = _this$props6.createNewItemLabel;

      if (shouldAllowCreateItem) {
        if (newValue) {
          return _react.default.createElement(_Footer.default, {
            appearance: footer && footer.appearance,
            isFocused: _this.isFooterFocused(),
            newLabel: _this.props.createNewItemLabel,
            onClick: _this.handleItemCreate,
            shouldHideSeparator: !_this.getAllVisibleItems(_this.props.items).length
          }, newValue, " (", createNewItemLabel, ")");
        }
      } else if (footer && footer.content) {
        return _react.default.createElement(_Footer.default, {
          appearance: footer.appearance,
          elemBefore: footer.elemBefore,
          isFocused: _this.isFooterFocused(),
          onClick: _this.handleFooterActivate,
          shouldHideSeparator: !_this.getAllVisibleItems(_this.props.items).length
        }, footer.content);
      }

      return null;
    });
    return _this;
  }

  (0, _createClass2.default)(StatelessMultiSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          appearance = _this$props7.appearance,
          filterValue = _this$props7.filterValue,
          id = _this$props7.id,
          isDisabled = _this$props7.isDisabled,
          isFirstChild = _this$props7.isFirstChild,
          isInvalid = _this$props7.isInvalid,
          invalidMessage = _this$props7.invalidMessage,
          isLoading = _this$props7.isLoading,
          isOpen = _this$props7.isOpen,
          isRequired = _this$props7.isRequired,
          label = _this$props7.label,
          loadingMessage = _this$props7.loadingMessage,
          name = _this$props7.name,
          noMatchesFound = _this$props7.noMatchesFound,
          position = _this$props7.position,
          selectedItems = _this$props7.selectedItems,
          shouldAllowCreateItem = _this$props7.shouldAllowCreateItem,
          shouldFitContainer = _this$props7.shouldFitContainer,
          shouldFlip = _this$props7.shouldFlip;
      var _this$state2 = this.state,
          groupedItems = _this$state2.groupedItems,
          isFocused = _this$state2.isFocused,
          focusedItemIndex = _this$state2.focusedItemIndex;
      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        _react.default.createElement(_Stateless.SelectWrapper, {
          shouldFitContainer: shouldFitContainer,
          onKeyDown: this.handleKeyboardInteractions
        }, _react.default.createElement("select", {
          disabled: isDisabled,
          id: id,
          multiple: true,
          name: name,
          readOnly: true,
          required: isRequired,
          style: {
            display: 'none'
          },
          value: getAllValues(selectedItems)
        }, (0, _Options.default)(groupedItems)), label ? _react.default.createElement(_fieldBase.Label, {
          htmlFor: id,
          isDisabled: isDisabled,
          isFirstChild: isFirstChild,
          isRequired: isRequired,
          label: label
        }) : null, _react.default.createElement(_droplist.default, {
          appearance: this.hasVisibleFooter() ? 'tall' : 'default',
          isKeyboardInteractionDisabled: true,
          isOpen: isOpen,
          isTriggerDisabled: true,
          isTriggerNotTabbable: true,
          onOpenChange: this.onOpenChange,
          position: position,
          shouldFitContainer: true,
          shouldFlip: shouldFlip,
          trigger: _react.default.createElement(_Trigger.default, {
            appearance: appearance,
            filterValue: filterValue,
            handleItemRemove: this.handleItemRemove,
            handleOnChange: this.handleOnChange,
            handleTriggerClick: this.handleTriggerClick,
            inputNode: this.inputNode,
            inputRefFunction: function inputRefFunction(ref) {
              _this2.inputNode = ref;
            },
            isDisabled: isDisabled,
            isFocused: isOpen || isFocused,
            isInvalid: isInvalid,
            invalidMessage: invalidMessage,
            isLoading: isLoading,
            isRequired: isRequired,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            placeholder: this.getPlaceholder(),
            selectedItems: selectedItems,
            tagGroup: this.tagGroup,
            tagGroupRefFunction: function tagGroupRefFunction(ref) {
              _this2.tagGroup = ref;
            },
            icon: this.props.icon
          })
        }, (0, _Groups.default)({
          groups: groupedItems,
          hasFooter: this.hasVisibleFooter(),
          filterValue: filterValue,
          selectedItems: selectedItems,
          noMatchesFound: noMatchesFound,
          focusedItemIndex: focusedItemIndex,
          handleItemSelect: this.handleItemSelect,
          shouldAllowCreateItem: shouldAllowCreateItem,
          isLoading: isLoading,
          loadingMessage: loadingMessage
        }), this.renderFooter()))
      );
    }
  }]);
  return StatelessMultiSelect;
}(_react.PureComponent);

exports.default = StatelessMultiSelect;
(0, _defineProperty2.default)(StatelessMultiSelect, "defaultProps", {
  appearance: appearances.default,
  createNewItemLabel: 'New item',
  filterValue: '',
  footer: {},
  shouldFocus: false,
  shouldFlip: true,
  isLoading: false,
  isOpen: false,
  items: [],
  label: '',
  loadingMessage: 'Receiving information',
  noMatchesFound: 'No matches found',
  onFilterChange: function onFilterChange() {},
  onOpenChange: function onOpenChange() {},
  onSelected: function onSelected() {},
  onRemoved: function onRemoved() {},
  position: 'bottom left',
  selectedItems: [],
  shouldAllowCreateItem: false,
  icon: _react.default.createElement(_chevronDown.default, {
    label: ""
  })
});