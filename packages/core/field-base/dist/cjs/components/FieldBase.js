"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _FieldBaseStateless = _interopRequireDefault(require("./FieldBaseStateless"));

var ON_BLUR_KEY = 'onBlurKey';
var ON_CONTENT_BLUR_KEY = 'onContentBlurKey';

function waitForRender(cb) {
  // Execute the callback after any upcoming render calls in the execution queue
  setTimeout(cb, 0);
}

var FieldBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldBase, _Component);

  function FieldBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FieldBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FieldBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isFocused: _this.props.defaultIsFocused,
      isDialogFocused: false,
      shouldIgnoreNextDialogBlur: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "timers", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus(e); // Escape from a possible race-condition when blur and focus happen one by one
      // (otherwise the dialog might be left closed)


      _this.cancelSchedule(ON_BLUR_KEY);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function (e) {
      // Because the blur event fires before the focus event, we want to make sure that we don't
      // render and close the dialog before we can check if the dialog is focused.
      _this.reschedule(ON_BLUR_KEY, function () {
        _this.setState({
          isFocused: false
        });

        _this.props.onBlur(e);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onContentFocus", function () {
      if (_this.state.isDialogFocused) {
        // If we are tabbing between two elements in the warning dialog, we need to prevent the
        // dialog from closing.
        _this.setState({
          shouldIgnoreNextDialogBlur: true
        });
      } else {
        _this.setState({
          isDialogFocused: true
        });
      } // Escape from a possible race-condition when blur and focus happen one by one
      // (otherwise the dialog might be left closed)


      _this.cancelSchedule(ON_CONTENT_BLUR_KEY);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onContentBlur", function () {
      waitForRender(function () {
        if (_this.state.shouldIgnoreNextDialogBlur) {
          // Ignore the blur event if we are still focused in the dialog.
          _this.setState({
            shouldIgnoreNextDialogBlur: false
          });
        } else {
          _this.setState({
            isDialogFocused: false
          });
        }
      });
    });
    return _this;
  }

  (0, _createClass2.default)(FieldBase, [{
    key: "cancelSchedule",
    value: function cancelSchedule(key) {
      this.timers = this.timers || {};

      if (this.timers[key]) {
        clearTimeout(this.timers[key]);
        delete this.timers[key];
      }
    }
  }, {
    key: "reschedule",
    value: function reschedule(key, callback) {
      var _this2 = this;

      // Use reschedule (not just schedule) to avoid race conditions when multiple blur events
      // happen one by one.
      this.timers = this.timers || {};
      this.cancelSchedule(key);
      this.timers[key] = setTimeout(function () {
        callback();

        _this2.cancelSchedule(key);
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelSchedule(ON_BLUR_KEY);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultIsFocused = _this$props.defaultIsFocused,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["defaultIsFocused"]);
      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          isDialogFocused = _this$state.isDialogFocused;
      return _react.default.createElement(_FieldBaseStateless.default, (0, _extends2.default)({}, props, {
        isDialogOpen: isFocused || isDialogFocused,
        isFocused: isFocused,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onDialogFocus: this.onContentFocus,
        onDialogBlur: this.onContentBlur
      }));
    }
  }]);
  return FieldBase;
}(_react.Component);

exports.default = FieldBase;
(0, _defineProperty2.default)(FieldBase, "defaultProps", {
  defaultIsFocused: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
});