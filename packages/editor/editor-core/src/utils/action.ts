import { Node } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import {
  stateKey as mediaStateKey,
  MediaPluginState,
} from '../plugins/media/pm-plugins/main';

import { Command, CommandDispatch } from '../types';

export async function getEditorValueWithMedia(
  editorView?: EditorView,
): Promise<Node | undefined> {
  if (!editorView) {
    return;
  }

  const { state } = editorView;

  const mediaPluginState =
    state && (mediaStateKey.getState(state) as MediaPluginState);

  if (mediaPluginState && mediaPluginState.waitForMediaUpload) {
    await mediaPluginState.waitForPendingTasks();
  }

  return editorView.state.doc;
}

/**
 * Iterates over the commands one after the other,
 * passes the tr through and dispatches the cumulated transaction
 */
export function cascadeCommands(cmds: Command[]): Command {
  return (state: EditorState, dispatch?: CommandDispatch) => {
    let { tr: baseTr } = state;
    let shouldDispatch = false;

    const onDispatchAction = (tr: Transaction) => {
      baseTr.setSelection(tr.selection);
      tr.steps.forEach(st => {
        baseTr.step(st);
      });
      shouldDispatch = true;
    };

    cmds.forEach(cmd => cmd(state, onDispatchAction));

    if (dispatch && shouldDispatch) {
      dispatch(baseTr);
      return true;
    }

    return false;
  };
}
