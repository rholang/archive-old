import * as React from 'react';
import { EditorPlugin } from '../../../../types';
declare const PresetProvider: React.ProviderExoticComponent<React.ProviderProps<EditorPlugin[]>>;
declare const usePresetContext: () => EditorPlugin[];
export { PresetProvider, usePresetContext };
