"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AkFieldRadioGroupWithoutAnalytics = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _fieldBase = _interopRequireWildcard(require("@atlaskit/field-base"));

var _version = require("./version.json");

var _Radio = _interopRequireDefault(require("./Radio"));

/* eslint-disable react/no-array-index-key */
if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/field-radio-group has been deprecated. Please use the @atlaskit/radio package instead.');
}

var FieldRadioGroupStateless =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldRadioGroupStateless, _Component);

  function FieldRadioGroupStateless() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldRadioGroupStateless);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldRadioGroupStateless)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderItems", function () {
      // Check items to avoid flow typing issue
      if (_this.props.items) {
        return _this.props.items.map(function (item, index) {
          return _react.default.createElement(_Radio.default, {
            key: index,
            isDisabled: item.isDisabled,
            isRequired: _this.props.isRequired,
            isSelected: item.isSelected,
            name: item.name,
            onChange: _this.props.onRadioChange,
            value: item.value
          }, item.label);
        });
      }

      return null;
    });
    return _this;
  }

  (0, _createClass2.default)(FieldRadioGroupStateless, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_fieldBase.Label // FIXME: Once label is properly typed as required we can remove this
      , {
        label: this.props.label || '',
        isRequired: this.props.isRequired
      }), _react.default.createElement(_fieldBase.default, {
        appearance: "none",
        isRequired: this.props.isRequired
      }, _react.default.createElement("div", {
        "aria-label": this.props.label,
        role: "group"
      }, this.renderItems())));
    }
  }]);
  return FieldRadioGroupStateless;
}(_react.Component);

exports.AkFieldRadioGroupWithoutAnalytics = FieldRadioGroupStateless;
(0, _defineProperty2.default)(FieldRadioGroupStateless, "defaultProps", {
  isRequired: false,
  items: [],
  label: ''
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'fieldRadioGroup',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onRadioChange: createAndFireEventOnAtlaskit({
    action: 'selected',
    actionSubject: 'radioItem',
    attributes: {
      componentName: 'fieldRadioGroup',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(FieldRadioGroupStateless));

exports.default = _default;