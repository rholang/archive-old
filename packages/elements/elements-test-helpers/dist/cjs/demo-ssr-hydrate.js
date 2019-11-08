"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var server_1 = require("react-dom/server");
var react_dom_1 = require("react-dom");
exports.default = (function (Example, renderSSR) {
    if (renderSSR === void 0) { renderSSR = true; }
    return /** @class */ (function (_super) {
        tslib_1.__extends(HydrateExample, _super);
        function HydrateExample(props) {
            var _this = _super.call(this, props) || this;
            _this.serverHTML = server_1.renderToString(React.createElement(Example, null));
            return _this;
        }
        HydrateExample.prototype.componentDidMount = function () {
            var hydratedEl = this.refs['hydrated'];
            react_dom_1.hydrate([React.createElement(Example, { key: "123" })], hydratedEl);
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