"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _uuid = _interopRequireDefault(require("uuid"));

var _getDisplayName = _interopRequireDefault(require("../../util/getDisplayName"));

var _safeContextCall = _interopRequireDefault(require("../../util/safeContextCall"));

var _contextNamespace = require("../../util/contextNamespace");

var withItemFocus = function withItemFocus(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithItemFocus, _Component);

    function WithItemFocus() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithItemFocus);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithItemFocus)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "contextId", void 0);
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "callContextFn", (0, _safeContextCall.default)((0, _assertThisInitialized2.default)(_this), _contextNamespace.focusManagerContext));
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "isFocusable", function () {
        return !_this.props.isDisabled && !_this.props.isHidden;
      });
      (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleFocus", function () {
        if (_this.isFocusable()) {
          _this.callContextFn('itemFocused', _this.contextId);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(WithItemFocus, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.isFocusable()) {
          return;
        }

        this.contextId = (0, _uuid.default)();
        this.callContextFn('registerItem', this.contextId, _reactDom.default.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
        );
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this.isFocusable()) {
          return;
        }

        this.callContextFn('updateItem', this.contextId, _reactDom.default.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
        );
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.isFocusable()) {
          this.callContextFn('deregisterItem', this.contextId);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({
          onFocus: this.handleFocus,
          role: "menuitem"
        }, otherProps), children);
      }
    }]);
    return WithItemFocus;
  }(_react.Component), (0, _defineProperty3.default)(_class, "displayName", "WithItemFocus(".concat((0, _getDisplayName.default)(WrappedComponent), ")")), (0, _defineProperty3.default)(_class, "contextTypes", (0, _defineProperty3.default)({}, _contextNamespace.focusManagerContext, _propTypes.default.object)), _temp;
};

var _default = withItemFocus;
exports.default = _default;