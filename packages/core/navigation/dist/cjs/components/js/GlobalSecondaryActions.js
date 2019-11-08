"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.maxSecondaryItems = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var maxSecondaryItems = 5;
exports.maxSecondaryItems = maxSecondaryItems;

function checkIfTooManySecondaryActions() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (actions.length > maxSecondaryItems) {
    // eslint-disable-next-line no-console
    console.warn("AkGlobalNavigation will only render up to ".concat(maxSecondaryItems, " secondary actions."));
  }
}

var GlobalSecondaryActions =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GlobalSecondaryActions, _PureComponent);

  function GlobalSecondaryActions(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, GlobalSecondaryActions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalSecondaryActions).call(this, props, context));
    checkIfTooManySecondaryActions(props.actions);
    return _this;
  }

  (0, _createClass2.default)(GlobalSecondaryActions, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      checkIfTooManySecondaryActions(nextProps.actions);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.props.actions.map(function (action, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          index < maxSecondaryItems ? _react.default.createElement("div", {
            key: index
          }, action) : null
        );
      }));
    }
  }]);
  return GlobalSecondaryActions;
}(_react.PureComponent);

exports.default = GlobalSecondaryActions;