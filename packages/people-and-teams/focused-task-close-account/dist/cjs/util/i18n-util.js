"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = require("../i18n");
var localesMessagesMap = {
    cs: i18n_1.cs,
    da: i18n_1.da,
    de: i18n_1.de,
    en: i18n_1.en,
    en_GB: i18n_1.en_GB,
    es: i18n_1.es,
    et: i18n_1.et,
    fi: i18n_1.fi,
    fr: i18n_1.fr,
    hu: i18n_1.hu,
    is: i18n_1.is,
    it: i18n_1.it,
    ja: i18n_1.ja,
    ko: i18n_1.ko,
    nb: i18n_1.nb,
    nl: i18n_1.nl,
    pl: i18n_1.pl,
    pt_BR: i18n_1.pt_BR,
    'pt-BR': i18n_1.pt_BR,
    pt_PT: i18n_1.pt_PT,
    'pt-PT': i18n_1.pt_PT,
    ro: i18n_1.ro,
    ru: i18n_1.ru,
    sk: i18n_1.sk,
    sv: i18n_1.sv,
    zh: i18n_1.zh,
};
/**
 * Tries to get the most specific messages bundle for a given locale.
 *
 * Strategy:
 * 1. Try to find messages with the exact string (i.e. 'fr_FR')
 * 2. If that doesn't work, try to find messages for the country locale (i.e. 'fr')
 * 3. If that doesn't work, return english messages as a fallback.
 *
 * @param locale string specifying the locale like 'en_GB', or 'fr'.
 */
exports.getMessagesForLocale = function (locale) {
    var messages = localesMessagesMap[locale];
    if (!messages) {
        var parentLocale = locale.split(/[-_]/)[0];
        messages = localesMessagesMap[parentLocale];
    }
    if (!messages) {
        messages = i18n_1.en;
    }
    return messages;
};
//# sourceMappingURL=i18n-util.js.map