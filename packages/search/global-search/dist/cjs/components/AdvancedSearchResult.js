"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var quick_search_1 = require("@atlaskit/quick-search");
var Return_1 = tslib_1.__importDefault(require("../assets/Return"));
var AdvancedSearchResult = /** @class */ (function (_super) {
    tslib_1.__extends(AdvancedSearchResult, _super);
    function AdvancedSearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedSearchResult.prototype.getElemAfter = function () {
        var showKeyboardLozenge = this.props.showKeyboardLozenge;
        if (!showKeyboardLozenge) {
            return null;
        }
        // Supposed to render ReturnHighlighted when the result isSelected, but that doesn't work anymore. See QS-281.
        return React.createElement(Return_1.default, null);
    };
    AdvancedSearchResult.prototype.render = function () {
        var _a = this.props, showKeyboardLozenge = _a.showKeyboardLozenge, baseProps = tslib_1.__rest(_a, ["showKeyboardLozenge"]);
        return (React.createElement(quick_search_1.ResultBase, tslib_1.__assign({}, baseProps, { elemAfter: this.getElemAfter(), onClick: this.props.onClick })));
    };
    AdvancedSearchResult.defaultProps = {
        showKeyboardLozenge: false,
    };
    return AdvancedSearchResult;
}(React.Component));
exports.default = AdvancedSearchResult;
//# sourceMappingURL=AdvancedSearchResult.js.map