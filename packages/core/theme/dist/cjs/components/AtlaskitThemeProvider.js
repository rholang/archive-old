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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exenv = _interopRequireDefault(require("exenv"));

var colors = _interopRequireWildcard(require("../colors"));

var _constants = require("../constants");

var _Theme = _interopRequireDefault(require("./Theme"));

// For forward-compat until everything is upgraded.
function getStylesheetResetCSS(state) {
  var backgroundColor = colors.background(state);
  return "\n    body { background: ".concat(backgroundColor, "; }\n  ");
}

function buildThemeState(mode) {
  return {
    theme: (0, _defineProperty2.default)({}, _constants.CHANNEL, {
      mode: mode
    })
  };
}

var LegacyReset = _styledComponents.default.div.withConfig({
  displayName: "AtlaskitThemeProvider__LegacyReset",
  componentId: "sc-431dkp-0"
})(["\n  background-color: ", ";\n  color: ", ";\n\n  a {\n    color: ", ";\n  }\n  a:hover {\n    color: ", ";\n  }\n  a:active {\n    color: ", ";\n  }\n  a:focus {\n    outline-color: ", ";\n  }\n  h1 {\n    color: ", ";\n  }\n  h2 {\n    color: ", ";\n  }\n  h3 {\n    color: ", ";\n  }\n  h4 {\n    color: ", ";\n  }\n  h5 {\n    color: ", ";\n  }\n  h6 {\n    color: ", ";\n  }\n  small {\n    color: ", ";\n  }\n"], colors.background, colors.text, colors.link, colors.linkHover, colors.linkActive, colors.linkOutline, colors.heading, colors.heading, colors.heading, colors.heading, colors.heading, colors.subtleHeading, colors.subtleText);

var AtlaskitThemeProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AtlaskitThemeProvider, _Component);

  function AtlaskitThemeProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AtlaskitThemeProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AtlaskitThemeProvider).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stylesheet", void 0);
    _this.state = buildThemeState(props.mode);
    return _this;
  }

  (0, _createClass2.default)(AtlaskitThemeProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        hasAtlaskitThemeProvider: true
      };
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (!this.context.hasAtlaskitThemeProvider && _exenv.default.canUseDOM) {
        var css = getStylesheetResetCSS(this.state);
        this.stylesheet = document.createElement('style');
        this.stylesheet.type = 'text/css';
        this.stylesheet.innerHTML = css;

        if (document && document.head) {
          document.head.appendChild(this.stylesheet);
        }
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.mode !== this.props.mode) {
        var newThemeState = buildThemeState(newProps.mode);

        if (this.stylesheet) {
          var css = getStylesheetResetCSS(newThemeState);
          this.stylesheet.innerHTML = css;
        }

        this.setState(newThemeState);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.stylesheet && document && document.head) {
        document.head.removeChild(this.stylesheet);
        delete this.stylesheet;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var theme = this.state.theme;
      return (
        /* Wrapping the new provider around the old one provides forward
        compatibility when using the old provider for styled components. This
        allows us to use components converted to use the new API with consumers
        using the old provider along side components that may still be using the
        old theming API. */
        _react.default.createElement(_Theme.default.Provider, {
          value: function value() {
            return {
              mode: theme[_constants.CHANNEL].mode
            };
          }
        }, _react.default.createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, _react.default.createElement(LegacyReset, null, children)))
      );
    }
  }]);
  return AtlaskitThemeProvider;
}(_react.Component);

exports.default = AtlaskitThemeProvider;
(0, _defineProperty2.default)(AtlaskitThemeProvider, "defaultProps", {
  mode: _constants.DEFAULT_THEME_MODE
});
(0, _defineProperty2.default)(AtlaskitThemeProvider, "childContextTypes", {
  hasAtlaskitThemeProvider: _propTypes.default.bool
});
(0, _defineProperty2.default)(AtlaskitThemeProvider, "contextTypes", {
  hasAtlaskitThemeProvider: _propTypes.default.bool
});