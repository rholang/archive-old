"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var HyperlinkAddToolbar_1 = tslib_1.__importDefault(require("../../hyperlink/ui/HyperlinkAddToolbar"));
var actions_1 = require("../pm-plugins/actions");
var ToolbarComponents_1 = require("../../../ui/RecentSearch/ToolbarComponents");
var doc_1 = require("../pm-plugins/doc");
var utils_1 = require("../utils");
var EditLinkToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(EditLinkToolbar, _super);
    function EditLinkToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditLinkToolbar.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.node !== this.props.node) {
            this.hideLinkToolbar();
        }
    };
    EditLinkToolbar.prototype.componentWillUnmount = function () {
        this.hideLinkToolbar();
    };
    EditLinkToolbar.prototype.hideLinkToolbar = function () {
        var view = this.props.view;
        view.dispatch(actions_1.hideLinkToolbar(view.state.tr));
    };
    EditLinkToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, providerFactory = _a.providerFactory, url = _a.url, text = _a.text, onSubmit = _a.onSubmit;
        return (React.createElement(HyperlinkAddToolbar_1.default, { providerFactory: providerFactory, displayUrl: url, displayText: text, onSubmit: function (href, text) {
                _this.hideLinkToolbar();
                if (onSubmit) {
                    onSubmit(href, text);
                }
            } }));
    };
    return EditLinkToolbar;
}(React.Component));
exports.EditLinkToolbar = EditLinkToolbar;
exports.editLink = function (state, dispatch) {
    if (dispatch) {
        dispatch(actions_1.showLinkToolbar(state.tr));
        return true;
    }
    return false;
};
exports.buildEditLinkToolbar = function (_a) {
    var providerFactory = _a.providerFactory, node = _a.node;
    return {
        type: 'custom',
        render: function (view, idx) {
            if (!view || !providerFactory) {
                return null;
            }
            var displayInfo = utils_1.displayInfoForCard(node, utils_1.findCardInfo(view.state));
            return (React.createElement(EditLinkToolbar, { key: idx, view: view, providerFactory: providerFactory, url: displayInfo.url, text: displayInfo.title || '', node: node, onSubmit: function (newHref, newText) {
                    if (newText !== displayInfo.title || newHref !== displayInfo.url) {
                        // we don't support changing link text or href on a smart link,
                        // downgrade to hyperlink
                        return doc_1.changeSelectedCardToLink(newText, newHref)(view.state, view.dispatch);
                    }
                    return;
                } }));
        },
    };
};
exports.editLinkToolbarConfig = {
    height: ToolbarComponents_1.RECENT_SEARCH_HEIGHT_IN_PX,
    width: ToolbarComponents_1.RECENT_SEARCH_WIDTH_IN_PX,
    forcePlacement: true,
};
//# sourceMappingURL=EditLinkToolbar.js.map