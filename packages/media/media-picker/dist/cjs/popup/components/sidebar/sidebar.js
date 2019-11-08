"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var upload_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/upload"));
var dropbox_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/dropbox"));
var googledrive_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/googledrive"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var sidebarItem_1 = tslib_1.__importDefault(require("./item/sidebarItem"));
var giphySidebarItem_1 = tslib_1.__importDefault(require("./item/giphySidebarItem"));
var styled_1 = require("./styled");
var StatelessSidebar = /** @class */ (function (_super) {
    tslib_1.__extends(StatelessSidebar, _super);
    function StatelessSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCloudPickingSidebarItems = function () {
            var selected = _this.props.selected;
            return [
                React.createElement(styled_1.Separator, { key: "seperator" },
                    React.createElement(styled_1.SeparatorLine, null)),
                React.createElement(giphySidebarItem_1.default, { key: "giphy", isActive: selected === 'giphy' }),
                React.createElement(sidebarItem_1.default, { key: "dropbox", serviceName: "dropbox", serviceFullName: "Dropbox", isActive: selected === 'dropbox' },
                    React.createElement(dropbox_1.default, { label: "dropbox" })),
                React.createElement(sidebarItem_1.default, { key: "google", serviceName: "google", serviceFullName: "Google Drive", isActive: selected === 'google' },
                    React.createElement(googledrive_1.default, { label: "google" })),
            ];
        };
        return _this;
    }
    StatelessSidebar.prototype.render = function () {
        var selected = this.props.selected;
        return (React.createElement(styled_1.Wrapper, null,
            React.createElement(styled_1.ServiceList, null,
                React.createElement(sidebarItem_1.default, { serviceName: "upload", serviceFullName: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.upload)), isActive: selected === 'upload' },
                    React.createElement(upload_1.default, { label: "upload" })),
                this.getCloudPickingSidebarItems())));
    };
    return StatelessSidebar;
}(react_1.Component));
exports.StatelessSidebar = StatelessSidebar;
exports.default = react_redux_1.connect(function (state) { return ({
    selected: state.view.service.name,
}); })(StatelessSidebar);
//# sourceMappingURL=sidebar.js.map