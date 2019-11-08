import { Fragment, Schema } from 'prosemirror-model';
import { SerializeFragmentWithAttachmentsResult, SerializerWithImages } from './serializer';
import { MetaDataContext, EmailSerializerOpts } from './interfaces';
export declare const commonStyle: {
    'font-family': string;
    'font-size': string;
    'font-weight': number;
    'line-height': string;
};
/**
 * EmailSerializer allows to disable/mock images via isImageStubEnabled flag.
 * The reason behind this is that in emails, images are embedded separately as inline attachemnts
 * and referenced via CID. However, when rendered in browser, this does not work and breaks the experience
 * when rendered in demo page, so we instead inline the image data.
 */
export declare class EmailSerializer implements SerializerWithImages<string> {
    private schema;
    readonly opts: EmailSerializerOpts;
    private static readonly defaultOpts;
    constructor(schema?: Schema, opts?: Partial<EmailSerializerOpts>);
    serializeFragmentWithImages: (fragment: Fragment<any>, context?: MetaDataContext | undefined) => SerializeFragmentWithAttachmentsResult;
    serializeFragment: (...args: any) => string;
    static fromSchema(schema?: Schema, opts?: Partial<EmailSerializerOpts>): EmailSerializer;
}
export * from './interfaces';
export * from './styles/util';
export default EmailSerializer;
