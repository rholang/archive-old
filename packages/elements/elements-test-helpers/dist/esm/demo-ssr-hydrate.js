import { __extends } from "tslib";
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { hydrate } from 'react-dom';
export default (function (Example, renderSSR) {
    if (renderSSR === void 0) { renderSSR = true; }
    return /** @class */ (function (_super) {
        __extends(HydrateExample, _super);
        function HydrateExample(props) {
            var _this = _super.call(this, props) || this;
            _this.serverHTML = renderToString(React.createElement(Example, null));
            return _this;
        }
        HydrateExample.prototype.componentDidMount = function () {
            var hydratedEl = this.refs['hydrated'];
            hydrate([React.createElement(Example, { key: "123" })], hydratedEl);
        };
        HydrateExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement("h2", null, "Server side rendered HTML"),
                React.createElement("code", null, this.serverHTML),
                renderSSR && (React.createElement("div", { dangerouslySetInnerHTML: { __html: this.serverHTML } })),
                React.createElement("br", null),
                React.createElement("h2", null, "Hydrated from HTML"),
                React.createElement("div", { ref: "hydrated", dangerouslySetInnerHTML: { __html: this.serverHTML } })));
        };
        return HydrateExample;
    }(React.Component));
});
//# sourceMappingURL=demo-ssr-hydrate.js.map