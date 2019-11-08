"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var LanguagePicker_1 = tslib_1.__importDefault(require("./LanguagePicker"));
var es = tslib_1.__importStar(require("react-intl/locale-data/es"));
react_intl_1.addLocaleData(es);
// Using it to show only the messages with i18 integrated
var enabledLanguages = {
    en: media_ui_1.languages.en,
    es: media_ui_1.languages.es,
};
var I18NWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(I18NWrapper, _super);
    function I18NWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            locale: 'en',
        };
        _this.onLocaleChange = function (option) {
            _this.setState({
                locale: option.value,
            });
        };
        _this.loadLocale = function (locale) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.setState({ locale: locale });
                return [2 /*return*/];
            });
        }); };
        _this.getLocalTag = function (locale) { return locale.substring(0, 2); };
        return _this;
    }
    I18NWrapper.prototype.render = function () {
        var children = this.props.children;
        var locale = this.state.locale;
        // We need to clone the element and pass a the locale prop to force a re render
        var childrenWithLocale = React.cloneElement(children, { locale: locale });
        return (React.createElement(react_intl_1.IntlProvider, { locale: this.getLocalTag(locale), messages: media_ui_1.locales[locale] },
            React.createElement("div", { style: { paddingTop: '40px' } },
                React.createElement("p", null, "Use the Select to move between \"English\" and \"Spanish\", click in the \"Show Popup\" to check the i18 integration."),
                React.createElement(LanguagePicker_1.default, { languages: enabledLanguages, locale: locale, onChange: this.loadLocale }),
                childrenWithLocale)));
    };
    return I18NWrapper;
}(react_1.Component));
exports.I18NWrapper = I18NWrapper;
//# sourceMappingURL=I18nWrapper.js.map