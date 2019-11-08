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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFocusLock = _interopRequireDefault(require("react-focus-lock"));

/* eslint-disable react/sort-comp */
var FocusLock =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FocusLock, _Component);

  function FocusLock() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FocusLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FocusLock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ariaHiddenNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "initFromProps", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "teardownFromProps", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "initialise", function () {
      var autoFocus = _this.props.autoFocus; // set the element to hide from assistive technology

      _this.ariaHiddenNode = _this.props.ariaHiddenNode || _this.context.ariaHiddenNode; // accessible `popup` content

      if (_this.ariaHiddenNode) {
        _this.ariaHiddenNode.setAttribute('aria-hidden', '');
      }

      if (typeof autoFocus === 'function') {
        var elem = autoFocus();

        if (elem && elem.focus) {
          elem.focus();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "teardown", function () {
      if (_this.ariaHiddenNode) {
        _this.ariaHiddenNode.removeAttribute('aria-hidden');
      }
    });
    return _this;
  }

  (0, _createClass2.default)(FocusLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          enabled = _this$props.enabled,
          autoFocus = _this$props.autoFocus;

      if (typeof autoFocus === 'function') {
        // eslint-disable-next-line no-console
        console.warn('@atlaskit/layer-manager: Passing a function as autoFocus in FocusLock is deprecated. Please see "Auto focusing an element" in https://atlaskit.atlassian.com/packages/core/layer-manager');
      }

      if (enabled) {
        this.initialise();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.initFromProps && !this.teardownFromProps) {
        this.teardown();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.enabled && this.props.enabled !== prevProps.enabled) {
        this.initFromProps = true;
        this.initialise();
      }

      if (!this.props.enabled && this.props.enabled !== prevProps.enabled) {
        this.teardownFromProps = true;
        this.teardown();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          autoFocus = _this$props2.autoFocus,
          returnFocus = _this$props2.returnFocus;
      return _react.default.createElement(_reactFocusLock.default, {
        disabled: !enabled,
        autoFocus: !!autoFocus,
        returnFocus: returnFocus
      }, this.props.children);
    }
  }]);
  return FocusLock;
}(_react.Component);

exports.default = FocusLock;
(0, _defineProperty2.default)(FocusLock, "contextTypes", {
  /** available when invoked within @atlaskit/layer-manager */
  ariaHiddenNode: _propTypes.default.object
});
(0, _defineProperty2.default)(FocusLock, "defaultProps", {
  autoFocus: true,
  enabled: true,
  returnFocus: true
});