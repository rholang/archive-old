"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _checkbox = require("@atlaskit/checkbox");

var _textarea = _interopRequireDefault(require("@atlaskit/textarea"));

var _form = _interopRequireWildcard(require("@atlaskit/form"));

var _modalDialog = _interopRequireDefault(require("@atlaskit/modal-dialog"));

var _select = _interopRequireDefault(require("@atlaskit/select"));

var fieldLabel = {
  bug: 'Describe the bug or issue',
  comment: "Let us know what's on your mind",
  suggestion: "Let us know what you'd like to improve",
  question: 'What would you like to know?',
  empty: 'Select an option'
};
exports.fieldLabel = fieldLabel;
var selectOptions = [{
  label: 'Ask a question',
  value: 'question'
}, {
  label: 'Leave a comment',
  value: 'comment'
}, {
  label: 'Report a bug',
  value: 'bug'
}, {
  label: 'Suggest an improvement',
  value: 'suggestion'
}];
var defaultSelectValue = {
  label: 'I want to...',
  value: 'empty'
};

var FeedbackForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FeedbackForm, _Component);

  function FeedbackForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FeedbackForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FeedbackForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      type: 'empty',
      description: '',
      canBeContacted: false,
      enrollInResearchGroup: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isTypeSelected", function () {
      return _this.state.type !== 'empty';
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function () {
      var _this$state = _this.state,
          type = _this$state.type,
          description = _this$state.description,
          canBeContacted = _this$state.canBeContacted,
          enrollInResearchGroup = _this$state.enrollInResearchGroup;

      _this.props.onSubmit({
        type: type,
        description: description,
        canBeContacted: canBeContacted,
        enrollInResearchGroup: enrollInResearchGroup
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectChange", function (option) {
      _this.setState({
        type: option.value
      });
    });
    return _this;
  }

  (0, _createClass2.default)(FeedbackForm, [{
    key: "getActions",
    value: function getActions() {
      var isDisabled = !this.isTypeSelected() || !this.state.description;
      return [{
        text: 'Send feedback',
        appearance: 'primary',
        type: 'submit',
        isDisabled: isDisabled,
        onClick: this.onSubmit
      }, {
        text: 'Cancel',
        onClick: this.props.onClose,
        appearance: 'subtle'
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_modalDialog.default, {
        actions: this.getActions(),
        heading: "Share your thoughts",
        onClose: this.props.onClose
      }, _react.default.createElement(_form.default, {
        name: "feedback-collector",
        onSubmit: function onSubmit() {
          /* TODO: this is a NOOP until Modal can take a container prop */
        }
      }, function (_ref) {
        var formProps = _ref.formProps;
        return _react.default.createElement("form", formProps, _react.default.createElement(_select.default, {
          onChange: _this2.onSelectChange,
          menuPortalTarget: document.body,
          styles: {
            menuPortal: function menuPortal(base) {
              return (0, _objectSpread2.default)({}, base, {
                zIndex: 9999
              });
            }
          },
          defaultValue: defaultSelectValue,
          options: selectOptions
        }), _this2.isTypeSelected() ? _react.default.createElement(_react.Fragment, null, _react.default.createElement(_form.Field, {
          label: fieldLabel[_this2.state.type],
          isRequired: true,
          name: "description"
        }, function (_ref2) {
          var fieldProps = _ref2.fieldProps;
          return _react.default.createElement(_textarea.default, (0, _extends2.default)({}, fieldProps, {
            name: "foo",
            minimumRows: 6,
            onChange: function onChange(e) {
              return _this2.setState({
                description: e.target.value
              });
            },
            value: _this2.state.description
          }));
        }), _react.default.createElement(_form.Field, {
          name: "can-be-contacted"
        }, function (_ref3) {
          var fieldProps = _ref3.fieldProps;
          return _react.default.createElement(_checkbox.Checkbox, (0, _extends2.default)({}, fieldProps, {
            label: "Atlassian can contact me about this feedback",
            onChange: function onChange(event) {
              return _this2.setState({
                canBeContacted: event.target.checked
              });
            }
          }));
        }), _react.default.createElement(_form.Field, {
          name: "enroll-in-research-group"
        }, function (_ref4) {
          var fieldProps = _ref4.fieldProps;
          return _react.default.createElement(_checkbox.Checkbox, (0, _extends2.default)({}, fieldProps, {
            label: "I'd like to participate in product research",
            onChange: function onChange(event) {
              return _this2.setState({
                enrollInResearchGroup: event.target.checked
              });
            }
          }));
        })) : _react.default.createElement(_react.Fragment, null));
      }));
    }
  }]);
  return FeedbackForm;
}(_react.Component);

exports.default = FeedbackForm;