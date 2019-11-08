import { __assign, __extends } from "tslib";
import * as React from 'react';
import uuid from 'uuid/v4';
var SearchSessionContext = React.createContext({
    searchSessionId: undefined,
});
/**
 * Wraps a component and provides the component with a searchSessionId.
 * The searchSessionId will either be retrieved from the closest SearchSessionProvider or a new one
 * will be generated with the wrapped component is mounted.
 */
export function injectSearchSession(Component) {
    return /** @class */ (function (_super) {
        __extends(WrapperComponent, _super);
        function WrapperComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.searchSessionId = null;
            return _this;
        }
        WrapperComponent.prototype.render = function () {
            var _this = this;
            return (React.createElement(SearchSessionContext.Consumer, null, function (_a) {
                var searchSessionId = _a.searchSessionId;
                if (!_this.searchSessionId) {
                    _this.searchSessionId = searchSessionId || uuid();
                }
                return (React.createElement(Component, __assign({}, _this.props, { searchSessionId: _this.searchSessionId })));
            }));
        };
        return WrapperComponent;
    }(React.Component));
}
/**
 * A search session context provider.
 * This provides all children wrapped with injectSearchSession with the same search session id.
 * Noted a new search session id is generated if and only if this component is mounted.
 */
var SearchSessionProvider = /** @class */ (function (_super) {
    __extends(SearchSessionProvider, _super);
    function SearchSessionProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchSessionId: uuid(),
        };
        return _this;
    }
    SearchSessionProvider.prototype.render = function () {
        var children = this.props.children;
        var searchSessionId = this.state.searchSessionId;
        return (React.createElement(SearchSessionContext.Provider, { value: { searchSessionId: searchSessionId } }, children));
    };
    return SearchSessionProvider;
}(React.Component));
export default SearchSessionProvider;
//# sourceMappingURL=SearchSessionProvider.js.map