import { PopulateHistoricDataFlags } from './types';
export declare type PopulateProductFlags = PopulateHistoricDataFlags & {
    csv: boolean;
    product: string;
    reset: boolean;
    tag: string;
};
export default function populateProduct(flags: PopulateProductFlags): Promise<void>;
