import { FileDetails, MediaType, FileProcessingStatus } from '@atlaskit/media-client';
import { GasCorePayload } from '@atlaskit/analytics-gas-types';
import { CreateUIAnalyticsEvent, UIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface MediaCardAnalyticsFileAttributes {
    fileSource: string;
    fileMediatype?: MediaType;
    fileId?: string;
    fileStatus?: FileProcessingStatus;
    fileSize?: number;
}
export declare type MediaCardAnalyticsPayloadBase = Partial<GasCorePayload> & {
    action?: string;
    attributes?: GasCorePayload['attributes'] & {
        fileAttributes?: MediaCardAnalyticsFileAttributes;
    };
};
export declare type MediaCardAnalyticsPayload = MediaCardAnalyticsPayloadBase & {
    attributes: MediaCardAnalyticsPayloadBase['attributes'] & {
        packageName: string;
    };
};
export declare function getBaseAnalyticsContext(): GasCorePayload['attributes'];
export declare const getFileAttributes: (metadata?: FileDetails | undefined) => MediaCardAnalyticsFileAttributes;
export declare function getUIAnalyticsContext(actionSubjectId: string, metadata?: FileDetails): MediaCardAnalyticsPayload;
export declare function createAndFireCustomMediaEvent(basePayload: MediaCardAnalyticsPayloadBase, createAnalyticsEvent?: CreateUIAnalyticsEvent): void;
declare type CreateAndFireMediaEvent = (basePayload: MediaCardAnalyticsPayloadBase) => (createAnalyticsEvent: CreateUIAnalyticsEvent) => UIAnalyticsEvent;
export declare const createAndFireMediaEvent: CreateAndFireMediaEvent;
export {};
