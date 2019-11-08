"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("@atlaskit/theme/constants");

var gridSize = (0, _constants.gridSize)();

var Wordmark =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Wordmark, _Component);

  function Wordmark() {
    (0, _classCallCheck2.default)(this, Wordmark);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Wordmark).apply(this, arguments));
  }

  (0, _createClass2.default)(Wordmark, [{
    key: "render",
    value: function render() {
      var WordmarkLogo = this.props.wordmark;
      return (0, _core.jsx)("div", {
        css:
        /*#__PURE__*/
        (0, _css2.default)({
          lineHeight: 0,
          // -2px here to account for the extra space at the top of a MenuSection
          // for the scroll hint.
          paddingBottom: gridSize * 3.5 - 2,
          paddingLeft: gridSize * 2,
          paddingTop: gridSize
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1dvcmRtYXJrL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFRIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1dvcmRtYXJrL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV29yZG1hcmtQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBncmlkU2l6ZSA9IGdyaWRTaXplRm4oKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZG1hcmsgZXh0ZW5kcyBDb21wb25lbnQ8V29yZG1hcmtQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3b3JkbWFyazogV29yZG1hcmtMb2dvIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgICAgICAgLy8gLTJweCBoZXJlIHRvIGFjY291bnQgZm9yIHRoZSBleHRyYSBzcGFjZSBhdCB0aGUgdG9wIG9mIGEgTWVudVNlY3Rpb25cbiAgICAgICAgICAvLyBmb3IgdGhlIHNjcm9sbCBoaW50LlxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IGdyaWRTaXplICogMy41IC0gMixcbiAgICAgICAgICBwYWRkaW5nTGVmdDogZ3JpZFNpemUgKiAyLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IGdyaWRTaXplLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8V29yZG1hcmtMb2dvIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */")
      }, (0, _core.jsx)(WordmarkLogo, null));
    }
  }]);
  return Wordmark;
}(_react.Component);

exports.default = Wordmark;