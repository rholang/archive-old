import * as React from 'react';
import { isTableSelected } from 'prosemirror-utils';
import {
  doc,
  createEditorFactory,
  table,
  tr,
  thEmpty,
  mountWithIntl,
} from '@atlaskit/editor-test-helpers';

import {
  pluginKey,
  getPluginState,
} from '../../../../../plugins/table/pm-plugins/main';
import {
  TablePluginState,
  TableCssClassName as ClassName,
} from '../../../../../plugins/table/types';
import CornerControls from '../../../../../plugins/table/ui/TableFloatingControls/CornerControls';

const CornerButton = `.${ClassName.CONTROLS_CORNER_BUTTON}`;

describe('CornerControls', () => {
  const createEditor = createEditorFactory<TablePluginState>();

  const editor = (doc: any) =>
    createEditor({
      doc,
      editorProps: { allowTables: true },
      pluginKey,
    });

  describe('when button is clicked', () => {
    it('should select the table', () => {
      const { editorView } = editor(
        doc(table()(tr(thEmpty, thEmpty, thEmpty))),
      );

      const controls = mountWithIntl(
        <CornerControls
          tableRef={document.querySelector('table')!}
          editorView={editorView}
        />,
      );

      controls.find(CornerButton).simulate('click');

      expect(isTableSelected(editorView.state.selection)).toBe(true);
      controls.unmount();
    });
  });

  describe('when button is hovered', () => {
    it('should highlight the table with hover decoration', () => {
      const { editorView } = editor(
        doc(
          table()(tr(thEmpty, thEmpty, thEmpty), tr(thEmpty, thEmpty, thEmpty)),
        ),
      );

      const controls = mountWithIntl(
        <CornerControls
          tableRef={document.querySelector('table')!}
          editorView={editorView}
        />,
      );

      controls.find(CornerButton).simulate('mouseover');

      const { hoveredColumns, hoveredRows } = getPluginState(editorView.state);
      expect(hoveredColumns).toEqual([0, 1, 2]);
      expect(hoveredRows).toEqual([0, 1]);
      controls.unmount();
    });
  });
});
