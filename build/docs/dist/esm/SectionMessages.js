import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import SectionMessage from '@atlaskit/section-message';

var AtlassianInternalWarning =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AtlassianInternalWarning, _React$Component);

  function AtlassianInternalWarning() {
    _classCallCheck(this, AtlassianInternalWarning);

    return _possibleConstructorReturn(this, _getPrototypeOf(AtlassianInternalWarning).apply(this, arguments));
  }

  _createClass(AtlassianInternalWarning, [{
    key: "render",
    value: function render() {
      return React.createElement(SectionMessage, {
        title: "Note: This component is designed for internal Atlassian development.",
        appearance: "warning"
      }, React.createElement("p", null, "External contributors will be able to use this component but will not be able to submit issues."));
    }
  }]);

  return AtlassianInternalWarning;
}(React.Component);

var DevPreviewWarning =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DevPreviewWarning, _React$Component2);

  function DevPreviewWarning() {
    _classCallCheck(this, DevPreviewWarning);

    return _possibleConstructorReturn(this, _getPrototypeOf(DevPreviewWarning).apply(this, arguments));
  }

  _createClass(DevPreviewWarning, [{
    key: "render",
    value: function render() {
      return React.createElement(SectionMessage, {
        title: "Note: This component is currently in developer preview.",
        appearance: "warning"
      }, React.createElement("p", null, "Please experiment with and test this package, but be aware that the API may change at any time. Use at your own risk, preferably not in production."));
    }
  }]);

  return DevPreviewWarning;
}(React.Component);

export { AtlassianInternalWarning, DevPreviewWarning };