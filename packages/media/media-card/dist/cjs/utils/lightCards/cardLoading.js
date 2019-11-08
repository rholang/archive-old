"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var file_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/file"));
var getDimensionsWithDefault_1 = require("./getDimensionsWithDefault");
var styled_1 = require("./styled");
var CardLoading = /** @class */ (function (_super) {
    tslib_1.__extends(CardLoading, _super);
    function CardLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLoading.prototype.render = function () {
        var dimensions = getDimensionsWithDefault_1.getDimensionsWithDefault(this.props.dimensions);
        return React.createElement(styled_1.Wrapper, { dimensions: dimensions }, this.icon);
    };
    Object.defineProperty(CardLoading.prototype, "icon", {
        get: function () {
            return React.createElement(file_1.default, { label: "loading", size: "medium" });
        },
        enumerable: true,
        configurable: true
    });
    return CardLoading;
}(react_1.Component));
exports.CardLoading = CardLoading;
//# sourceMappingURL=cardLoading.js.map