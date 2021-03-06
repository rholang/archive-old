"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rafSchd = _interopRequireDefault(require("raf-schd"));

var _popper = _interopRequireDefault(require("popper.js"));

var _ScrollBlock = _interopRequireDefault(require("./internal/ScrollBlock"));

var _helpers = require("./internal/helpers");

var _styledContentContainer = _interopRequireDefault(require("../styledContentContainer"));

// We create a dummy target when making the menu fixed so that we can force popper.js to use fixed positioning
// without affecting child layout of the actual target since children of fixed position elements can't use percentage
// heights/widths.
var FixedTarget = _styledComponents.default.div.withConfig({
  displayName: "Layer__FixedTarget",
  componentId: "qunuuz-0"
})(["\n  ", ";\n"], function (_ref) {
  var fixedOffset = _ref.fixedOffset,
      targetRef = _ref.targetRef;

  if (fixedOffset && targetRef) {
    var actualTarget = targetRef.firstChild;
    var rect = actualTarget.getBoundingClientRect();
    return "\n        position: fixed;\n        top: ".concat(fixedOffset.top, "px;\n        left: ").concat(fixedOffset.left, "px;\n        height: ").concat(rect.height, "px;\n        width: ").concat(rect.width, "px;\n        z-index: -1;\n      ");
  }

  return 'display: none;';
});

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/layer has been deprecated. It is an internal component and should not be used directly.');
}

var Layer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Layer, _Component);

  // working with extract-react-types
  function Layer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Layer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layer).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "popper", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "targetRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contentRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fixedRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "extractStyles", function (state) {
      if (state) {
        var popperHeight = state.offsets.popper.height;
        var left = Math.round(state.offsets.popper.left); // The offset position is sometimes an object and sometimes just a string...

        var cssPosition = (0, _typeof2.default)(state.offsets.popper.position) === 'object' ? state.offsets.popper.position.position : state.offsets.popper.position;

        var top = _this.fixPositionTopUnderflow(state.offsets.popper.top, cssPosition);

        var originalHeight = _this.state.originalHeight || popperHeight;

        var maxHeight = _this.calculateMaxHeight(originalHeight, popperHeight, top, cssPosition);

        _this.setState({
          // position: fixed or absolute
          cssPosition: cssPosition,
          hasExtractedStyles: true,
          transform: "translate3d(".concat(left, "px, ").concat(top, "px, 0px)"),
          // state.flipped is either true or undefined
          flipped: !!state.flipped,
          actualPosition: state.position,
          originalPosition: state.originalPosition,
          originalHeight: originalHeight,
          maxHeight: maxHeight
        });
      }
    });
    _this.state = {
      hasExtractedStyles: false,
      position: null,
      transform: null,
      flipped: false,
      actualPosition: null,
      // We set these default offsets to prevent a flash of popper content in the wrong position
      // which can cause incorrect height calculations. Popper will calculate these values
      offsets: {
        popper: {
          left: -9999,
          top: -9999
        }
      },
      originalPosition: null,
      // fix Safari parent width: https://product-fabric.atlassian.net/browse/ED-1784
      cssPosition: 'absolute',
      originalHeight: null,
      maxHeight: null,
      fixedOffset: null
    };
    _this.extractStyles = (0, _rafSchd.default)(_this.extractStyles.bind((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Layer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyPopper(this.props);
      this.calculateFixedOffset(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.applyPopper(nextProps);
      this.calculateFixedOffset(nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          onFlippedChange = _this$props.onFlippedChange,
          onPositioned = _this$props.onPositioned;
      var _this$state = this.state,
          flipped = _this$state.flipped,
          actualPosition = _this$state.actualPosition,
          originalPosition = _this$state.originalPosition,
          hasExtractedStyles = _this$state.hasExtractedStyles;

      if (prevState.flipped !== flipped && onFlippedChange) {
        onFlippedChange({
          flipped: flipped,
          actualPosition: actualPosition,
          originalPosition: originalPosition
        });
      } // This flag is set the first time the position is calculated from Popper and applied to the content


      if (!prevState.hasExtractedStyles && hasExtractedStyles && onPositioned) {
        onPositioned();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.extractStyles.cancel();

      if (this.popper) {
        this.popper.destroy();
      }
    }
    /* Calculate the max height of the popper if it's height is greater than the viewport to prevent
     * the bottom of the popper not being viewable.
     * Only works if the popper uses viewport as the boundary and has a fixed position ancestor.
     */

  }, {
    key: "calculateMaxHeight",
    value: function calculateMaxHeight(originalHeight, currentHeight, positionTop, cssPosition) {
      var DocumentElementClientHeight = 0;

      if (document.documentElement) {
        DocumentElementClientHeight = document.documentElement.clientHeight;
      }

      if (cssPosition !== 'fixed' || this.props.boundariesElement !== 'viewport') {
        return null;
      }

      var viewportHeight = Math.max(DocumentElementClientHeight, window.innerHeight || 0);
      return viewportHeight < originalHeight && currentHeight + positionTop >= viewportHeight - 50 ? // allow some spacing either side of viewport height
      viewportHeight - 12 : null;
    }
    /* Popper may return either a fixed or absolute position which would be applied to the
     * content style. In order to overcome clipping issues for overflow containing blocks when
     * the position is absolute, we create a fixed position wrapper.
     */

  }, {
    key: "calculateFixedOffset",
    value: function calculateFixedOffset(props) {
      var isAlwaysFixed = props.isAlwaysFixed;

      if (isAlwaysFixed && this.targetRef) {
        var actualTarget = this.targetRef.firstChild;
        this.setState({
          fixedOffset: {
            top: actualTarget.getBoundingClientRect().top,
            left: actualTarget.getBoundingClientRect().left
          }
        });
      } else if (!isAlwaysFixed && this.state.fixedOffset !== null) {
        this.setState({
          fixedOffset: null
        });
      }
    }
    /* Clamp fixed position to the window for fixed position poppers that flow off the top of the
     * window.
     * A fixed position popper is a popper who has an ancestor with position: fixed.
     *
     * It is too difficult to fix this for non-fixed position poppers without re-implementing popper's
     * offset functionality or fixing the issue upstream.
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "fixPositionTopUnderflow",
    value: function fixPositionTopUnderflow(popperTop, cssPosition) {
      return popperTop >= 0 || cssPosition !== 'fixed' ? Math.round(popperTop) : 0;
    }
  }, {
    key: "applyPopper",
    value: function applyPopper(props) {
      if (!this.fixedRef || !this.targetRef || !this.contentRef) {
        return;
      }

      if (this.popper) {
        this.popper.destroy();
      } // "new Popper(...)" operation is very expensive when called on virtual DOM.
      // This condition reduces the number of calls so we can run our tests faster
      // (time was reduced from 100s to 13s).


      if (!props.content) {
        return;
      } // we wrap our target in a div so that we can safely get a reference to it, but we pass the
      // actual target to popper


      var actualTarget = props.isAlwaysFixed ? this.fixedRef : this.targetRef.firstChild;
      var popperOpts = {
        placement: (0, _helpers.positionPropToPopperPosition)(props.position),
        onCreate: this.extractStyles,
        onUpdate: this.extractStyles,
        modifiers: {
          applyStyle: {
            enabled: false
          },
          hide: {
            enabled: false
          },
          offset: {
            enabled: true,
            offset: this.props.offset
          },
          flip: {
            enabled: !!this.props.autoFlip,
            flipVariations: true,
            boundariesElement: this.props.boundariesElement,
            padding: 0 // leave 0 pixels between popper and the boundariesElement

          },
          preventOverflow: {
            enabled: !!this.props.autoFlip,
            escapeWithReference: !(this.props.boundariesElement === 'scrollParent')
          }
        },
        positionFixed: props.isAlwaysFixed
      };
      var flipBehavior = (0, _helpers.getFlipBehavior)(props);

      if (flipBehavior) {
        popperOpts.modifiers.flip.behavior = flipBehavior;
      }

      this.popper = new _popper.default(actualTarget, this.contentRef, popperOpts);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          zIndex = _this$props2.zIndex,
          lockScroll = _this$props2.lockScroll;
      var _this$state2 = this.state,
          cssPosition = _this$state2.cssPosition,
          transform = _this$state2.transform,
          hasExtractedStyles = _this$state2.hasExtractedStyles,
          maxHeight = _this$state2.maxHeight,
          fixedOffset = _this$state2.fixedOffset;
      var opacity = hasExtractedStyles ? {} : {
        opacity: 0
      };
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        ref: function ref(_ref2) {
          _this2.targetRef = _ref2;
        }
      }, this.props.children), _react.default.createElement(FixedTarget, {
        targetRef: this.targetRef,
        fixedOffset: fixedOffset
      }, _react.default.createElement("div", {
        style: {
          height: '100%',
          width: '100%'
        },
        ref: function ref(_ref3) {
          _this2.fixedRef = _ref3;
        }
      })), lockScroll && _react.default.createElement(_ScrollBlock.default, null), _react.default.createElement(_styledContentContainer.default, {
        maxHeight: maxHeight
      }, _react.default.createElement("div", {
        ref: function ref(_ref4) {
          _this2.contentRef = _ref4;
        },
        style: (0, _objectSpread2.default)({
          top: 0,
          left: 0,
          position: cssPosition,
          transform: transform,
          zIndex: zIndex
        }, opacity)
      }, this.props.content)));
    }
  }]);
  return Layer;
}(_react.Component);
/* eslint-enable react/no-unused-prop-types */


exports.default = Layer;
(0, _defineProperty2.default)(Layer, "defaultProps", {
  autoFlip: true,
  boundariesElement: 'viewport',
  children: null,
  content: null,
  offset: '0, 0',
  onFlippedChange: function onFlippedChange() {},
  position: 'right middle',
  zIndex: 400,
  lockScroll: false,
  isAlwaysFixed: false,
  onPositioned: function onPositioned() {}
});