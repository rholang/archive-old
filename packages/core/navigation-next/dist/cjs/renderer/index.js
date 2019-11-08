"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TypedItemsRenderer", {
  enumerable: true,
  get: function get() {
    return _components.default;
  }
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _components = _interopRequireDefault(require("./components"));

// Use TypedItemsRenderer with its default value of empty
var ItemsRenderer =
/*#__PURE__*/
function (_TypedItemsRenderer) {
  (0, _inherits2.default)(ItemsRenderer, _TypedItemsRenderer);

  function ItemsRenderer() {
    (0, _classCallCheck2.default)(this, ItemsRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ItemsRenderer).apply(this, arguments));
  }

  return ItemsRenderer;
}(_components.default);

exports.default = ItemsRenderer;