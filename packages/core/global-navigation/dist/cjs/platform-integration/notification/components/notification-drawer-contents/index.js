"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CONTENT_URL = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _styles = require("./styles");

var _addParamToUrl = _interopRequireDefault(require("../../add-param-to-url"));

var CONTENT_URL = '/home/notificationsDrawer/iframe.html';
exports.CONTENT_URL = CONTENT_URL;

var NotificationDrawer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NotificationDrawer, _Component);

  function NotificationDrawer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NotificationDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NotificationDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      hasIframeLoaded: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "iframe", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMessage", function (event) {
      if (event.source && _this.iframe && event.source.window === _this.iframe.contentWindow && event.data === 'readyForUser') {
        _this.setState({
          hasIframeLoaded: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleIframeLoad", function () {
      _this.setState({
        hasIframeLoaded: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "storeIFrame", function (component) {
      _this.iframe = component;
    });
    return _this;
  }

  (0, _createClass2.default)(NotificationDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('message', this.handleMessage);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          product = _this$props.product;
      var drawerUrl = CONTENT_URL;
      drawerUrl = locale ? (0, _addParamToUrl.default)(drawerUrl, 'locale', locale) : drawerUrl;
      drawerUrl = product ? (0, _addParamToUrl.default)(drawerUrl, 'product', product) : drawerUrl;
      return (0, _core.jsx)(_react.Fragment, null, !this.state.hasIframeLoaded && (0, _core.jsx)("div", {
        css: _styles.spinnerWrapper
      }, (0, _core.jsx)(_spinner.default, {
        size: "large",
        isCompleting: this.state.hasIframeLoaded
      })), (0, _core.jsx)("iframe", {
        css: (0, _styles.externalContent)(!!this.state.hasIframeLoaded),
        ref: this.storeIFrame,
        title: "Notifications",
        src: drawerUrl,
        onLoad: this.handleIframeLoad
      }));
    }
  }]);
  return NotificationDrawer;
}(_react.Component);

var _default = NotificationDrawer;
exports.default = _default;