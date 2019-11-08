import { AnalyticsHandler } from '../../utils/types';
import { CardAppearance } from '../../view/Card';
export declare function useSmartCardActions(url: string, dispatchAnalytics: AnalyticsHandler): {
    register: () => Promise<void>;
    reload: (showLoadingSpinner?: boolean) => void;
    authorize: (appearance: CardAppearance) => void;
};
