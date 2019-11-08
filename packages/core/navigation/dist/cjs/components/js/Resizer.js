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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _rafSchd = _interopRequireDefault(require("raf-schd"));

var _ResizerInner = _interopRequireDefault(require("../styled/ResizerInner"));

var _ResizerButton = _interopRequireDefault(require("./ResizerButton"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var Resizer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Resizer, _PureComponent);

  function Resizer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Resizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Resizer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      startScreenX: 0,
      isHovering: false,
      isResizing: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "scheduleResize", (0, _rafSchd.default)(function (delta) {
      if (_this.state.isResizing && delta) {
        _this.props.onResize(delta);
      }
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resizerNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseDownHandler", function (e) {
      e.preventDefault();

      if (!_this.resizerNode || e.target !== _this.resizerNode) {
        return;
      }

      if (_this.state.isResizing) {
        // eslint-disable-next-line no-console
        console.error('attempting to start a resize when another is occurring');
        return;
      }

      _this.setState({
        isResizing: true,
        startScreenX: e.screenX
      });

      _this.props.onResizeStart();

      window.addEventListener('mousemove', _this.mouseMoveHandler);
      window.addEventListener('mouseup', _this.mouseUpHandler);
      window.addEventListener('mouseout', _this.handleOutofBounds);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseUpHandler", function (e) {
      var outOfBounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      window.removeEventListener('mousemove', _this.mouseMoveHandler);
      window.removeEventListener('mouseup', _this.mouseUpHandler);
      window.removeEventListener('mouseout', _this.handleOutofBounds);

      _this.setState({
        isResizing: false
      });

      var screenX = outOfBounds ? // If we have gone out of bounds, reduce the nav width so the resizer is still visible
      e.screenX - 2 * _sharedVariables.resizerClickableWidth : e.screenX;
      var delta = screenX - _this.state.startScreenX;

      if (delta === 0) {
        _this.resizeButtonHandler(null, true);
      } // Perform one final resize before ending


      _this.props.onResize(delta);

      _this.props.onResizeEnd(delta);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseMoveHandler", function (e) {
      _this.scheduleResize(e.screenX - _this.state.startScreenX);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseEnterHandler", function () {
      _this.setState({
        isHovering: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseLeaveHandler", function () {
      _this.setState({
        isHovering: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOutofBounds", function (e) {
      var toEl = e.relatedTarget;
      var disableResizeNodes = ['IFRAME', // Moving into an iframe
      'HTML', // Moving out of an iframe or root window - Safari
      null];

      if (_this.state.isResizing && disableResizeNodes.includes(toEl && toEl.nodeName)) {
        _this.mouseUpHandler(e, true);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isElectronMac", function () {
      return (0, _util.isElectronMac)(_this.props.theme);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isPointingRight", function () {
      return _this.props.navigationWidth < (0, _sharedVariables.standardOpenWidth)(_this.isElectronMac());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resizeButtonHandler", function (e) {
      var resizerClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var isElectron = _this.isElectronMac();

      var _this$props = _this.props,
          navigationWidth = _this$props.navigationWidth,
          onResizeButton = _this$props.onResizeButton;
      var standardOpenWidthResult = (0, _sharedVariables.standardOpenWidth)(isElectron);
      var isExpanded = navigationWidth > standardOpenWidthResult;

      var isPointingRight = _this.isPointingRight();

      if (isPointingRight || isExpanded) {
        onResizeButton({
          isOpen: true,
          width: standardOpenWidthResult
        }, resizerClick);
      } else {
        onResizeButton({
          isOpen: false,
          width: (0, _sharedVariables.globalOpenWidth)(isElectron)
        }, resizerClick);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Resizer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          showResizeButton = _this$props2.showResizeButton,
          resizerButtonLabel = _this$props2.resizerButtonLabel;
      var resizerButton = showResizeButton ? _react.default.createElement(_ResizerButton.default, {
        isVisible: this.state.isHovering,
        isPointingRight: this.isPointingRight(),
        onClick: this.resizeButtonHandler,
        resizerButtonLabel: resizerButtonLabel
      }) : null;
      return _react.default.createElement(_ResizerInner.default, {
        innerRef: function innerRef(resizerNode) {
          _this2.resizerNode = resizerNode;
        },
        onMouseDown: this.mouseDownHandler,
        onMouseEnter: this.mouseEnterHandler,
        onMouseLeave: this.mouseLeaveHandler
      }, resizerButton);
    }
  }]);
  return Resizer;
}(_react.PureComponent);

(0, _defineProperty2.default)(Resizer, "defaultProps", {
  onResizeStart: function onResizeStart() {},
  onResizeEnd: function onResizeEnd() {},
  onResizeButton: function onResizeButton() {},
  onResize: function onResize() {},
  navigationWidth: (0, _sharedVariables.standardOpenWidth)(false),
  showResizeButton: true,
  theme: {}
});

var _default = (0, _styledComponents.withTheme)(Resizer);

exports.default = _default;