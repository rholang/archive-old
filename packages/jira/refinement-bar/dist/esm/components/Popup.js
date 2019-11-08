import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/** @jsx jsx */
import React, { PureComponent, // $FlowFixMe
forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { applyRefs } from 'apply-ref';
import { Manager, Reference, Popper } from 'react-popper';
import { colors, gridSize, layers } from '@atlaskit/theme';
import { jsx } from '@emotion/core';
import { isEmptyObj } from '../utils';
import FocusTrap from './FocusTrap'; // ==============================
// Types
// ==============================

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
  _inherits(Popup, _PureComponent);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popup)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "focusTrap", void 0);

    _defineProperty(_assertThisInitialized(_this), "dialogRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "blanketRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "openEvent", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen !== undefined ? _this.props.isOpen : false,
      popperProps: defaultPopperProps
    });

    _defineProperty(_assertThisInitialized(_this), "getProp", function (key) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state;
      return props[key] !== undefined ? props[key] : state[key];
    });

    _defineProperty(_assertThisInitialized(_this), "callProp", function (name) {
      if (typeof _this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = _this.props)[name].apply(_this$props, args);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (isEscapeEvent(event)) {
        _this.close(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (event) {
      _this.callProp('onOpen', event);

      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (event) {
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

  _createClass(Popup, [{
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
      var popperInstance = jsx(Popper, popperProps, function (_ref) {
        var placement = _ref.placement,
            popperRef = _ref.ref,
            style = _ref.style,
            scheduleUpdate = _ref.scheduleUpdate;
        return jsx(FocusTrap, null, function (_ref2) {
          var focusRef = _ref2.ref;
          return jsx(Dialog, {
            ref: applyRefs(popperRef, focusRef),
            style: style,
            "data-placement": placement
          }, typeof children === 'function' ? children({
            scheduleUpdate: scheduleUpdate
          }) : children);
        });
      });
      return popperProps.positionFixed ? popperInstance : createPortal(popperInstance, document.body);
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
      return jsx(Manager, null, jsx(Reference, {
        innerRef: innerRef
      }, function (_ref3) {
        var ref = _ref3.ref;
        return target({
          ref: ref,
          isOpen: isOpen,
          onClick: onClick
        });
      }), this.renderDialog(), isOpen && jsx(Blanket, {
        onClick: this.close,
        allowClose: allowClose
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(p, s) {
      var stateSlice = {};

      if (p.popperProps !== s.popperProps) {
        stateSlice.popperProps = _objectSpread({}, defaultPopperProps, p.popperProps);
      }

      if (!isEmptyObj(stateSlice)) {
        return stateSlice;
      }

      return null;
    }
  }]);

  return Popup;
}(PureComponent);

_defineProperty(Popup, "defaultProps", {
  allowClose: true,
  popperProps: defaultPopperProps
});

export { Popup as default };

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
} // ==============================
// Styled Components
// ==============================
// eslint-disable-next-line react/no-multi-comp


export var Blanket = forwardRef(function (_ref4, ref) {
  var allowClose = _ref4.allowClose,
      props = _objectWithoutProperties(_ref4, ["allowClose"]);

  return jsx("div", _extends({
    ref: ref,
    css: {
      bottom: 0,
      cursor: !allowClose ? 'not-allowed' : null,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      transform: 'translateZ(0)',
      zIndex: layers.layer()
    }
  }, props));
}); // eslint-disable-next-line react/no-multi-comp

export var Dialog = forwardRef(function (props, ref) {
  var shadow = colors.N40A;
  return jsx("div", _extends({
    ref: ref,
    css: {
      backgroundColor: 'white',
      borderRadius: 4,
      boxShadow: "0 0 0 1px ".concat(shadow, ", 0 4px 11px ").concat(shadow),
      zIndex: layers.layer()
    }
  }, props));
}); // eslint-disable-next-line react/no-multi-comp

export var DialogInner = forwardRef(function (_ref5, ref) {
  var isPadded = _ref5.isPadded,
      maxWidth = _ref5.maxWidth,
      minWidth = _ref5.minWidth,
      props = _objectWithoutProperties(_ref5, ["isPadded", "maxWidth", "minWidth"]);

  return jsx("div", _extends({
    ref: ref,
    css: {
      maxWidth: maxWidth,
      minWidth: minWidth,
      padding: isPadded ? gridSize() * 1.5 : null
    }
  }, props));
});
DialogInner.defaultProps = {
  isPadded: false,
  maxWidth: 440,
  minWidth: 160
};