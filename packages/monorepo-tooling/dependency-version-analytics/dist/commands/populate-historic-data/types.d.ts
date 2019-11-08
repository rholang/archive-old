import { DependencyType } from '../../types';
export declare type PopulateHistoricDataFlags = {
    dev: boolean;
    dryRun: boolean;
    limit?: number;
    interactive: boolean;
};
export declare type DependencyMap = {
    [name: string]: {
        version: string;
        type: DependencyType;
    };
};
export declare type AkPackageChange = {
    akDeps: DependencyMap;
    date: string;
};
