"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PortalWithThemeProvider;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = require("styled-components");

var _reactTransitionGroup = require("react-transition-group");

var FirstChild = function FirstChild(_ref) {
  var children = _ref.children;
  return _react.Children.toArray(children)[0] || null;
};

var Portal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Portal, _Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "portalElement", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mountTimeout", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderChildren", function (children) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          withTransitionGroup = _this$props.withTransitionGroup;
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, withTransitionGroup ? _react.default.createElement(_reactTransitionGroup.TransitionGroup, {
        component: FirstChild
      }, children) : children);
    });
    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var node = document.createElement('span');

      if (document.body) {
        document.body.appendChild(node);
        this.portalElement = node; // mounting components in portals can have side effects (e.g. modals
        // applying scroll / focus locks). Because the unmounting of other portals
        // happens asynchronously, we wait for a moment before mounting new
        // portals to avoid race conditions in unmount handlers

        this.mountTimeout = setTimeout(function () {
          return _this2.componentDidUpdate();
        }, 1);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var children = this.props.children;

      if (this.portalElement) {
        var portal = this.portalElement;
        (0, _reactDom.render)(this.renderChildren(children), portal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // re-render an empty react tree into the portal element so that any
      // mounted components get cleaned up and have a chance to complete their
      // lifecycle before the portal is removed from the dom entirely
      if (this.mountTimeout) {
        clearTimeout(this.mountTimeout);
      }

      if (this.portalElement) {
        var portal = this.portalElement;
        (0, _reactDom.render)(this.renderChildren(), portal, function () {
          // allow time for transitions to complete before the dom is cleaned up
          // five seconds is an arbitary number, but is more than any of our
          // animations need to complete
          // eslint-disable-next-line @wordpress/react-no-unsafe-timeout
          setTimeout(function () {
            var target = document.body;
            if (!target) return;
            (0, _reactDom.unmountComponentAtNode)(portal);
            target.removeChild(portal);
          }, 5000);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Portal;
}(_react.Component); // Pass theme through to be consumed


var PortalWithTheme = (0, _styledComponents.withTheme)(Portal); // Wrap the default export in a ThemeProvider component so that withTheme
// doesn't freak out if the app doesn't have one already

function PortalWithThemeProvider(props) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(PortalWithTheme, props));
}