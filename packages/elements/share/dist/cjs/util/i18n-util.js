"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../i18n/index");
var localesMessagesMap = {
    cs: index_1.cs,
    da: index_1.da,
    de: index_1.de,
    en: index_1.en,
    en_GB: index_1.en_GB,
    es: index_1.es,
    et: index_1.et,
    fi: index_1.fi,
    fr: index_1.fr,
    hu: index_1.hu,
    is: index_1.is,
    it: index_1.it,
    ja: index_1.ja,
    ko: index_1.ko,
    nb: index_1.nb,
    nl: index_1.nl,
    pl: index_1.pl,
    pt_BR: index_1.pt_BR,
    'pt-BR': index_1.pt_BR,
    pt_PT: index_1.pt_PT,
    'pt-PT': index_1.pt_PT,
    ro: index_1.ro,
    ru: index_1.ru,
    sk: index_1.sk,
    sv: index_1.sv,
    zh: index_1.zh,
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
        messages = index_1.en;
    }
    return messages;
};
//# sourceMappingURL=i18n-util.js.map