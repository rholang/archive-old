import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _css from "@emotion/css";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { gridSize as gridSizeFn } from '@atlaskit/theme/constants';
var gridSize = gridSizeFn();
export var Container = function Container(props) {
  return ___EmotionJSX("div", props);
};
export var HeaderContainer = function HeaderContainer(props) {
  var styles = props.styles,
      rest = _objectWithoutProperties(props, ["styles"]);

  return ___EmotionJSX("div", _extends({
    css:
    /*#__PURE__*/
    _css(_objectSpread({}, styles, {
      paddingTop: gridSize * 2.5,
      paddingBottom: gridSize * 2.5
    }), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NrZWxldG9uQ29udGFpbmVyVmlldy9wcmltaXRpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFNIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NrZWxldG9uQ29udGFpbmVyVmlldy9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHM6ICopID0+IDxkaXYgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IChwcm9wczogKikgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgcGFkZGluZ1RvcDogZ3JpZFNpemUgKiAyLjUsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGdyaWRTaXplICogMi41LFxuICAgICAgfX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuIl19 */")
  }, rest));
};