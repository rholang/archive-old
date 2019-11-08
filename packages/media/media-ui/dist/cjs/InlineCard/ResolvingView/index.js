"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Frame_1 = require("../Frame");
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var IconAndTitleLayout_1 = require("../IconAndTitleLayout");
var styled_1 = require("./styled");
var InlineCardResolvingView = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardResolvingView, _super);
    function InlineCardResolvingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCardResolvingView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, isSelected = _a.isSelected;
        return (React.createElement(Frame_1.Frame, { onClick: onClick, isSelected: isSelected },
            React.createElement(IconAndTitleLayout_1.IconAndTitleLayout, { icon: React.createElement(styled_1.SpinnerWrapper, null,
                    React.createElement(spinner_1.default, { size: 12 })), title: url })));
    };
    return InlineCardResolvingView;
}(React.Component));
exports.InlineCardResolvingView = InlineCardResolvingView;
//# sourceMappingURL=index.js.map