import { Transaction, Plugin } from 'prosemirror-state';
import { Dispatch } from '../../../../event-dispatcher';
import { MediaLinkingState } from './types';
export declare const createMediaLinkingCommand: (action: import("./actions").VisibleAction | import("./actions").HideAction | import("./actions").SetLinkToMedia | import("./actions").Unlink | ((state: Readonly<import("prosemirror-state").EditorState<any>>) => false | import("./actions").VisibleAction | import("./actions").HideAction | import("./actions").SetLinkToMedia | import("./actions").Unlink), transform?: ((tr: Transaction<any>, state: import("prosemirror-state").EditorState<any>) => Transaction<any>) | undefined) => import("../../../..").Command, getMediaLinkingState: (state: import("prosemirror-state").EditorState<any>) => MediaLinkingState;
export { MediaLinkingState } from './types';
declare const _default: (dispatch: Dispatch<any>) => Plugin<any>;
export default _default;
