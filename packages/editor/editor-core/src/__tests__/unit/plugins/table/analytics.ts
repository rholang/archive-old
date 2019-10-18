import { Rect } from 'prosemirror-tables';
import {
  doc,
  p,
  createEditorFactory,
  sendKeyToPm,
  insertText,
  table,
  tr,
  thEmpty,
  tdEmpty,
  tdCursor,
  td,
} from '@atlaskit/editor-test-helpers';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { colors } from '@atlaskit/theme';

import { pluginKey } from '../../../../plugins/table/pm-plugins/main';
import {
  TablePluginState,
  PluginConfig,
} from '../../../../plugins/table/types';
import { AnalyticsHandler } from '../../../../analytics';
import {
  deleteTableWithAnalytics,
  emptyMultipleCellsWithAnalytics,
  mergeCellsWithAnalytics,
  splitCellWithAnalytics,
  setColorWithAnalytics,
  toggleHeaderRowWithAnalytics,
  toggleHeaderColumnWithAnalytics,
  toggleNumberColumnWithAnalytics,
  toggleTableLayoutWithAnalytics,
  insertRowWithAnalytics,
  insertColumnWithAnalytics,
  deleteRowsWithAnalytics,
  deleteColumnsWithAnalytics,
} from '../../../../plugins/table/commands-with-analytics';
import { INPUT_METHOD } from '../../../../plugins/analytics';
import { handleCut } from '../../../../plugins/table/event-handlers';

const defaultTable = table()(
  tr(thEmpty, thEmpty, thEmpty),
  tr(tdEmpty, tdEmpty, tdEmpty),
  tr(tdEmpty, tdEmpty, tdCursor),
);

const secondRow: Rect = { left: 0, top: 1, bottom: 2, right: 3 };
const secondColumn: Rect = { left: 1, top: 0, bottom: 3, right: 2 };

describe('Table analytic events', () => {
  const createEditor = createEditorFactory<TablePluginState>();
  let createAnalyticsEvent: jest.Mock<CreateUIAnalyticsEvent>;
  let trackEvent: jest.Mock<AnalyticsHandler>;

  const editor = (doc: any) => {
    const tableOptions = {
      allowNumberColumn: true,
      allowHeaderRow: true,
      allowHeaderColumn: true,
      permittedLayouts: 'all',
    } as PluginConfig;

    trackEvent = jest.fn();
    createAnalyticsEvent = jest
      .fn()
      .mockReturnValue({ fire() {} }) as jest.Mock<CreateUIAnalyticsEvent>;

    const _editor = createEditor({
      doc,
      editorProps: {
        analyticsHandler: trackEvent,
        allowTables: tableOptions,
        allowAnalyticsGASV3: true,
        appearance: 'full-page',
      },
      pluginKey,
      createAnalyticsEvent,
    });

    trackEvent.mockClear();
    createAnalyticsEvent.mockClear();

    return _editor;
  };

  describe('table inserted via quickInsert', () => {
    beforeEach(() => {
      const { editorView, sel } = editor(doc(p('{<>}')));
      insertText(editorView, '/Table', sel);
      sendKeyToPm(editorView, 'Enter');
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.quickinsert.select',
        { item: 'Table' },
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'inserted',
        actionSubject: 'document',
        actionSubjectId: 'table',
        attributes: { inputMethod: 'quickInsert' },
        eventType: 'track',
      });
    });
  });

  describe('table deleted', () => {
    beforeEach(() => {
      const { editorView } = editor(doc(defaultTable));
      deleteTableWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.delete.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'deleted',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          inputMethod: 'floatingToolbar',
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('table cleared', () => {
    describe('context menu', () => {
      beforeEach(() => {
        const { editorView } = editor(
          doc(
            table()(
              tr(thEmpty, td()(p('{<cell}Hello')), thEmpty),
              tr(td()(p('Hello')), tdEmpty, tdEmpty),
              tr(tdEmpty, td()(p('{cell>}')), tdEmpty),
            ),
          ),
        );

        emptyMultipleCellsWithAnalytics(INPUT_METHOD.CONTEXT_MENU)(
          editorView.state,
          editorView.dispatch,
        );
      });

      it('should fire v2 analytics', () => {
        expect(trackEvent).toHaveBeenCalledWith(
          'atlassian.editor.format.table.delete_content.button',
        );
      });

      it('should fire v3 analytics', () => {
        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'cleared',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            inputMethod: 'contextMenu',
            verticalCells: 3,
            horizontalCells: 1,
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });

    describe('keyboard - Backspace', () => {
      beforeEach(() => {
        const { editorView } = editor(
          doc(
            table()(
              tr(thEmpty, td()(p('Hello')), thEmpty),
              tr(td()(p('{<cell}Hello')), tdEmpty, td()(p('{cell>}'))),
              tr(tdEmpty, tdEmpty, tdEmpty),
            ),
          ),
        );

        sendKeyToPm(editorView, 'Backspace');
      });

      it('should fire v2 analytics', () => {
        expect(trackEvent).toHaveBeenCalledWith(
          'atlassian.editor.format.table.delete_content.keyboard',
        );
      });

      it('should fire v3 analytics', () => {
        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'cleared',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            inputMethod: 'keyboard',
            verticalCells: 1,
            horizontalCells: 3,
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });
  });

  describe('cells merged', () => {
    beforeEach(() => {
      const { editorView } = editor(
        doc(
          table()(
            tr(thEmpty, td()(p('{<cell}Hello')), thEmpty),
            tr(td()(p('Hello')), tdEmpty, tdEmpty),
            tr(tdEmpty, td()(p('{cell>}')), tdEmpty),
          ),
        ),
      );

      mergeCellsWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.merge.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'merged',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          verticalCells: 3,
          horizontalCells: 1,
          totalCells: 3,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('cell split', () => {
    beforeEach(() => {
      const { editorView } = editor(
        doc(
          table()(
            tr(thEmpty, thEmpty, thEmpty),
            tr(td({ colspan: 3 })(p('{<>}'))),
            tr(tdEmpty, tdEmpty, tdEmpty),
          ),
        ),
      );

      splitCellWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.split.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'split',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          verticalCells: 1,
          horizontalCells: 3,
          totalCells: 3,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('cells colored', () => {
    beforeEach(() => {
      const { editorView } = editor(
        doc(
          table()(
            tr(thEmpty, td()(p('Hello')), thEmpty),
            tr(td()(p('{<cell}Hello')), tdEmpty, td()(p('{cell>}'))),
            tr(tdEmpty, tdEmpty, tdEmpty),
          ),
        ),
      );

      setColorWithAnalytics(colors.B50)(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.backgroundColor.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'colored',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          cellColor: 'light blue',
          verticalCells: 1,
          horizontalCells: 3,
          totalCells: 3,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('header row toggled', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      toggleHeaderRowWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.toggleHeaderRow.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'toggledHeaderRow',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          newState: false,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('header column toggled', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      toggleHeaderColumnWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.toggleHeaderColumn.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'toggledHeaderColumn',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          newState: true,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('number column toggled', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      toggleNumberColumnWithAnalytics()(editorView.state, editorView.dispatch);
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.toggleNumberColumn.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'toggledNumberColumn',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          newState: true,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('layout changed', () => {
    describe('normal', () => {
      it('should fire v3 analytics', () => {
        const { editorView } = editor(defaultTable);
        toggleTableLayoutWithAnalytics()(editorView.state, editorView.dispatch);

        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'changedBreakoutMode',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            newBreakoutMode: 'wide',
            previousBreakoutMode: 'normal',
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });

    describe('wide', () => {
      it('should fire v3 analytics', () => {
        const { editorView } = editor(
          doc(
            table({
              layout: 'wide',
            })(
              tr(thEmpty, thEmpty, thEmpty),
              tr(tdEmpty, tdEmpty, tdEmpty),
              tr(tdEmpty, tdEmpty, tdCursor),
            ),
          ),
        );
        toggleTableLayoutWithAnalytics()(editorView.state, editorView.dispatch);

        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'changedBreakoutMode',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            newBreakoutMode: 'fullWidth',
            previousBreakoutMode: 'wide',
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });

    describe('fullWidth', () => {
      it('should fire v3 analytics', () => {
        const { editorView } = editor(
          doc(
            table({ layout: 'full-width' })(
              tr(thEmpty, thEmpty, thEmpty),
              tr(tdEmpty, tdEmpty, tdEmpty),
              tr(tdEmpty, tdEmpty, tdCursor),
            ),
          ),
        );

        toggleTableLayoutWithAnalytics()(editorView.state, editorView.dispatch);

        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'changedBreakoutMode',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            newBreakoutMode: 'normal',
            previousBreakoutMode: 'fullWidth',
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });
  });

  describe('cut something from table', () => {
    beforeEach(() => {
      const { editorView } = editor(
        doc(
          table()(
            tr(thEmpty, td()(p('Hello')), thEmpty),
            tr(td()(p('{<cell}Hello')), tdEmpty, td()(p('{cell>}'))),
            tr(tdEmpty, tdEmpty, tdEmpty),
          ),
        ),
      );

      editorView.dispatch(
        handleCut(editorView.state.tr, editorView.state, editorView.state),
      );
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.delete_row.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'cut',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          verticalCells: 1,
          horizontalCells: 3,
          totalCells: 3,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('row added', () => {
    describe('context menu', () => {
      beforeEach(() => {
        const { editorView } = editor(defaultTable);
        insertRowWithAnalytics(INPUT_METHOD.CONTEXT_MENU, 2)(
          editorView.state,
          editorView.dispatch,
        );
      });

      it('should fire v2 analytics', () => {
        expect(trackEvent).toHaveBeenCalledWith(
          'atlassian.editor.format.table.row.button',
        );
      });

      it('should fire v3 analytics', () => {
        expect(createAnalyticsEvent).toHaveBeenCalledWith({
          action: 'addedRow',
          actionSubject: 'table',
          actionSubjectId: null,
          attributes: {
            inputMethod: 'contextMenu',
            position: 2,
            totalRowCount: 3,
            totalColumnCount: 3,
          },
          eventType: 'track',
        });
      });
    });

    describe('keyboard', () => {
      describe('Tab', () => {
        beforeEach(() => {
          const { editorView } = editor(defaultTable);
          sendKeyToPm(editorView, 'Tab');
        });

        it('should fire v2 analytics', () => {
          expect(trackEvent).toHaveBeenCalledWith(
            'atlassian.editor.format.table.row.keyboard',
          );
        });

        it('should fire v3 analytics', () => {
          expect(createAnalyticsEvent).toHaveBeenCalledWith({
            action: 'addedRow',
            actionSubject: 'table',
            actionSubjectId: null,
            attributes: {
              inputMethod: 'keyboard',
              position: 3,
              totalRowCount: 3,
              totalColumnCount: 3,
            },
            eventType: 'track',
          });
        });
      });

      describe('Shift-Tab', () => {
        beforeEach(() => {
          const { editorView } = editor(
            doc(
              table()(
                tr(tdCursor, tdEmpty, tdEmpty),
                tr(tdEmpty, tdEmpty, tdEmpty),
                tr(tdEmpty, tdEmpty, tdEmpty),
              ),
            ),
          );
          sendKeyToPm(editorView, 'Shift-Tab');
        });

        it('should fire v2 analytics', () => {
          expect(trackEvent).toHaveBeenCalledWith(
            'atlassian.editor.format.table.row.keyboard',
          );
        });

        it('should fire v3 analytics', () => {
          expect(createAnalyticsEvent).toHaveBeenCalledWith({
            action: 'addedRow',
            actionSubject: 'table',
            actionSubjectId: null,
            attributes: {
              inputMethod: 'keyboard',
              position: 0,
              totalRowCount: 3,
              totalColumnCount: 3,
            },
            eventType: 'track',
          });
        });
      });
    });
  });

  describe('column added', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      insertColumnWithAnalytics(INPUT_METHOD.CONTEXT_MENU, 2)(
        editorView.state,
        editorView.dispatch,
      );
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.column.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'addedColumn',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          inputMethod: 'contextMenu',
          position: 2,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('row deleted', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      deleteRowsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, secondRow, true)(
        editorView.state,
        editorView.dispatch,
      );
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.delete_row.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'deletedRow',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          inputMethod: 'contextMenu',
          position: 1,
          count: 1,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });

  describe('column deleted', () => {
    beforeEach(() => {
      const { editorView } = editor(defaultTable);
      deleteColumnsWithAnalytics(INPUT_METHOD.CONTEXT_MENU, secondColumn)(
        editorView.state,
        editorView.dispatch,
      );
    });

    it('should fire v2 analytics', () => {
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.table.delete_column.button',
      );
    });

    it('should fire v3 analytics', () => {
      expect(createAnalyticsEvent).toHaveBeenCalledWith({
        action: 'deletedColumn',
        actionSubject: 'table',
        actionSubjectId: null,
        attributes: {
          inputMethod: 'contextMenu',
          position: 1,
          count: 1,
          totalRowCount: 3,
          totalColumnCount: 3,
        },
        eventType: 'track',
      });
    });
  });
});
