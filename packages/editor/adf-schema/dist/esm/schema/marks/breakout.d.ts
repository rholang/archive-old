import { MarkSpec } from 'prosemirror-model';
export declare type BreakoutMarkAttrs = {
    mode: 'wide' | 'full-width';
};
/**
 * @name breakout_mark
 */
export interface BreakoutMarkDefinition {
    type: 'breakout';
    attrs: BreakoutMarkAttrs;
}
export declare const breakout: MarkSpec;
