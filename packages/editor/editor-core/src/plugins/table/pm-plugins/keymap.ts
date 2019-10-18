import { keymap } from 'prosemirror-keymap';
import { Plugin } from 'prosemirror-state';
import {
  addColumnBefore,
  addColumnAfter,
  addRowBefore,
  addRowAfter,
} from 'prosemirror-tables';

import {
  createTable,
  goToNextCell,
  moveCursorBackward,
  triggerUnlessTableHeader,
} from '../commands';
import * as keymaps from '../../../keymaps';
import {
  withAnalytics,
  ACTION,
  ACTION_SUBJECT,
  ACTION_SUBJECT_ID,
  INPUT_METHOD,
  EVENT_TYPE,
} from '../../analytics';
import { emptyMultipleCellsWithAnalytics } from '../commands-with-analytics';

const createTableWithAnalytics = () =>
  withAnalytics({
    action: ACTION.INSERTED,
    actionSubject: ACTION_SUBJECT.DOCUMENT,
    actionSubjectId: ACTION_SUBJECT_ID.TABLE,
    attributes: { inputMethod: INPUT_METHOD.SHORTCUT },
    eventType: EVENT_TYPE.TRACK,
  })(createTable);

export function keymapPlugin(): Plugin {
  const list = {};

  keymaps.bindKeymapWithCommand(
    keymaps.nextCell.common!,
    goToNextCell(1),
    list,
  );
  keymaps.bindKeymapWithCommand(
    keymaps.previousCell.common!,
    goToNextCell(-1),
    list,
  );
  keymaps.bindKeymapWithCommand(
    keymaps.toggleTable.common!,
    createTableWithAnalytics(),
    list,
  );
  keymaps.bindKeymapWithCommand(
    keymaps.backspace.common!,
    emptyMultipleCellsWithAnalytics(INPUT_METHOD.KEYBOARD),
    list,
  );
  keymaps.bindKeymapWithCommand(
    keymaps.backspace.common!,
    moveCursorBackward,
    list,
  );

  // Add row/column shortcuts
  keymaps.bindKeymapWithCommand(
    keymaps.addRowBefore.common!,
    triggerUnlessTableHeader(addRowBefore),
    list,
  );

  keymaps.bindKeymapWithCommand(keymaps.addRowAfter.common!, addRowAfter, list);

  keymaps.bindKeymapWithCommand(
    keymaps.addColumnBefore.common!,
    triggerUnlessTableHeader(addColumnBefore),
    list,
  );

  keymaps.bindKeymapWithCommand(
    keymaps.addColumnAfter.common!,
    addColumnAfter,
    list,
  );

  return keymap(list);
}

export default keymapPlugin;
