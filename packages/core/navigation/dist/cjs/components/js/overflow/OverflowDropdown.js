"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _dropdownMenu = _interopRequireDefault(require("@atlaskit/dropdown-menu"));

var _item = _interopRequireDefault(require("@atlaskit/item"));

var _moreVertical = _interopRequireDefault(require("@atlaskit/icon/glyph/more-vertical"));

var _tooltip = _interopRequireDefault(require("@atlaskit/tooltip"));

var _OverflowDropdownButtonWrapper = _interopRequireDefault(require("../../styled/OverflowDropdownButtonWrapper"));

var _util = require("../../../theme/util");

var theme = (0, _defineProperty2.default)({}, _util.isDropdownOverflowKey, true);

var OverflowDropdown =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OverflowDropdown, _Component);

  function OverflowDropdown(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, OverflowDropdown);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OverflowDropdown).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDropdownToggle", function (_ref) {
      var isOpen = _ref.isOpen;

      _this.setState({
        isOpen: isOpen
      });
    });
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass2.default)(OverflowDropdown, [{
    key: "render",
    value: function render() {
      // The OverflowDropdownButtonWrapper is used to control the width of the button, because
      // setting DropdownMenu.shouldFitContainer causes the dropdown layer to receive the same
      // constrained width as the button, which is way too small. This can be fixed in the
      // @atlaskit/dropdown-menu component then OverflowDropdownButtonWrapper can be removed.
      var dropdownTrigger = _react.default.createElement(_OverflowDropdownButtonWrapper.default, null, _react.default.createElement(_item.default, {
        "aria-haspopup": "true",
        "aria-expanded": this.state.isOpen
      }, _react.default.createElement(_moreVertical.default, {
        size: "small",
        label: "More items"
      })));

      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react.default.createElement(_dropdownMenu.default, {
        onOpenChange: this.handleDropdownToggle,
        shouldFlip: false,
        trigger: this.state.isOpen ? dropdownTrigger : _react.default.createElement(_tooltip.default, {
          content: "Show more",
          position: "right"
        }, dropdownTrigger),
        position: "right bottom"
      }, this.props.children));
    }
  }]);
  return OverflowDropdown;
}(_react.Component);

exports.default = OverflowDropdown;