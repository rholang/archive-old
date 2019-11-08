import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component, Fragment } from 'react';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { GroupHeading, Separator } from '../../..';

var Group =
/*#__PURE__*/
function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, _getPrototypeOf(Group).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          hasSeparator = _this$props.hasSeparator,
          heading = _this$props.heading,
          id = _this$props.id;
      return React.Children.count(children) ? ___EmotionJSX(NavigationAnalyticsContext, {
        data: {
          attributes: {
            viewGroup: id
          },
          componentName: 'Group'
        }
      }, ___EmotionJSX(Fragment, null, heading && ___EmotionJSX(GroupHeading, null, heading), children, hasSeparator && ___EmotionJSX(Separator, null))) : null;
    }
  }]);

  return Group;
}(Component);

_defineProperty(Group, "defaultProps", {
  hasSeparator: false
});

export { Group as default };