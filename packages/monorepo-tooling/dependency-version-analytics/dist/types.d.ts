import { ReleaseType } from 'semver';
export declare type DependencyType = 'devDependency' | 'dependency' | 'optionalDependency' | 'peerDependency';
export declare type UpgradeType = 'add' | 'upgrade' | 'remove' | 'downgrade';
export declare type UpgradeSubType = ReleaseType | null;
export declare type UpgradeEvent = {
    dependencyName: string;
    versionString: string;
    major: string | null;
    minor: string | null;
    patch: string | null;
    date: string;
    upgradeType: UpgradeType;
    upgradeSubType: UpgradeSubType;
    cliVersion: string;
    dependencyType?: DependencyType;
    historical?: boolean;
    commitHash?: string;
};
