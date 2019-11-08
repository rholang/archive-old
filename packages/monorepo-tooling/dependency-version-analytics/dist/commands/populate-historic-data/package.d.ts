import { PopulateHistoricDataFlags } from './types';
import { UpgradeEvent } from '../../types';
export declare type PopulatePackageFlags = PopulateHistoricDataFlags & {
    since?: string;
    pkg: string;
};
export default function populatePackage(flags: PopulatePackageFlags): Promise<UpgradeEvent[]>;
