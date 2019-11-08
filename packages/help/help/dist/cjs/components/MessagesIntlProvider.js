"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var i18n_util_1 = require("../util/i18n-util");
var MessagesIntlProvider = /** @class */ (function (_super) {
    tslib_1.__extends(MessagesIntlProvider, _super);
    function MessagesIntlProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessagesIntlProvider.prototype.render = function () {
        var _a = this.props, intl = _a.intl, children = _a.children;
        return (React.createElement(react_intl_1.IntlProvider, { messages: i18n_util_1.getMessagesForLocale(intl.locale) }, children));
    };
    return MessagesIntlProvider;
}(React.Component));
exports.default = react_intl_1.injectIntl(MessagesIntlProvider);
//# sourceMappingURL=MessagesIntlProvider.js.map