import { MarkSpec, Mark } from 'prosemirror-model';
export interface ConfluenceLinkMetadata {
    linkType: string;
    versionAtSave?: string | null;
    fileName?: string | null;
    spaceKey?: string | null;
    contentTitle?: string | null;
    isRenamedTitle?: boolean;
    anchorName?: string | null;
    contentId?: string | null;
    container?: ConfluenceLinkMetadata;
}
export interface LinkAttributes {
    href: string;
    title?: string;
    id?: string;
    collection?: string;
    occurrenceKey?: string;
    __confluenceMetadata?: ConfluenceLinkMetadata;
}
/**
 * @name link_mark
 */
export interface LinkDefinition {
    type: 'link';
    attrs: LinkAttributes;
}
export declare const link: MarkSpec;
export declare const toJSON: (mark: Mark<any>) => {
    type: string;
    attrs: Record<string, string>;
};
