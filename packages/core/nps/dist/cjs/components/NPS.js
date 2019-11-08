"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _nps = require("./styled/nps");

var Pages = {
  FEEDBACK: 'feedback',
  FOLLOWUP: 'followup',
  THANKYOU: 'thankyou'
};

var NPS =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NPS, _React$Component);

  function NPS(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NPS);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NPS).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClose", function () {
      _this.props.onClose();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOptOut", function () {
      _this.props.onOptOut();
    });
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFeedbackSubmit", function (_ref) {
      var rating = _ref.rating,
          comment = _ref.comment;

      try {
        _this.setState({
          rating: rating,
          comment: comment,
          page: Pages.FOLLOWUP
        });

        var result = _this._getNPSResult();

        _this.props.onFeedbackSubmit(result);
      } catch (error) {
        /* Form submitted in invalid state, do nothing */
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFollowupSubmit", function (_ref2) {
      var role = _ref2.role,
          allowContact = _ref2.allowContact;

      try {
        _this.setState({
          page: Pages.THANKYOU,
          role: role,
          allowContact: allowContact
        });

        var result = _this._getNPSResult();

        _this.props.onFollowupSubmit(result);

        _this.onFinish();
      } catch (error) {
        /* Form submitted in invalid state, do nothing */
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRoleSelect", function (role) {
      _this.setState({
        role: role
      });

      _this.props.onRoleSelect(role);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAllowContactChange", function (allowContact) {
      _this.setState({
        allowContact: allowContact
      });

      _this.props.onAllowContactChange(allowContact);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFinish", function () {
      try {
        var result = _this._getNPSResult();

        _this.props.onFinish(result);
      } catch (error) {
        /* Form submitted in invalid state, do nothing */
      }
    });
    _this.state = {
      page: Pages.FEEDBACK,
      rating: null,
      comment: '',
      role: null,
      allowContact: false
    };
    return _this;
  }

  (0, _createClass2.default)(NPS, [{
    key: "_getNPSResult",
    value: function _getNPSResult() {
      if (this.state.rating === null) {
        throw new Error('Could get create NPSResult from form values, rating is missing');
      }

      var _this$state = this.state,
          rating = _this$state.rating,
          comment = _this$state.comment,
          role = _this$state.role,
          allowContact = _this$state.allowContact;
      return {
        comment: comment,
        role: role,
        allowContact: allowContact,
        rating: rating
      };
    }
  }, {
    key: "getPage",
    value: function getPage() {
      var page = this.state.page;
      var _this$props = this.props,
          canClose = _this$props.canClose,
          canOptOut = _this$props.canOptOut;

      switch (page) {
        case Pages.FEEDBACK:
          {
            var renderFeedback = this.props.renderFeedback;
            return renderFeedback({
              canClose: canClose,
              canOptOut: canOptOut,
              onClose: this.onClose,
              onOptOut: this.onOptOut,
              onRatingSelect: this.onRatingSelect,
              onCommentChange: this.onCommentChange,
              onSubmit: this.onFeedbackSubmit
            });
          }

        case Pages.FOLLOWUP:
          {
            var renderFollowup = this.props.renderFollowup;
            return renderFollowup({
              canClose: canClose,
              canOptOut: canOptOut,
              onClose: this.onClose,
              onOptOut: this.onOptOut,
              onRoleSelect: this.onRoleSelect,
              onAllowContactChange: this.onAllowContactChange,
              onSubmit: this.onFollowupSubmit
            });
          }

        case Pages.THANKYOU:
          {
            var renderThankyou = this.props.renderThankyou;
            return renderThankyou({
              canClose: canClose,
              canOptOut: canOptOut,
              onClose: this.onClose,
              onOptOut: this.onOptOut
            });
          }

        default:
          {
            throw new Error("Page ".concat(page, " not found"));
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_nps.NPSWrapper, null, _react.default.createElement(_nps.PageWrapper, null, this.getPage()));
    }
  }]);
  return NPS;
}(_react.default.Component);

exports.default = NPS;
(0, _defineProperty2.default)(NPS, "defaultProps", {
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