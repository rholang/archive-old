"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_client_1 = require("@atlaskit/media-client");
var media_viewer_1 = require("../newgen/media-viewer");
var getIdentifierCollection_1 = require("../newgen/utils/getIdentifierCollection");
var utils_1 = require("../newgen/utils");
var MediaViewer = /** @class */ (function (_super) {
    tslib_1.__extends(MediaViewer, _super);
    function MediaViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // returns a valid MV data source including current the card identifier
        _this.getDataSourceWithSelectedItem = function (dataSource, selectedItem) {
            // we want to ensure the card identifier is in the list
            var list = dataSource.list;
            if (list) {
                var selectedItemIndex = utils_1.getSelectedIndex(list, selectedItem);
                if (selectedItemIndex === -1) {
                    return {
                        list: tslib_1.__spread([selectedItem], list),
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
            var items = dataSourceWithSelectedItem.list.map(function (identifier) { return (tslib_1.__assign(tslib_1.__assign({}, identifier), { collectionName: getIdentifierCollection_1.getIdentifierCollection(identifier, collectionName) })); });
            var itemSource = {
                kind: 'ARRAY',
                items: items,
            };
            var identifier = tslib_1.__assign(tslib_1.__assign({}, selectedItem), { collectionName: collectionName });
            return (React.createElement(media_viewer_1.MediaViewer, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else if (dataSourceWithSelectedItem.collectionName) {
            if (media_client_1.isExternalImageIdentifier(selectedItem)) {
                // if integrators pass an external image + collection, we remove the collection and just show the selectedItem
                return (React.createElement(media_viewer_1.MediaViewer, { mediaClient: mediaClient, selectedItem: selectedItem, onClose: onClose, itemSource: { kind: 'ARRAY', items: [selectedItem] }, featureFlags: featureFlags }));
            }
            var itemSource = {
                kind: 'COLLECTION',
                collectionName: dataSourceWithSelectedItem.collectionName,
                pageSize: pageSize || defaultPageSize,
            };
            var identifier = tslib_1.__assign(tslib_1.__assign({}, selectedItem), { collectionName: dataSourceWithSelectedItem.collectionName });
            return (React.createElement(media_viewer_1.MediaViewer, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else {
            throw new Error();
        }
    };
    return MediaViewer;
}(react_1.Component));
exports.MediaViewer = MediaViewer;
//# sourceMappingURL=media-viewer.js.map