import { Node as PmNode } from 'prosemirror-model';
import { MacroProvider, MacroAttributes } from '@atlaskit/editor-core';
export declare class MockMacroProvider implements MacroProvider {
    config: {};
    private mockExtensionData;
    constructor(mockExtensionData: any);
    openMacroBrowser(_macroNode?: PmNode): Promise<MacroAttributes>;
    autoConvert(link: String): MacroAttributes | null;
}
export declare const macroProvider: MockMacroProvider;
