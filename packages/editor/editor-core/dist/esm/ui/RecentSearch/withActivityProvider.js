import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import { WithProviders, } from '@atlaskit/editor-common';
export default function withActivityProvider(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(WithActivityProvider, _super);
        function WithActivityProvider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderNode = function (providers) {
                var _a = _this
                    .props, providerFactory = _a.providerFactory, props = __rest(_a, ["providerFactory"]);
                var activityProvider = providers.activityProvider;
                return (React.createElement(WrappedComponent, __assign({ activityProvider: activityProvider }, props)));
            };
            return _this;
        }
        WithActivityProvider.prototype.render = function () {
            var providerFactory = this.props.providerFactory;
            return (React.createElement(WithProviders, { providers: ['activityProvider'], providerFactory: providerFactory, renderNode: this.renderNode }));
        };
        return WithActivityProvider;
    }(React.Component));
}
//# sourceMappingURL=withActivityProvider.js.map