"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default = _styledComponents.default.div.withConfig({
  displayName: "NavigationGlobalNavigationWrapper",
  componentId: "xbpdmf-0"
})(["\n  /* make full height */\n  display: flex;\n\n  /* prevent the global navigation being crushed while resizing */\n  flex-shrink: 0;\n"]);

exports.default = _default;