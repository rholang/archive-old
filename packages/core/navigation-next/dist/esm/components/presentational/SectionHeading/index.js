import _css from "@emotion/css";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
var gridSize = gridSizeFn();

var SectionHeading =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionHeading, _Component);

  function SectionHeading() {
    _classCallCheck(this, SectionHeading);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionHeading).apply(this, arguments));
  }

  _createClass(SectionHeading, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return ___EmotionJSX("div", {
        css:
        /*#__PURE__*/
        _css({
          alignItems: 'center',
          color: 'inherit',
          display: 'flex',
          flexShrink: 0,
          fontSize: 'inherit',
          fontWeight: 600,
          height: gridSize * 5.5,
          paddingLeft: gridSize * 1.5,
          paddingRight: gridSize * 1.5,
          marginTop: gridSize
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb25IZWFkaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNRIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb25IZWFkaW5nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ3JpZFNpemUgYXMgZ3JpZFNpemVGbiB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBTZWN0aW9uSGVhZGluZ1Byb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uSGVhZGluZyBleHRlbmRzIENvbXBvbmVudDxTZWN0aW9uSGVhZGluZ1Byb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgaGVpZ2h0OiBncmlkU2l6ZSAqIDUuNSxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogZ3JpZFNpemUgKiAxLjUsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBncmlkU2l6ZSAqIDEuNSxcbiAgICAgICAgICBtYXJnaW5Ub3A6IGdyaWRTaXplLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */")
      }, children);
    }
  }]);

  return SectionHeading;
}(Component);

export { SectionHeading as default };