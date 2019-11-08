"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANGUAGE_MAP = {
    actionscript: 'actionscript3',
    applescript: 'applescript',
    'c++': 'cpp',
    coldfusion: 'coldfusion',
    csharp: 'c#',
    css: 'css',
    delphi: 'delphi',
    diff: 'diff',
    erlang: 'erl',
    groovy: 'groovy',
    java: 'java',
    javafx: 'javafx',
    javascript: 'js',
    perl: 'perl',
    php: 'php',
    plaintext: 'text',
    powershell: 'powershell',
    python: 'py',
    ruby: 'ruby',
    sass: 'sass',
    scala: 'scala',
    shell: 'bash',
    sql: 'sql',
    visualbasic: 'vb',
    xml: 'xml',
};
exports.supportedLanguages = Object.keys(exports.LANGUAGE_MAP).map(function (name) { return exports.LANGUAGE_MAP[name]; });
function mapCodeLanguage(language) {
    return exports.LANGUAGE_MAP[language] || language.toLowerCase();
}
exports.mapCodeLanguage = mapCodeLanguage;
//# sourceMappingURL=languageMap.js.map