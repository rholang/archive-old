import { Plugin, PluginKey } from 'prosemirror-state';
import { Node as PMNode } from 'prosemirror-model';
import { ProviderFactory, ContextIdentifierProvider } from '@atlaskit/editor-common';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { Dispatch } from '../../../event-dispatcher';
export declare const stateKey: PluginKey<any>;
export interface TaskDecisionPluginState {
    currentTaskDecisionItem: PMNode | undefined;
    contextIdentifierProvider?: ContextIdentifierProvider;
}
export declare function createPlugin(portalProviderAPI: PortalProviderAPI, providerFactory: ProviderFactory, dispatch: Dispatch): Plugin<any>;
