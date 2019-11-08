"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Item = _interopRequireDefault(require("./Item"));

var _LoaderItem = _interopRequireDefault(require("./LoaderItem"));

var Items =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Items, _Component);

  function Items() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Items);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Items)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isLoaderShown: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleLoaderComplete", function () {
      _this.setState({
        isLoaderShown: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Items, [{
    key: "renderLoader",
    value: function renderLoader() {
      var _this$props = this.props,
          depth = _this$props.depth,
          items = _this$props.items;
      return _react.default.createElement(_LoaderItem.default, {
        isCompleting: !!(items && items.length),
        onComplete: this.handleLoaderComplete,
        depth: depth + 1
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this$props2 = this.props,
          render = _this$props2.render,
          items = _this$props2.items,
          _this$props2$depth = _this$props2.depth,
          depth = _this$props2$depth === void 0 ? 0 : _this$props2$depth;
      return items && items.map(function (itemData, index) {
        return _react.default.createElement(_Item.default, {
          data: itemData,
          depth: depth + 1,
          key: itemData && itemData.id || index,
          render: render
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaderShown = this.state.isLoaderShown;
      var busyAttrs = isLoaderShown ? {
        'aria-busy': true,
        'aria-live': 'polite'
      } : {};
      return _react.default.createElement("div", (0, _extends2.default)({
        role: "rowgroup"
      }, busyAttrs), isLoaderShown ? this.renderLoader() : this.renderItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.items && !prevState.isLoaderShown) {
        return {
          isLoaderShown: true
        };
      }

      return null;
    }
  }]);
  return Items;
}(_react.Component);

exports.default = Items;
(0, _defineProperty2.default)(Items, "defaultProps", {
  depth: 0
});