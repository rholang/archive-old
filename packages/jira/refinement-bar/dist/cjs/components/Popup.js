"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogInner = exports.Dialog = exports.Blanket = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _applyRef = require("apply-ref");

var _reactPopper = require("react-popper");

var _theme = require("@atlaskit/theme");

var _core = require("@emotion/core");

var _utils = require("../utils");

var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));

/** @jsx jsx */
var defaultPopperProps = {
  modifiers: {
    offset: {
      offset: "0, 8"
    }
  },
  placement: 'bottom-start'
}; // ==============================
// Class
// ==============================

var Popup =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Popup, _PureComponent);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Popup);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Popup)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focusTrap", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dialogRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "blanketRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openEvent", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: _this.props.isOpen !== undefined ? _this.props.isOpen : false,
      popperProps: defaultPopperProps
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getProp", function (key) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state;
      return props[key] !== undefined ? props[key] : state[key];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "callProp", function (name) {
      if (typeof _this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = _this.props)[name].apply(_this$props, args);
      }

      return null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (event) {
      if (isEscapeEvent(event)) {
        _this.close(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "open", function (event) {
      _this.callProp('onOpen', event);

      _this.setState({
        isOpen: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function (event) {
      // the consumer needs this dialog to remain open, likely until an invalid
      // state is resolved
      if (!_this.props.allowClose) return;

      _this.callProp('onClose', event);

      _this.setState({
        isOpen: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Popup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var wasOpen = this.getProp('isOpen', prevProps, prevState);
      var isOpen = this.getProp('isOpen');
      var closeWasAllowed = this.getProp('allowClose', prevProps, prevState);
      var closeIsAllowed = this.getProp('allowClose'); // NOTE: event listeners bound on update, rather than within the open/close
      // methods because the consumer can take control of the open state.

      if (!wasOpen && isOpen || !closeWasAllowed && closeIsAllowed) {
        window.addEventListener('keydown', this.handleKeyDown);
      }

      if (wasOpen && !isOpen || closeWasAllowed && !closeIsAllowed) {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: "renderDialog",
    value: function renderDialog() {
      var children = this.props.children;
      var popperProps = this.state.popperProps;
      var isOpen = this.getProp('isOpen');
      if (!isOpen) return null;
      var popperInstance = (0, _core.jsx)(_reactPopper.Popper, popperProps, function (_ref) {
        var placement = _ref.placement,
            popperRef = _ref.ref,
            style = _ref.style,
            scheduleUpdate = _ref.scheduleUpdate;
        return (0, _core.jsx)(_FocusTrap.default, null, function (_ref2) {
          var focusRef = _ref2.ref;
          return (0, _core.jsx)(Dialog, {
            ref: (0, _applyRef.applyRefs)(popperRef, focusRef),
            style: style,
            "data-placement": placement
          }, typeof children === 'function' ? children({
            scheduleUpdate: scheduleUpdate
          }) : children);
        });
      });
      return popperProps.positionFixed ? popperInstance : (0, _reactDom.createPortal)(popperInstance, document.body);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          allowClose = _this$props2.allowClose,
          innerRef = _this$props2.innerRef,
          target = _this$props2.target;
      var isOpen = this.getProp('isOpen');
      var onClick = isOpen ? this.close : this.open;
      return (0, _core.jsx)(_reactPopper.Manager, null, (0, _core.jsx)(_reactPopper.Reference, {
        innerRef: innerRef
      }, function (_ref3) {
        var ref = _ref3.ref;
        return target({
          ref: ref,
          isOpen: isOpen,
          onClick: onClick
        });
      }), this.renderDialog(), isOpen && (0, _core.jsx)(Blanket, {
        onClick: this.close,
        allowClose: allowClose
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(p, s) {
      var stateSlice = {};

      if (p.popperProps !== s.popperProps) {
        stateSlice.popperProps = (0, _objectSpread2.default)({}, defaultPopperProps, p.popperProps);
      }

      if (!(0, _utils.isEmptyObj)(stateSlice)) {
        return stateSlice;
      }

      return null;
    }
  }]);
  return Popup;
}(_react.PureComponent);

exports.default = Popup;
(0, _defineProperty2.default)(Popup, "defaultProps", {
  allowClose: true,
  popperProps: defaultPopperProps
});

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
} // ==============================
// Styled Components
// ==============================
// eslint-disable-next-line react/no-multi-comp


var Blanket = (0, _react.forwardRef)(function (_ref4, ref) {
  var allowClose = _ref4.allowClose,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["allowClose"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: ref,
    css: {
      bottom: 0,
      cursor: !allowClose ? 'not-allowed' : null,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      transform: 'translateZ(0)',
      zIndex: _theme.layers.layer()
    }
  }, props));
}); // eslint-disable-next-line react/no-multi-comp

exports.Blanket = Blanket;
var Dialog = (0, _react.forwardRef)(function (props, ref) {
  var shadow = _theme.colors.N40A;
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: ref,
    css: {
      backgroundColor: 'white',
      borderRadius: 4,
      boxShadow: "0 0 0 1px ".concat(shadow, ", 0 4px 11px ").concat(shadow),
      zIndex: _theme.layers.layer()
    }
  }, props));
}); // eslint-disable-next-line react/no-multi-comp

exports.Dialog = Dialog;
var DialogInner = (0, _react.forwardRef)(function (_ref5, ref) {
  var isPadded = _ref5.isPadded,
      maxWidth = _ref5.maxWidth,
      minWidth = _ref5.minWidth,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["isPadded", "maxWidth", "minWidth"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: ref,
    css: {
      maxWidth: maxWidth,
      minWidth: minWidth,
      padding: isPadded ? (0, _theme.gridSize)() * 1.5 : null
    }
  }, props));
});
exports.DialogInner = DialogInner;
DialogInner.defaultProps = {
  isPadded: false,
  maxWidth: 440,
  minWidth: 160
};