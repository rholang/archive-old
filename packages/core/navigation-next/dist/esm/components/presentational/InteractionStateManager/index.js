import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';

var _ref = process.env.NODE_ENV === "production" ? {
  name: "7xjigh",
  styles: "width:100%;align-items:center;display:flex;flex-direction:column;justify-content:space-between;"
} : {
  name: "7xjigh",
  styles: "width:100%;align-items:center;display:flex;flex-direction:column;justify-content:space-between;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0ludGVyYWN0aW9uU3RhdGVNYW5hZ2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEUSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9JbnRlcmFjdGlvblN0YXRlTWFuYWdlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgSW50ZXJhY3Rpb25TdGF0ZSwgSW50ZXJhY3Rpb25TdGF0ZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aW9uU3RhdGVNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50PFxuICBJbnRlcmFjdGlvblN0YXRlUHJvcHMsXG4gIEludGVyYWN0aW9uU3RhdGUsXG4+IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIGlzSG92ZXI6IGZhbHNlLFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gIH07XG5cbiAgb25Nb3VzZURvd24gPSAoZTogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWN0aXZlOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uTW91c2VVcCA9IChlOiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBY3RpdmU6IGZhbHNlLCBpc0hvdmVyOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNIb3Zlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzSG92ZXI6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBY3RpdmU6IGZhbHNlLCBpc0hvdmVyOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcblxuICBvbkJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
};

var InteractionStateManager =
/*#__PURE__*/
function (_Component) {
  _inherits(InteractionStateManager, _Component);

  function InteractionStateManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InteractionStateManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InteractionStateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      isHover: false,
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      e.preventDefault();

      _this.setState({
        isActive: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      e.preventDefault();

      _this.setState({
        isActive: false,
        isHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      if (!_this.state.isHover) {
        _this.setState({
          isHover: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        isActive: false,
        isHover: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      return _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      return _this.setState({
        isFocused: false
      });
    });

    return _this;
  }

  _createClass(InteractionStateManager, [{
    key: "render",
    value: function render() {
      return ___EmotionJSX("div", {
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        role: "presentation",
        css: _ref
      }, this.props.children(this.state));
    }
  }]);

  return InteractionStateManager;
}(Component);

export { InteractionStateManager as default };