"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_render_image_1 = tslib_1.__importDefault(require("react-render-image"));
var styled_1 = require("./styled");
var ImageIcon = /** @class */ (function (_super) {
    tslib_1.__extends(ImageIcon, _super);
    function ImageIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageIcon.prototype.render = function () {
        var _a = this.props, _b = _a.alt, alt = _b === void 0 ? '' : _b, src = _a.src, _c = _a.size, size = _c === void 0 ? 16 : _c, title = _a.title;
        if (!src) {
            return this.props.default || null;
        }
        return (React.createElement(react_render_image_1.default, { src: src, loading: this.props.default, loaded: React.createElement(styled_1.Image, { src: src, alt: alt, size: size, title: title }), errored: this.props.default }));
    };
    return ImageIcon;
}(React.Component));
exports.ImageIcon = ImageIcon;
//# sourceMappingURL=index.js.map