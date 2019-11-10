import Loadable from 'react-loadable';
export var HelpDialogLoader = Loadable({
    loader: function () {
        return import(/* webpackChunkName:"@atlaskit-internal-editor-core-helpdialog" */ './index');
    },
    loading: function () { return null; },
});
//# sourceMappingURL=HelpDialogLoader.js.map