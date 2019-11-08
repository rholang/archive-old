"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var dropdown_menu_1 = tslib_1.__importStar(require("@atlaskit/dropdown-menu"));
var refresh_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/refresh"));
var settings_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/settings"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var startAuth_1 = require("../../actions/startAuth");
var unlinkCloudAccount_1 = require("../../actions/unlinkCloudAccount");
var changeCloudAccountFolder_1 = require("../../actions/changeCloudAccountFolder");
var changeAccount_1 = require("../../actions/changeAccount");
var styled_1 = require("./styled");
var SERVICENAME = {
    dropbox: 'Dropbox',
    google: 'Google Drive',
};
var Navigation = /** @class */ (function (_super) {
    tslib_1.__extends(Navigation, _super);
    function Navigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownOpen: false,
            availableAccounts: [],
        };
        _this.mounted = false;
        _this.onRefreshButtonClick = function () {
            var _a = _this.props, service = _a.service, path = _a.path, onChangePath = _a.onChangePath;
            onChangePath(service.name, service.accountId, path);
        };
        _this.onChangeAccountHandler = function (type, id) { return function () {
            var onChangeAccount = _this.props.onChangeAccount;
            onChangeAccount(type, id);
        }; };
        _this.onUnlinkAccountHandler = function (name, accountId) { return function () {
            var onUnlinkAccount = _this.props.onUnlinkAccount;
            onUnlinkAccount(name, accountId);
        }; };
        _this.onStartAuthHandler = function (name) { return function () {
            var onStartAuth = _this.props.onStartAuth;
            onStartAuth(name);
        }; };
        _this.handleOpenChange = function (attrs) {
            _this.setState({ dropdownOpen: attrs.isOpen });
        };
        return _this;
    }
    Navigation.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    Navigation.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, accounts, service, availableAccounts;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.mounted = true;
                        _a = this.props, accounts = _a.accounts, service = _a.service;
                        return [4 /*yield*/, accounts];
                    case 1:
                        availableAccounts = (_b.sent()).filter(function (account) { return account.type === service.name; });
                        if (this.mounted) {
                            this.setState({
                                availableAccounts: availableAccounts,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Navigation.prototype.componentDidUpdate = function (prevProps) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, accounts, service, availableAccounts;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, accounts = _a.accounts, service = _a.service;
                        if (!(prevProps.service !== service)) return [3 /*break*/, 2];
                        return [4 /*yield*/, accounts];
                    case 1:
                        availableAccounts = (_b.sent()).filter(function (account) { return account.type === service.name; });
                        if (this.mounted) {
                            this.setState({
                                availableAccounts: availableAccounts,
                            });
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Navigation.prototype.render = function () {
        var _a = this.props, service = _a.service, path = _a.path;
        var breadcrumbs = this.generateBreadcrumbs(service, path);
        var accountsDropdown = this.getAccountsDropdown();
        return (React.createElement(styled_1.FolderViewerNavigation, null,
            breadcrumbs,
            React.createElement(styled_1.ControlsWrapper, null,
                React.createElement(styled_1.Controls, null,
                    React.createElement(styled_1.ControlButton, { onClick: this.onRefreshButtonClick, iconBefore: React.createElement(refresh_1.default, { label: "refresh" }) }),
                    accountsDropdown))));
    };
    Navigation.prototype.getAccountButton = function () {
        var dropdownOpen = this.state.dropdownOpen;
        return (React.createElement(styled_1.AccountItemButton, { isSelected: dropdownOpen, iconBefore: React.createElement(settings_1.default, { label: "account settings" }) }));
    };
    Navigation.prototype.getAccountsDropdownItems = function () {
        var _this = this;
        var _a = this.props, service = _a.service, formatMessage = _a.intl.formatMessage;
        var availableAccounts = this.state.availableAccounts;
        var dropdownAccountItems = availableAccounts.map(function (_a) {
            var id = _a.id, displayName = _a.displayName, type = _a.type;
            return (React.createElement(dropdown_menu_1.DropdownItem, { key: id, onClick: _this.onChangeAccountHandler(type, id) }, id === service.accountId ? React.createElement("b", null, displayName) : displayName));
        });
        var dropdownActionItems = [
            React.createElement(dropdown_menu_1.DropdownItem, { key: "add", onClick: this.onStartAuthHandler(service.name) },
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.add_account))),
            React.createElement(dropdown_menu_1.DropdownItem, { key: "unlink", onClick: this.onUnlinkAccountHandler(service.name, service.accountId) },
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.unlink_account))),
        ];
        return [
            React.createElement(dropdown_menu_1.DropdownItemGroup, { key: "accounts", title: formatMessage(media_ui_1.messages.accounts) }, dropdownAccountItems),
            React.createElement(dropdown_menu_1.DropdownItemGroup, { key: "actions", title: formatMessage(media_ui_1.messages.actions) }, dropdownActionItems),
        ];
    };
    Navigation.prototype.getAccountsDropdown = function () {
        var items = this.getAccountsDropdownItems();
        return (React.createElement(styled_1.AccountDropdownWrapper, null,
            React.createElement(dropdown_menu_1.default, { onOpenChange: this.handleOpenChange, trigger: this.getAccountButton(), position: "bottom right" }, items)));
    };
    Navigation.prototype.generateBreadcrumbs = function (service, path) {
        var _this = this;
        var serviceName = SERVICENAME[service.name] || service.name;
        var fullPath = [{ id: '', name: serviceName }].concat(path);
        var breadcrumbs = fullPath
            .slice(-2)
            .map(function (folderReference) {
            var index = fullPath.indexOf(folderReference);
            return fullPath.slice(0, index + 1);
        })
            .map(function (path, index, allPaths) {
            var isLast = index === allPaths.length - 1;
            return _this.renderBreadcrumb(service, path, isLast);
        });
        return React.createElement(styled_1.BreadCrumbs, null, breadcrumbs);
    };
    Navigation.prototype.renderBreadcrumb = function (service, path, isLast) {
        var onChangePath = this.props.onChangePath;
        if (path.length === 0) {
            return null;
        }
        var folder = path[path.length - 1];
        var onClick = function () {
            return onChangePath(service.name, service.accountId, path.slice(1));
        };
        return (React.createElement(styled_1.BreadCrumbLink, { key: folder.id, onClick: onClick, isLast: isLast },
            React.createElement(styled_1.BreadCrumbLinkLabel, { title: folder.name, isLast: isLast }, folder.name),
            React.createElement(styled_1.BreadCrumbLinkSeparator, { isLast: isLast }, "/")));
    };
    return Navigation;
}(react_1.Component));
exports.Navigation = Navigation;
exports.default = react_redux_1.connect(function (_a) {
    var accounts = _a.accounts, view = _a.view;
    return ({
        accounts: accounts,
        path: view.path,
        service: view.service,
    });
}, function (dispatch) { return ({
    onChangeAccount: function (serviceName, accountId) {
        return dispatch(changeAccount_1.changeAccount(serviceName, accountId));
    },
    onChangePath: function (serviceName, accountId, path) {
        return dispatch(changeCloudAccountFolder_1.changeCloudAccountFolder(serviceName, accountId, tslib_1.__spread(path)));
    },
    onStartAuth: function (serviceName) { return dispatch(startAuth_1.startAuth(serviceName)); },
    onUnlinkAccount: function (serviceName, accountId) {
        return dispatch(unlinkCloudAccount_1.requestUnlinkCloudAccount({
            id: accountId,
            name: serviceName,
        }));
    },
}); })(react_intl_1.injectIntl(Navigation));
//# sourceMappingURL=navigation.js.map