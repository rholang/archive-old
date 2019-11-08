import { PortalProviderAPI } from '../../../../../ui/PortalProvider';
import { EditorSharedConfig } from '../../context/shared-config';
import { EditorProps } from '../../editor-props-type';
export declare function createEditor({ context, plugins, portalProviderAPI, defaultValue, ref, popupsMountPoint, popupsBoundariesElement, popupsScrollableElement, disabled, onChange, }: CreateEditorParams): EditorSharedConfig | null;
export declare type CreateEditorParams = Pick<EditorProps, 'defaultValue' | 'plugins' | 'popupsMountPoint' | 'popupsBoundariesElement' | 'popupsScrollableElement' | 'onChange' | 'disabled'> & {
    context: any;
    ref?: HTMLDivElement | null;
    portalProviderAPI: PortalProviderAPI;
};
