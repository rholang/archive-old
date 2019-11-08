"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
exports.IconAction = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./action')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconCode = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./code')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconDate = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./date')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconDecision = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./decision')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconDivider = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./divider')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconEmoji = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./emoji')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconImages = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./images')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconLayout = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./layout')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconLink = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./link')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconListNumber = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./list-number')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconList = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./list')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconMention = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./mention')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconPanelError = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./panel-error')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconPanelNote = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./panel-note')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconPanelSuccess = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./panel-success')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconPanelWarning = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./panel-warning')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconPanel = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./panel')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconQuote = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./quote')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconStatus = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./status')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconTable = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./table')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
exports.IconFallback = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./fallback')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
function importHeading(level) {
    switch (level) {
        case 1:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading1")); });
        case 2:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading2")); });
        case 3:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading3")); });
        case 4:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading4")); });
        case 5:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading5")); });
        case 6:
        default:
            return Promise.resolve().then(function () { return tslib_1.__importStar(require("./heading6")); });
    }
}
exports.IconHeading = function (_a) {
    var level = _a.level, props = tslib_1.__rest(_a, ["level"]);
    var Icon = react_loadable_1.default({
        loader: function () {
            return importHeading(level).then(function (module) { return module.default; });
        },
        loading: function () { return null; },
    });
    return react_1.default.createElement(Icon, tslib_1.__assign({}, props));
};
exports.IconFeedback = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require('./feedback')); }).then(function (module) { return module.default; });
    },
    loading: function () { return null; },
});
//# sourceMappingURL=index.js.map