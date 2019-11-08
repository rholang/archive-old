import MarkdownIt from 'markdown-it';
import { Schema } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { CardOptions } from '../../card';
export declare const stateKey: PluginKey<any>;
export declare const md: MarkdownIt;
export declare function createPlugin(schema: Schema, cardOptions?: CardOptions, sanitizePrivateContent?: boolean): Plugin<any>;
