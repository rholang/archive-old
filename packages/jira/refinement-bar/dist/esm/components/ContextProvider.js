import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import { diffArr, objectMap } from '../utils';
export var RefinementBarContext = React.createContext({});
export var RefinementBarProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(RefinementBarProvider, _Component);

  function RefinementBarProvider(props) {
    var _this;

    _classCallCheck(this, RefinementBarProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RefinementBarProvider).call(this, props));
    var fieldConfig = _this.props.fieldConfig; // NOTE: this is the primary responsibility of the provider; to initialize
    // each field with its corresponding controller

    var initializedFields = objectMap(fieldConfig, function (field, key) {
      var Controller = field.type.controller;
      return new Controller(_objectSpread({
        key: key
      }, field));
    });
    _this.state = {
      fieldConfig: initializedFields
    };
    return _this;
  }

  _createClass(RefinementBarProvider, [{
    key: "render",
    value: function render() {
      var context = {
        fieldConfig: this.state.fieldConfig,
        fieldKeys: this.fieldKeys,
        irremovableKeys: this.props.irremovableKeys,
        onChange: this.props.onChange,
        removeableKeys: this.removeableKeys,
        selectedKeys: this.selectedKeys,
        value: this.props.value,
        valueKeys: this.valueKeys
      };
      return React.createElement(RefinementBarContext.Provider, {
        value: context
      }, this.props.children);
    }
  }, {
    key: "fieldKeys",
    get: function get() {
      return Object.keys(this.props.fieldConfig);
    }
  }, {
    key: "valueKeys",
    get: function get() {
      return Object.keys(this.props.value);
    }
  }, {
    key: "removeableKeys",
    get: function get() {
      var irremovable = this.props.irremovableKeys;
      return diffArr(this.fieldKeys, irremovable);
    }
  }, {
    key: "selectedKeys",
    get: function get() {
      var irremovable = this.props.irremovableKeys;
      return diffArr(this.valueKeys, irremovable);
    }
  }]);

  return RefinementBarProvider;
}(Component);

_defineProperty(RefinementBarProvider, "defaultProps", {
  irremovableKeys: []
});

export var RefinementBarConsumer = function RefinementBarConsumer(_ref) {
  var children = _ref.children;
  return React.createElement(RefinementBarContext.Consumer, null, function (ctx) {
    return children(ctx);
  });
}; // $FlowFixMe useContext

export var useRefinementBar = function useRefinementBar() {
  return React.useContext(RefinementBarContext);
};