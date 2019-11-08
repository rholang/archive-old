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

var Wordmark =
/*#__PURE__*/
function (_Component) {
  _inherits(Wordmark, _Component);

  function Wordmark() {
    _classCallCheck(this, Wordmark);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wordmark).apply(this, arguments));
  }

  _createClass(Wordmark, [{
    key: "render",
    value: function render() {
      var WordmarkLogo = this.props.wordmark;
      return ___EmotionJSX("div", {
        css:
        /*#__PURE__*/
        _css({
          lineHeight: 0,
          // -2px here to account for the extra space at the top of a MenuSection
          // for the scroll hint.
          paddingBottom: gridSize * 3.5 - 2,
          paddingLeft: gridSize * 2,
          paddingTop: gridSize
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1dvcmRtYXJrL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFRIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1dvcmRtYXJrL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV29yZG1hcmtQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBncmlkU2l6ZSA9IGdyaWRTaXplRm4oKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZG1hcmsgZXh0ZW5kcyBDb21wb25lbnQ8V29yZG1hcmtQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3b3JkbWFyazogV29yZG1hcmtMb2dvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgICAgICAgLy8gLTJweCBoZXJlIHRvIGFjY291bnQgZm9yIHRoZSBleHRyYSBzcGFjZSBhdCB0aGUgdG9wIG9mIGEgTWVudVNlY3Rpb25cbiAgICAgICAgICAvLyBmb3IgdGhlIHNjcm9sbCBoaW50LlxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IGdyaWRTaXplICogMy41IC0gMixcbiAgICAgICAgICBwYWRkaW5nTGVmdDogZ3JpZFNpemUgKiAyLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IGdyaWRTaXplLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8V29yZG1hcmtMb2dvIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */")
      }, ___EmotionJSX(WordmarkLogo, null));
    }
  }]);

  return Wordmark;
}(Component);

export { Wordmark as default };