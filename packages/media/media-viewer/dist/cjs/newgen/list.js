"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var item_viewer_1 = require("./item-viewer");
var styled_1 = require("./styled");
var navigation_1 = require("./navigation");
var header_1 = tslib_1.__importDefault(require("./header"));
var List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItem: _this.props.defaultSelectedItem,
            previewCount: 0,
        };
        _this.onNavigationChange = function (selectedItem) {
            var _a = _this.props, onNavigationChange = _a.onNavigationChange, showControls = _a.showControls;
            if (onNavigationChange) {
                onNavigationChange(selectedItem);
            }
            if (showControls) {
                showControls();
            }
            _this.setState({ selectedItem: selectedItem, previewCount: _this.state.previewCount + 1 });
        };
        return _this;
    }
    List.prototype.render = function () {
        var items = this.props.items;
        return this.renderContent(items);
    };
    List.prototype.renderContent = function (items) {
        var _a = this.props, mediaClient = _a.mediaClient, onClose = _a.onClose, showControls = _a.showControls;
        var selectedItem = this.state.selectedItem;
        return (React.createElement(styled_1.ListWrapper, null,
            React.createElement(styled_1.HeaderWrapper, { className: media_ui_1.hideControlsClassName },
                React.createElement(header_1.default, { mediaClient: mediaClient, identifier: selectedItem, onClose: onClose })),
            React.createElement(item_viewer_1.ItemViewer, { mediaClient: mediaClient, identifier: selectedItem, showControls: showControls, onClose: onClose, previewCount: this.state.previewCount }),
            React.createElement(navigation_1.Navigation, { items: items, selectedItem: selectedItem, onChange: this.onNavigationChange })));
    };
    return List;
}(React.Component));
exports.List = List;
//# sourceMappingURL=list.js.map