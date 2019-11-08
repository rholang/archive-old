"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  width: 100%;\n"])));
var NavigationAndContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex: 1 1 auto;\n"], ["\n  display: flex;\n  flex: 1 1 auto;\n"])));
var BannerContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex: 1 0 auto;\n  transition: height 0.25s ease-in-out;\n  height: ", "px;\n  position: relative;\n  width: 100%;\n  z-index: 3;\n"], ["\n  flex: 1 0 auto;\n  transition: height 0.25s ease-in-out;\n  height: ", "px;\n  position: relative;\n  width: 100%;\n  z-index: 3;\n"])), function (props) { return (props.isBannerOpen ? props.bannerHeight : 0); });
var Banner = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n"], ["\n  position: fixed;\n  width: 100%;\n"])));
var Navigation = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
var PageContent = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  flex: 1 1 auto;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n"], ["\n  flex: 1 1 auto;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n"])));
var emptyTheme = {};
var Page = /** @class */ (function (_super) {
    tslib_1.__extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _a = this.props, isBannerOpen = _a.isBannerOpen, banner = _a.banner, navigation = _a.navigation, children = _a.children, bannerHeight = _a.bannerHeight;
        return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: emptyTheme },
            react_1.default.createElement(Wrapper, null,
                this.props.banner ? (react_1.default.createElement(BannerContainer, { "aria-hidden": !isBannerOpen, isBannerOpen: isBannerOpen, bannerHeight: bannerHeight },
                    react_1.default.createElement(Banner, null, banner))) : null,
                react_1.default.createElement(NavigationAndContent, null,
                    react_1.default.createElement(Navigation, null, navigation),
                    react_1.default.createElement(PageContent, null, children)))));
    };
    Page.displayName = 'AkPage';
    Page.defaultProps = {
        isBannerOpen: false,
        bannerHeight: 52,
    };
    return Page;
}(react_1.Component));
exports.default = Page;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Page.js.map