import { Mark, MarkSpec } from 'prosemirror-model';
import { N80, Y400, T300, R300, P300, G300 } from '../../utils/colors';
export interface TextColorAttributes {
    /**
     * @pattern "^#[0-9a-f]{6}$"
     */
    color: string;
}
/**
 * @name textColor_mark
 */
export interface TextColorDefinition {
    type: 'textColor';
    attrs: TextColorAttributes;
}
export interface TextColorMark extends Mark {
    attrs: TextColorAttributes;
}
/** New borders for colors in the color picker */
export declare const borderColorPalette: {
    [N80]: string;
    [P300]: string;
    [T300]: string;
    [G300]: string;
    [R300]: string;
    [Y400]: string;
};
export declare type TextColorKey = 'Light gray' | 'Purple' | 'Teal' | 'Green' | 'Red' | 'Orange';
export declare const colorPalette: Map<string, TextColorKey>;
export declare const textColor: MarkSpec;
