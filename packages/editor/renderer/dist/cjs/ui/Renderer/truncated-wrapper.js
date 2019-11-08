"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var FadeOut = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  overflow-y: hidden;\n  max-height: ", "px;\n  &::after {\n    content: '';\n    position: absolute;\n    top: ", "px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* Using 'rgba(255, 255, 255, 0)' because 'transparent' breaks the gradient in Safari 11 */\n    background-image: ", ";\n  }\n"], ["\n  position: relative;\n  overflow-y: hidden;\n  max-height: ", "px;\n  &::after {\n    content: '';\n    position: absolute;\n    top: ", "px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* Using 'rgba(255, 255, 255, 0)' because 'transparent' breaks the gradient in Safari 11 */\n    background-image: ",
    ";\n  }\n"])), function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var height = _a.height, fadeHeight = _a.fadeHeight;
    return height - fadeHeight;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return "linear-gradient(rgba(255, 255, 255, 0),  " + backgroundColor + ")";
});
var TruncatedWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(TruncatedWrapper, _super);
    function TruncatedWrapper(props) {
        return _super.call(this, props) || this;
    }
    TruncatedWrapper.prototype.render = function () {
        var _a = this.props, _b = _a.height, height = _b === void 0 ? 95 : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? 'white' : _c, children = _a.children;
        return (React.createElement(FadeOut, { height: height, fadeHeight: 24, backgroundColor: backgroundColor }, children));
    };
    return TruncatedWrapper;
}(react_1.Component));
exports.TruncatedWrapper = TruncatedWrapper;
var templateObject_1;
//# sourceMappingURL=truncated-wrapper.js.map