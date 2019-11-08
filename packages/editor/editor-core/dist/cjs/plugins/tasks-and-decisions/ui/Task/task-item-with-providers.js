"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var task_decision_1 = require("@atlaskit/task-decision");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var TaskItemWithProviders = /** @class */ (function (_super) {
    tslib_1.__extends(TaskItemWithProviders, _super);
    function TaskItemWithProviders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { resolvedContextProvider: undefined };
        // Storing the mounted state is an anti-pattern, however the asynchronous state
        // updates via `updateContextIdentifierProvider` means we may be dismounted before
        // it receives a response.
        // Since we can't cancel the Promise we store the mounted state to avoid state
        // updates when no longer suitable.
        _this.mounted = false;
        return _this;
    }
    TaskItemWithProviders.prototype.UNSAFE_componentWillMount = function () {
        this.mounted = true;
        this.updateContextIdentifierProvider(this.props);
    };
    TaskItemWithProviders.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    TaskItemWithProviders.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.contextIdentifierProvider !==
            this.props.contextIdentifierProvider) {
            this.updateContextIdentifierProvider(nextProps);
        }
    };
    TaskItemWithProviders.prototype.updateContextIdentifierProvider = function (props) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resolvedContextProvider, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!props.contextIdentifierProvider) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, props.contextIdentifierProvider];
                    case 2:
                        resolvedContextProvider = _a.sent();
                        if (this.mounted)
                            this.setState({ resolvedContextProvider: resolvedContextProvider });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        if (this.mounted)
                            this.setState({ resolvedContextProvider: undefined });
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setState({ resolvedContextProvider: undefined });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskItemWithProviders.prototype.render = function () {
        var _a = this.props, contextIdentifierProvider = _a.contextIdentifierProvider, otherProps = tslib_1.__rest(_a, ["contextIdentifierProvider"]);
        var objectId = (this.state.resolvedContextProvider || {}).objectId;
        var userContext = objectId ? 'edit' : 'new';
        return (React.createElement(analytics_namespaced_context_1.FabricElementsAnalyticsContext, { data: {
                userContext: userContext,
            } },
            React.createElement(task_decision_1.ResourcedTaskItem, tslib_1.__assign({}, otherProps, { objectAri: objectId }))));
    };
    return TaskItemWithProviders;
}(react_1.Component));
exports.default = TaskItemWithProviders;
//# sourceMappingURL=task-item-with-providers.js.map