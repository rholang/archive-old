"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

// We need to wrap the NavigationItems in a parent that is constrained to the same width
// as the grandparent, so that text truncation continues to get triggered inside the
// child NavigationItems. We could do this with CSS flex, but since flex styles are not
// used by the children, using CSS width here is simpler.
var NavigationOverflowChildren = _styledComponents.default.div.withConfig({
  displayName: "NavigationOverflowChildren",
  componentId: "sc-17r7om7-0"
})(["\n  width: 100%;\n"]);

NavigationOverflowChildren.displayName = 'NavigationOverflowChildren';
var _default = NavigationOverflowChildren;
exports.default = _default;