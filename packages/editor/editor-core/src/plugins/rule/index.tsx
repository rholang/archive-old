import * as React from 'react';
import { rule } from '@atlaskit/adf-schema';
import { EditorPlugin } from '../../types';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import keymapPlugin from './pm-plugins/keymap';
import inputRulePlugin from './pm-plugins/input-rule';

import {
  addAnalytics,
  ACTION,
  ACTION_SUBJECT,
  ACTION_SUBJECT_ID,
  INPUT_METHOD,
  EVENT_TYPE,
} from '../analytics';
import { IconDivider } from '../quick-insert/assets';
import { safeInsert } from '../../utils/insert';
import { Transaction } from 'prosemirror-state';
import { Fragment } from 'prosemirror-model';
import { getEditorProps } from '../shared-context';

const rulePlugin = (): EditorPlugin => ({
  name: 'rule',

  nodes() {
    return [{ name: 'rule', node: rule }];
  },

  pmPlugins() {
    return [
      {
        name: 'ruleInputRule',
        plugin: ({ schema }) => inputRulePlugin(schema),
      },
      {
        name: 'ruleKeymap',
        plugin: () => keymapPlugin(),
      },
    ];
  },

  pluginsOptions: {
    quickInsert: ({ formatMessage }) => [
      {
        title: formatMessage(messages.horizontalRule),
        description: formatMessage(messages.horizontalRuleDescription),
        keywords: ['horizontal rule', 'rule', 'line'],
        priority: 1200,
        keyshortcut: '---',
        icon: () => (
          <IconDivider label={formatMessage(messages.horizontalRule)} />
        ),
        action(insert, state) {
          let tr: Transaction<any> | null = null;
          const { allowNewInsertionBehaviour } = getEditorProps(state);
          if (allowNewInsertionBehaviour) {
            /**
             * This is a workaround to get rid of the typeahead text when using quick insert
             * Once we insert *nothing*, we get a new transaction, so we can use the new selection
             * without considering the extra text after the `/` command.
             **/
            tr = insert(Fragment.empty);
            tr = safeInsert(
              state.schema.nodes.rule.createChecked(),
              tr.selection.from,
            )(tr);
          }

          if (!tr) {
            tr = insert(state.schema.nodes.rule.createChecked());
          }

          return addAnalytics(state, tr, {
            action: ACTION.INSERTED,
            actionSubject: ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: ACTION_SUBJECT_ID.DIVIDER,
            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
            eventType: EVENT_TYPE.TRACK,
          });
        },
      },
    ],
  },
});

export default rulePlugin;
