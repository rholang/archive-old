"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _tabbable = _interopRequireDefault(require("tabbable"));

var FocusTrap =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FocusTrap, _React$Component);

  function FocusTrap(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FocusTrap);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FocusTrap).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "target", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "originElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focus", function () {
      var target = _this.target.current;
      var el = (0, _tabbable.default)(target)[0] || target;

      if (el && typeof el.focus === 'function') {
        el.focus({
          preventScroll: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFocus", function (event) {
      var el = _this.target.current;

      if (el && el !== event.target && !el.contains(event.target)) {
        _this.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTabCatcher", function () {
      return _this.target.current ? (0, _reactDom.createPortal)(_react.default.createElement("div", {
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

  (0, _createClass2.default)(FocusTrap, [{
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
      return _react.default.createElement(_react.default.Fragment, null, this.props.children({
        ref: this.target
      }), this.renderTabCatcher());
    }
  }]);
  return FocusTrap;
}(_react.default.Component);

exports.default = FocusTrap;