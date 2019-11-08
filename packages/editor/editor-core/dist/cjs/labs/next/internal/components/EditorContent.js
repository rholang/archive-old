"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var EditorContentContext = React.createContext(function () { });
var EditorContentProvider = EditorContentContext.Provider;
exports.EditorContentProvider = EditorContentProvider;
var EditorContent = React.memo(function () {
    var handleRef = React.useContext(EditorContentContext);
    return React.createElement("div", { style: { height: '100%' }, ref: handleRef });
});
exports.EditorContent = EditorContent;
//# sourceMappingURL=EditorContent.js.map