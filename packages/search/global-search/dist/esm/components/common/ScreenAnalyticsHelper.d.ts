import { ScreenCounter } from '../../util/ScreenCounter';
import { ReferralContextIdentifiers } from '../GlobalQuickSearchWrapper';
export declare const PreQueryAnalyticsComponent: ({ screenCounter, searchSessionId, referralContextIdentifiers, }: {
    screenCounter?: ScreenCounter | undefined;
    searchSessionId: string;
    referralContextIdentifiers?: ReferralContextIdentifiers | undefined;
}) => JSX.Element | null;
export declare const PostQueryAnalyticsComponent: ({ screenCounter, searchSessionId, referralContextIdentifiers, }: {
    screenCounter?: ScreenCounter | undefined;
    searchSessionId: string;
    referralContextIdentifiers?: ReferralContextIdentifiers | undefined;
}) => JSX.Element | null;
