"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefinementBar = exports.RefinementBarConsumer = exports.RefinementBarProvider = exports.RefinementBarContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var RefinementBarContext = _react.default.createContext({});

exports.RefinementBarContext = RefinementBarContext;

var RefinementBarProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RefinementBarProvider, _Component);

  function RefinementBarProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RefinementBarProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RefinementBarProvider).call(this, props));
    var fieldConfig = _this.props.fieldConfig; // NOTE: this is the primary responsibility of the provider; to initialize
    // each field with its corresponding controller

    var initializedFields = (0, _utils.objectMap)(fieldConfig, function (field, key) {
      var Controller = field.type.controller;
      return new Controller((0, _objectSpread2.default)({
        key: key
      }, field));
    });
    _this.state = {
      fieldConfig: initializedFields
    };
    return _this;
  }

  (0, _createClass2.default)(RefinementBarProvider, [{
    key: "render",
    value: function render() {
      var context = {
        fieldConfig: this.state.fieldConfig,
        fieldKeys: this.fieldKeys,
        irremovableKeys: this.props.irremovableKeys,
        onChange: this.props.onChange,
        removeableKeys: this.removeableKeys,
        selectedKeys: this.selectedKeys,
        value: this.props.value,
        valueKeys: this.valueKeys
      };
      return _react.default.createElement(RefinementBarContext.Provider, {
        value: context
      }, this.props.children);
    }
  }, {
    key: "fieldKeys",
    get: function get() {
      return Object.keys(this.props.fieldConfig);
    }
  }, {
    key: "valueKeys",
    get: function get() {
      return Object.keys(this.props.value);
    }
  }, {
    key: "removeableKeys",
    get: function get() {
      var irremovable = this.props.irremovableKeys;
      return (0, _utils.diffArr)(this.fieldKeys, irremovable);
    }
  }, {
    key: "selectedKeys",
    get: function get() {
      var irremovable = this.props.irremovableKeys;
      return (0, _utils.diffArr)(this.valueKeys, irremovable);
    }
  }]);
  return RefinementBarProvider;
}(_react.Component);

exports.RefinementBarProvider = RefinementBarProvider;
(0, _defineProperty2.default)(RefinementBarProvider, "defaultProps", {
  irremovableKeys: []
});

var RefinementBarConsumer = function RefinementBarConsumer(_ref) {
  var children = _ref.children;
  return _react.default.createElement(RefinementBarContext.Consumer, null, function (ctx) {
    return children(ctx);
  });
}; // $FlowFixMe useContext


exports.RefinementBarConsumer = RefinementBarConsumer;

var useRefinementBar = function useRefinementBar() {
  return _react.default.useContext(RefinementBarContext);
};

exports.useRefinementBar = useRefinementBar;