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

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _styled = require("../styled");

var LoaderItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LoaderItem, _Component);

  function LoaderItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, LoaderItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LoaderItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      phase: 'loading'
    });
    return _this;
  }

  (0, _createClass2.default)(LoaderItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.phase === 'loading' && this.state.phase === 'complete') {
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isCompleting = _this$props.isCompleting,
          depth = _this$props.depth;
      var phase = this.state.phase;
      return phase === 'loading' ? _react.default.createElement(_styled.TreeRowContainer, null, _react.default.createElement(_styled.Cell, {
        indentLevel: depth,
        width: "100%"
      }, _react.default.createElement(_styled.LoaderItemContainer, {
        isRoot: depth === 1
      }, _react.default.createElement(_spinner.default, {
        isCompleting: isCompleting,
        size: "small",
        invertColor: false
      })))) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isCompleting && prevState.phase === 'loading') {
        return {
          phase: 'complete'
        };
      }

      return null;
    }
  }]);
  return LoaderItem;
}(_react.Component);

exports.default = LoaderItem;
(0, _defineProperty2.default)(LoaderItem, "defaultProps", {
  depth: 1
});