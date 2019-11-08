"use strict";
// FIXME - FAB-1732 looking at making a shared component for this
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styles = tslib_1.__importStar(require("./styles"));
var Scrollable = /** @class */ (function (_super) {
    tslib_1.__extends(Scrollable, _super);
    function Scrollable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollableDiv = null;
        // API
        _this.reveal = function (child, forceToTop) {
            if (child && _this.scrollableDiv) {
                var childNode = react_dom_1.findDOMNode(child);
                // Not using Element.scrollIntoView as it scrolls even to top/bottom of view even if
                // already visible
                var scrollableRect = _this.scrollableDiv.getBoundingClientRect();
                var elementRect = childNode.getBoundingClientRect();
                if (forceToTop || elementRect.top < scrollableRect.top) {
                    _this.scrollableDiv.scrollTop += elementRect.top - scrollableRect.top;
                }
                else if (elementRect.bottom > scrollableRect.bottom) {
                    _this.scrollableDiv.scrollTop +=
                        elementRect.bottom - scrollableRect.bottom;
                }
            }
        };
        _this.scrollToBottom = function () {
            if (_this.scrollableDiv) {
                _this.scrollableDiv.scrollTop = _this.scrollableDiv.scrollHeight;
            }
        };
        _this.handleScroll = function (event) {
            var sampleOffset = 10;
            var firstElement;
            if (_this.scrollableDiv) {
                var scrollableRect = _this.scrollableDiv.getBoundingClientRect();
                firstElement = document.elementFromPoint(scrollableRect.left + sampleOffset, scrollableRect.top + sampleOffset);
            }
            if (_this.props.onScroll && firstElement) {
                _this.props.onScroll(firstElement, event);
            }
        };
        _this.handleRef = function (ref) {
            _this.scrollableDiv = ref;
        };
        return _this;
    }
    Scrollable.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, maxHeight = _a.maxHeight, onMouseLeave = _a.onMouseLeave;
        var scrollableClasses = ['emoji-scrollable', styles.emojiScrollable];
        if (className) {
            scrollableClasses.push(className);
        }
        var style = maxHeight ? { maxHeight: maxHeight } : {};
        return (React.createElement("div", { className: classnames_1.default(scrollableClasses), onMouseLeave: onMouseLeave, onScroll: this.handleScroll, ref: this.handleRef, style: style }, children));
    };
    return Scrollable;
}(react_1.PureComponent));
exports.default = Scrollable;
//# sourceMappingURL=Scrollable.js.map