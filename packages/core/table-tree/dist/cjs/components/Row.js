"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RowWithoutAnalytics = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _version = require("../version.json");

var _styled = require("../styled");

var _Chevron = _interopRequireDefault(require("./Chevron"));

var _Cell = _interopRequireDefault(require("./Cell"));

var _toItemId = _interopRequireDefault(require("../utils/toItemId"));

var Row =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Row, _Component);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isExpanded: _this.props.isDefaultExpanded || false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onExpandToggle", function () {
      var isExpanded = _this.props.isExpanded;

      if (isExpanded !== undefined) {
        _this.onExpandStateChange(!isExpanded);
      } else {
        _this.setState({
          isExpanded: !_this.state.isExpanded
        });

        _this.onExpandStateChange(!_this.state.isExpanded);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Row, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isDefaultExpanded = _this$props.isDefaultExpanded,
          isExpanded = _this$props.isExpanded;

      if (isExpanded === undefined && isDefaultExpanded !== undefined && prevProps.isDefaultExpanded !== isDefaultExpanded && this.state.isExpanded !== isDefaultExpanded) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isExpanded: isDefaultExpanded
        });
      }
    }
  }, {
    key: "onExpandStateChange",
    value: function onExpandStateChange(isExpanded) {
      if (this.props.data) {
        if (isExpanded && this.props.onExpand) {
          this.props.onExpand(this.props.data);
        } else if (!isExpanded && this.props.onCollapse) {
          this.props.onCollapse(this.props.data);
        }
      }
    }
  }, {
    key: "isExpanded",
    value: function isExpanded() {
      var isExpanded = this.props.isExpanded;
      return isExpanded !== undefined ? isExpanded : this.state.isExpanded;
    }
  }, {
    key: "renderCell",
    value: function renderCell(cell, cellIndex) {
      var props = this.props;
      var isExpanded = this.isExpanded();
      var hasChildren = props.hasChildren,
          depth = props.depth;
      var isFirstCell = cellIndex === 0;
      var indentLevel = isFirstCell ? depth : 0;
      var cellContent = cell.props.children || [];

      if (isFirstCell && hasChildren) {
        cellContent = [_react.default.createElement(_Chevron.default, {
          key: "chevron",
          expandLabel: props.expandLabel,
          collapseLabel: props.collapseLabel,
          isExpanded: isExpanded,
          onExpandToggle: this.onExpandToggle,
          ariaControls: (0, _toItemId.default)(props.itemId)
        })].concat(cellContent);
      }

      return _react.default.cloneElement(cell, {
        key: cellIndex,
        columnIndex: cellIndex,
        indentLevel: indentLevel
      }, cellContent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          hasChildren = _this$props2.hasChildren,
          depth = _this$props2.depth,
          renderChildren = _this$props2.renderChildren;
      var isExpanded = this.isExpanded();
      var ariaAttrs = {};

      if (hasChildren) {
        ariaAttrs['aria-expanded'] = isExpanded;
      }

      if (depth !== undefined) {
        ariaAttrs['aria-level'] = depth;
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_styled.TreeRowContainer, (0, _extends2.default)({
        role: "row"
      }, ariaAttrs), _react.default.Children.map(this.props.children, function (cell, index) {
        return _this2.renderCell(cell, index);
      })), hasChildren && isExpanded && renderChildren && renderChildren());
    }
  }]);
  return Row;
}(_react.Component);

exports.RowWithoutAnalytics = Row;
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'row',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onExpand: createAndFireEventOnAtlaskit({
    action: 'expanded',
    actionSubject: 'tableTree',
    attributes: {
      componentName: 'row',
      packageName: _version.name,
      packageVersion: _version.version
    }
  }),
  onCollapse: createAndFireEventOnAtlaskit({
    action: 'collapsed',
    actionSubject: 'tableTree',
    attributes: {
      componentName: 'row',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(Row));

exports.default = _default;