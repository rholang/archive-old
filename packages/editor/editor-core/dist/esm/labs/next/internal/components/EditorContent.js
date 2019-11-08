import * as React from 'react';
var EditorContentContext = React.createContext(function () { });
var EditorContentProvider = EditorContentContext.Provider;
var EditorContent = React.memo(function () {
    var handleRef = React.useContext(EditorContentContext);
    return React.createElement("div", { style: { height: '100%' }, ref: handleRef });
});
export { EditorContentProvider, EditorContent };
//# sourceMappingURL=EditorContent.js.map