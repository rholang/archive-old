"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var CrossProductSearchClient_1 = require("../api/CrossProductSearchClient");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var ABTestProvider = /** @class */ (function (_super) {
    tslib_1.__extends(ABTestProvider, _super);
    function ABTestProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            abTest: null,
        };
        _this.fetchAbTestOnce = memoize_one_1.default(function () {
            var _a = _this.props, context = _a.context, crossProductSearchClient = _a.crossProductSearchClient;
            if (!_this.state.abTest) {
                crossProductSearchClient
                    .getAbTestDataForProduct(context)
                    .then(function (abTest) {
                    _this.setState({
                        abTest: abTest || CrossProductSearchClient_1.DEFAULT_AB_TEST,
                    });
                })
                    .catch(function (e) {
                    _this.setState({
                        abTest: CrossProductSearchClient_1.DEFAULT_AB_TEST,
                    });
                });
            }
        });
        return _this;
    }
    ABTestProvider.prototype.componentDidMount = function () {
        this.fetchAbTestOnce();
    };
    ABTestProvider.prototype.componentDidUpdate = function () {
        this.fetchAbTestOnce();
    };
    ABTestProvider.prototype.render = function () {
        var abTest = this.state.abTest;
        var children = this.props.children;
        if (!abTest) {
            return null;
        }
        return React.createElement(React.Fragment, null, children(abTest));
    };
    return ABTestProvider;
}(React.Component));
exports.ABTestProvider = ABTestProvider;
//# sourceMappingURL=AbTestProvider.js.map