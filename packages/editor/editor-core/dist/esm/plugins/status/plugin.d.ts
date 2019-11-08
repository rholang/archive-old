import { Plugin, PluginKey } from 'prosemirror-state';
import { Color as ColorType } from '@atlaskit/status/element';
import { Dispatch } from '../../event-dispatcher';
import { PortalProviderAPI } from '../../ui/PortalProvider';
import { StatusPluginOptions } from './index';
export declare const pluginKeyName = "statusPlugin";
export declare const pluginKey: PluginKey<any>;
export declare type StatusType = {
    color: ColorType;
    text: string;
    localId?: string;
};
export declare type StatusState = {
    isNew: boolean;
    showStatusPickerAt: number | null;
};
declare const createPlugin: (dispatch: Dispatch<any>, portalProviderAPI: PortalProviderAPI, options?: StatusPluginOptions | undefined) => Plugin<any>;
export default createPlugin;
