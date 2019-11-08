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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("../styled");

var _Rows = _interopRequireDefault(require("./Rows"));

var _Row = _interopRequireDefault(require("./Row"));

var _Headers = _interopRequireDefault(require("./Headers"));

var _Header = _interopRequireDefault(require("./Header"));

var _Cell = _interopRequireDefault(require("./Cell"));

var TableTree =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TableTree, _Component);

  function TableTree() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TableTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TableTree)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      columnWidths: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setColumnWidth", function (columnIndex, width) {
      var columnWidths = _this.state.columnWidths;

      if (width === columnWidths[columnIndex]) {
        return;
      }

      columnWidths[columnIndex] = width;

      _this.setState({
        columnWidths: columnWidths
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getColumnWidth", function (columnIndex) {
      return _this.state && _this.state.columnWidths[columnIndex] || null;
    });
    return _this;
  }

  (0, _createClass2.default)(TableTree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var widths = this.props.columnWidths;

      if (widths) {
        this.setState({
          columnWidths: widths
        }); // eslint-disable-line
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        tableTree: {
          columnWidths: this.state.columnWidths,
          setColumnWidth: this.setColumnWidth,
          getColumnWidth: this.getColumnWidth
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          headers = _this$props.headers,
          columns = _this$props.columns,
          _this$props$columnWid = _this$props.columnWidths,
          columnWidths = _this$props$columnWid === void 0 ? [] : _this$props$columnWid;

      var heads = headers && _react.default.createElement(_Headers.default, null, headers.map(function (header, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.createElement(_Header.default, {
            key: index,
            columnIndex: index,
            width: columnWidths[index]
          }, header)
        );
      }));

      var rows = null;

      if (columns && items) {
        rows = _react.default.createElement(_Rows.default, {
          items: items,
          render: function render(_ref) {
            var id = _ref.id,
                children = _ref.children,
                hasChildren = _ref.hasChildren,
                content = _ref.content;
            return _react.default.createElement(_Row.default, {
              itemId: id,
              items: children,
              hasChildren: hasChildren
            }, columns.map(function (CellContent, index) {
              return _react.default.createElement(_Cell.default // eslint-disable-next-line react/no-array-index-key
              , {
                key: index,
                columnIndex: index,
                width: columnWidths[index]
              }, _react.default.createElement(CellContent, content));
            }));
          }
        });
      }

      return _react.default.createElement(_styled.TableTreeContainer, {
        role: "treegrid",
        "aria-readonly": true
      }, heads, rows, this.props.children);
    }
  }]);
  return TableTree;
}(_react.Component);

exports.default = TableTree;
(0, _defineProperty2.default)(TableTree, "childContextTypes", {
  tableTree: _propTypes.default.object.isRequired
});