"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutEventListener = exports.LayoutEventEmitter = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var noop = function noop() {};

var _React$createContext = _react.default.createContext({
  emitItemDragStart: noop,
  emitItemDragEnd: noop
}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.LayoutEventEmitter = Consumer;

var LayoutEventListener =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LayoutEventListener, _Component);

  function LayoutEventListener(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutEventListener);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutEventListener).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "emitters", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "emitItemDragStart", function () {
      _this.props.onItemDragStart();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "emitItemDragEnd", function () {
      _this.props.onItemDragEnd();
    });
    _this.emitters = {
      emitItemDragStart: _this.emitItemDragStart,
      emitItemDragEnd: _this.emitItemDragEnd
    };
    return _this;
  }

  (0, _createClass2.default)(LayoutEventListener, [{
    key: "render",
    value: function render() {
      return (0, _core.jsx)(Provider, {
        value: this.emitters
      }, this.props.children);
    }
  }]);
  return LayoutEventListener;
}(_react.Component);

exports.LayoutEventListener = LayoutEventListener;
(0, _defineProperty2.default)(LayoutEventListener, "defaultProps", {
  onItemDragStart: noop,
  onItemDragEnd: noop
});