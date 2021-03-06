import { __assign, __rest } from "tslib";
import React from 'react';
import Loadable from 'react-loadable';
export var IconAction = Loadable({
    loader: function () {
        return import('./action').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconCode = Loadable({
    loader: function () {
        return import('./code').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconDate = Loadable({
    loader: function () {
        return import('./date').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconDecision = Loadable({
    loader: function () {
        return import('./decision').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconDivider = Loadable({
    loader: function () {
        return import('./divider').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconEmoji = Loadable({
    loader: function () {
        return import('./emoji').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconImages = Loadable({
    loader: function () {
        return import('./images').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconLayout = Loadable({
    loader: function () {
        return import('./layout').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconLink = Loadable({
    loader: function () {
        return import('./link').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconListNumber = Loadable({
    loader: function () {
        return import('./list-number').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconList = Loadable({
    loader: function () {
        return import('./list').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconMention = Loadable({
    loader: function () {
        return import('./mention').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconPanelError = Loadable({
    loader: function () {
        return import('./panel-error').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconPanelNote = Loadable({
    loader: function () {
        return import('./panel-note').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconPanelSuccess = Loadable({
    loader: function () {
        return import('./panel-success').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconPanelWarning = Loadable({
    loader: function () {
        return import('./panel-warning').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconPanel = Loadable({
    loader: function () {
        return import('./panel').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconQuote = Loadable({
    loader: function () {
        return import('./quote').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconStatus = Loadable({
    loader: function () {
        return import('./status').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconTable = Loadable({
    loader: function () {
        return import('./table').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
export var IconFallback = Loadable({
    loader: function () {
        return import('./fallback').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
function importHeading(level) {
    switch (level) {
        case 1:
            return import("./heading1");
        case 2:
            return import("./heading2");
        case 3:
            return import("./heading3");
        case 4:
            return import("./heading4");
        case 5:
            return import("./heading5");
        case 6:
        default:
            return import("./heading6");
    }
}
export var IconHeading = function (_a) {
    var level = _a.level, props = __rest(_a, ["level"]);
    var Icon = Loadable({
        loader: function () {
            return importHeading(level).then(function (module) { return module.default; });
        },
        loading: function () { return null; },
    });
    return React.createElement(Icon, __assign({}, props));
};
export var IconFeedback = Loadable({
    loader: function () {
        return import('./feedback').then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
//# sourceMappingURL=index.js.map