import {
  ACTION,
  ACTION_SUBJECT,
  AEP,
  EVENT_TYPE,
  ACTION_SUBJECT_ID,
} from './enums';
import { SortOrder } from '@atlaskit/editor-common';

export enum PLATFORM {
  NATIVE = 'mobileNative',
  HYBRID = 'mobileHybrid',
  WEB = 'web',
}

export enum MODE {
  RENDERER = 'renderer',
  EDITOR = 'editor',
}

type RendererStartAEP = AEP<
  ACTION.STARTED,
  ACTION_SUBJECT.RENDERER,
  undefined,
  { platform: PLATFORM.WEB },
  EVENT_TYPE.UI
>;

type RendererRenderedAEP = AEP<
  ACTION.RENDERED,
  ACTION_SUBJECT.RENDERER,
  undefined,
  {
    platform: PLATFORM.WEB;
    duration: number;
    ttfb?: number;
    nodes: Record<string, number>;
  },
  EVENT_TYPE.OPERATIONAL
>;

type UIAEP<Action, ActionSubject, ActionSubjectID, Attributes> = AEP<
  Action,
  ActionSubject,
  ActionSubjectID,
  Attributes,
  EVENT_TYPE.UI
>;

type ButtonAEP<ActionSubjectID, Attributes> = UIAEP<
  ACTION.CLICKED,
  ACTION_SUBJECT.BUTTON,
  ActionSubjectID,
  Attributes
>;

type AnchorLinkAEP = UIAEP<
  ACTION.VIEWED,
  ACTION_SUBJECT.ANCHOR_LINK,
  undefined,
  { platform: PLATFORM.WEB; mode: MODE.RENDERER }
>;

type HeadingAnchorLinkButtonAEP = ButtonAEP<
  ACTION_SUBJECT_ID.HEADING_ANCHOR_LINK,
  undefined
>;

type TableSortColumnNotAllowedAEP = AEP<
  ACTION.SORT_COLUMN_NOT_ALLOWED,
  ACTION_SUBJECT.TABLE,
  undefined,
  {
    platform: PLATFORM.WEB;
    mode: MODE.RENDERER;
  },
  EVENT_TYPE.TRACK
>;

type TableSortColumnAEP = AEP<
  ACTION.SORT_COLUMN,
  ACTION_SUBJECT.TABLE,
  undefined,
  {
    platform: PLATFORM.WEB;
    mode: MODE.RENDERER;
    sortOrder: SortOrder;
    columnIndex: number;
  },
  EVENT_TYPE.TRACK
>;

export type AnalyticsEventPayload =
  | RendererStartAEP
  | RendererRenderedAEP
  | HeadingAnchorLinkButtonAEP
  | AnchorLinkAEP
  | TableSortColumnNotAllowedAEP
  | TableSortColumnAEP;
