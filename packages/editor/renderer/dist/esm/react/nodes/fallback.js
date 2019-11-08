import { __extends } from "tslib";
import * as React from 'react';
import { getEventHandler } from '../../utils';
var CardErrorBoundary = /** @class */ (function (_super) {
    __extends(CardErrorBoundary, _super);
    function CardErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isError: false,
        };
        _this.onClickFallback = function (e) {
            e.preventDefault();
            var _a = _this.props, eventHandlers = _a.eventHandlers, url = _a.url;
            var handler = getEventHandler(eventHandlers, 'smartCard');
            if (url && handler) {
                handler(url);
            }
        };
        return _this;
    }
    CardErrorBoundary.prototype.render = function () {
        if (this.state.isError) {
            var url = this.props.url;
            if (url) {
                return (React.createElement("a", { href: url, onClick: this.onClickFallback }, url));
            }
            else {
                var UnsupportedComponent = this.props.unsupportedComponent;
                return React.createElement(UnsupportedComponent, null);
            }
        }
        return this.props.children;
    };
    CardErrorBoundary.prototype.componentDidCatch = function (_error) {
        this.setState({ isError: true });
    };
    return CardErrorBoundary;
}(React.PureComponent));
export { CardErrorBoundary };
//# sourceMappingURL=fallback.js.map