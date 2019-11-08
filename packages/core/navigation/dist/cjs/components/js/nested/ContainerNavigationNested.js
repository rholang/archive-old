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

var _reactTransitionGroup = require("react-transition-group");

var _NestedNavigationPage = _interopRequireDefault(require("../../styled/NestedNavigationPage"));

var _NestedNavigationWrapper = _interopRequireDefault(require("../../styled/NestedNavigationWrapper"));

var ContainerNavigationNested =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ContainerNavigationNested, _PureComponent);

  function ContainerNavigationNested() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ContainerNavigationNested);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ContainerNavigationNested)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      stack: _this.props.stack,
      traversalDirection: 'down'
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAnimationEnd", function () {
      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd({
          traversalDirection: _this.state.traversalDirection
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderChildren", function () {
      return _react.default.createElement(_reactTransitionGroup.Transition, {
        addEndListener: function addEndListener(node, done) {
          node.addEventListener('animationend', done);
        },
        key: _this.state.stack.length,
        onExited: _this.handleAnimationEnd
      }, function (transitionState) {
        return _react.default.createElement(_NestedNavigationPage.default, {
          transitionState: transitionState,
          traversalDirection: _this.state.traversalDirection
        }, _this.state.stack[_this.state.stack.length - 1]);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ContainerNavigationNested, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var _this2 = this;

      var stack = _ref.stack;

      var traversalDirection = function () {
        if (stack.length !== _this2.props.stack.length) {
          return stack.length < _this2.props.stack.length ? 'up' : 'down';
        }

        return _this2.state.traversalDirection;
      }();

      this.setState({
        traversalDirection: traversalDirection
      }, function () {
        _this2.setState({
          stack: stack
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_NestedNavigationWrapper.default, {
        component: "div",
        traversalDirection: this.state.traversalDirection
      }, this.renderChildren());
    }
  }]);
  return ContainerNavigationNested;
}(_react.PureComponent);

exports.default = ContainerNavigationNested;