import { prefetch } from '@atlaskit/atlassian-switcher/prefetch';
import { render } from './render';
export var prepareAtlassianSwitcher = function (switcherProps, analyticsListener) {
    if (!analyticsListener) {
        throw new Error('Atlassian switcher: Missing analytics listener');
    }
    var hasPrefetched = false;
    return {
        prefetch: function () {
            if (hasPrefetched) {
                return;
            }
            prefetch(switcherProps);
            hasPrefetched = true;
        },
        renderAt: function (container) {
            return render(switcherProps, analyticsListener, container);
        },
    };
};
//# sourceMappingURL=prepare.js.map