"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var MultiLineLayout_1 = require("../MultiLineLayout");
var styled_1 = require("./styled");
var CollapsedIconTitleDescriptionLayout = /** @class */ (function (_super) {
    tslib_1.__extends(CollapsedIconTitleDescriptionLayout, _super);
    function CollapsedIconTitleDescriptionLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsedIconTitleDescriptionLayout.prototype.render = function () {
        var _a = this.props, icon = _a.icon, title = _a.title, description = _a.description, other = _a.other;
        return (React.createElement(MultiLineLayout_1.MultiLineLayout, { left: icon, middle: React.createElement(React.Fragment, null,
                React.createElement(styled_1.Title, null, title.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')),
                React.createElement(styled_1.Description, null, description)), right: other }));
    };
    return CollapsedIconTitleDescriptionLayout;
}(React.Component));
exports.CollapsedIconTitleDescriptionLayout = CollapsedIconTitleDescriptionLayout;
//# sourceMappingURL=index.js.map