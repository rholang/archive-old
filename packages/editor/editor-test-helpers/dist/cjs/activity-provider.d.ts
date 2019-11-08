import { ActivityItem, ActivityResource } from '@atlaskit/activity';
export declare class MockActivityResource extends ActivityResource {
    private items;
    constructor(items: Array<ActivityItem>);
    getRecentItems(): Promise<ActivityItem[]>;
}
export declare function activityProviderFactory(items: Array<ActivityItem>): Promise<MockActivityResource>;
