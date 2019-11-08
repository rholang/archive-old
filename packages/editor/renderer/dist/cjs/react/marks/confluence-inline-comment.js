"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var ConfluenceInlineComment = /** @class */ (function (_super) {
    tslib_1.__extends(ConfluenceInlineComment, _super);
    function ConfluenceInlineComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfluenceInlineComment.prototype.render = function () {
        var _a = this.props, reference = _a.reference, children = _a.children;
        return (React.createElement("span", { "data-mark-type": "confluenceInlineComment", "data-reference": reference }, children));
    };
    return ConfluenceInlineComment;
}(react_1.Component));
exports.default = ConfluenceInlineComment;
//# sourceMappingURL=confluence-inline-comment.js.map