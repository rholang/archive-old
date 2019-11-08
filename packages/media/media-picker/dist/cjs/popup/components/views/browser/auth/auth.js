"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var dropbox_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/dropbox"));
var googledrive_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/googledrive"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var startAuth_1 = require("../../../../actions/startAuth");
var styled_1 = require("./styled");
var serviceDetails = {
    dropbox: {
        name: 'Dropbox',
        icon: React.createElement(dropbox_1.default, { label: "dropbox", size: "xlarge" }),
    },
    google: {
        name: 'Google Drive',
        icon: React.createElement(googledrive_1.default, { label: "drive", size: "xlarge" }),
    },
};
/**
 * Routing class that displays view depending on situation.
 */
var StatelessAuth = /** @class */ (function (_super) {
    tslib_1.__extends(StatelessAuth, _super);
    function StatelessAuth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return _this.props.onStartAuth(_this.props.service.name); };
        return _this;
    }
    StatelessAuth.prototype.render = function () {
        var service = this.props.service;
        var details = serviceDetails[service.name];
        if (!details) {
            return null;
        }
        var name = details.name, icon = details.icon;
        return (React.createElement(styled_1.ConnectWrapper, null,
            React.createElement(styled_1.Title, null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.upload_file_from, { values: { name: name } }))),
            React.createElement(styled_1.IconWrapper, null, icon),
            React.createElement(styled_1.ButtonWrapper, null,
                React.createElement(button_1.default, { appearance: "primary", className: "connectBtn", onClick: this.onClick },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.connect_to, { values: { name: name } })))),
            React.createElement(styled_1.TextDescription, null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.connect_account_description, { values: { name: name } })))));
    };
    return StatelessAuth;
}(react_1.Component));
exports.StatelessAuth = StatelessAuth;
exports.default = react_redux_1.connect(function (state) { return ({
    service: state.view.service,
}); }, function (dispatch) { return ({
    onStartAuth: function (serviceName) { return dispatch(startAuth_1.startAuth(serviceName)); },
}); })(StatelessAuth);
//# sourceMappingURL=auth.js.map