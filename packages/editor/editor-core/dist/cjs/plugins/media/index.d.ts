import { EditorPlugin } from '../../types';
import { MediaState } from './pm-plugins/main';
import { CustomMediaPicker, MediaProvider } from './types';
export { MediaState, MediaProvider, CustomMediaPicker };
export { insertMediaSingleNode } from './utils/media-single';
export interface MediaOptions {
    provider?: Promise<MediaProvider>;
    allowMediaSingle?: boolean | MediaSingleOptions;
    allowMediaGroup?: boolean;
    customDropzoneContainer?: HTMLElement;
    customMediaPicker?: CustomMediaPicker;
    allowResizing?: boolean;
    allowResizingInTables?: boolean;
    allowAnnotation?: boolean;
    allowLinking?: boolean;
}
export interface MediaSingleOptions {
    disableLayout?: boolean;
}
export interface MediaPMPluginOptions {
    allowLazyLoading?: boolean;
    allowBreakoutSnapPoints?: boolean;
    allowAdvancedToolBarOptions?: boolean;
    allowMediaSingleEditable?: boolean;
    allowRemoteDimensionsFetch?: boolean;
    allowDropzoneDropLine?: boolean;
    allowMarkingUploadsAsIncomplete?: boolean;
    fullWidthEnabled?: boolean;
}
declare const mediaPlugin: (options?: MediaOptions | undefined, pluginOptions?: MediaPMPluginOptions | undefined, appearance?: "full-width" | "comment" | "full-page" | "chromeless" | "mobile" | undefined) => EditorPlugin;
export default mediaPlugin;
