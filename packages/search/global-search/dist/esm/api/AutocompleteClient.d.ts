export interface AutocompleteClient {
    getAutocompleteSuggestions(query: string): Promise<string[]>;
}
export declare class AutocompleteClientImpl implements AutocompleteClient {
    private serviceConfig;
    private cloudId;
    constructor(url: string, cloudId: string);
    private createAutocompleteRequestPromise;
    getAutocompleteSuggestions(query: string): Promise<string[]>;
}
