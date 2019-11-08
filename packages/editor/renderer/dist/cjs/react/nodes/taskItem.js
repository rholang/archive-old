"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var task_item_with_providers_1 = tslib_1.__importDefault(require("./task-item-with-providers"));
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var TaskItem = /** @class */ (function (_super) {
    tslib_1.__extends(TaskItem, _super);
    function TaskItem(props) {
        var _this = _super.call(this, props) || this;
        _this.renderWithProvider = function (providers) {
            var taskDecisionProvider = providers.taskDecisionProvider, contextIdentifierProvider = providers.contextIdentifierProvider;
            var _a = _this.props, children = _a.children, localId = _a.localId, state = _a.state, rendererContext = _a.rendererContext;
            var objectAri = '';
            if (rendererContext) {
                objectAri = rendererContext.objectAri || '';
            }
            return (React.createElement(analytics_namespaced_context_1.FabricElementsAnalyticsContext, { data: {
                    userContext: 'document',
                } },
                React.createElement(task_item_with_providers_1.default, { objectAri: objectAri, taskId: localId, isDone: state === 'DONE', taskDecisionProvider: taskDecisionProvider, contextIdentifierProvider: contextIdentifierProvider }, children)));
        };
        _this.providerFactory = props.providers || new editor_common_1.ProviderFactory();
        return _this;
    }
    TaskItem.prototype.componentWillUnmount = function () {
        if (!this.props.providers) {
            // new ProviderFactory is created if no `providers` has been set
            // in this case when component is unmounted it's safe to destroy this providerFactory
            this.providerFactory.destroy();
        }
    };
    TaskItem.prototype.render = function () {
        return (React.createElement(editor_common_1.WithProviders, { providers: ['taskDecisionProvider', 'contextIdentifierProvider'], providerFactory: this.providerFactory, renderNode: this.renderWithProvider }));
    };
    return TaskItem;
}(react_1.PureComponent));
exports.default = TaskItem;
//# sourceMappingURL=taskItem.js.map