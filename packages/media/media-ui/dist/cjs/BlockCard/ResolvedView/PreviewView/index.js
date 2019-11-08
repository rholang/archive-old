"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_render_image_1 = tslib_1.__importDefault(require("react-render-image"));
var image_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/image"));
var NoImageIcon_1 = tslib_1.__importDefault(require("./NoImageIcon"));
var styled_1 = require("./styled");
exports.LoadingView = function () { return (React.createElement(styled_1.IconWrapper, null,
    React.createElement(image_1.default, { size: "xlarge", label: "loading" }))); };
exports.NoImageView = function () { return (React.createElement(styled_1.IconWrapper, null,
    React.createElement(NoImageIcon_1.default, null))); };
exports.LoadedView = function (_a) {
    var url = _a.url;
    return (React.createElement(styled_1.ImageWrapper, { url: url }));
};
var PreviewView = /** @class */ (function (_super) {
    tslib_1.__extends(PreviewView, _super);
    function PreviewView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewView.prototype.renderContent = function () {
        var url = this.props.url;
        if (!url) {
            return React.createElement(exports.NoImageView, null);
        }
        return (React.createElement(react_render_image_1.default, { src: url, loading: React.createElement(exports.LoadingView, null), loaded: React.createElement(exports.LoadedView, { url: url }), errored: React.createElement(exports.NoImageView, null) }));
    };
    PreviewView.prototype.render = function () {
        return React.createElement(styled_1.Wrapper, null, this.renderContent());
    };
    return PreviewView;
}(React.Component));
exports.PreviewView = PreviewView;
//# sourceMappingURL=index.js.map