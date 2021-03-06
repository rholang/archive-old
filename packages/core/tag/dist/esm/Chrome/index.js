import { __assign, __extends } from "tslib";
import React, { PureComponent, } from 'react';
import { Span } from './styled';
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
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
        return React.createElement(Span, __assign({}, spanProps), children);
    };
    return Chrome;
}(PureComponent));
export default Chrome;
//# sourceMappingURL=index.js.map