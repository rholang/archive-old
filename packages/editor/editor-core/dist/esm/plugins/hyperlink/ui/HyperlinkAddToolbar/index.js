import { __extends } from "tslib";
import * as React from 'react';
import HyperlinkAddToolbar from './HyperlinkAddToolbar';
import { WithProviders } from '@atlaskit/editor-common';
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var _a = this.props, onSubmit = _a.onSubmit, onBlur = _a.onBlur, displayText = _a.displayText, displayUrl = _a.displayUrl, providerFactory = _a.providerFactory;
        return (React.createElement(WithProviders, { providers: ['activityProvider'], providerFactory: providerFactory, renderNode: function (_a) {
                var activityProvider = _a.activityProvider;
                return (React.createElement(HyperlinkAddToolbar, { provider: activityProvider, onSubmit: onSubmit, onBlur: onBlur, displayText: displayText || '', displayUrl: displayUrl }));
            } }));
    };
    return Toolbar;
}(React.PureComponent));
export default Toolbar;
//# sourceMappingURL=index.js.map