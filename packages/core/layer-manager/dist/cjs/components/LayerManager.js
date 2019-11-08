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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTransitionGroup = require("react-transition-group");

var _gateway = require("./gateway");

// NOTE: lock the app wrapper to a 0 z-index. This allows layer manager to
// render all gateways hierarchically, on top of the app, without needing
// incremental z-indexes.
var AppWrapper = _styledComponents.default.div.withConfig({
  displayName: "LayerManager__AppWrapper",
  componentId: "ues105-0"
})(["\n  position: relative;\n  z-index: 0;\n"]);

var LayerManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LayerManager, _Component);

  function LayerManager() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, LayerManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LayerManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      ariaHiddenNode: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getAppRef", function (ref) {
      if (_this.state.ariaHiddenNode) return;

      _this.setState({
        ariaHiddenNode: ref
      });
    });
    return _this;
  }

  (0, _createClass2.default)(LayerManager, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        ariaHiddenNode: this.state.ariaHiddenNode
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_gateway.GatewayProvider, null, _react.default.createElement(AppWrapper, {
        innerRef: this.getAppRef
      }, _react.Children.only(children)), _react.default.createElement(_gateway.GatewayDest, {
        name: "modal",
        component: _reactTransitionGroup.TransitionGroup
      }), _react.default.createElement(_gateway.GatewayDest, {
        name: "spotlight",
        component: _reactTransitionGroup.TransitionGroup
      }), _react.default.createElement(_gateway.GatewayDest, {
        name: "flag"
      }), _react.default.createElement(_gateway.GatewayDest, {
        name: "tooltip",
        component: _reactTransitionGroup.TransitionGroup
      }));
    }
  }]);
  return LayerManager;
}(_react.Component);

exports.default = LayerManager;
(0, _defineProperty2.default)(LayerManager, "childContextTypes", {
  ariaHiddenNode: _propTypes.default.object
});