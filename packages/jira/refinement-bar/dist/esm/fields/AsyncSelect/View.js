import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/** @jsx jsx */
import { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import { makeAsyncSelect } from '@atlaskit/select';
import { BaseSelect, selectComponents } from '../../components/Select';
import { DialogInner } from '../../components/Popup';
var AsyncSelect = makeAsyncSelect(BaseSelect);

var AsyncSelectView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AsyncSelectView, _PureComponent);

  function AsyncSelectView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsyncSelectView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsyncSelectView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: ''
    });

    return _this;
  }

  _createClass(AsyncSelectView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          storedValue = _this$props.storedValue,
          field = _this$props.field,
          isRemovable = _this$props.isRemovable,
          onRemove = _this$props.onRemove,
          loadOptions = _this$props.loadOptions,
          props = _objectWithoutProperties(_this$props, ["storedValue", "field", "isRemovable", "onRemove", "loadOptions"]);

      var defaultOptions = props.value;

      if (Array.isArray(field.defaultOptions)) {
        // Show only visible options
        defaultOptions = props.value.filter(function (o) {
          return !field.defaultOptions.includes(o);
        }).concat([{
          label: field.defaultOptionsLabel,
          options: field.defaultOptions
        }]);
      } else if (typeof field.defaultOptions === 'boolean') {
        defaultOptions = field.defaultOptions; // eslint-disable-line prefer-destructuring
      }

      return jsx(DialogInner, {
        minWidth: 220
      }, jsx(AsyncSelect, _extends({
        cacheOptions: field.cacheOptions,
        components: selectComponents,
        defaultOptions: defaultOptions,
        defaultOptionsLabel: field.defaultOptionsLabel,
        inputValue: field.inputValue,
        loadOptions: field.loadOptions,
        onInputChange: field.onInputChange,
        onMenuScrollToBottom: field.onMenuScrollToBottom,
        onMenuScrollToTop: field.onMenuScrollToTop,
        placeholder: field.placeholder
      }, props)));
    }
  }]);

  return AsyncSelectView;
}(PureComponent);

export { AsyncSelectView as default };