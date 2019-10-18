import { GasPayload } from '@atlaskit/analytics-gas-types';
import { packageAttributes, PackageAttributes } from './index';
import { MediaViewerComponent } from '../media-viewer';

export type ClosedInputType = 'button' | 'blanket' | 'escKey';
export interface CloseGasPayload extends GasPayload {
  attributes: PackageAttributes & {
    input: ClosedInputType;
    sessionDurationMs: number;
  };
}

export function closedEvent(input: ClosedInputType): CloseGasPayload {
  return {
    eventType: 'ui',
    action: 'closed',
    actionSubject: 'mediaViewer',
    actionSubjectId: undefined,
    attributes: {
      ...packageAttributes,
      sessionDurationMs: MediaViewerComponent.timerElapsed(),
      input,
    },
  };
}
