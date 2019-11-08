"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.truncate"));

var _FeedbackForm = _interopRequireDefault(require("./FeedbackForm"));

var MAX_SUMMARY_LENGTH_CHARS = 100;

var singleLineTruncatedText = function singleLineTruncatedText(text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_SUMMARY_LENGTH_CHARS;
  var singleLineText = text.replace(/\n/g, ' ');
  return (0, _lodash.default)(singleLineText, {
    length: length
  });
};

var FeedbackCollector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FeedbackCollector, _Component);

  function FeedbackCollector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FeedbackCollector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FeedbackCollector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "props", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "postFeedback", function (formValues) {
      var body = _this.mapFormToJSD(formValues); // Don't dispatch unless we have suitable props (allows tests to pass through empty strings and avoid redundant network calls)


      if (_this.props.embeddableKey && _this.props.requestTypeId) {
        fetch("https://jsd-widget.atlassian.com/api/embeddable/".concat(_this.props.embeddableKey, "/request?requestTypeId=").concat(_this.props.requestTypeId), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
      }

      _this.props.onClose(); // slightly delay confirming submit since we don't wait for the REST call to succeed
      //
      // Because `onClose` is invoked prior to this timeout triggering, the `componentWillUnmount`
      // may occur before the `onSubmit` is called. To prevent prematurely cancelling the
      // network request, we deliberately don't clear this timeout inside `componentWillUnmount`.
      //
      // eslint-disable-next-line @wordpress/react-no-unsafe-timeout


      setTimeout(_this.props.onSubmit, _this.props.timeoutOnSubmit);
    });
    return _this;
  }

  (0, _createClass2.default)(FeedbackCollector, [{
    key: "getTypeFieldValue",
    value: function getTypeFieldValue(type) {
      switch (type) {
        case 'bug':
          return this.props.typeBugDefaultValue;

        case 'comment':
          return this.props.typeCommentDefaultValue;

        case 'suggestion':
          return this.props.typeSuggestionDefaultValue;

        case 'question':
          return this.props.typeQuestionDefaultValue;

        case 'empty':
        default:
          return this.props.typeEmptyDefaultValue;
      }
    }
  }, {
    key: "getEmail",
    value: function getEmail(formValues) {
      return formValues.canBeContacted && this.props.email ? this.props.email : this.props.emailDefaultValue;
    }
  }, {
    key: "getDescription",
    value: function getDescription(formValues) {
      return formValues.description || this.props.descriptionDefaultValue;
    }
  }, {
    key: "getSummary",
    value: function getSummary(formValues) {
      return singleLineTruncatedText(formValues.description, this.props.summaryTruncateLength) || this.props.summaryDefaultValue;
    }
  }, {
    key: "getCustomerName",
    value: function getCustomerName() {
      return this.props.name || this.props.customerNameDefaultValue;
    }
  }, {
    key: "mapFormToJSD",
    value: function mapFormToJSD(formValues) {
      var fields = [{
        id: this.props.typeFieldId,
        value: this.getTypeFieldValue(formValues.type)
      }, {
        id: this.props.summaryFieldId,
        value: this.getSummary(formValues)
      }, {
        id: this.props.descriptionFieldId,
        value: this.getDescription(formValues)
      }, {
        id: this.props.emailFieldId,
        value: this.getEmail(formValues)
      }, {
        id: this.props.customerNameFieldId,
        value: this.getCustomerName()
      }];
      return {
        fields: [].concat(fields, [formValues.canBeContacted ? {
          id: this.props.canBeContactedFieldId,
          value: this.props.canBeContactedDefaultValue
        } : undefined, formValues.enrollInResearchGroup ? {
          id: this.props.enrollInResearchFieldId,
          value: this.props.enrollInResearchDefaultValue
        } : undefined], (0, _toConsumableArray2.default)(this.props.additionalFields)).filter(Boolean)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_FeedbackForm.default, {
        onSubmit: this.postFeedback,
        onClose: this.props.onClose
      });
    }
  }]);
  return FeedbackCollector;
}(_react.Component);

exports.default = FeedbackCollector;
(0, _defineProperty2.default)(FeedbackCollector, "defaultProps", {
  canBeContactedFieldId: 'customfield_10043',
  canBeContactedDefaultValue: [{
    id: '10109'
  }],
  additionalFields: [],
  customerNameFieldId: 'customfield_10045',
  customerNameDefaultValue: 'unknown',
  descriptionFieldId: 'description',
  descriptionDefaultValue: '',
  enrollInResearchFieldId: 'customfield_10044',
  enrollInResearchDefaultValue: [{
    id: '10110'
  }],
  emailFieldId: 'email',
  emailDefaultValue: 'do-not-reply@atlassian.com',
  summaryFieldId: 'summary',
  summaryDefaultValue: '',
  summaryTruncateLength: 100,
  timeoutOnSubmit: 700,
  typeFieldId: 'customfield_10042',
  typeBugDefaultValue: {
    id: '10105'
  },
  typeCommentDefaultValue: {
    id: '10106'
  },
  typeSuggestionDefaultValue: {
    id: '10107'
  },
  typeQuestionDefaultValue: {
    id: '10108'
  },
  typeEmptyDefaultValue: {
    id: 'empty'
  },
  onClose: function onClose() {},
  onSubmit: function onSubmit() {}
});