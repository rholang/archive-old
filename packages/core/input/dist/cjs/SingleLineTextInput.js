"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _keycode = _interopRequireDefault(require("keycode"));

var _constants = require("@atlaskit/theme/constants");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var common = "\n  appearance: none;\n  color: inherit;\n  font-size: ".concat((0, _constants.fontSize)(), "px;\n  font-family: inherit;\n  letter-spacing: inherit;\n");

var ReadView = _styledComponents.default.div.withConfig({
  displayName: "SingleLineTextInput__ReadView",
  componentId: "sc-4hfvq0-0"
})(["\n  ", " overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], common); // Safari puts on some difficult to remove styles, mainly for disabled inputs
// but we want full control so need to override them in all cases


var overrideSafariDisabledStyles = "\n  -webkit-text-fill-color: unset;\n  -webkit-opacity: 1;\n";

var EditView = _styledComponents.default.input.withConfig({
  displayName: "SingleLineTextInput__EditView",
  componentId: "sc-4hfvq0-1"
})(["\n  ", " background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  cursor: inherit;\n  height: ", "em; /* for IE11 because it ignores the line-height */\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  width: 100%;\n\n  :invalid {\n    box-shadow: none;\n  }\n\n  [disabled] {\n    ", ";\n  }\n"], common, 20 / 14, overrideSafariDisabledStyles);

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/input has been deprecated. It is an internal component and should not be used directly.');
}

var SingleLineTextInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SingleLineTextInput, _Component);

  function SingleLineTextInput() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SingleLineTextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SingleLineTextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (event) {
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }

      if (event.keyCode === (0, _keycode.default)('enter')) {
        if (_this.props.onConfirm) _this.props.onConfirm(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getInputProps", function () {
      var inputProps = (0, _objectSpread2.default)({}, _this.props, {
        type: 'text',
        onKeyDown: _this.onKeyDown
      });
      delete inputProps.style;
      delete inputProps.isEditing;
      delete inputProps.isInitiallySelected;
      delete inputProps.onConfirm;
      return inputProps;
    });
    return _this;
  }

  (0, _createClass2.default)(SingleLineTextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.selectInputIfNecessary();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isEditing) {
        this.selectInputIfNecessary();
      }
    }
  }, {
    key: "select",
    value: function select() {
      if (this.inputRef) {
        this.inputRef.select();
      }
    }
  }, {
    key: "selectInputIfNecessary",
    value: function selectInputIfNecessary() {
      if (this.props.isEditing && this.props.isInitiallySelected) {
        this.select();
      }
    }
  }, {
    key: "renderEditView",
    value: function renderEditView() {
      var _this2 = this;

      return _react.default.createElement(EditView, (0, _extends2.default)({
        style: this.props.style
      }, this.getInputProps(), {
        innerRef: function innerRef(ref) {
          _this2.inputRef = ref;
        }
      }));
    }
  }, {
    key: "renderReadView",
    value: function renderReadView() {
      return _react.default.createElement(ReadView, {
        style: this.props.style
      }, this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.isEditing ? this.renderEditView() : this.renderReadView();
    }
  }]);
  return SingleLineTextInput;
}(_react.Component);

exports.default = SingleLineTextInput;
(0, _defineProperty2.default)(SingleLineTextInput, "defaultProps", {
  style: {},
  isInitiallySelected: false,
  onConfirm: function onConfirm() {},
  onKeyDown: function onKeyDown() {}
});