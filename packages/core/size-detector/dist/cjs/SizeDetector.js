"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _rafSchd = _interopRequireDefault(require("raf-schd"));

// Need to make outer div full height in case consumer wants to align
// child content vertically center. These styles can be overridden by the
// product using the optional SizeDetector.containerStyle prop.
var containerDivStyle = {
  height: '100%',
  flex: '1 0 auto',
  position: 'relative'
}; // Not using styled-components here for performance
// and framework-agnostic reasons.

var objectStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  opacity: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: -1
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/size-detector has been deprecated. Please use the @atlaskit/width-detector package instead.');
}

var SizeDetector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SizeDetector, _Component);

  function SizeDetector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SizeDetector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SizeDetector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resizeObjectDocument", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "containerRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "objectElementRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      sizeMetrics: {
        width: null,
        height: null
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleObjectLoad", function () {
      if (!_this.objectElementRef.current) {
        return;
      }

      _this.resizeObjectDocument = _this.objectElementRef.current.contentDocument.defaultView;

      _this.resizeObjectDocument.addEventListener('resize', _this.handleResize);

      _this.handleResize();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleResize", (0, _rafSchd.default)(function () {
      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          containerRef = _assertThisInitialize.containerRef;

      if (!containerRef.current) {
        return;
      }

      var sizeMetrics = {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      };

      _this.setState({
        sizeMetrics: sizeMetrics
      });

      if (_this.props.onResize) {
        _this.props.onResize(sizeMetrics);
      }
    }));
    return _this;
  }

  (0, _createClass2.default)(SizeDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.objectElementRef.current) {
        this.objectElementRef.current.data = 'about:blank';
      }

      this.handleResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.cancel();

      if (this.resizeObjectDocument) {
        this.resizeObjectDocument.removeEventListener('resize', this.handleResize);
      }
    } // Attach the resize event to object when it loads

  }, {
    key: "render",
    value: function render() {
      var sizeMetrics = this.state.sizeMetrics;
      var children = this.props.children;
      return _react.default.createElement("div", {
        style: (0, _objectSpread2.default)({}, containerDivStyle, this.props.containerStyle),
        ref: this.containerRef
      }, _react.default.createElement("object", {
        type: "text/html",
        style: objectStyle,
        ref: this.objectElementRef,
        onLoad: this.handleObjectLoad,
        "aria-hidden": true,
        tabIndex: -1
      }), children(sizeMetrics));
    }
  }]);
  return SizeDetector;
}(_react.Component);

exports.default = SizeDetector;
(0, _defineProperty2.default)(SizeDetector, "defaultProps", {
  containerStyle: {}
});