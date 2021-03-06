import Loadable from 'react-loadable';
export var ToolbarLoader = Loadable({
    loader: function () {
        return import(/* webpackChunkName:"@atlaskit-internal-editor-core-floating-toolbar" */ './Toolbar');
    },
    loading: function () { return null; },
});
//# sourceMappingURL=ToolbarLoader.js.map