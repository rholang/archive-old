export declare type Language = {
    name: string;
    alias: string[];
};
export declare const DEFAULT_LANGUAGES: Language[];
export declare function findMatchedLanguage(supportedLanguages: Language[], language?: string): Language | undefined;
export declare function filterSupportedLanguages(supportedLanguages: Array<string>): Language[];
export declare function getLanguageIdentifier(language: Language): string;
export declare function createLanguageList(supportedLanguages: Language[]): Language[];
