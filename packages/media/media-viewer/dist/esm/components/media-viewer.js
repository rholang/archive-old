import { __assign, __extends, __read, __spread } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { isExternalImageIdentifier } from '@atlaskit/media-client';
import { MediaViewer as MediaViewerNextGen } from '../newgen/media-viewer';
import { getIdentifierCollection } from '../newgen/utils/getIdentifierCollection';
import { getSelectedIndex } from '../newgen/utils';
var MediaViewer = /** @class */ (function (_super) {
    __extends(MediaViewer, _super);
    function MediaViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // returns a valid MV data source including current the card identifier
        _this.getDataSourceWithSelectedItem = function (dataSource, selectedItem) {
            // we want to ensure the card identifier is in the list
            var list = dataSource.list;
            if (list) {
                var selectedItemIndex = getSelectedIndex(list, selectedItem);
                if (selectedItemIndex === -1) {
                    return {
                        list: __spread([selectedItem], list),
                    };
                }
            }
            return dataSource;
        };
        return _this;
    }
    MediaViewer.prototype.render = function () {
        var _a = this.props, featureFlags = _a.featureFlags, onClose = _a.onClose, mediaClient = _a.mediaClient, selectedItem = _a.selectedItem, collectionName = _a.collectionName, dataSource = _a.dataSource, pageSize = _a.pageSize;
        var defaultPageSize = 30;
        var dataSourceWithSelectedItem = this.getDataSourceWithSelectedItem(dataSource, selectedItem);
        if (dataSourceWithSelectedItem.list) {
            var items = dataSourceWithSelectedItem.list.map(function (identifier) { return (__assign(__assign({}, identifier), { collectionName: getIdentifierCollection(identifier, collectionName) })); });
            var itemSource = {
                kind: 'ARRAY',
                items: items,
            };
            var identifier = __assign(__assign({}, selectedItem), { collectionName: collectionName });
            return (React.createElement(MediaViewerNextGen, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else if (dataSourceWithSelectedItem.collectionName) {
            if (isExternalImageIdentifier(selectedItem)) {
                // if integrators pass an external image + collection, we remove the collection and just show the selectedItem
                return (React.createElement(MediaViewerNextGen, { mediaClient: mediaClient, selectedItem: selectedItem, onClose: onClose, itemSource: { kind: 'ARRAY', items: [selectedItem] }, featureFlags: featureFlags }));
            }
            var itemSource = {
                kind: 'COLLECTION',
                collectionName: dataSourceWithSelectedItem.collectionName,
                pageSize: pageSize || defaultPageSize,
            };
            var identifier = __assign(__assign({}, selectedItem), { collectionName: dataSourceWithSelectedItem.collectionName });
            return (React.createElement(MediaViewerNextGen, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else {
            throw new Error();
        }
    };
    return MediaViewer;
}(Component));
export { MediaViewer };
//# sourceMappingURL=media-viewer.js.map