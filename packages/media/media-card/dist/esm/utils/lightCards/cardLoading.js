import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import FileIcon from '@atlaskit/icon/glyph/file';
import { getDimensionsWithDefault } from './getDimensionsWithDefault';
import { Wrapper } from './styled';
var CardLoading = /** @class */ (function (_super) {
    __extends(CardLoading, _super);
    function CardLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLoading.prototype.render = function () {
        var dimensions = getDimensionsWithDefault(this.props.dimensions);
        return React.createElement(Wrapper, { dimensions: dimensions }, this.icon);
    };
    Object.defineProperty(CardLoading.prototype, "icon", {
        get: function () {
            return React.createElement(FileIcon, { label: "loading", size: "medium" });
        },
        enumerable: true,
        configurable: true
    });
    return CardLoading;
}(Component));
export { CardLoading };
//# sourceMappingURL=cardLoading.js.map