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

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GatewayRegistry = _interopRequireDefault(require("./GatewayRegistry"));

var Gateway =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Gateway, _Component);

  function Gateway(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Gateway);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Gateway).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "gatewayRegistry", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", '');
    _this.gatewayRegistry = context.gatewayRegistry;
    return _this;
  }

  (0, _createClass2.default)(Gateway, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.id = this.gatewayRegistry.register(this.props.into, this.props.children);
      this.renderIntoGatewayNode(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      if (!props.shouldBlockRender) {
        this.gatewayRegistry.clearChild(this.props.into, this.id);
        this.renderIntoGatewayNode(props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.gatewayRegistry.unregister(this.props.into, this.id);
    }
  }, {
    key: "renderIntoGatewayNode",
    value: function renderIntoGatewayNode(props) {
      this.gatewayRegistry.addChild(this.props.into, this.id, props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Gateway;
}(_react.Component);

exports.default = Gateway;
(0, _defineProperty2.default)(Gateway, "contextTypes", {
  gatewayRegistry: _propTypes.default.instanceOf(_GatewayRegistry.default).isRequired
});