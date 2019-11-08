import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import Select from '@atlaskit/select';
export var defaultLocales = [
    { value: 'en-AU', label: 'English (Australia)' },
    { value: 'en-GB', label: 'English (United Kingdom)' },
    { value: 'en-US', label: 'English (United States)' },
    { value: 'ko-KR', label: '한국어 (대한민국)' },
    { value: 'nl-NL', label: 'Nederlands (Nederland)' },
    { value: 'ru-RU', label: 'русский (Россия)' },
    { value: 'hu-HU', label: 'magyar (Magyarország)' },
    { value: 'pt-BR', label: 'português (Brasil)' },
    { value: 'de-DE', label: 'Deutsch (Deutschland)' },
    { value: 'is-IS', label: 'íslenska (Ísland)' },
    { value: 'cs-CZ', label: 'čeština (Česká republika)' },
    { value: 'da-DK', label: 'Dansk (Danmark)' },
    { value: 'et-EE', label: 'Eesti (Eesti)' },
    { value: 'pl-PL', label: 'polski (Polska)' },
    { value: 'sk-SK', label: 'Slovenčina (Slovenská republika)' },
    { value: 'it-IT', label: 'italiano (Italia)' },
    { value: 'pt-PT', label: 'português (Portugal)' },
    { value: 'vi-VN', label: 'Tiếng Việt (Việt Nam)' },
    { value: 'zh-CN', label: '中文 (中国)' },
    { value: 'es-ES', label: 'español (España)' },
    { value: 'sv-SE', label: 'svenska (Sverige)' },
    { value: 'ja-JP', label: '日本語 (日本)' },
    { value: 'fi-FI', label: 'suomi (Suomi)' },
    { value: 'fr-FR', label: 'français (France)' },
    { value: 'ro-RO', label: 'română (România)' },
    { value: 'no-NO', label: 'norsk (Norge)' },
];
var LocaleSelect = /** @class */ (function (_super) {
    __extends(LocaleSelect, _super);
    function LocaleSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocaleSelect.prototype.render = function () {
        var _a = this.props, locales = _a.locales, defaultLocale = _a.defaultLocale, onLocaleChange = _a.onLocaleChange;
        return (React.createElement(Select, { options: locales, defaultValue: defaultLocale, onChange: onLocaleChange, styles: {
                container: function (css) { return (__assign(__assign({}, css), { width: 300, margin: '0.5em 0' })); },
                dropdownIndicator: function (css) { return (__assign(__assign({}, css), { paddingLeft: 0 })); },
                menu: function (css) { return (__assign(__assign({}, css), { width: 300 })); },
            } }));
    };
    LocaleSelect.defaultProps = {
        locales: defaultLocales,
        defaultLocale: defaultLocales[0],
        onLocaleChange: function () { },
    };
    return LocaleSelect;
}(Component));
export default LocaleSelect;
//# sourceMappingURL=LocaleSelect.js.map