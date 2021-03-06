"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownMenuStatelessWithoutAnalytics = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactUid = require("react-uid");

var _analyticsNext = require("@atlaskit/analytics-next");

var _button = _interopRequireDefault(require("@atlaskit/button"));

var _droplist = _interopRequireWildcard(require("@atlaskit/droplist"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _version = require("../version.json");

var _DropdownItemFocusManager = _interopRequireDefault(require("./context/DropdownItemFocusManager"));

var _DropdownItemClickManager = _interopRequireDefault(require("./context/DropdownItemClickManager"));

var _DropdownItemSelectionCache = _interopRequireDefault(require("./context/DropdownItemSelectionCache"));

var _WidthConstrainer = _interopRequireDefault(require("../styled/WidthConstrainer"));

var _keys = require("../util/keys");

/* eslint-disable react/no-array-index-key */
var DropdownMenuStateless =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownMenuStateless, _Component);

  function DropdownMenuStateless() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownMenuStateless);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownMenuStateless)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "domItemsList", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusedItem", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerContainer", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sourceOfIsOpen", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dropdownListPositioned", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      id: (0, _reactUid.uid)({
        id: _this.constructor.name
      }),
      autoFocusDropdownItems: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      if (_this.isUsingDeprecatedAPI()) {
        if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production' && !process.env.CI) {
          // eslint-disable-next-line no-console
          console.log('DropdownMenu.items is deprecated. Please switch to the declarative API.');
        }

        if (_this.domItemsList) {
          _this.focusFirstItem();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidUpdate", function (prevProp) {
      if (_this.isUsingDeprecatedAPI() && _this.props.isOpen && !prevProp.isOpen) {
        _this.focusFirstItem();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getNextFocusable", function (indexItem, available) {
      if (!_this.domItemsList) {
        return null;
      }

      var currentItem = typeof indexItem !== 'number' ? -1 : indexItem;
      var latestAvailable = typeof available !== 'number' ? currentItem : available;

      if (currentItem < _this.domItemsList.length - 1) {
        currentItem++;

        if (_this.domItemsList[currentItem].getAttribute('aria-hidden') !== 'true') {
          return currentItem;
        }

        return _this.getNextFocusable(currentItem, latestAvailable);
      }

      return latestAvailable;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPrevFocusable", function (indexItem, available) {
      if (!_this.domItemsList) {
        return null;
      }

      var currentItem = typeof indexItem !== 'number' ? -1 : indexItem;
      var latestAvailable = typeof available !== 'number' ? currentItem : available;

      if (currentItem && currentItem > 0) {
        currentItem--;

        if (_this.domItemsList[currentItem].getAttribute('aria-hidden') !== 'true') {
          return currentItem;
        }

        return _this.getPrevFocusable(currentItem, latestAvailable);
      }

      return latestAvailable || currentItem;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusFirstItem", function () {
      if (_this.sourceOfIsOpen === 'keydown') {
        _this.focusItem(_this.getNextFocusable());
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusNextItem", function () {
      _this.focusItem(_this.getNextFocusable(_this.focusedItem));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusPreviousItem", function () {
      _this.focusItem(_this.getPrevFocusable(_this.focusedItem));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusItem", function (index) {
      if (!_this.domItemsList || !index) {
        return;
      }

      _this.focusedItem = index;

      _this.domItemsList[_this.focusedItem].focus();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isTargetChildItem", function (target) {
      if (!target) return false;
      var isDroplistItem = target.getAttribute('data-role') === 'droplistItem'; // eslint-disable-next-line react/no-find-dom-node

      var thisDom = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)(_this));
      return isDroplistItem && thisDom ? thisDom.contains(target) : false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboardInteractionForClosed", function (event) {
      if (_this.props.isOpen) {
        return;
      }

      switch (event.key) {
        case _keys.KEY_DOWN:
        case _keys.KEY_SPACE:
        case _keys.KEY_ENTER:
          event.preventDefault();

          _this.open({
            event: event,
            source: 'keydown'
          });

          break;

        default:
          break;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboardInteractionsDeprecated", function (event) {
      // KeyboardEvent.target is typed as an EventTarget but we need to access methods on it which
      // are specific to Element. Due limitations of the HTML spec flow doesn't know that an
      // EventTarget can have these methods, so we cast it to Element through Object. This is the
      // safest thing we can do in this situation.
      var target = event.target;

      if (_this.props.isOpen) {
        if (_this.isTargetChildItem(target)) {
          switch (event.key) {
            case 'ArrowUp':
              event.preventDefault();

              _this.focusPreviousItem();

              break;

            case 'ArrowDown':
              event.preventDefault();

              _this.focusNextItem();

              break;

            case 'Tab':
              event.preventDefault();

              _this.close({
                event: event
              });

              break;

            default:
              break;
          }
        } else if (event.key === 'ArrowDown') {
          _this.sourceOfIsOpen = 'keydown';

          _this.focusFirstItem();
        } else if (event.key === 'Tab') {
          _this.close({
            event: event
          });
        }
      } else {
        switch (event.key) {
          case _keys.KEY_DOWN:
          case _keys.KEY_SPACE:
          case _keys.KEY_ENTER:
            event.preventDefault();

            _this.open({
              event: event,
              source: 'keydown'
            });

            break;

          default:
            break;
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "domMenuContainer", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickDeprecated", function (event) {
      var menuContainer = _this.domMenuContainer; // Casting target to Element. See comment in `handleKeyboardInteractionsDeprecated`.

      var target = event.target;

      if (!menuContainer || menuContainer && !menuContainer.contains(target)) {
        _this.toggle({
          source: 'click',
          event: event
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isUsingDeprecatedAPI", function () {
      return Boolean(_this.props.items.length);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (event) {
      // For any clicks we don't want autofocus
      _this.setState({
        autoFocusDropdownItems: false
      });

      if (_this.isUsingDeprecatedAPI()) {
        _this.handleClickDeprecated(event);

        return;
      }

      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          triggerContainer = _assertThisInitialize.triggerContainer; // Casting target to Element. See comment in `handleKeyboardInteractionsDeprecated`.


      var target = event.target;

      if (triggerContainer && triggerContainer.contains(target) && // $FlowFixMe - disabled is not in Element
      target.disabled !== true) {
        var isOpen = _this.props.isOpen;
        _this.sourceOfIsOpen = 'mouse';

        _this.props.onOpenChange({
          isOpen: !isOpen,
          event: event
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerContent", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          trigger = _this$props.trigger,
          isOpen = _this$props.isOpen,
          triggerButtonProps = _this$props.triggerButtonProps,
          triggerType = _this$props.triggerType,
          testId = _this$props.testId;
      var insideTriggerContent = _this.isUsingDeprecatedAPI() ? children : trigger;

      if (triggerType !== 'button') {
        return insideTriggerContent;
      }

      var triggerProps = (0, _objectSpread2.default)({}, triggerButtonProps);
      var defaultButtonProps = {
        'aria-controls': _this.state.id,
        'aria-expanded': isOpen,
        'aria-haspopup': true,
        isSelected: isOpen
      };

      if (!triggerProps.iconAfter && !triggerProps.iconBefore) {
        triggerProps.iconAfter = _react.default.createElement(_chevronDown.default, {
          size: "medium",
          label: ""
        });
      }

      return _react.default.createElement(_button.default, (0, _extends2.default)({}, defaultButtonProps, triggerProps, {
        testId: testId && "".concat(testId, "--trigger")
      }), insideTriggerContent);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "open", function (attrs) {
      _this.sourceOfIsOpen = attrs.source;

      _this.props.onOpenChange({
        isOpen: true,
        event: attrs.event
      }); // Dropdown opened via keyboard gets auto focussed


      _this.setState({
        autoFocusDropdownItems: _this.sourceOfIsOpen === 'keydown'
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function (attrs) {
      _this.sourceOfIsOpen = null;

      _this.props.onOpenChange({
        isOpen: false,
        event: attrs.event
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggle", function (attrs) {
      if (attrs.source === 'keydown') return;

      if (_this.props.isOpen) {
        _this.close(attrs);
      } else {
        _this.open(attrs);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleItemClicked", function (event) {
      _this.props.onOpenChange({
        isOpen: false,
        event: event
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTrigger", function () {
      var triggerContent = _this.triggerContent();

      return _this.isUsingDeprecatedAPI() ? triggerContent : _react.default.createElement("div", {
        ref: function ref(_ref) {
          _this.triggerContainer = _ref;
        }
      }, triggerContent);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderItems", function (items) {
      return items.map(function (item, itemIndex) {
        return _react.default.createElement(_droplist.Item, (0, _extends2.default)({}, item, {
          key: itemIndex,
          onActivate: function onActivate(_ref2) {
            var event = _ref2.event;

            _this.props.onItemActivated({
              item: item,
              event: event
            });
          }
        }), item.content);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderGroups", function (groups) {
      return groups.map(function (group, groupIndex) {
        return _react.default.createElement(_droplist.Group, {
          heading: group.heading,
          elemAfter: group.elemAfter,
          key: groupIndex
        }, _this.renderItems(group.items));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDeprecated", function () {
      var _this$props2 = _this.props,
          items = _this$props2.items,
          shouldFitContainer = _this$props2.shouldFitContainer;
      var id = _this.state.id;
      return _react.default.createElement("div", {
        id: id,
        ref: function ref(_ref3) {
          _this.domMenuContainer = _ref3;
          _this.domItemsList = _ref3 ? _ref3.querySelectorAll('[data-role="droplistItem"]') : null;
        },
        role: "menu",
        style: shouldFitContainer ? null : {
          maxWidth: 300
        }
      }, _this.renderGroups(items));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDroplistPositioned", function () {
      _this.dropdownListPositioned = true; // Trigger render so item focus manager can auto focus for keyboard trigger

      _this.setState({
        autoFocusDropdownItems: _this.sourceOfIsOpen === 'keydown'
      });

      if (_this.props.onPositioned) _this.props.onPositioned();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDropdownItems", function () {
      if (_this.sourceOfIsOpen === 'keydown' && _this.dropdownListPositioned) {
        return _react.default.createElement(_DropdownItemFocusManager.default, {
          autoFocus: _this.state.autoFocusDropdownItems,
          close: _this.close
        }, _this.props.children);
      }

      return _react.default.createElement(_react.Fragment, null, _this.props.children);
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownMenuStateless, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          appearance = _this$props3.appearance,
          boundariesElement = _this$props3.boundariesElement,
          isLoading = _this$props3.isLoading,
          isOpen = _this$props3.isOpen,
          onOpenChange = _this$props3.onOpenChange,
          position = _this$props3.position,
          isMenuFixed = _this$props3.isMenuFixed,
          shouldAllowMultilineItems = _this$props3.shouldAllowMultilineItems,
          shouldFitContainer = _this$props3.shouldFitContainer,
          shouldFlip = _this$props3.shouldFlip,
          testId = _this$props3.testId;
      var id = this.state.id;
      var isDeprecated = this.isUsingDeprecatedAPI();
      var deprecatedProps = isDeprecated ? {
        onKeyDown: this.handleKeyboardInteractionsDeprecated,
        shouldAllowMultilineItems: shouldAllowMultilineItems
      } : {
        onKeyDown: this.handleKeyboardInteractionForClosed
      };
      return _react.default.createElement(_DropdownItemSelectionCache.default, null, _react.default.createElement(_droplist.default, (0, _extends2.default)({
        appearance: appearance,
        boundariesElement: boundariesElement,
        isLoading: isLoading,
        isOpen: isOpen,
        onClick: this.handleClick,
        onOpenChange: onOpenChange,
        position: position,
        isMenuFixed: isMenuFixed,
        shouldFitContainer: shouldFitContainer,
        shouldFlip: shouldFlip,
        trigger: this.renderTrigger(),
        onPositioned: this.onDroplistPositioned
      }, deprecatedProps, {
        analyticsContext: {
          componentName: 'dropdownMenu',
          packageName: _version.name,
          packageVersion: _version.version
        },
        testId: testId
      }), isDeprecated ? this.renderDeprecated() : _react.default.createElement(_WidthConstrainer.default, {
        id: id,
        role: "menu",
        shouldFitContainer: shouldFitContainer
      }, _react.default.createElement(_DropdownItemClickManager.default, {
        onItemClicked: this.handleItemClicked
      }, this.renderDropdownItems()))));
    }
  }]);
  return DropdownMenuStateless;
}(_react.Component);

exports.DropdownMenuStatelessWithoutAnalytics = DropdownMenuStateless;
(0, _defineProperty2.default)(DropdownMenuStateless, "defaultProps", {
  appearance: 'default',
  boundariesElement: 'viewport',
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
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'dropdownMenu',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onOpenChange: createAndFireEventOnAtlaskit({
    action: 'toggled',
    actionSubject: 'dropdownMenu',
    attributes: {
      componentName: 'dropdownMenu',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(DropdownMenuStateless));

exports.default = _default;