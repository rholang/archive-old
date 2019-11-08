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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _focusTrap = _interopRequireDefault(require("focus-trap"));

var _reactPopper = require("react-popper");

var _reactNodeResolver = _interopRequireDefault(require("react-node-resolver"));

var _objects = _interopRequireDefault(require("shallow-equal/objects"));

var _colors = require("@atlaskit/theme/colors");

var _components = require("./components");

/** Are we rendering on the client or server? */
var canUseDOM = function canUseDOM() {
  return Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
}; // ==============================
// Types
// ==============================


// ==============================
// Class
// ==============================
var defaultStyles = {
  groupHeading: function groupHeading(provided) {
    return (0, _objectSpread2.default)({}, provided, {
      color: _colors.N80
    });
  }
};
var defaultPopperProps = {
  modifiers: {
    offset: {
      offset: "0, 8"
    }
  },
  placement: 'bottom-start'
};

var isEmpty = function isEmpty(obj) {
  return Object.keys(obj).length === 0;
};

var PopupSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PopupSelect, _PureComponent);

  function PopupSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PopupSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PopupSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusTrap", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "menuRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "targetRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: false,
      mergedComponents: _components.defaultComponents,
      mergedPopperProps: defaultPopperProps
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (event) {
      var key = event.key;

      switch (key) {
        case 'Escape':
        case 'Esc':
          _this.close();

          break;

        default:
      }

      if (_this.props.handleKeyDown) {
        _this.props.handleKeyDown(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (_ref) {
      var target = _ref.target;
      var isOpen = _this.state.isOpen; // appease flow

      if (!(target instanceof Element)) return; // NOTE: Why not use the <Blanket /> component to close?
      // We don't want to interupt the user's flow. Taking this approach allows
      // user to click "through" to other elements and close the popout.

      if (isOpen && _this.menuRef && !_this.menuRef.contains(target)) {
        _this.close();
      } // open on target click -- we can't trust consumers to spread the onClick
      // property to the target


      if (!isOpen && _this.targetRef && _this.targetRef.contains(target)) {
        _this.open();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSelectChange", function (value, actionMeta) {
      var _this$props = _this.props,
          closeMenuOnSelect = _this$props.closeMenuOnSelect,
          onChange = _this$props.onChange;
      if (closeMenuOnSelect && actionMeta.action !== 'clear') _this.close();
      if (onChange) onChange(value, actionMeta);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "open", function () {
      var onOpen = _this.props.onOpen;
      if (onOpen) onOpen();

      _this.setState({
        isOpen: true
      }, _this.initialiseFocusTrap);

      _this.selectRef.select.openMenu('first'); // HACK


      if (typeof window === 'undefined') return;
      window.addEventListener('keydown', _this.handleKeyDown);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "initialiseFocusTrap", function () {
      var trapConfig = {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        fallbackFocus: _this.menuRef,
        returnFocusOnDeactivate: true
      };
      _this.focusTrap = (0, _focusTrap.default)(_this.menuRef, trapConfig); // allow time for the HTMLElement to render

      setTimeout(function () {
        return _this.focusTrap.activate();
      }, 1);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function () {
      var onClose = _this.props.onClose;
      if (onClose) onClose();

      _this.setState({
        isOpen: false
      });

      _this.focusTrap.deactivate();

      if (typeof window === 'undefined') return;
      window.removeEventListener('keydown', _this.handleKeyDown);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resolveTargetRef", function (popperRef) {
      return function (ref) {
        // avoid thrashing fn calls
        if (!_this.targetRef && popperRef && ref) {
          _this.targetRef = ref;
          popperRef(ref);
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resolveMenuRef", function (popperRef) {
      return function (ref) {
        _this.menuRef = ref;
        popperRef(ref);
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getSelectRef", function (ref) {
      _this.selectRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getItemCount", function () {
      var options = _this.props.options;
      var count = 0;
      options.forEach(function (groupOrOption) {
        if (groupOrOption.options) {
          groupOrOption.options.forEach(function () {
            return count++;
          });
        } else {
          count++;
        }
      });
      return count;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getMaxHeight", function () {
      var maxMenuHeight = _this.props.maxMenuHeight;
      if (!_this.selectRef) return maxMenuHeight; // subtract the control height to maintain consistency

      var showSearchControl = _this.showSearchControl();

      var offsetHeight = showSearchControl ? _this.selectRef.select.controlRef.offsetHeight : 0;
      var maxHeight = maxMenuHeight - offsetHeight;
      return maxHeight;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showSearchControl", function () {
      var searchThreshold = _this.props.searchThreshold;
      return _this.getItemCount() > searchThreshold;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelect", function () {
      var _this$props2 = _this.props,
          footer = _this$props2.footer,
          maxMenuWidth = _this$props2.maxMenuWidth,
          minMenuWidth = _this$props2.minMenuWidth,
          target = _this$props2.target,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["footer", "maxMenuWidth", "minMenuWidth", "target"]);
      var _this$state = _this.state,
          isOpen = _this$state.isOpen,
          mergedComponents = _this$state.mergedComponents,
          mergedPopperProps = _this$state.mergedPopperProps;

      var showSearchControl = _this.showSearchControl();

      var portalDestination = canUseDOM() ? document.body : null;
      var components = (0, _objectSpread2.default)({}, mergedComponents, {
        Control: showSearchControl ? mergedComponents.Control : _components.DummyControl
      });
      if (!portalDestination || !isOpen) return null;
      var popper = (0, _core.jsx)(_reactPopper.Popper, mergedPopperProps, function (_ref2) {
        var placement = _ref2.placement,
            ref = _ref2.ref,
            style = _ref2.style;
        return (0, _core.jsx)(_reactNodeResolver.default, {
          innerRef: _this.resolveMenuRef(ref)
        }, (0, _core.jsx)(_components.MenuDialog, {
          style: style,
          "data-placement": placement,
          minWidth: minMenuWidth,
          maxWidth: maxMenuWidth
        }, (0, _core.jsx)(_reactSelect.default, (0, _extends2.default)({
          backspaceRemovesValue: false,
          controlShouldRenderValue: false,
          isClearable: false,
          tabSelectsValue: false,
          menuIsOpen: true,
          ref: _this.getSelectRef
        }, props, {
          styles: (0, _objectSpread2.default)({}, defaultStyles, props.styles),
          maxMenuHeight: _this.getMaxHeight(),
          components: components,
          onChange: _this.handleSelectChange
        })), footer));
      });
      return mergedPopperProps.positionFixed ? popper : (0, _reactDom.createPortal)(popper, portalDestination);
    });
    return _this;
  }

  (0, _createClass2.default)(PopupSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === 'undefined') return;
      window.addEventListener('click', this.handleClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === 'undefined') return;
      window.removeEventListener('click', this.handleClick);
      window.removeEventListener('keydown', this.handleKeyDown);
    } // Event Handlers
    // ==============================

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var target = this.props.target;
      var isOpen = this.state.isOpen;
      return (0, _core.jsx)(_reactPopper.Manager, null, (0, _core.jsx)(_reactPopper.Reference, null, function (_ref3) {
        var ref = _ref3.ref;
        return target({
          ref: _this2.resolveTargetRef(ref),
          isOpen: isOpen
        });
      }), this.renderSelect());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {}; // Merge consumer and default popper props

      var mergedPopperProps = (0, _objectSpread2.default)({}, defaultPopperProps, props.popperProps);

      if (!(0, _objects.default)(mergedPopperProps, state.mergedPopperProps)) {
        newState.mergedPopperProps = mergedPopperProps;
      } // Merge consumer and default components


      var mergedComponents = (0, _objectSpread2.default)({}, _components.defaultComponents, props.components);

      if (!(0, _objects.default)(mergedComponents, state.mergedComponents)) {
        newState.mergedComponents = mergedComponents;
      }

      if (!isEmpty(newState)) return newState;
      return null;
    }
  }]);
  return PopupSelect;
}(_react.PureComponent);

exports.default = PopupSelect;
(0, _defineProperty2.default)(PopupSelect, "defaultProps", {
  closeMenuOnSelect: true,
  components: {},
  maxMenuHeight: 300,
  maxMenuWidth: 440,
  minMenuWidth: 220,
  popperProps: {},
  searchThreshold: 5,
  styles: {}
});