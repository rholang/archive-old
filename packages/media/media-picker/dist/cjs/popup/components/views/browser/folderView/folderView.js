"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var dateformat_1 = tslib_1.__importDefault(require("dateformat")); // ToDo: FIL-3207 | replace dateformat library with native solution
var filesize_1 = tslib_1.__importDefault(require("filesize")); // ToDo: FIL-3208 | replace filesize library with native solution
var check_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check-circle"));
var changeCloudAccountFolder_1 = require("../../../../actions/changeCloudAccountFolder");
var fetchNextCloudFilesPage_1 = require("../../../../actions/fetchNextCloudFilesPage");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
/* Actions */
var fileClick_1 = require("../../../../actions/fileClick");
var domain_1 = require("../../../../domain");
/* Components */
var navigation_1 = tslib_1.__importDefault(require("../../../navigation/navigation"));
var styled_1 = require("./styled");
var mimeTypeToIcon_1 = require("../../../../tools/mimeTypeToIcon");
var getDateString = function (timestamp) {
    if (!timestamp) {
        return '';
    }
    var todayString = new Date().toDateString();
    var itemDate = new Date(timestamp);
    var itemDateString = itemDate.toDateString();
    return dateformat_1.default(itemDate, todayString === itemDateString ? 'H:MM TT' : 'd mmm yyyy');
};
var selectedTick = (React.createElement(styled_1.SelectedFileIconWrapper, null,
    React.createElement(check_circle_1.default, { label: "check" })));
/**
 * Routing class that displays view depending on situation.
 */
var FolderViewer = /** @class */ (function (_super) {
    tslib_1.__extends(FolderViewer, _super);
    function FolderViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContents = function () {
            if (_this.isPageInitialLoading) {
                return (React.createElement(styled_1.SpinnerWrapper, null,
                    React.createElement(spinner_1.default, { size: "large" })));
            }
            return _this.renderFolderContent(_this.props.items);
        };
        _this.renderServiceFolder = function (item, itemIcon) {
            return (React.createElement(styled_1.FolderViewerRow, { onClick: _this.itemClicked(item), key: item.id },
                React.createElement(styled_1.FileMetadataGroup, null,
                    React.createElement(styled_1.FileIcon, null, itemIcon),
                    React.createElement(styled_1.FileName, null, item.name))));
        };
        _this.renderServiceFile = function (serviceFile, itemIcon, isSelected) {
            var tail = isSelected
                ? selectedTick
                : _this.renderFileCreateDateAndSize(serviceFile);
            return (React.createElement(styled_1.FolderViewerRow, { isSelected: isSelected, onClick: _this.itemClicked(serviceFile), key: serviceFile.id },
                React.createElement(styled_1.FileMetadataGroup, null,
                    React.createElement(styled_1.FileIcon, null, itemIcon),
                    React.createElement(styled_1.FileName, { isSelected: isSelected }, serviceFile.name)),
                tail));
        };
        _this.renderFileCreateDateAndSize = function (_a) {
            var date = _a.date, size = _a.size;
            return (React.createElement(styled_1.FileMetadataGroup, null,
                React.createElement(styled_1.FileCreateDate, null, getDateString(date)),
                React.createElement(styled_1.FileSize, null, filesize_1.default(size))));
        };
        _this.onLoadMoreButtonClick = function () {
            var _a = _this.props, service = _a.service, path = _a.path, nextCursor = _a.nextCursor, isLoading = _a.isLoading, onLoadMoreClick = _a.onLoadMoreClick;
            if (!isLoading) {
                onLoadMoreClick(service.name, service.accountId, path, nextCursor || '');
            }
        };
        return _this;
    }
    FolderViewer.prototype.render = function () {
        return (React.createElement(styled_1.FolderViewerWrapper, null,
            React.createElement(navigation_1.default, null),
            this.renderContents()));
    };
    Object.defineProperty(FolderViewer.prototype, "isPageInitialLoading", {
        get: function () {
            return this.props.isLoading && !this.props.currentCursor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderViewer.prototype, "isPageMoreLoading", {
        get: function () {
            return this.props.isLoading && this.props.currentCursor;
        },
        enumerable: true,
        configurable: true
    });
    FolderViewer.prototype.renderFolderContent = function (items) {
        var _this = this;
        if (!items) {
            return null;
        }
        var folderItems = items
            .filter(function (item) { return item.mimeType.indexOf('application/vnd.google-apps.') === -1; })
            .map(function (item) {
            var itemIcon = mimeTypeToIcon_1.mapMimeTypeToIcon(item.mimeType);
            var availableIds = _this.props.selectedItems.map(function (selectedItem) { return selectedItem.id; });
            var isSelected = availableIds.indexOf(item.id) > -1;
            if (domain_1.isServiceFile(item)) {
                return _this.renderServiceFile(item, itemIcon, isSelected);
            }
            else {
                return _this.renderServiceFolder(item, itemIcon);
            }
        });
        return (React.createElement(styled_1.FolderViewerContent, null, [folderItems, this.renderLoadMoreButton()]));
    };
    FolderViewer.prototype.renderLoadMoreButton = function () {
        var _a = this.props, nextCursor = _a.nextCursor, isLoading = _a.isLoading;
        if (nextCursor || this.isPageMoreLoading) {
            var label = isLoading ? 'Loading...' : 'Load more';
            return (
            // Key is required as this component is used in array
            React.createElement(styled_1.MoreBtnWrapper, { key: "load-more-button-wrapper" },
                React.createElement(button_1.default, { className: "moreBtn", onClick: this.onLoadMoreButtonClick, isDisabled: isLoading }, label)));
        }
        else {
            return null;
        }
    };
    FolderViewer.prototype.itemClicked = function (item) {
        var _this = this;
        return function () {
            var _a = _this.props, service = _a.service, onFolderClick = _a.onFolderClick, onFileClick = _a.onFileClick;
            if (domain_1.isServiceFolder(item)) {
                var path = _this.props.path.slice();
                path.push({ id: item.id, name: item.name });
                onFolderClick(service.name, service.accountId, path);
            }
            else {
                var file = tslib_1.__assign({}, item);
                onFileClick(service.name, service.accountId, file);
            }
        };
    };
    return FolderViewer;
}(react_1.Component));
exports.FolderViewer = FolderViewer;
exports.default = react_redux_1.connect(function (_a) {
    var view = _a.view, selectedItems = _a.selectedItems;
    return ({
        path: view.path,
        service: view.service,
        items: view.items,
        selectedItems: selectedItems,
        isLoading: view.isLoading,
        currentCursor: view.currentCursor,
        nextCursor: view.nextCursor,
    });
}, function (dispatch) { return ({
    onFolderClick: function (serviceName, accountId, path) {
        return dispatch(changeCloudAccountFolder_1.changeCloudAccountFolder(serviceName, accountId, path));
    },
    onFileClick: function (serviceName, accountId, file) {
        return dispatch(fileClick_1.fileClick(file, serviceName, accountId));
    },
    onLoadMoreClick: function (serviceName, accountId, path, nextCursor) {
        return dispatch(fetchNextCloudFilesPage_1.fetchNextCloudFilesPage(serviceName, accountId, path, nextCursor));
    },
}); })(FolderViewer);
//# sourceMappingURL=folderView.js.map