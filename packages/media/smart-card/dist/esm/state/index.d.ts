import { AnalyticsHandler } from '../utils/types';
export declare function useSmartLink(url: string, dispatchAnalytics: AnalyticsHandler): {
    state: import("./types").CardState;
    actions: {
        register: () => Promise<void>;
        reload: (showLoadingSpinner?: boolean) => void;
        authorize: (appearance: import("..").CardAppearance) => void;
    };
};
export * from './context';
