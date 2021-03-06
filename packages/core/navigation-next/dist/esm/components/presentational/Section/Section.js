import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition';
import { ClassNames, css } from '@emotion/core';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { transitionDurationMs } from '../../../common/constants';
import getAnimationStyles from './getAnimationStyles';

var _ref = process.env.NODE_ENV === "production" ? {
  name: "79elbk",
  styles: "position:relative;"
} : {
  name: "79elbk",
  styles: "position:relative;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlTyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9TZWN0aW9uL1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgdHlwZSBOb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQW5hbHl0aWNzQ29udGV4dCB9IGZyb20gJ0BhdGxhc2tpdC9hbmFseXRpY3MtbmFtZXNwYWNlZC1jb250ZXh0JztcblxuaW1wb3J0IHsgdHJhbnNpdGlvbkR1cmF0aW9uTXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBnZXRBbmltYXRpb25TdHlsZXMgZnJvbSAnLi9nZXRBbmltYXRpb25TdHlsZXMnO1xuaW1wb3J0IHR5cGUgeyBTZWN0aW9uUHJvcHMsIFNlY3Rpb25TdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogVGhlIGJlbG93IGNvbXBvbmVudHMgYXJlIGV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkuICovXG50eXBlIFN0eWxlZENvbXBvbmVudFByb3BzID0geyBjaGlsZHJlbjogTm9kZSB9O1xuZXhwb3J0IGNvbnN0IFN0YXRpY1RyYW5zaXRpb25Hcm91cCA9IChwcm9wczogU3R5bGVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0gey4uLnByb3BzfSAvPlxuKTtcbmV4cG9ydCBjb25zdCBTY3JvbGxhYmxlVHJhbnNpdGlvbkdyb3VwID0gKHByb3BzOiBTdHlsZWRDb21wb25lbnRQcm9wcykgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmV4cG9ydCBjb25zdCBTY3JvbGxhYmxlV3JhcHBlciA9IChwcm9wczogU3R5bGVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiB7Li4ucHJvcHN9IC8+XG4pO1xuZXhwb3J0IGNvbnN0IFNjcm9sbGFibGVJbm5lciA9IChwcm9wczogU3R5bGVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiB7Li4ucHJvcHN9IC8+XG4pO1xuZXhwb3J0IGNvbnN0IFN0YXRpY1dyYXBwZXIgPSAocHJvcHM6IFN0eWxlZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXYgey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQ8U2VjdGlvblByb3BzLCBTZWN0aW9uU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgdHJhdmVyc2FsRGlyZWN0aW9uOiBudWxsLFxuICB9O1xuXG4gIGlzTW91bnRlZCA9IGZhbHNlO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogU2VjdGlvblByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5wYXJlbnRJZCAmJiBuZXh0UHJvcHMucGFyZW50SWQgPT09IHRoaXMucHJvcHMuaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmF2ZXJzYWxEaXJlY3Rpb246ICdkb3duJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMucGFyZW50SWQgJiYgdGhpcy5wcm9wcy5wYXJlbnRJZCA9PT0gbmV4dFByb3BzLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdHJhdmVyc2FsRGlyZWN0aW9uOiAndXAnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbHdheXNTaG93U2Nyb2xsSGludCxcbiAgICAgIGlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzaG91bGRHcm93LFxuICAgICAgc3R5bGVzOiBzdHlsZVJlZHVjZXIsXG4gICAgICB0aGVtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgbW9kZSwgY29udGV4dCB9ID0gdGhlbWU7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVSZWR1Y2VyKFxuICAgICAgbW9kZS5zZWN0aW9uKHsgYWx3YXlzU2hvd1Njcm9sbEhpbnQgfSlbY29udGV4dF0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD17XG4gICAgICAgICAgc2hvdWxkR3JvdyA/IFNjcm9sbGFibGVUcmFuc2l0aW9uR3JvdXAgOiBTdGF0aWNUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgfVxuICAgICAgICBhcHBlYXJcbiAgICAgID5cbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIHRpbWVvdXQ9e3RoaXMuaXNNb3VudGVkID8gdHJhbnNpdGlvbkR1cmF0aW9uTXMgOiAwfVxuICAgICAgICA+XG4gICAgICAgICAge3N0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJhdmVyc2FsRGlyZWN0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gZ2V0QW5pbWF0aW9uU3R5bGVzKHtcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIHRyYXZlcnNhbERpcmVjdGlvbixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBXZSBwcm92aWRlIGJvdGggdGhlIHN0eWxlcyBvYmplY3QgYW5kIHRoZSBjb21wdXRlZCBjbGFzc05hbWUuXG4gICAgICAgICAgICAvLyBUaGlzIGFsbG93cyBjb25zdW1lcnMgdG8gcGF0Y2ggdGhlIHN0eWxlcyBpZiB0aGV5IHdhbnQgdG8sIG9yXG4gICAgICAgICAgICAvLyBzaW1wbHkgYXBwbHkgdGhlIGNsYXNzTmFtZSBpZiB0aGV5J3JlIG5vdCB1c2luZyBhIEpTUyBwYXJzZXIgbGlrZVxuICAgICAgICAgICAgLy8gZW1vdGlvbi5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQW5hbHl0aWNzQ29udGV4dFxuICAgICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdmlld1NlY3Rpb246IGlkIH0sXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lOiAnU2VjdGlvbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDbGFzc05hbWVzPlxuICAgICAgICAgICAgICAgICAgeyh7IGNzczogZ2V0Q2xhc3NOYW1lIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZEdyb3cgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGFibGVXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxhYmxlSW5uZXIgY3NzPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHN0eWxlcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiBzdHlsZXMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxhYmxlSW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxhYmxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhdGljV3JhcHBlciBjc3M9e2FuaW1hdGlvblN0eWxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGdldENsYXNzTmFtZShzdHlsZXMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHN0eWxlcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhdGljV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2xhc3NOYW1lcz5cbiAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uQW5hbHl0aWNzQ29udGV4dD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
};

export var StaticTransitionGroup = function StaticTransitionGroup(props) {
  return ___EmotionJSX("div", _extends({
    css: _ref
  }, props));
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "424011",
  styles: "position:relative;flex:1 1 100%;overflow-y:hidden;"
} : {
  name: "424011",
  styles: "position:relative;flex:1 1 100%;overflow-y:hidden;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU2VjdGlvbi9TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIHR5cGUgTm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbmltcG9ydCB7IENsYXNzTmFtZXMsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkFuYWx5dGljc0NvbnRleHQgfSBmcm9tICdAYXRsYXNraXQvYW5hbHl0aWNzLW5hbWVzcGFjZWQtY29udGV4dCc7XG5cbmltcG9ydCB7IHRyYW5zaXRpb25EdXJhdGlvbk1zIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgZ2V0QW5pbWF0aW9uU3R5bGVzIGZyb20gJy4vZ2V0QW5pbWF0aW9uU3R5bGVzJztcbmltcG9ydCB0eXBlIHsgU2VjdGlvblByb3BzLCBTZWN0aW9uU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFRoZSBiZWxvdyBjb21wb25lbnRzIGFyZSBleHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LiAqL1xudHlwZSBTdHlsZWRDb21wb25lbnRQcm9wcyA9IHsgY2hpbGRyZW46IE5vZGUgfTtcbmV4cG9ydCBjb25zdCBTdGF0aWNUcmFuc2l0aW9uR3JvdXAgPSAocHJvcHM6IFN0eWxlZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXYgY3NzPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19IHsuLi5wcm9wc30gLz5cbik7XG5leHBvcnQgY29uc3QgU2Nyb2xsYWJsZVRyYW5zaXRpb25Hcm91cCA9IChwcm9wczogU3R5bGVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5leHBvcnQgY29uc3QgU2Nyb2xsYWJsZVdyYXBwZXIgPSAocHJvcHM6IFN0eWxlZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXYgey4uLnByb3BzfSAvPlxuKTtcbmV4cG9ydCBjb25zdCBTY3JvbGxhYmxlSW5uZXIgPSAocHJvcHM6IFN0eWxlZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXYgey4uLnByb3BzfSAvPlxuKTtcbmV4cG9ydCBjb25zdCBTdGF0aWNXcmFwcGVyID0gKHByb3BzOiBTdHlsZWRDb21wb25lbnRQcm9wcykgPT4gKFxuICA8ZGl2IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFNlY3Rpb25Qcm9wcywgU2VjdGlvblN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIHRyYXZlcnNhbERpcmVjdGlvbjogbnVsbCxcbiAgfTtcblxuICBpc01vdW50ZWQgPSBmYWxzZTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFNlY3Rpb25Qcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMucGFyZW50SWQgJiYgbmV4dFByb3BzLnBhcmVudElkID09PSB0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdHJhdmVyc2FsRGlyZWN0aW9uOiAnZG93bicgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnBhcmVudElkICYmIHRoaXMucHJvcHMucGFyZW50SWQgPT09IG5leHRQcm9wcy5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRyYXZlcnNhbERpcmVjdGlvbjogJ3VwJyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWx3YXlzU2hvd1Njcm9sbEhpbnQsXG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc2hvdWxkR3JvdyxcbiAgICAgIHN0eWxlczogc3R5bGVSZWR1Y2VyLFxuICAgICAgdGhlbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IG1vZGUsIGNvbnRleHQgfSA9IHRoZW1lO1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlUmVkdWNlcihcbiAgICAgIG1vZGUuc2VjdGlvbih7IGFsd2F5c1Nob3dTY3JvbGxIaW50IH0pW2NvbnRleHRdLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25Hcm91cFxuICAgICAgICBjb21wb25lbnQ9e1xuICAgICAgICAgIHNob3VsZEdyb3cgPyBTY3JvbGxhYmxlVHJhbnNpdGlvbkdyb3VwIDogU3RhdGljVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIH1cbiAgICAgICAgYXBwZWFyXG4gICAgICA+XG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICB0aW1lb3V0PXt0aGlzLmlzTW91bnRlZCA/IHRyYW5zaXRpb25EdXJhdGlvbk1zIDogMH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRyYXZlcnNhbERpcmVjdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IGdldEFuaW1hdGlvblN0eWxlcyh7XG4gICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICB0cmF2ZXJzYWxEaXJlY3Rpb24sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gV2UgcHJvdmlkZSBib3RoIHRoZSBzdHlsZXMgb2JqZWN0IGFuZCB0aGUgY29tcHV0ZWQgY2xhc3NOYW1lLlxuICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgY29uc3VtZXJzIHRvIHBhdGNoIHRoZSBzdHlsZXMgaWYgdGhleSB3YW50IHRvLCBvclxuICAgICAgICAgICAgLy8gc2ltcGx5IGFwcGx5IHRoZSBjbGFzc05hbWUgaWYgdGhleSdyZSBub3QgdXNpbmcgYSBKU1MgcGFyc2VyIGxpa2VcbiAgICAgICAgICAgIC8vIGVtb3Rpb24uXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbkFuYWx5dGljc0NvbnRleHRcbiAgICAgICAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHZpZXdTZWN0aW9uOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZTogJ1NlY3Rpb24nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xhc3NOYW1lcz5cbiAgICAgICAgICAgICAgICAgIHsoeyBjc3M6IGdldENsYXNzTmFtZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBzaG91bGRHcm93ID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxhYmxlV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzLndyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYWJsZUlubmVyIGNzcz17c3R5bGVzLmlubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGdldENsYXNzTmFtZShzdHlsZXMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogc3R5bGVzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsYWJsZUlubmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsYWJsZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YXRpY1dyYXBwZXIgY3NzPXthbmltYXRpb25TdHlsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoc3R5bGVzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiBzdHlsZXMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpY1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NsYXNzTmFtZXM+XG4gICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkFuYWx5dGljc0NvbnRleHQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
};

export var ScrollableTransitionGroup = function ScrollableTransitionGroup(props) {
  return ___EmotionJSX("div", _extends({
    css: _ref2
  }, props));
};
export var ScrollableWrapper = function ScrollableWrapper(props) {
  return ___EmotionJSX("div", props);
};
export var ScrollableInner = function ScrollableInner(props) {
  return ___EmotionJSX("div", props);
};
export var StaticWrapper = function StaticWrapper(props) {
  return ___EmotionJSX("div", props);
};

var Section =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Section, _PureComponent);

  function Section() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Section);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Section)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      traversalDirection: null
    });

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    return _this;
  }

  _createClass(Section, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.parentId && nextProps.parentId === this.props.id) {
        this.setState({
          traversalDirection: 'down'
        });
      }

      if (this.props.parentId && this.props.parentId === nextProps.id) {
        this.setState({
          traversalDirection: 'up'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          alwaysShowScrollHint = _this$props.alwaysShowScrollHint,
          id = _this$props.id,
          children = _this$props.children,
          shouldGrow = _this$props.shouldGrow,
          styleReducer = _this$props.styles,
          theme = _this$props.theme;
      var mode = theme.mode,
          context = theme.context;
      var styles = styleReducer(mode.section({
        alwaysShowScrollHint: alwaysShowScrollHint
      })[context]);
      return ___EmotionJSX(TransitionGroup, {
        component: shouldGrow ? ScrollableTransitionGroup : StaticTransitionGroup,
        appear: true
      }, ___EmotionJSX(Transition, {
        key: id,
        timeout: this.isMounted ? transitionDurationMs : 0
      }, function (state) {
        var traversalDirection = _this2.state.traversalDirection;
        var animationStyles = getAnimationStyles({
          state: state,
          traversalDirection: traversalDirection
        }); // We provide both the styles object and the computed className.
        // This allows consumers to patch the styles if they want to, or
        // simply apply the className if they're not using a JSS parser like
        // emotion.

        return ___EmotionJSX(NavigationAnalyticsContext, {
          data: {
            attributes: {
              viewSection: id
            },
            componentName: 'Section'
          }
        }, ___EmotionJSX(ClassNames, null, function (_ref3) {
          var getClassName = _ref3.css;
          return shouldGrow ? ___EmotionJSX(ScrollableWrapper, {
            css:
            /*#__PURE__*/
            css(styles.wrapper, " ", animationStyles, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R2dDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBDbGFzc05hbWVzLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25BbmFseXRpY3NDb250ZXh0IH0gZnJvbSAnQGF0bGFza2l0L2FuYWx5dGljcy1uYW1lc3BhY2VkLWNvbnRleHQnO1xuXG5pbXBvcnQgeyB0cmFuc2l0aW9uRHVyYXRpb25NcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGdldEFuaW1hdGlvblN0eWxlcyBmcm9tICcuL2dldEFuaW1hdGlvblN0eWxlcyc7XG5pbXBvcnQgdHlwZSB7IFNlY3Rpb25Qcm9wcywgU2VjdGlvblN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBUaGUgYmVsb3cgY29tcG9uZW50cyBhcmUgZXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seS4gKi9cbnR5cGUgU3R5bGVkQ29tcG9uZW50UHJvcHMgPSB7IGNoaWxkcmVuOiBOb2RlIH07XG5leHBvcnQgY29uc3QgU3RhdGljVHJhbnNpdGlvbkdyb3VwID0gKHByb3BzOiBTdHlsZWRDb21wb25lbnRQcm9wcykgPT4gKFxuICA8ZGl2IGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuZXhwb3J0IGNvbnN0IFNjcm9sbGFibGVUcmFuc2l0aW9uR3JvdXAgPSAocHJvcHM6IFN0eWxlZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuZXhwb3J0IGNvbnN0IFNjcm9sbGFibGVXcmFwcGVyID0gKHByb3BzOiBTdHlsZWRDb21wb25lbnRQcm9wcykgPT4gKFxuICA8ZGl2IHsuLi5wcm9wc30gLz5cbik7XG5leHBvcnQgY29uc3QgU2Nyb2xsYWJsZUlubmVyID0gKHByb3BzOiBTdHlsZWRDb21wb25lbnRQcm9wcykgPT4gKFxuICA8ZGl2IHsuLi5wcm9wc30gLz5cbik7XG5leHBvcnQgY29uc3QgU3RhdGljV3JhcHBlciA9IChwcm9wczogU3R5bGVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxTZWN0aW9uUHJvcHMsIFNlY3Rpb25TdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICB0cmF2ZXJzYWxEaXJlY3Rpb246IG51bGwsXG4gIH07XG5cbiAgaXNNb3VudGVkID0gZmFsc2U7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBTZWN0aW9uUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnBhcmVudElkICYmIG5leHRQcm9wcy5wYXJlbnRJZCA9PT0gdGhpcy5wcm9wcy5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRyYXZlcnNhbERpcmVjdGlvbjogJ2Rvd24nIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5wYXJlbnRJZCAmJiB0aGlzLnByb3BzLnBhcmVudElkID09PSBuZXh0UHJvcHMuaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmF2ZXJzYWxEaXJlY3Rpb246ICd1cCcgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsd2F5c1Nob3dTY3JvbGxIaW50LFxuICAgICAgaWQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHNob3VsZEdyb3csXG4gICAgICBzdHlsZXM6IHN0eWxlUmVkdWNlcixcbiAgICAgIHRoZW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBtb2RlLCBjb250ZXh0IH0gPSB0aGVtZTtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZVJlZHVjZXIoXG4gICAgICBtb2RlLnNlY3Rpb24oeyBhbHdheXNTaG93U2Nyb2xsSGludCB9KVtjb250ZXh0XSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgY29tcG9uZW50PXtcbiAgICAgICAgICBzaG91bGRHcm93ID8gU2Nyb2xsYWJsZVRyYW5zaXRpb25Hcm91cCA6IFN0YXRpY1RyYW5zaXRpb25Hcm91cFxuICAgICAgICB9XG4gICAgICAgIGFwcGVhclxuICAgICAgPlxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgdGltZW91dD17dGhpcy5pc01vdW50ZWQgPyB0cmFuc2l0aW9uRHVyYXRpb25NcyA6IDB9XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0cmF2ZXJzYWxEaXJlY3Rpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25TdHlsZXMgPSBnZXRBbmltYXRpb25TdHlsZXMoe1xuICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgdHJhdmVyc2FsRGlyZWN0aW9uLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFdlIHByb3ZpZGUgYm90aCB0aGUgc3R5bGVzIG9iamVjdCBhbmQgdGhlIGNvbXB1dGVkIGNsYXNzTmFtZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxsb3dzIGNvbnN1bWVycyB0byBwYXRjaCB0aGUgc3R5bGVzIGlmIHRoZXkgd2FudCB0bywgb3JcbiAgICAgICAgICAgIC8vIHNpbXBseSBhcHBseSB0aGUgY2xhc3NOYW1lIGlmIHRoZXkncmUgbm90IHVzaW5nIGEgSlNTIHBhcnNlciBsaWtlXG4gICAgICAgICAgICAvLyBlbW90aW9uLlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25BbmFseXRpY3NDb250ZXh0XG4gICAgICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyB2aWV3U2VjdGlvbjogaWQgfSxcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6ICdTZWN0aW9uJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsYXNzTmFtZXM+XG4gICAgICAgICAgICAgICAgICB7KHsgY3NzOiBnZXRDbGFzc05hbWUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkR3JvdyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYWJsZVdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcy53cmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2FuaW1hdGlvblN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGFibGVJbm5lciBjc3M9e3N0eWxlcy5pbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUoc3R5bGVzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHN0eWxlcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGFibGVJbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGFibGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aWNXcmFwcGVyIGNzcz17YW5pbWF0aW9uU3R5bGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZ2V0Q2xhc3NOYW1lKHN0eWxlcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogc3R5bGVzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aWNXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9DbGFzc05hbWVzPlxuICAgICAgICAgICAgICA8L05hdmlnYXRpb25BbmFseXRpY3NDb250ZXh0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG4iXX0= */")
          }, ___EmotionJSX(ScrollableInner, {
            css: styles.inner
          }, children({
            className: getClassName(styles.children),
            css: styles.children
          }))) : ___EmotionJSX(StaticWrapper, {
            css: animationStyles
          }, children({
            className: getClassName(styles.children),
            css: styles.children
          }));
        }));
      }));
    }
  }]);

  return Section;
}(PureComponent);

export { Section as default };