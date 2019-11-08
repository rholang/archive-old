"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
function withActivityProvider(WrappedComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithActivityProvider, _super);
        function WithActivityProvider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderNode = function (providers) {
                var _a = _this
                    .props, providerFactory = _a.providerFactory, props = tslib_1.__rest(_a, ["providerFactory"]);
                var activityProvider = providers.activityProvider;
                return (React.createElement(WrappedComponent, tslib_1.__assign({ activityProvider: activityProvider }, props)));
            };
            return _this;
        }
        WithActivityProvider.prototype.render = function () {
            var providerFactory = this.props.providerFactory;
            return (React.createElement(editor_common_1.WithProviders, { providers: ['activityProvider'], providerFactory: providerFactory, renderNode: this.renderNode }));
        };
        return WithActivityProvider;
    }(React.Component));
}
exports.default = withActivityProvider;
//# sourceMappingURL=withActivityProvider.js.map