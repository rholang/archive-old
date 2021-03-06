"use strict";

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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _contextNamespace = require("../../util/contextNamespace");

var DropdownItemClickManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItemClickManager, _Component);

  function DropdownItemClickManager() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownItemClickManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownItemClickManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty3.default)((0, _assertThisInitialized2.default)(_this), "handleItemClicked", function (event) {
      _this.props.onItemClicked(event);
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownItemClickManager, [{
    key: "getChildContext",
    value: function getChildContext() {
      return (0, _defineProperty3.default)({}, _contextNamespace.clickManagerContext, {
        itemClicked: this.handleItemClicked
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DropdownItemClickManager;
}(_react.Component);

exports.default = DropdownItemClickManager;
(0, _defineProperty3.default)(DropdownItemClickManager, "childContextTypes", (0, _defineProperty3.default)({}, _contextNamespace.clickManagerContext, _propTypes.default.object));