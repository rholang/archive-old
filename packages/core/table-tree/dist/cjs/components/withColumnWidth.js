"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withColumnWidth;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function withColumnWidth(Cell) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(CellWithColumnWidth, _Component);

    function CellWithColumnWidth() {
      (0, _classCallCheck2.default)(this, CellWithColumnWidth);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CellWithColumnWidth).apply(this, arguments));
    }

    (0, _createClass2.default)(CellWithColumnWidth, [{
      key: "UNSAFE_componentWillMount",
      value: function UNSAFE_componentWillMount() {
        this.setColumnWidth(this.props.width);
      }
    }, {
      key: "setColumnWidth",
      value: function setColumnWidth(width) {
        if (width !== undefined) {
          this.context.tableTree.setColumnWidth(this.props.columnIndex, width);
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.setColumnWidth(nextProps.width);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            width = _this$props.width,
            columnIndex = _this$props.columnIndex;
        var columnWidth = width !== null && width !== undefined ? width : this.context.tableTree.getColumnWidth(columnIndex);
        return _react.default.createElement(Cell, (0, _extends2.default)({}, this.props, {
          width: columnWidth
        }));
      }
    }]);
    return CellWithColumnWidth;
  }(_react.Component), (0, _defineProperty2.default)(_class, "contextTypes", {
    tableTree: _propTypes.default.object.isRequired
  }), _temp;
}