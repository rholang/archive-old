import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { createPortal } from 'react-dom';
import tabbable from 'tabbable';

var FocusTrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FocusTrap, _React$Component);

  function FocusTrap(props) {
    var _this;

    _classCallCheck(this, FocusTrap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FocusTrap).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "target", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "originElement", void 0);

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      var target = _this.target.current;
      var el = tabbable(target)[0] || target;

      if (el && typeof el.focus === 'function') {
        el.focus({
          preventScroll: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var el = _this.target.current;

      if (el && el !== event.target && !el.contains(event.target)) {
        _this.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTabCatcher", function () {
      return _this.target.current ? createPortal(React.createElement("div", {
        tabIndex: "0",
        "data-last-tabbable-node": true
      }), // eslint-disable-line
      document.body) : null;
    });

    if (typeof document !== 'undefined') {
      _this.originElement = document.activeElement;
    }

    return _this;
  }

  _createClass(FocusTrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focus();
      document.addEventListener('focusin', this.handleFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('focusin', this.handleFocus);
      var el = this.originElement;

      if (el && typeof el.focus === 'function') {
        el.focus();
      }
    } // NOTE: wait for the target to be available before injecting the tab
    // catcher so, if the target is also portalled, the tab catcher will be
    // *after* the target in the DOM.

  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, this.props.children({
        ref: this.target
      }), this.renderTabCatcher());
    }
  }]);

  return FocusTrap;
}(React.Component);

export { FocusTrap as default };