"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Container_1 = tslib_1.__importDefault(require("./Container"));
var Content_1 = tslib_1.__importDefault(require("./Content"));
var theme_1 = require("../theme");
var Lozenge = /** @class */ (function (_super) {
    tslib_1.__extends(Lozenge, _super);
    function Lozenge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lozenge.prototype.render = function () {
        var _a = this.props, theme = _a.theme, children = _a.children, testId = _a.testId;
        return (react_1.default.createElement(theme_1.Theme.Provider, { value: theme },
            react_1.default.createElement(theme_1.Theme.Consumer, tslib_1.__assign({}, this.props), function (themeTokens) { return (react_1.default.createElement(Container_1.default, tslib_1.__assign({ testId: testId }, themeTokens),
                react_1.default.createElement(Content_1.default, tslib_1.__assign({}, themeTokens), children))); })));
    };
    Lozenge.defaultProps = {
        isBold: false,
        appearance: 'default',
        maxWidth: 200,
    };
    return Lozenge;
}(react_1.PureComponent));
exports.default = Lozenge;
//# sourceMappingURL=index.js.map