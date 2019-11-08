import { UpgradeEvent, DependencyType } from '../types';
export declare function createUpgradeEvent(name: string, version: string | undefined, previousVersion: string | undefined, date: string, optionalArgs?: {
    commitHash?: string;
    dependencyType?: DependencyType;
    historical?: boolean;
}): UpgradeEvent | null;
export declare function sendAnalytics(analyticsEvents: UpgradeEvent[], { dev, limit, product, skipPrompt, }: {
    dev: boolean;
    limit?: number;
    product: string;
    skipPrompt?: boolean;
}): Promise<void>;
