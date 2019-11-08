import { NodeView } from 'prosemirror-view';
import { ProviderFactory } from '@atlaskit/editor-common';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
export interface Props {
    providerFactory: ProviderFactory;
}
export declare function taskItemNodeViewFactory(portalProviderAPI: PortalProviderAPI, providerFactory: ProviderFactory): (node: any, view: any, getPos: () => number) => NodeView<any>;
