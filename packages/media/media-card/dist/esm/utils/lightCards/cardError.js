import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { ErrorIcon } from '../errorIcon';
import { Wrapper } from './styled';
import { getDimensionsWithDefault } from './getDimensionsWithDefault';
var CardError = /** @class */ (function (_super) {
    __extends(CardError, _super);
    function CardError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardError.prototype.render = function () {
        var dimensions = getDimensionsWithDefault(this.props.dimensions);
        return React.createElement(Wrapper, { dimensions: dimensions }, this.icon);
    };
    Object.defineProperty(CardError.prototype, "icon", {
        get: function () {
            var size = this.props.size;
            return React.createElement(ErrorIcon, { size: size });
        },
        enumerable: true,
        configurable: true
    });
    CardError.defaultProps = {
        size: 'medium',
    };
    return CardError;
}(Component));
export { CardError };
//# sourceMappingURL=cardError.js.map