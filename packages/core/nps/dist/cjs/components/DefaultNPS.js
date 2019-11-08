"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultMessages = getDefaultMessages;
exports.default = exports.getDefaultRoles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _NPS = _interopRequireDefault(require("./NPS"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _Followup = _interopRequireDefault(require("./Followup"));

var _Thankyou = _interopRequireDefault(require("./Thankyou"));

function getDefaultMessages(product) {
  return {
    feedbackTitle: 'Tell us what you think',
    feedbackDescription: "How likely are you to recommend ".concat(product, " to a friend or colleague?"),
    followupTitle: 'Tell us what you think',
    followupDescription: "Thanks for your response! To help us improve ".concat(product, ", we'd love to discuss your comment in more detail. If you're not keen to discuss it, uncheck the box below."),
    thankyouTitle: 'Thanks for your comment!',
    thankyouDescription: "We'll use your comment to improve ".concat(product, "."),
    optOut: 'Dismiss Forever',
    scaleLow: 'Not likely',
    scaleHigh: 'Extremely likely',
    commentPlaceholder: "What's the main reason for your score?",
    roleQuestion: 'Which of these best describes your role at your company? (Optional)',
    rolePlaceholder: 'Choose role',
    contactQuestion: "It's okay to contact me about my comment.",
    send: 'Send',
    done: 'Done'
  };
}

var getDefaultRoles = function getDefaultRoles() {
  return ['Management', 'Software Engineering', 'Design', 'Quality Assurance', 'Product Management', 'Systems Administration', 'Other'];
};

exports.getDefaultRoles = getDefaultRoles;

// This component is stateless, but the Props documentation util did not work when this was a functional component
var DefaultNPS =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DefaultNPS, _React$Component);

  function DefaultNPS() {
    (0, _classCallCheck2.default)(this, DefaultNPS);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultNPS).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultNPS, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          canClose = _this$props.canClose,
          canOptOut = _this$props.canOptOut,
          roles = _this$props.roles,
          onClose = _this$props.onClose,
          onRatingSelect = _this$props.onRatingSelect,
          onCommentChange = _this$props.onCommentChange,
          onRoleSelect = _this$props.onRoleSelect,
          onAllowContactChange = _this$props.onAllowContactChange,
          onOptOut = _this$props.onOptOut,
          onFeedbackSubmit = _this$props.onFeedbackSubmit,
          onFollowupSubmit = _this$props.onFollowupSubmit,
          onFinish = _this$props.onFinish;
      var defaultMessages = getDefaultMessages(product);
      return _react.default.createElement(_NPS.default, {
        canClose: canClose,
        canOptOut: canOptOut,
        onClose: onClose,
        onOptOut: onOptOut,
        onRatingSelect: onRatingSelect,
        onCommentChange: onCommentChange,
        onRoleSelect: onRoleSelect,
        onAllowContactChange: onAllowContactChange,
        onFeedbackSubmit: onFeedbackSubmit,
        onFollowupSubmit: onFollowupSubmit,
        onFinish: onFinish,
        renderFeedback: function renderFeedback(feedbackProps) {
          return _react.default.createElement(_Feedback.default, (0, _extends2.default)({}, feedbackProps, {
            messages: (0, _objectSpread2.default)({}, defaultMessages, {
              optOutLabel: defaultMessages.optOut,
              title: defaultMessages.feedbackTitle,
              description: defaultMessages.feedbackDescription
            })
          }));
        },
        renderFollowup: function renderFollowup(followupProps) {
          return _react.default.createElement(_Followup.default, (0, _extends2.default)({}, followupProps, {
            roles: roles,
            messages: (0, _objectSpread2.default)({}, defaultMessages, {
              title: defaultMessages.followupTitle,
              description: defaultMessages.followupDescription
            })
          }));
        },
        renderThankyou: function renderThankyou(thankyouProps) {
          return _react.default.createElement(_Thankyou.default, (0, _extends2.default)({}, thankyouProps, {
            messages: (0, _objectSpread2.default)({}, defaultMessages, {
              title: defaultMessages.thankyouTitle,
              description: defaultMessages.thankyouDescription
            })
          }));
        }
      });
    }
  }]);
  return DefaultNPS;
}(_react.default.Component);

exports.default = DefaultNPS;
(0, _defineProperty2.default)(DefaultNPS, "defaultProps", {
  roles: getDefaultRoles(),
  canClose: true,
  canOptOut: false,
  onClose: function onClose() {},
  onOptOut: function onOptOut() {},
  onFinish: function onFinish() {},
  onRatingSelect: function onRatingSelect() {},
  onCommentChange: function onCommentChange() {},
  onRoleSelect: function onRoleSelect() {},
  onAllowContactChange: function onAllowContactChange() {},
  onFeedbackSubmit: function onFeedbackSubmit() {},
  onFollowupSubmit: function onFollowupSubmit() {}
});