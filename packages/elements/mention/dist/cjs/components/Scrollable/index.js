"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var styles_1 = require("./styles");
var Scrollable = /** @class */ (function (_super) {
    tslib_1.__extends(Scrollable, _super);
    function Scrollable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // API
        _this.reveal = function (child) {
            if (child && _this.scrollableDiv) {
                var childNode = react_dom_1.findDOMNode(child);
                // Not using Element.scrollIntoView as it scrolls even to top/bottom of view even if
                // already visible
                var scrollableRect = _this.scrollableDiv.getBoundingClientRect();
                var elementRect = childNode.getBoundingClientRect();
                if (elementRect.top < scrollableRect.top) {
                    _this.scrollableDiv.scrollTop += elementRect.top - scrollableRect.top;
                }
                else if (elementRect.bottom > scrollableRect.bottom) {
                    _this.scrollableDiv.scrollTop +=
                        elementRect.bottom - scrollableRect.bottom;
                }
            }
        };
        _this.handleRef = function (ref) {
            _this.scrollableDiv = ref;
        };
        return _this;
    }
    Scrollable.prototype.render = function () {
        return (React.createElement(styles_1.ScrollableStyle, { innerRef: this.handleRef }, this.props.children));
    };
    return Scrollable;
}(React.PureComponent));
exports.default = Scrollable;
//# sourceMappingURL=index.js.map