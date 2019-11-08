"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var Chrome = /** @class */ (function (_super) {
    tslib_1.__extends(Chrome, _super);
    function Chrome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyPress = function (e) {
            var spacebarOrEnter = e.key === ' ' || e.key === 'Enter';
            if (_this.chromeRef && spacebarOrEnter) {
                var link = _this.chromeRef.querySelector('a');
                if (link)
                    link.click();
            }
        };
        _this.handleBlur = function () {
            _this.props.onFocusChange(false);
        };
        _this.handleFocus = function (e) {
            if (e.target === _this.chromeRef)
                _this.props.onFocusChange(true);
        };
        return _this;
    }
    Chrome.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, isLink = _a.isLink, isRemovable = _a.isRemovable, isRemoved = _a.isRemoved, isRemoving = _a.isRemoving, isRounded = _a.isRounded, markedForRemoval = _a.markedForRemoval, color = _a.color;
        // @ts-ignore (children *are* in SpanProps)
        var spanProps = {
            innerRef: function (r) {
                _this.chromeRef = r;
            },
            isRemovable: isRemovable,
            isRemoved: isRemoved,
            isRemoving: isRemoving,
            isRounded: isRounded,
            markedForRemoval: markedForRemoval,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onKeyPress: this.handleKeyPress,
            tabIndex: -1,
            color: color,
            role: '',
        };
        if (isLink) {
            spanProps.role = 'link';
            spanProps.tabIndex = 0;
        }
        return react_1.default.createElement(styled_1.Span, tslib_1.__assign({}, spanProps), children);
    };
    return Chrome;
}(react_1.PureComponent));
exports.default = Chrome;
//# sourceMappingURL=index.js.map