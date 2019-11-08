export declare const OBJECT_SHARED = "object-shared";
export declare const ADMIN_NOTIFIED = "admin-notified";
export declare type FlagType = 'object-shared' | 'admin-notified';
export declare type MessageDescriptor = {
    id: string;
    description: string;
    defaultMessage: string;
};
export declare type Flag = {
    appearance: 'success';
    title: MessageDescriptor;
    type: FlagType;
};
