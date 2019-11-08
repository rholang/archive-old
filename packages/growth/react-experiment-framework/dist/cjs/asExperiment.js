"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asExperiment;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _CohortTracker = _interopRequireDefault(require("./CohortTracker"));

var _ExperimentContext = require("./ExperimentContext");

function asExperiment(experimentComponentMap, experimentKey, callbacks, LoadingComponent) {
  var _class, _temp;

  var contextOptions;
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(ExperimentSwitch, _Component);

    function ExperimentSwitch() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ExperimentSwitch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExperimentSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
        forceFallback: false,
        options: undefined
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onReceiveContext", function (experiments, options) {
        var forceFallback = _this.state.forceFallback;
        var onExposure = callbacks.onExposure;
        contextOptions = options instanceof Function ? options(experimentKey) : options;

        if (forceFallback) {
          return _this.renderFallback();
        }

        if (!(experimentKey in experiments)) {
          throw new Error("Experiment Key ".concat(experimentKey, " does not exist in configuration"));
        }

        var experimentDetails = experiments[experimentKey];

        if (!experimentDetails.isEnrollmentDecided) {
          // kick off the async check of the resolver
          experimentDetails.enrollmentResolver(contextOptions); // still waiting on whether or not to show an experiment

          if (LoadingComponent) {
            return _react.default.createElement(LoadingComponent, null);
          }

          return null;
        }

        var enrollmentDetails = experimentDetails.enrollmentDetails;

        if (!enrollmentDetails) {
          throw new Error("Experiment ".concat(experimentKey, " has missing enrollment details"));
        }

        var cohort = enrollmentDetails.cohort,
            isEligible = enrollmentDetails.isEligible,
            ineligibilityReasons = enrollmentDetails.ineligibilityReasons;

        if (!(cohort in experimentComponentMap)) {
          throw new Error("Cohort ".concat(cohort, " does not exist for experiment ").concat(experimentKey));
        }

        var View = isEligible ? experimentComponentMap[cohort] : experimentComponentMap.fallback;
        var exposureDetails = {
          experimentKey: experimentKey,
          cohort: cohort,
          isEligible: isEligible,
          ineligibilityReasons: ineligibilityReasons
        };
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(View, (0, _extends2.default)({}, _this.props, {
          key: "experimentView"
        })), _react.default.createElement(_CohortTracker.default, {
          exposureDetails: exposureDetails,
          options: contextOptions,
          onExposure: onExposure,
          key: "cohortTracker"
        }));
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderFallback", function () {
        var FallbackView = experimentComponentMap.fallback;
        return _react.default.createElement(FallbackView, _this.props);
      });
      return _this;
    }

    (0, _createClass2.default)(ExperimentSwitch, [{
      key: "componentDidCatch",
      value: function componentDidCatch(err) {
        var onError = callbacks.onError;
        onError(err, contextOptions);
        this.setState({
          forceFallback: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react.default.createElement(_ExperimentContext.ExperimentConsumer, null, function (_ref) {
          var experiments = _ref.experiments,
              options = _ref.options;
          return _this2.onReceiveContext(experiments, options);
        });
      }
    }]);
    return ExperimentSwitch;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", 'ExperimentSwitch'), _temp;
}