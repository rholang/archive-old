"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RatingsButtons = exports.SendButton = exports.CommentBox = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireWildcard(require("@atlaskit/button"));

var _fieldTextArea = _interopRequireDefault(require("@atlaskit/field-text-area"));

var _common = require("./common");

var _feedback = require("./styled/feedback");

var _common2 = require("./styled/common");

var CommentBox = function CommentBox(_ref) {
  var placeholder = _ref.placeholder,
      onCommentChange = _ref.onCommentChange;
  return _react.default.createElement(_feedback.Comment, null, _react.default.createElement(_fieldTextArea.default, {
    autoFocus: true,
    shouldFitContainer: true,
    placeholder: placeholder,
    isLabelHidden: true,
    minimumRows: 3,
    onChange: function onChange(e) {
      return onCommentChange(e.target.value);
    }
  }));
};

exports.CommentBox = CommentBox;

var SendButton = function SendButton(_ref2) {
  var onClick = _ref2.onClick,
      sendLabel = _ref2.sendLabel;
  return _react.default.createElement(_common2.ButtonWrapper, null, _react.default.createElement(_button.default, {
    appearance: "primary",
    onClick: onClick
  }, sendLabel));
};

exports.SendButton = SendButton;

var RatingsButtons = function RatingsButtons(_ref3) {
  var selected = _ref3.selected,
      onRatingSelect = _ref3.onRatingSelect;
  return _react.default.createElement(_button.ButtonGroup, null, Array.from(Array(11), function (_, i) {
    return _react.default.createElement(_button.default, {
      key: "nps-button-rating-".concat(i),
      isSelected: selected === i,
      onClick: function onClick() {
        onRatingSelect(i);
      }
    }, i.toString());
  }));
};

exports.RatingsButtons = RatingsButtons;

var Feedback =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Feedback, _React$Component);

  function Feedback(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Feedback);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Feedback).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRatingSelect", function (rating) {
      _this.setState({
        rating: rating
      });

      _this.props.onRatingSelect(rating);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCommentChange", function (comment) {
      _this.setState({
        comment: comment
      });

      _this.props.onCommentChange(comment);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function () {
      var _this$state = _this.state,
          rating = _this$state.rating,
          comment = _this$state.comment;

      _this.props.onSubmit({
        rating: rating,
        comment: comment
      });
    });
    _this.state = {
      rating: null,
      comment: ''
    };
    return _this;
  }

  (0, _createClass2.default)(Feedback, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          messages = _this$props.messages,
          canClose = _this$props.canClose,
          onClose = _this$props.onClose,
          canOptOut = _this$props.canOptOut,
          onOptOut = _this$props.onOptOut;
      return _react.default.createElement("div", null, _react.default.createElement(_common.Header, {
        title: messages.title,
        canClose: canClose,
        onClose: onClose,
        canOptOut: canOptOut,
        onOptOut: onOptOut,
        optOutLabel: messages.optOut
      }), _react.default.createElement(_common.Description, null, messages.description), _react.default.createElement(_common2.Wrapper, null, _react.default.createElement(_feedback.ScoreContainer, null, _react.default.createElement(_feedback.Scale, null, messages.scaleLow), _react.default.createElement(RatingsButtons, {
        selected: this.state.rating,
        onRatingSelect: this.onRatingSelect
      }), _react.default.createElement(_feedback.Scale, null, messages.scaleHigh))), this.state.rating !== null ? _react.default.createElement(_common2.Wrapper, null, _react.default.createElement(CommentBox, {
        placeholder: messages.commentPlaceholder,
        onCommentChange: this.onCommentChange
      }), _react.default.createElement(SendButton, {
        onClick: this.onSubmit,
        sendLabel: messages.done
      })) : null);
    }
  }]);
  return Feedback;
}(_react.default.Component);

exports.default = Feedback;
(0, _defineProperty2.default)(Feedback, "defaultProps", {
  onRatingSelect: function onRatingSelect() {},
  onCommentChange: function onCommentChange() {}
});