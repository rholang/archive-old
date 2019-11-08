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

var _sizeDetector = _interopRequireDefault(require("@atlaskit/size-detector"));

var _rafSchd = _interopRequireDefault(require("raf-schd"));

var HeightDetector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeightDetector, _Component);

  function HeightDetector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HeightDetector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HeightDetector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "notifyHeight", (0, _rafSchd.default)(function (height) {
      _this.props.onHeightChange(height);
    }));
    return _this;
  }

  (0, _createClass2.default)(HeightDetector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_sizeDetector.default, null, function (_ref) {
        var height = _ref.height;

        if (height === null) {
          return null;
        }

        _this2.notifyHeight(height);

        return _this2.props.children;
      });
    }
  }]);
  return HeightDetector;
}(_react.Component);

exports.default = HeightDetector;