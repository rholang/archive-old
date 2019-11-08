"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("@babel/polyfill");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var mobile_editor_element_1 = tslib_1.__importDefault(require("./mobile-editor-element"));
ReactDOM.render(React.createElement(mobile_editor_element_1.default, null), document.getElementById('editor'));
//# sourceMappingURL=index.js.map