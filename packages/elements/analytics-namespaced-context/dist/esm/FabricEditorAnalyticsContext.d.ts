import { StatelessComponent } from 'react';
import { Props } from './helper/createNamespaceContext';
export declare const EDITOR_CONTEXT = "fabricEditorCtx";
export declare enum EDITOR_APPEARANCE_CONTEXT {
    FIXED_WIDTH = "fixedWidth",
    FULL_WIDTH = "fullWidth",
    COMMENT = "comment",
    CHROMELESS = "chromeless",
    MOBILE = "mobile"
}
declare type FabricEditorAnalyticsContextProps = Props & {
    data: {
        appearance: EDITOR_APPEARANCE_CONTEXT | undefined;
        packageName: string;
        packageVersion: string;
        componentName: 'editorCore';
    };
};
export declare const FabricEditorAnalyticsContext: StatelessComponent<FabricEditorAnalyticsContextProps>;
export {};
