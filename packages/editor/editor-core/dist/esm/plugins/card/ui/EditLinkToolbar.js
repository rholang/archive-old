import { __extends } from "tslib";
import * as React from 'react';
import HyperlinkToolbar from '../../hyperlink/ui/HyperlinkAddToolbar';
import { showLinkToolbar, hideLinkToolbar } from '../pm-plugins/actions';
import { RECENT_SEARCH_HEIGHT_IN_PX, RECENT_SEARCH_WIDTH_IN_PX, } from '../../../ui/RecentSearch/ToolbarComponents';
import { changeSelectedCardToLink } from '../pm-plugins/doc';
import { findCardInfo, displayInfoForCard } from '../utils';
var EditLinkToolbar = /** @class */ (function (_super) {
    __extends(EditLinkToolbar, _super);
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
        view.dispatch(hideLinkToolbar(view.state.tr));
    };
    EditLinkToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, providerFactory = _a.providerFactory, url = _a.url, text = _a.text, onSubmit = _a.onSubmit;
        return (React.createElement(HyperlinkToolbar, { providerFactory: providerFactory, displayUrl: url, displayText: text, onSubmit: function (href, text) {
                _this.hideLinkToolbar();
                if (onSubmit) {
                    onSubmit(href, text);
                }
            } }));
    };
    return EditLinkToolbar;
}(React.Component));
export { EditLinkToolbar };
export var editLink = function (state, dispatch) {
    if (dispatch) {
        dispatch(showLinkToolbar(state.tr));
        return true;
    }
    return false;
};
export var buildEditLinkToolbar = function (_a) {
    var providerFactory = _a.providerFactory, node = _a.node;
    return {
        type: 'custom',
        render: function (view, idx) {
            if (!view || !providerFactory) {
                return null;
            }
            var displayInfo = displayInfoForCard(node, findCardInfo(view.state));
            return (React.createElement(EditLinkToolbar, { key: idx, view: view, providerFactory: providerFactory, url: displayInfo.url, text: displayInfo.title || '', node: node, onSubmit: function (newHref, newText) {
                    if (newText !== displayInfo.title || newHref !== displayInfo.url) {
                        // we don't support changing link text or href on a smart link,
                        // downgrade to hyperlink
                        return changeSelectedCardToLink(newText, newHref)(view.state, view.dispatch);
                    }
                    return;
                } }));
        },
    };
};
export var editLinkToolbarConfig = {
    height: RECENT_SEARCH_HEIGHT_IN_PX,
    width: RECENT_SEARCH_WIDTH_IN_PX,
    forcePlacement: true,
};
//# sourceMappingURL=EditLinkToolbar.js.map