import { __extends } from "tslib";
import * as React from 'react';
import { hideControlsClassName, } from '@atlaskit/media-ui';
import { ItemViewer } from './item-viewer';
import { HeaderWrapper, ListWrapper } from './styled';
import { Navigation } from './navigation';
import Header from './header';
var List = /** @class */ (function (_super) {
    __extends(List, _super);
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
        return (React.createElement(ListWrapper, null,
            React.createElement(HeaderWrapper, { className: hideControlsClassName },
                React.createElement(Header, { mediaClient: mediaClient, identifier: selectedItem, onClose: onClose })),
            React.createElement(ItemViewer, { mediaClient: mediaClient, identifier: selectedItem, showControls: showControls, onClose: onClose, previewCount: this.state.previewCount }),
            React.createElement(Navigation, { items: items, selectedItem: selectedItem, onChange: this.onNavigationChange })));
    };
    return List;
}(React.Component));
export { List };
//# sourceMappingURL=list.js.map