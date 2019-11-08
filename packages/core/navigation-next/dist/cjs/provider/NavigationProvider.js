"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _unstated = require("unstated");

var _index = require("../index");

var _constants = require("../common/constants");

var LS_KEY = 'ATLASKIT_NAVIGATION_UI_STATE';
var DEFAULT_UI_STATE = {
  isCollapsed: false,
  productNavWidth: _constants.CONTENT_NAV_WIDTH,
  isResizeDisabled: false
};

function defaultGetCache() {
  if (typeof localStorage !== 'undefined') {
    var stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_UI_STATE;
  }

  return DEFAULT_UI_STATE;
}

function defaultSetCache(state) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }
}

var NavigationProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NavigationProvider, _Component);

  function NavigationProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NavigationProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NavigationProvider).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "uiState", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "viewController", void 0);
    var cache = props.cache,
        initialUIController = props.initialUIController,
        isDebugEnabled = props.isDebugEnabled;
    _this.uiState = new _index.UIController(initialUIController, cache);
    _this.viewController = new _index.ViewController({
      isDebugEnabled: isDebugEnabled
    });
    return _this;
  }

  (0, _createClass2.default)(NavigationProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var viewController = this.viewController;
      var isDebugEnabled = this.props.isDebugEnabled;

      if (isDebugEnabled !== prevProps.isDebugEnabled) {
        viewController.setIsDebugEnabled(!!isDebugEnabled);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var uiState = this.uiState,
          viewController = this.viewController;
      return (0, _core.jsx)(_unstated.Provider, {
        inject: [uiState, viewController]
      }, children);
    }
  }]);
  return NavigationProvider;
}(_react.Component);

exports.default = NavigationProvider;
(0, _defineProperty2.default)(NavigationProvider, "defaultProps", {
  cache: {
    get: defaultGetCache,
    set: defaultSetCache
  },
  isDebugEnabled: false
});