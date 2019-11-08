import { __extends } from "tslib";
import * as React from 'react';
import { DEFAULT_AB_TEST, } from '../api/CrossProductSearchClient';
import memoizeOne from 'memoize-one';
var ABTestProvider = /** @class */ (function (_super) {
    __extends(ABTestProvider, _super);
    function ABTestProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            abTest: null,
        };
        _this.fetchAbTestOnce = memoizeOne(function () {
            var _a = _this.props, context = _a.context, crossProductSearchClient = _a.crossProductSearchClient;
            if (!_this.state.abTest) {
                crossProductSearchClient
                    .getAbTestDataForProduct(context)
                    .then(function (abTest) {
                    _this.setState({
                        abTest: abTest || DEFAULT_AB_TEST,
                    });
                })
                    .catch(function (e) {
                    _this.setState({
                        abTest: DEFAULT_AB_TEST,
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
export { ABTestProvider };
//# sourceMappingURL=AbTestProvider.js.map