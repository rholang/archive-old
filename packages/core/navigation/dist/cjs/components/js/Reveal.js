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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _RevealInner = _interopRequireDefault(require("../styled/RevealInner"));

var Reveal =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Reveal, _PureComponent);

  function Reveal(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Reveal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Reveal).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTransitionEnd", function () {
      if (_this.props.isOpen) {
        return;
      } // hide children after animation to close them


      _this.setState({
        shouldRenderChildren: false
      });
    });
    var isOpen = props.isOpen,
        shouldAnimate = props.shouldAnimate;
    _this.state = {
      isAnimatingInOnMount: isOpen && shouldAnimate,
      shouldRenderChildren: isOpen
    };
    return _this;
  }

  (0, _createClass2.default)(Reveal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.isAnimatingInOnMount) {
        return;
      } // Forcing async to obtain clean render.
      // Needed to use a setTimeout to force this,
      // could not just rely on the requestAnimationFrame.


      setTimeout(function () {
        // optimised render
        requestAnimationFrame(function () {
          _this2.setState({
            isAnimatingInOnMount: false
          });
        });
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var isClosed = !this.props.isOpen;
      var willClose = !nextProps.isOpen;
      var willOpen = nextProps.isOpen;
      var shouldAnimate = nextProps.shouldAnimate; // ensure children are rendered before open animation occurs

      if (isClosed && willOpen) {
        this.setState({
          shouldRenderChildren: true
        });
      } // if closing with no animation: hide the children immediately


      if (willClose && !shouldAnimate) {
        this.setState({
          shouldRenderChildren: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          openHeight = _this$props.openHeight,
          shouldAnimate = _this$props.shouldAnimate;
      var _this$state = this.state,
          isAnimatingInOnMount = _this$state.isAnimatingInOnMount,
          shouldRenderChildren = _this$state.shouldRenderChildren;
      return _react.default.createElement(_RevealInner.default, {
        isOpen: isAnimatingInOnMount ? false : isOpen,
        openHeight: openHeight,
        shouldAnimate: shouldAnimate,
        onTransitionEnd: this.onTransitionEnd
      }, shouldRenderChildren ? children : null);
    }
  }]);
  return Reveal;
}(_react.PureComponent);

exports.default = Reveal;