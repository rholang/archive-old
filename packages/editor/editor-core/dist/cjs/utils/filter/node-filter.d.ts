import { ADFEntity } from '@atlaskit/adf-utils';
import { JSONDocNode } from '@atlaskit/editor-json-transformer';
export declare function removeMarks(node: ADFEntity): {
    [x: string]: any;
    type: string;
    attrs?: {
        [name: string]: any;
    } | undefined;
    content?: ADFEntity[] | undefined;
    marks?: import("@atlaskit/adf-utils").ADFEntityMark[] | undefined;
    text?: string | undefined;
};
export declare function sanitizeNode(json: JSONDocNode): JSONDocNode;
