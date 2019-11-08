"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("@atlaskit/icon"));

var RecentIconGlyph = function RecentIconGlyph() {
  return (0, _core.jsx)("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, (0, _core.jsx)("title", null, "Recents icon B050 - svg - dark"), (0, _core.jsx)("desc", null, "Created with Sketch."), (0, _core.jsx)("g", {
    id: "Recents-icon-B050---svg---dark",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, (0, _core.jsx)("path", {
    d: "M6.48806088,8 L8,8 C8.55228475,8 9,8.44771525 9,9 C9,9.55228475 8.55228475,10 8,10 L4,10 C3.44771525,10 3,9.55228475 3,9 L3,5 C3,4.44771525 3.44771525,4 4,4 C4.55228475,4 5,4.44771525 5,5 L5,6.64341084 C5.75691187,5.61981472 6.7292975,4.7615987 7.87157736,4.12842264 C12.2189295,1.718646 17.6966647,3.28936128 20.1064413,7.63671342 C22.5162179,11.9840656 20.9455027,17.4618007 16.5981505,19.8715774 C12.2507984,22.281354 6.77306322,20.7106387 4.36328658,16.3632866 C4.09553362,15.8802475 4.27005754,15.2716102 4.75309667,15.0038573 C5.2361358,14.7361043 5.84477304,14.9106282 6.112526,15.3936673 C7.98679672,18.7749412 12.2472574,19.9966087 15.6285313,18.1223379 C19.0098052,16.2480672 20.2314726,11.9876065 18.3572019,8.60633266 C16.4829312,5.22505878 12.2224705,4.00339133 8.8411966,5.87766205 C7.88983804,6.40500871 7.09195037,7.13062747 6.48806088,8 Z M13.2348639,9.0044 L13.2348639,12.5864 L15.4198639,14.7714 C15.8088639,15.1604 15.8088639,15.7964 15.4198639,16.1854 C15.0308639,16.5744 14.3948639,16.5744 14.0058639,16.1854 L11.5358639,13.7164 C11.3508639,13.5344 11.2348639,13.2834 11.2348639,13.0044 L11.2348639,9.0044 C11.2348671,9.00293405 11.2348639,9.00146739 11.2348639,9 L11.2348639,7 C11.2348639,6.44771525 11.6825792,6 12.2348639,6 C12.7871487,6 13.2348639,6.44771525 13.2348639,7 L13.2348639,9 C13.2348639,9.00146739 13.2348608,9.00293405 13.2348545,9.00439996 Z",
    id: "Combined-Shape",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};

var RecentIcon = function RecentIcon(props) {
  return (0, _core.jsx)(_icon.default, (0, _extends2.default)({
    glyph: RecentIconGlyph
  }, props));
};

RecentIcon.displayName = 'RecentIcon';
var _default = RecentIcon;
exports.default = _default;