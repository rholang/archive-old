"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var HyperlinkAddToolbar_1 = tslib_1.__importDefault(require("./HyperlinkAddToolbar"));
var editor_common_1 = require("@atlaskit/editor-common");
var Toolbar = /** @class */ (function (_super) {
    tslib_1.__extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var _a = this.props, onSubmit = _a.onSubmit, onBlur = _a.onBlur, displayText = _a.displayText, displayUrl = _a.displayUrl, providerFactory = _a.providerFactory;
        return (React.createElement(editor_common_1.WithProviders, { providers: ['activityProvider'], providerFactory: providerFactory, renderNode: function (_a) {
                var activityProvider = _a.activityProvider;
                return (React.createElement(HyperlinkAddToolbar_1.default, { provider: activityProvider, onSubmit: onSubmit, onBlur: onBlur, displayText: displayText || '', displayUrl: displayUrl }));
            } }));
    };
    return Toolbar;
}(React.PureComponent));
exports.default = Toolbar;
//# sourceMappingURL=index.js.map