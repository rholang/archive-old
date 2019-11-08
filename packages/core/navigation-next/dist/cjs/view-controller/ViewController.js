"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _unstated = require("unstated");

var defaultProps = {
  isDebugEnabled: false
};

var ViewController =
/*#__PURE__*/
function (_Container) {
  (0, _inherits2.default)(ViewController, _Container);

  function ViewController() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps,
        _isDebugEnabled = _ref.isDebugEnabled;

    (0, _classCallCheck2.default)(this, ViewController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ViewController).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      activeView: null,
      incomingView: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "reducers", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "views", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isDebugEnabled", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_updateViewController", function (view, initialData) {
      var id = view.id,
          type = view.type,
          getAnalyticsAttributes = view.getAnalyticsAttributes;
      var reducers = _this.reducers[id] || [];
      var data = reducers.reduce(function (d, reducer) {
        return reducer(d);
      }, initialData);
      var analyticsAttributes = getAnalyticsAttributes ? getAnalyticsAttributes(data) : undefined;

      _this.setState({
        activeView: {
          id: id,
          type: type,
          data: data,
          analyticsAttributes: analyticsAttributes
        },
        incomingView: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addReducer", function (viewId, reducer) {
      var reducersForView = [].concat((0, _toConsumableArray2.default)(_this.reducers[viewId] || []), [reducer]);
      _this.reducers = (0, _objectSpread5.default)({}, _this.reducers, (0, _defineProperty2.default)({}, viewId, reducersForView)); // If we're adding a reducer to the active view we'll want to force an
      // update so that the reducer gets applied.

      _this.updateActiveView(viewId);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeReducer", function (viewId, reducer) {
      var reducersForView = _this.reducers[viewId];

      if (!reducersForView) {
        return;
      }

      var newReducers = reducersForView.filter(function (r) {
        return r !== reducer;
      });
      _this.reducers = (0, _objectSpread5.default)({}, _this.reducers, (0, _defineProperty2.default)({}, viewId, newReducers)); // If we're removing a reducer from the active view we'll want to force an
      // update so that the data gets re-evaluated.

      _this.updateActiveView(viewId);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addView", function (view) {
      var id = view.id;
      _this.views = (0, _objectSpread5.default)({}, _this.views, (0, _defineProperty2.default)({}, id, view)); // We need to call setView again for the following cases:
      // 1. The added view matches the active view (if it returns a Promise we
      //    want to temporarily enter a loading state while it resolves).
      // 2. The added view matches the expected incoming view and we want to
      //    resolve it.

      var _this$state = _this.state,
          activeView = _this$state.activeView,
          incomingView = _this$state.incomingView;

      if (activeView && id === activeView.id || incomingView && id === incomingView.id) {
        _this.setView(id);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeView", function (viewId) {
      delete _this.views[viewId];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setView", function (viewId) {
      var view = _this.views[viewId]; // The view has been added

      if (view) {
        var id = view.id,
            type = view.type,
            getItems = view.getItems;
        var returnedItems = getItems(); // This view returned a Promise

        if (returnedItems instanceof Promise) {
          // Enter a temporary loading state
          _this.setState({
            incomingView: {
              id: id,
              type: type
            }
          }); // Wait for the Promise to resolve


          returnedItems.then(function (data) {
            _this._updateViewController(view, data);
          });
          return;
        } // The view returned data


        _this._updateViewController(view, returnedItems);

        return;
      } // The view has not been added yet. We enter an indefinite loading state
      // until the view is added or another view is set.


      _this.setState({
        incomingView: {
          id: viewId,
          type: null
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateActiveView", function (maybeViewId) {
      var activeView = _this.state.activeView;

      if (!activeView) {
        return;
      }

      if (maybeViewId && maybeViewId === activeView.id) {
        _this.setView(maybeViewId);

        return;
      }

      if (!maybeViewId) {
        _this.setView(activeView.id);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setIsDebugEnabled", function (isDebugEnabled) {
      _this.isDebugEnabled = isDebugEnabled;
    });

    if (typeof _isDebugEnabled !== 'undefined') {
      _this.isDebugEnabled = _isDebugEnabled;
    }

    return _this;
  }
  /**
   * Helper function for reducing a view's data and updating the state.
   */


  return ViewController;
}(_unstated.Container);

exports.default = ViewController;