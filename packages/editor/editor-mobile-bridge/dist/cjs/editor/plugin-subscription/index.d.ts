import { EditorView } from 'prosemirror-view';
import { EventDispatcher } from '@atlaskit/editor-core';
import WebBridgeImpl from '../native-to-web';
export declare function initPluginListeners(eventDispatcher: EventDispatcher, bridge: WebBridgeImpl, view: EditorView): void;
export declare function destroyPluginListeners(eventDispatcher: EventDispatcher, bridge: WebBridgeImpl): void;
