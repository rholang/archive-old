export declare const autoformattingProvider: {
    getRules: () => Promise<{
        '[Ee][Dd]-(\\d+)': (match: string[]) => Promise<unknown>;
    }>;
};
