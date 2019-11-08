"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _ExperimentContext = require("./ExperimentContext");

var ExperimentController =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ExperimentController, _Component);

  function ExperimentController(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ExperimentController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExperimentController).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resolverPromises", {});
    var experimentEnrollmentConfig = _this.props.experimentEnrollmentConfig;
    var intialExperiments = Object.keys(experimentEnrollmentConfig).reduce(function (cumulative, experimentKey) {
      return (0, _objectSpread3.default)({}, cumulative, (0, _defineProperty2.default)({}, experimentKey, {
        isEnrollmentDecided: false,
        enrollmentResolver: function enrollmentResolver() {
          return _this.resolverPromises[experimentKey] || _this.resolveEnrollmentForExperiment(experimentKey);
        }
      }));
    }, {});
    _this.state = {
      experiments: intialExperiments
    };
    return _this;
  }

  (0, _createClass2.default)(ExperimentController, [{
    key: "resolveEnrollmentForExperiment",
    value: function resolveEnrollmentForExperiment(experimentKey) {
      var _this2 = this;

      var _this$props = this.props,
          experimentEnrollmentConfig = _this$props.experimentEnrollmentConfig,
          options = _this$props.experimentEnrollmentOptions;
      var enrollmentResolver = experimentEnrollmentConfig[experimentKey]; // updates context after resolving

      var enrollmentOptions = options instanceof Function ? options(experimentKey) : options;
      var enrollmentPromise = Promise.resolve(enrollmentResolver(enrollmentOptions));
      enrollmentPromise.then(function (enrollmentDetails) {
        _this2.setState({
          experiments: (0, _defineProperty2.default)({}, experimentKey, {
            isEnrollmentDecided: true,
            enrollmentDetails: enrollmentDetails
          })
        });
      }); // cache the resolver promise to avoid resolving enrollment multiple times

      this.resolverPromises[experimentKey] = enrollmentPromise;
      return enrollmentPromise;
    }
  }, {
    key: "render",
    value: function render() {
      var experiments = this.state.experiments;
      var _this$props2 = this.props,
          children = _this$props2.children,
          experimentEnrollmentOptions = _this$props2.experimentEnrollmentOptions;
      return _react.default.createElement(_ExperimentContext.ExperimentProvider, {
        value: {
          experiments: experiments,
          options: experimentEnrollmentOptions
        }
      }, children);
    }
  }]);
  return ExperimentController;
}(_react.Component);

(0, _defineProperty2.default)(ExperimentController, "displayName", 'ExperimentController');
var _default = ExperimentController;
exports.default = _default;