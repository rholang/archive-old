import { GasPayload } from '@atlaskit/analytics-gas-types';
import { PackageAttributes } from './index';
export declare type ClosedInputType = 'button' | 'blanket' | 'escKey';
export interface CloseGasPayload extends GasPayload {
    attributes: PackageAttributes & {
        input: ClosedInputType;
        sessionDurationMs: number;
    };
}
export declare function closedEvent(input: ClosedInputType): CloseGasPayload;
