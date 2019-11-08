"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _unstated = require("unstated");

var _constants = require("../common/constants");

var defaultState = {
  isResizing: false,
  isResizeDisabled: false,
  isCollapsed: false,
  productNavWidth: _constants.CONTENT_NAV_WIDTH
};

var UIController =
/*#__PURE__*/
function (_Container) {
  (0, _inherits2.default)(UIController, _Container);

  function UIController(initialState, cache) {
    var _this;

    (0, _classCallCheck2.default)(this, UIController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UIController).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCache", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCache", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isCollapsedStore", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "storeState", function (state) {
      _this.setState(state);

      var _this$state = _this.state,
          isCollapsed = _this$state.isCollapsed,
          productNavWidth = _this$state.productNavWidth;

      if (_this.setCache) {
        _this.setCache({
          isCollapsed: isCollapsed,
          productNavWidth: productNavWidth
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "collapse", function () {
      if (_this.state.isResizeDisabled) {
        return;
      }

      _this.storeState({
        isCollapsed: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "expand", function () {
      if (_this.state.isResizeDisabled) {
        return;
      }

      _this.storeState({
        isCollapsed: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleCollapse", function () {
      var toggle = _this.state.isCollapsed ? _this.expand : _this.collapse;
      toggle();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "manualResizeStart", function (_ref) {
      var productNavWidth = _ref.productNavWidth,
          isCollapsed = _ref.isCollapsed;

      if (_this.state.isResizeDisabled) {
        return;
      }

      _this.storeState({
        isResizing: true,
        productNavWidth: productNavWidth,
        isCollapsed: isCollapsed
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "manualResizeEnd", function (_ref2) {
      var productNavWidth = _ref2.productNavWidth,
          isCollapsed = _ref2.isCollapsed;

      if (_this.state.isResizeDisabled) {
        return;
      }

      _this.storeState({
        isResizing: false,
        productNavWidth: productNavWidth,
        isCollapsed: isCollapsed
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "enableResize", function () {
      var isCollapsed = typeof _this.isCollapsedStore === 'boolean' ? _this.isCollapsedStore : _this.state.isCollapsed; // This is a page-level setting not a user preference so we don't cache
      // this.

      _this.setState({
        isCollapsed: isCollapsed,
        isResizeDisabled: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "disableResize", function () {
      // Remember this so that we can reset it if resizing is enabled again.
      _this.isCollapsedStore = _this.state.isCollapsed; // This is a page-level setting not a user preference so we don't cache
      // this.

      _this.setState({
        isCollapsed: false,
        isResizeDisabled: true
      });
    });
    var cachedState = {};

    if (cache) {
      var get = cache.get,
          set = cache.set;
      var retrievedCache = get();

      if (retrievedCache) {
        var isCollapsed = retrievedCache.isCollapsed,
            productNavWidth = retrievedCache.productNavWidth;
        cachedState = {
          isCollapsed: isCollapsed,
          productNavWidth: productNavWidth
        };
      }

      _this.getCache = get;
      _this.setCache = set;
    }

    var _state = (0, _objectSpread2.default)({}, defaultState, cachedState, initialState);

    var _isCollapsed = _state.isCollapsed; // isResizeDisabled takes precedence over isCollapsed

    if (initialState && initialState.isResizeDisabled) {
      // Remember this so that we can reset it if resizing is enabled again.
      _this.isCollapsedStore = _isCollapsed;
      _isCollapsed = false;
    }

    _this.state = (0, _objectSpread2.default)({}, _state, {
      isCollapsed: _isCollapsed
    });
    return _this;
  }

  return UIController;
}(_unstated.Container);

exports.default = UIController;