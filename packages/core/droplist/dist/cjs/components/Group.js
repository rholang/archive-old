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

var _Group = _interopRequireWildcard(require("../styled/Group"));

var DroplistGroup =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DroplistGroup, _PureComponent);

  function DroplistGroup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DroplistGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DroplistGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      ariaLabel: _this.props.heading
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "headingElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      if (_this.props.heading || _this.props.elemAfter) {
        _this.setState({
          ariaLabel: _this.getAriaLabel()
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidUpdate", function () {
      if (_this.props.heading || _this.props.elemAfter) {
        _this.setState({
          ariaLabel: _this.getAriaLabel()
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getAriaLabel", function () {
      var _this$props = _this.props,
          elemAfter = _this$props.elemAfter,
          heading = _this$props.heading;
      var afterText = elemAfter && typeof elemAfter === 'string' ? elemAfter : _this.headingElement && _this.headingElement.textContent;
      return "".concat(heading || '', " ").concat(afterText || '');
    });
    return _this;
  }

  (0, _createClass2.default)(DroplistGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          elemAfter = _this$props2.elemAfter,
          heading = _this$props2.heading;
      var ariaLabel = this.state.ariaLabel;
      return _react.default.createElement(_Group.default, {
        "aria-label": ariaLabel,
        role: "group"
      }, heading ? _react.default.createElement(_Group.Heading, {
        "aria-hidden": "true",
        "data-role": "droplistGroupHeading"
      }, _react.default.createElement(_Group.HeadingText, null, heading), elemAfter ? _react.default.createElement(_Group.HeadingAfter, {
        innerRef: function innerRef(r) {
          _this2.headingElement = r;
        }
      }, elemAfter) : null) : null, children);
    }
  }]);
  return DroplistGroup;
}(_react.PureComponent);

DroplistGroup.displayName = 'Group';
var _default = DroplistGroup;
exports.default = _default;