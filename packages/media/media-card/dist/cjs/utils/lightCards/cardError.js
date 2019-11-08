"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var errorIcon_1 = require("../errorIcon");
var styled_1 = require("./styled");
var getDimensionsWithDefault_1 = require("./getDimensionsWithDefault");
var CardError = /** @class */ (function (_super) {
    tslib_1.__extends(CardError, _super);
    function CardError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardError.prototype.render = function () {
        var dimensions = getDimensionsWithDefault_1.getDimensionsWithDefault(this.props.dimensions);
        return React.createElement(styled_1.Wrapper, { dimensions: dimensions }, this.icon);
    };
    Object.defineProperty(CardError.prototype, "icon", {
        get: function () {
            var size = this.props.size;
            return React.createElement(errorIcon_1.ErrorIcon, { size: size });
        },
        enumerable: true,
        configurable: true
    });
    CardError.defaultProps = {
        size: 'medium',
    };
    return CardError;
}(react_1.Component));
exports.CardError = CardError;
//# sourceMappingURL=cardError.js.map