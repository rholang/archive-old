"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RoleDropdown = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("@atlaskit/button"));

var _dropdownMenu = _interopRequireWildcard(require("@atlaskit/dropdown-menu"));

var _checkbox = require("@atlaskit/checkbox");

var _common = require("./common");

var _common2 = require("./styled/common");

var _followup = require("./styled/followup");

var RoleDropdown = function RoleDropdown(_ref) {
  var roles = _ref.roles,
      placeholder = _ref.placeholder,
      selected = _ref.selected,
      onRoleSelect = _ref.onRoleSelect;
  var trigger = selected ? selected : placeholder;
  return _react.default.createElement(_dropdownMenu.default, {
    trigger: trigger,
    triggerType: "button"
  }, roles.map(function (role) {
    return _react.default.createElement(_dropdownMenu.DropdownItem, {
      key: "nps-item-".concat(role),
      isSelected: role === selected,
      onClick: function onClick() {
        onRoleSelect(role);
      }
    }, role);
  }));
};

exports.RoleDropdown = RoleDropdown;

var Followup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Followup, _React$Component);

  function Followup(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Followup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Followup).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRoleSelect", function (role) {
      _this.setState({
        role: role
      });

      _this.props.onRoleSelect(role);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAllowContactChange", function (e) {
      var allowContact = e.isChecked;

      _this.setState({
        allowContact: allowContact
      });

      _this.props.onAllowContactChange(allowContact);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function () {
      var _this$state = _this.state,
          role = _this$state.role,
          allowContact = _this$state.allowContact;

      _this.props.onSubmit({
        role: role,
        allowContact: allowContact
      });
    });
    _this.state = {
      role: null,
      allowContact: false
    };
    return _this;
  }

  (0, _createClass2.default)(Followup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          messages = _this$props.messages,
          canClose = _this$props.canClose,
          onClose = _this$props.onClose,
          canOptOut = _this$props.canOptOut,
          onOptOut = _this$props.onOptOut,
          roles = _this$props.roles;
      return _react.default.createElement("div", null, _react.default.createElement(_common.Header, {
        title: messages.title,
        canClose: canClose,
        onClose: onClose,
        canOptOut: canOptOut,
        onOptOut: onOptOut,
        optOutLabel: messages.optOut
      }), _react.default.createElement(_common.Description, null, messages.description), _react.default.createElement(_common2.Wrapper, null, _react.default.createElement(_followup.RoleQuestion, null, this.props.messages.roleQuestion), _react.default.createElement(RoleDropdown, {
        roles: roles,
        onRoleSelect: this.onRoleSelect,
        selected: this.state.role,
        placeholder: messages.rolePlaceholder
      }), _react.default.createElement(_followup.Contact, null, _react.default.createElement(_checkbox.Checkbox, {
        name: "nps-contact-me",
        value: "Allow Contact",
        label: messages.contactQuestion,
        onChange: this.onAllowContactChange
      }))), _react.default.createElement(_common2.Wrapper, null, _react.default.createElement(_common2.ButtonWrapper, null, _react.default.createElement(_button.default, {
        appearance: "primary",
        onClick: this.onSubmit
      }, messages.send))));
    }
  }]);
  return Followup;
}(_react.default.Component);

exports.default = Followup;
(0, _defineProperty2.default)(Followup, "defaultProps", {
  onRoleSelect: function onRoleSelect() {},
  onAllowContactChange: function onAllowContactChange() {}
});