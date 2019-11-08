"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_redux_1 = require("react-redux");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var startFileBrowser_1 = require("../../../actions/startFileBrowser");
var LocalBrowserButton = /** @class */ (function (_super) {
    tslib_1.__extends(LocalBrowserButton, _super);
    function LocalBrowserButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUploadClick = function () {
            var _a = _this.props, browserRef = _a.browserRef, onClick = _a.onClick;
            onClick();
            if (browserRef && browserRef.current) {
                browserRef.current.browse();
            }
        };
        return _this;
    }
    LocalBrowserButton.prototype.render = function () {
        return (React.createElement(button_1.default, { className: "e2e-upload-button", appearance: "default", onClick: this.onUploadClick },
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.upload_file))));
    };
    return LocalBrowserButton;
}(React.Component));
exports.LocalBrowserButton = LocalBrowserButton;
var mapDispatchToProps = function (dispatch) { return ({
    onClick: function () { return dispatch(startFileBrowser_1.startFileBrowser()); },
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(LocalBrowserButton);
//# sourceMappingURL=uploadButton.js.map