import _extends from "@babel/runtime/helpers/extends";
import _css from "@emotion/css";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import ArrowLeftCircleIcon from '@atlaskit/icon/glyph/arrow-left-circle';
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
import ConnectedItem from '../ConnectedItem';
var gridSize = gridSizeFn();

var ArrowLeft = function ArrowLeft() {
  return ___EmotionJSX(ArrowLeftCircleIcon, {
    primaryColor: "currentColor",
    secondaryColor: "inherit"
  });
};

var BackItem =
/*#__PURE__*/
function (_Component) {
  _inherits(BackItem, _Component);

  function BackItem() {
    _classCallCheck(this, BackItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(BackItem).apply(this, arguments));
  }

  _createClass(BackItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          beforeProp = _this$props.before,
          text = _this$props.text,
          props = _objectWithoutProperties(_this$props, ["before", "text"]);

      var before = beforeProp;

      if (!before) {
        before = ArrowLeft;
      }

      return ___EmotionJSX("div", {
        css:
        /*#__PURE__*/
        _css({
          marginBottom: gridSize * 2
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3RlZC9CYWNrSXRlbS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlciLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29ubmVjdGVkL0JhY2tJdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGVJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2Fycm93LWxlZnQtY2lyY2xlJztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcblxuaW1wb3J0IENvbm5lY3RlZEl0ZW0gZnJvbSAnLi4vQ29ubmVjdGVkSXRlbSc7XG5pbXBvcnQgdHlwZSB7IEJhY2tJdGVtUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmNvbnN0IEFycm93TGVmdCA9ICgpID0+IChcbiAgPEFycm93TGVmdENpcmNsZUljb24gcHJpbWFyeUNvbG9yPVwiY3VycmVudENvbG9yXCIgc2Vjb25kYXJ5Q29sb3I9XCJpbmhlcml0XCIgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEJhY2tJdGVtUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnQmFjaycsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JlOiBiZWZvcmVQcm9wLCB0ZXh0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYmVmb3JlID0gYmVmb3JlUHJvcDtcbiAgICBpZiAoIWJlZm9yZSkge1xuICAgICAgYmVmb3JlID0gQXJyb3dMZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17eyBtYXJnaW5Cb3R0b206IGdyaWRTaXplICogMiB9fT5cbiAgICAgICAgPENvbm5lY3RlZEl0ZW0gey4uLnByb3BzfSBhZnRlcj17bnVsbH0gYmVmb3JlPXtiZWZvcmV9IHRleHQ9e3RleHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */")
      }, ___EmotionJSX(ConnectedItem, _extends({}, props, {
        after: null,
        before: before,
        text: text
      })));
    }
  }]);

  return BackItem;
}(Component);

_defineProperty(BackItem, "defaultProps", {
  text: 'Back'
});

export { BackItem as default };