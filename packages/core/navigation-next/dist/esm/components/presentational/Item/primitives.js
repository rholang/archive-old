import _css from "@emotion/css";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import { styleReducerNoOp, withContentTheme } from '../../../theme';

var isString = function isString(x) {
  return typeof x === 'string';
};

var ComponentSwitch = function ComponentSwitch(_ref) {
  var as = _ref.as,
      dataset = _ref.dataset,
      draggableProps = _ref.draggableProps,
      innerRef = _ref.innerRef,
      rest = _objectWithoutProperties(_ref, ["as", "dataset", "draggableProps", "innerRef"]);

  var isElement = isString(as);
  var props = isElement ? _objectSpread({}, dataset, rest) : _objectSpread({
    innerRef: innerRef,
    dataset: dataset,
    draggableProps: draggableProps
  }, rest); // only pass the actual `ref` to an element, it's the responsibility of the
  // component author to use `innerRef` where applicable

  var ref = isElement ? innerRef : null;
  var ElementOrComponent = as;
  return ___EmotionJSX(ElementOrComponent, _extends({
    ref: ref
  }, draggableProps, props));
};

var getItemComponentProps = function getItemComponentProps(props) {
  var nonComponentKeys = ['isActive', 'isHover', 'isSelected', 'isFocused', 'isDragging', 'theme'];
  var componentProps = {};
  Object.keys(props).forEach(function (prop) {
    if (!nonComponentKeys.includes(prop)) {
      componentProps[prop] = props[prop];
    }
  });
  return componentProps;
};

var ItemPrimitive =
/*#__PURE__*/
function (_Component) {
  _inherits(ItemPrimitive, _Component);

  function ItemPrimitive() {
    _classCallCheck(this, ItemPrimitive);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemPrimitive).apply(this, arguments));
  }

  _createClass(ItemPrimitive, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !deepEqual(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          After = _this$props.after,
          Before = _this$props.before,
          CustomComponent = _this$props.component,
          dataset = _this$props.dataset,
          draggableProps = _this$props.draggableProps,
          href = _this$props.href,
          innerRef = _this$props.innerRef,
          isActive = _this$props.isActive,
          isDragging = _this$props.isDragging,
          isHover = _this$props.isHover,
          isSelected = _this$props.isSelected,
          isFocused = _this$props.isFocused,
          onClick = _this$props.onClick,
          spacing = _this$props.spacing,
          styleReducer = _this$props.styles,
          subText = _this$props.subText,
          target = _this$props.target,
          text = _this$props.text,
          theme = _this$props.theme;
      var mode = theme.mode,
          context = theme.context;
      var presentationProps = {
        isActive: isActive,
        isDragging: isDragging,
        isHover: isHover,
        isSelected: isSelected,
        isFocused: isFocused,
        spacing: spacing
      };
      var defaultStyles = mode.item(presentationProps)[context];
      var styles = styleReducer(defaultStyles, presentationProps, theme); // base element switch

      var itemComponent = 'div';
      var itemProps = {
        draggableProps: draggableProps,
        innerRef: innerRef,
        dataset: dataset
      }; // $FlowFixMe Will revisit on the TS re-write

      var _this$props2 = this.props,
          afterGoTo = _this$props2.afterGoTo,
          spinnerDelay = _this$props2.spinnerDelay,
          incomingView = _this$props2.incomingView;
      var propsForAfterComp = {
        afterGoTo: afterGoTo,
        spinnerDelay: spinnerDelay,
        incomingView: incomingView
      };

      if (CustomComponent) {
        itemComponent = CustomComponent;
        itemProps = getItemComponentProps(this.props);
      } else if (href) {
        itemComponent = 'a';
        itemProps = {
          dataset: dataset,
          href: href,
          onClick: onClick,
          target: target,
          draggableProps: draggableProps,
          innerRef: innerRef
        };
      } else if (onClick) {
        itemComponent = 'button';
        itemProps = {
          dataset: dataset,
          onClick: onClick,
          draggableProps: draggableProps,
          innerRef: innerRef
        };
      }

      return ___EmotionJSX(ComponentSwitch, _extends({
        as: itemComponent,
        css:
        /*#__PURE__*/
        _css({
          '&&': styles.itemBase
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0l0ZW0vcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SVEiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvSXRlbS9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdHlwZSBFbGVtZW50VHlwZSwgdHlwZSBSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcbmltcG9ydCB0eXBlIHsgRGF0YXNldCwgSXRlbVByaW1pdGl2ZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBzdHlsZVJlZHVjZXJOb09wLCB3aXRoQ29udGVudFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5jb25zdCBpc1N0cmluZyA9IHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xuXG50eXBlIFN3aXRjaFByb3BzID0ge1xuICBhczogRWxlbWVudFR5cGUsXG4gIGRhdGFzZXQ6IERhdGFzZXQsXG4gIGRyYWdnYWJsZVByb3BzOiB7fSxcbiAgaW5uZXJSZWY6IFJlZjwqPixcbn07XG5jb25zdCBDb21wb25lbnRTd2l0Y2ggPSAoe1xuICBhcyxcbiAgZGF0YXNldCxcbiAgZHJhZ2dhYmxlUHJvcHMsXG4gIGlubmVyUmVmLFxuICAuLi5yZXN0XG59OiBTd2l0Y2hQcm9wcykgPT4ge1xuICBjb25zdCBpc0VsZW1lbnQgPSBpc1N0cmluZyhhcyk7XG4gIGNvbnN0IHByb3BzID0gaXNFbGVtZW50XG4gICAgPyB7IC4uLmRhdGFzZXQsIC4uLnJlc3QgfVxuICAgIDogeyBpbm5lclJlZiwgZGF0YXNldCwgZHJhZ2dhYmxlUHJvcHMsIC4uLnJlc3QgfTtcbiAgLy8gb25seSBwYXNzIHRoZSBhY3R1YWwgYHJlZmAgdG8gYW4gZWxlbWVudCwgaXQncyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlXG4gIC8vIGNvbXBvbmVudCBhdXRob3IgdG8gdXNlIGBpbm5lclJlZmAgd2hlcmUgYXBwbGljYWJsZVxuICBjb25zdCByZWYgPSBpc0VsZW1lbnQgPyBpbm5lclJlZiA6IG51bGw7XG4gIGNvbnN0IEVsZW1lbnRPckNvbXBvbmVudCA9IGFzO1xuXG4gIHJldHVybiA8RWxlbWVudE9yQ29tcG9uZW50IHJlZj17cmVmfSB7Li4uZHJhZ2dhYmxlUHJvcHN9IHsuLi5wcm9wc30gLz47XG59O1xuXG5jb25zdCBnZXRJdGVtQ29tcG9uZW50UHJvcHMgPSAocHJvcHM6IEl0ZW1QcmltaXRpdmVQcm9wcykgPT4ge1xuICBjb25zdCBub25Db21wb25lbnRLZXlzID0gW1xuICAgICdpc0FjdGl2ZScsXG4gICAgJ2lzSG92ZXInLFxuICAgICdpc1NlbGVjdGVkJyxcbiAgICAnaXNGb2N1c2VkJyxcbiAgICAnaXNEcmFnZ2luZycsXG4gICAgJ3RoZW1lJyxcbiAgXTtcbiAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB7fTtcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKCFub25Db21wb25lbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICBjb21wb25lbnRQcm9wc1twcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudFByb3BzO1xufTtcblxuY2xhc3MgSXRlbVByaW1pdGl2ZSBleHRlbmRzIENvbXBvbmVudDxJdGVtUHJpbWl0aXZlUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhc2V0OiB7XG4gICAgICAnZGF0YS10ZXN0aWQnOiAnTmF2aWdhdGlvbkl0ZW0nLFxuICAgIH0sXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgIGlzSG92ZXI6IGZhbHNlLFxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgc3BhY2luZzogJ2RlZmF1bHQnLFxuICAgIHN0eWxlczogc3R5bGVSZWR1Y2VyTm9PcCxcbiAgICB0ZXh0OiAnJyxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBJdGVtUHJpbWl0aXZlUHJvcHMpIHtcbiAgICByZXR1cm4gIWRlZXBFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFmdGVyOiBBZnRlcixcbiAgICAgIGJlZm9yZTogQmVmb3JlLFxuICAgICAgY29tcG9uZW50OiBDdXN0b21Db21wb25lbnQsXG4gICAgICBkYXRhc2V0LFxuICAgICAgZHJhZ2dhYmxlUHJvcHMsXG4gICAgICBocmVmLFxuICAgICAgaW5uZXJSZWYsXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGlzRHJhZ2dpbmcsXG4gICAgICBpc0hvdmVyLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGlzRm9jdXNlZCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzcGFjaW5nLFxuICAgICAgc3R5bGVzOiBzdHlsZVJlZHVjZXIsXG4gICAgICBzdWJUZXh0LFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGV4dCxcbiAgICAgIHRoZW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbW9kZSwgY29udGV4dCB9ID0gdGhlbWU7XG4gICAgY29uc3QgcHJlc2VudGF0aW9uUHJvcHMgPSB7XG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGlzRHJhZ2dpbmcsXG4gICAgICBpc0hvdmVyLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGlzRm9jdXNlZCxcbiAgICAgIHNwYWNpbmcsXG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0U3R5bGVzID0gbW9kZS5pdGVtKHByZXNlbnRhdGlvblByb3BzKVtjb250ZXh0XTtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZVJlZHVjZXIoZGVmYXVsdFN0eWxlcywgcHJlc2VudGF0aW9uUHJvcHMsIHRoZW1lKTtcbiAgICAvLyBiYXNlIGVsZW1lbnQgc3dpdGNoXG5cbiAgICBsZXQgaXRlbUNvbXBvbmVudCA9ICdkaXYnO1xuICAgIGxldCBpdGVtUHJvcHMgPSB7IGRyYWdnYWJsZVByb3BzLCBpbm5lclJlZiwgZGF0YXNldCB9O1xuXG4gICAgLy8gJEZsb3dGaXhNZSBXaWxsIHJldmlzaXQgb24gdGhlIFRTIHJlLXdyaXRlXG4gICAgY29uc3QgeyBhZnRlckdvVG8sIHNwaW5uZXJEZWxheSwgaW5jb21pbmdWaWV3IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb3BzRm9yQWZ0ZXJDb21wID0ge1xuICAgICAgYWZ0ZXJHb1RvLFxuICAgICAgc3Bpbm5lckRlbGF5LFxuICAgICAgaW5jb21pbmdWaWV3LFxuICAgIH07XG5cbiAgICBpZiAoQ3VzdG9tQ29tcG9uZW50KSB7XG4gICAgICBpdGVtQ29tcG9uZW50ID0gQ3VzdG9tQ29tcG9uZW50O1xuICAgICAgaXRlbVByb3BzID0gZ2V0SXRlbUNvbXBvbmVudFByb3BzKHRoaXMucHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoaHJlZikge1xuICAgICAgaXRlbUNvbXBvbmVudCA9ICdhJztcbiAgICAgIGl0ZW1Qcm9wcyA9IHtcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgaHJlZixcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBkcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgaW5uZXJSZWYsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob25DbGljaykge1xuICAgICAgaXRlbUNvbXBvbmVudCA9ICdidXR0b24nO1xuICAgICAgaXRlbVByb3BzID0geyBkYXRhc2V0LCBvbkNsaWNrLCBkcmFnZ2FibGVQcm9wcywgaW5uZXJSZWYgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFN3aXRjaFxuICAgICAgICBhcz17aXRlbUNvbXBvbmVudH1cbiAgICAgICAgY3NzPXt7ICcmJic6IHN0eWxlcy5pdGVtQmFzZSB9fVxuICAgICAgICB7Li4uaXRlbVByb3BzfVxuICAgICAgPlxuICAgICAgICB7ISFCZWZvcmUgJiYgKFxuICAgICAgICAgIDxkaXYgY3NzPXtzdHlsZXMuYmVmb3JlV3JhcHBlcn0+XG4gICAgICAgICAgICA8QmVmb3JlIHsuLi5wcmVzZW50YXRpb25Qcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjc3M9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjc3M9e3N0eWxlcy50ZXh0V3JhcHBlcn0+e3RleHR9PC9kaXY+XG4gICAgICAgICAgeyEhc3ViVGV4dCAmJiA8ZGl2IGNzcz17c3R5bGVzLnN1YlRleHRXcmFwcGVyfT57c3ViVGV4dH08L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ISFBZnRlciAmJiAoXG4gICAgICAgICAgPGRpdiBjc3M9e3N0eWxlcy5hZnRlcldyYXBwZXJ9PlxuICAgICAgICAgICAgPEFmdGVyIHsuLi5wcmVzZW50YXRpb25Qcm9wc30gey4uLnByb3BzRm9yQWZ0ZXJDb21wfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db21wb25lbnRTd2l0Y2g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBJdGVtUHJpbWl0aXZlIGFzIEl0ZW1QcmltaXRpdmVCYXNlIH07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGVudFRoZW1lKEl0ZW1QcmltaXRpdmUpO1xuIl19 */")
      }, itemProps), !!Before && ___EmotionJSX("div", {
        css: styles.beforeWrapper
      }, ___EmotionJSX(Before, presentationProps)), ___EmotionJSX("div", {
        css: styles.contentWrapper
      }, ___EmotionJSX("div", {
        css: styles.textWrapper
      }, text), !!subText && ___EmotionJSX("div", {
        css: styles.subTextWrapper
      }, subText)), !!After && ___EmotionJSX("div", {
        css: styles.afterWrapper
      }, ___EmotionJSX(After, _extends({}, presentationProps, propsForAfterComp))));
    }
  }]);

  return ItemPrimitive;
}(Component);

_defineProperty(ItemPrimitive, "defaultProps", {
  dataset: {
    'data-testid': 'NavigationItem'
  },
  isActive: false,
  isDragging: false,
  isHover: false,
  isSelected: false,
  isFocused: false,
  spacing: 'default',
  styles: styleReducerNoOp,
  text: ''
});

export { ItemPrimitive as ItemPrimitiveBase };
export default withContentTheme(ItemPrimitive);