"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var DefaultBaseComponent = function DefaultBaseComponent(props) {
  return _react.default.createElement("div", props);
};

var withContextFromProps = function withContextFromProps(propTypes) {
  var BaseComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultBaseComponent;

  var ContextProps =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(ContextProps, _Component);

    function ContextProps() {
      (0, _classCallCheck2.default)(this, ContextProps);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContextProps).apply(this, arguments));
    }

    (0, _createClass2.default)(ContextProps, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _this = this;

        var props = Object.keys(propTypes).reduce(function (result, key) {
          // eslint-disable-next-line no-param-reassign
          if (key !== 'children') result[key] = _this.props[key];
          return result;
        }, {});
        return props;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);

        if (BaseComponent !== null) {
          return _react.default.createElement(BaseComponent, null, this.props.children);
        }

        if (_react.default.Children.count(children) === 1) {
          var onlyChild = children; // Hacky fix to work with TransitionGroup in withRenderTarget

          return _react.default.Children.only(_react.default.cloneElement(onlyChild, props));
        }

        throw Error('Only one child should exist when base component is null');
      }
    }]);
    return ContextProps;
  }(_react.Component);

  ContextProps.displayName = 'withContextFromProps';
  ContextProps.childContextTypes = propTypes;
  return ContextProps;
};

var _default = withContextFromProps;
exports.default = _default;