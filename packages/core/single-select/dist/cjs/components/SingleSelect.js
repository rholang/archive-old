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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _StatelessSelect = _interopRequireWildcard(require("./StatelessSelect"));

// =============================================================
// NOTE: Duplicated in ./internal/appearances until docgen can follow imports.
// -------------------------------------------------------------
// DO NOT update values here without updating the other.
// =============================================================
var appearances = {
  values: ['default', 'subtle'],
  default: 'default'
};

var AkSingleSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(AkSingleSelect, _PureComponent);

  function AkSingleSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AkSingleSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AkSingleSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: _this.props.isDefaultOpen,
      selectedItem: _this.props.defaultSelected,
      filterValue: _this.props.defaultSelected ? (0, _StatelessSelect.getTextContent)(_this.props.defaultSelected) : ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectItem", function (item) {
      _this.setState({
        isOpen: false,
        selectedItem: item
      });

      if (_this.props.onSelected) {
        _this.props.onSelected({
          item: item
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenChange", function (attrs) {
      // allows consuming components to look for `defaultPrevented` on the event
      // where they can handle internal state e.g. prevent InlineDialog from closing when
      // the target DOM node no-longer exists
      if (!attrs.isOpen) attrs.event.preventDefault();

      _this.setState({
        isOpen: attrs.isOpen
      });

      if (_this.props.onOpenChange) {
        _this.props.onOpenChange(attrs);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFilterChange", function (value) {
      if (_this.props.onFilterChange) {
        _this.props.onFilterChange(value);
      }

      _this.setState({
        filterValue: value
      });
    });
    return _this;
  }

  (0, _createClass2.default)(AkSingleSelect, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_StatelessSelect.default, {
        appearance: this.props.appearance,
        droplistShouldFitContainer: this.props.droplistShouldFitContainer,
        filterValue: this.state.filterValue,
        hasAutocomplete: this.props.hasAutocomplete,
        id: this.props.id,
        isDisabled: this.props.isDisabled,
        isFirstChild: this.props.isFirstChild,
        isInvalid: this.props.isInvalid,
        invalidMessage: this.props.invalidMessage,
        isOpen: this.state.isOpen,
        isRequired: this.props.isRequired,
        items: this.props.items,
        label: this.props.label,
        name: this.props.name,
        noMatchesFound: this.props.noMatchesFound,
        onFilterChange: this.handleFilterChange,
        onOpenChange: this.handleOpenChange,
        onSelected: this.selectItem,
        placeholder: this.props.placeholder,
        position: this.props.position,
        selectedItem: this.state.selectedItem,
        shouldFitContainer: this.props.shouldFitContainer,
        shouldFocus: this.props.shouldFocus,
        shouldFlip: this.props.shouldFlip,
        maxHeight: this.props.maxHeight
      });
    }
  }]);
  return AkSingleSelect;
}(_react.PureComponent);

exports.default = AkSingleSelect;
(0, _defineProperty2.default)(AkSingleSelect, "defaultProps", {
  appearance: appearances.default,
  droplistShouldFitContainer: true,
  isRequired: false,
  items: [],
  label: '',
  onFilterChange: function onFilterChange() {},
  onOpenChange: function onOpenChange() {},
  onSelected: function onSelected() {},
  placeholder: '',
  position: 'bottom left',
  shouldFocus: false,
  shouldFlip: true
});