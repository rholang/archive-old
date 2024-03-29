"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DroplistWithoutAnalytics = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _layer = _interopRequireDefault(require("@atlaskit/layer"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _styledComponents = require("styled-components");

var _constants = require("@atlaskit/theme/constants");

var _version = require("../version.json");

var _Droplist = _interopRequireWildcard(require("../styled/Droplist"));

var _itemTheme = _interopRequireDefault(require("../theme/item-theme"));

var halfFocusRing = 1;
var dropOffset = "0, ".concat((0, _constants.gridSize)(), "px");

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/droplist has been deprecated. It is an internal component and should not be used directly.');
}

var Droplist =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Droplist, _Component);

  function Droplist() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Droplist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Droplist)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      _this.setContentWidth(); // We use a captured event here to avoid a radio or checkbox dropdown item firing its
      // click event first, which would cause a re-render of the element and prevent Droplist
      // from detecting the actual source of this original click event.


      document.addEventListener('click', _this.handleClickOutside, true);
      document.addEventListener('keydown', _this.handleEsc);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidUpdate", function () {
      if (_this.props.isOpen) {
        _this.setContentWidth();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentWillUnmount", function () {
      document.removeEventListener('click', _this.handleClickOutside, true);
      document.removeEventListener('keydown', _this.handleEsc);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setContentWidth", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          dropContentRef = _assertThisInitialize.dropContentRef,
          triggerRef = _assertThisInitialize.triggerRef;

      var shouldFitContainer = _this.props.shouldFitContainer; // We need to manually set the content width to match the trigger width
      // if props.shouldFitContainer is true

      if (shouldFitContainer && dropContentRef && triggerRef) {
        dropContentRef.style.width = "".concat(triggerRef.offsetWidth - halfFocusRing * 2, "px");
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dropContentRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleEsc", function (event) {
      if ((event.key === 'Escape' || event.key === 'Esc') && _this.props.isOpen) {
        _this.close(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickOutside", function (event) {
      if (_this.props.isOpen) {
        // $FlowFixMe - flow is lost and if not an instance of Node
        if (event.target instanceof Node) {
          // Rather than check for the target within the entire Droplist, we specify the trigger/content.
          // This aids with future effort in scroll-locking Droplist when isMenuFixed is enabled; the scroll
          // blanket which stretches to the viewport should not stop 'close' from being triggered.
          var withinTrigger = _this.triggerRef && _this.triggerRef.contains(event.target);

          var withinContent = _this.dropContentRef && _this.dropContentRef.contains(event.target);

          if (!withinTrigger && !withinContent) {
            _this.close(event);
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function (event) {
      if (_this.props.onOpenChange) {
        _this.props.onOpenChange({
          isOpen: false,
          event: event
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleContentRef", function (ref) {
      _this.dropContentRef = ref; // If the dropdown has just been opened, we focus on the containing element so the
      // user can tab to the first dropdown item. We will only receive this ref if isOpen
      // is true or null, so no need to check for truthiness here.

      if (ref) {
        ref.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTriggerRef", function (ref) {
      _this.triggerRef = ref;
    });
    return _this;
  }

  (0, _createClass2.default)(Droplist, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        shouldAllowMultilineItems: this.props.shouldAllowMultilineItems
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          boundariesElement = _this$props.boundariesElement,
          children = _this$props.children,
          isLoading = _this$props.isLoading,
          isOpen = _this$props.isOpen,
          maxHeight = _this$props.maxHeight,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          position = _this$props.position,
          isMenuFixed = _this$props.isMenuFixed,
          shouldFitContainer = _this$props.shouldFitContainer,
          shouldFlip = _this$props.shouldFlip,
          trigger = _this$props.trigger,
          onPositioned = _this$props.onPositioned,
          testId = _this$props.testId;
      var layerContent = isOpen ? _react.default.createElement(_Droplist.Content, {
        "data-role": "droplistContent",
        "data-testid": testId && "".concat(testId, "--content"),
        isTall: appearance === 'tall',
        innerRef: this.handleContentRef,
        maxHeight: maxHeight
      }, isLoading ? _react.default.createElement(_Droplist.SpinnerContainer, null, _react.default.createElement(_spinner.default, {
        size: "small"
      })) : _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: _itemTheme.default
      }, _react.default.createElement("div", null, children))) : null;
      return _react.default.createElement(_Droplist.default, {
        fit: shouldFitContainer,
        onClick: onClick,
        onKeyDown: onKeyDown
      }, _react.default.createElement(_layer.default, {
        autoFlip: shouldFlip,
        boundariesElement: boundariesElement,
        content: layerContent,
        offset: dropOffset // $FlowFixMe - Cannot create `Layer` element because in property `position
        ,
        position: position,
        isAlwaysFixed: isOpen && isMenuFixed,
        onPositioned: onPositioned
      }, _react.default.createElement(_Droplist.Trigger, {
        fit: shouldFitContainer,
        innerRef: this.handleTriggerRef
      }, trigger)));
    }
  }]);
  return Droplist;
}(_react.Component);

exports.DroplistWithoutAnalytics = Droplist;
(0, _defineProperty2.default)(Droplist, "defaultProps", {
  appearance: 'default',
  boundariesElement: 'viewport',
  children: null,
  isLoading: false,
  isOpen: false,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onOpenChange: function onOpenChange() {},
  position: 'bottom left',
  isMenuFixed: false,
  shouldAllowMultilineItems: false,
  shouldFitContainer: false,
  shouldFlip: true,
  trigger: null,
  onPositioned: function onPositioned() {}
});
(0, _defineProperty2.default)(Droplist, "childContextTypes", {
  shouldAllowMultilineItems: _propTypes.default.bool
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'droplist',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onOpenChange: createAndFireEventOnAtlaskit({
    action: 'toggled',
    actionSubject: 'droplist',
    attributes: {
      componentName: 'droplist',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(Droplist));

exports.default = _default;