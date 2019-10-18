import {
  blockquote,
  br,
  code_block,
  doc,
  h1,
  h2,
  h3,
  insertText,
  createEditorFactory,
  p,
  indentation,
  code,
  hardBreak,
  a as link,
  sendKeyToPm,
} from '@atlaskit/editor-test-helpers';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { analyticsService } from '../../../../analytics';
import { HeadingLevels } from '../../../../plugins/block-type/types';
import { EditorView } from 'prosemirror-view';

describe('inputrules', () => {
  const createEditor = createEditorFactory();

  let createAnalyticsEvent: CreateUIAnalyticsEvent;
  let trackEvent: jest.SpyInstance | undefined;

  const editor = (doc: any) => {
    createAnalyticsEvent = jest.fn(() => ({ fire() {} }));
    return createEditor({
      doc,
      editorProps: {
        analyticsHandler: trackEvent as any,
        allowAnalyticsGASV3: true,
        allowCodeBlocks: true,
        allowIndentation: true,
      },
      createAnalyticsEvent,
    });
  };

  function insertAutoformatRule(format: string) {
    const setup = editor(doc(p('{<>}')));
    const { editorView, sel } = setup;

    insertText(editorView, `${format} `, sel);
    return setup;
  }

  beforeEach(() => {
    trackEvent = jest.fn();
    analyticsService.trackEvent = trackEvent as any;
  });

  describe('heading rule', () => {
    describe('Analytics', () => {
      function createHeadingPayload(
        newHeadingLevel: HeadingLevels,
        inputMethod: string,
      ) {
        return {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'heading',
          attributes: {
            inputMethod,
            newHeadingLevel,
          },
        };
      }

      type AutoFormatCase = {
        autoformatRule: string;
        headingLevel: HeadingLevels;
      };
      const autoFormatCases: AutoFormatCase[] = [
        { autoformatRule: '#', headingLevel: 1 },
        { autoformatRule: '##', headingLevel: 2 },
        { autoformatRule: '###', headingLevel: 3 },
        { autoformatRule: '####', headingLevel: 4 },
        { autoformatRule: '#####', headingLevel: 5 },
        { autoformatRule: '######', headingLevel: 6 },
      ];

      autoFormatCases.forEach(({ autoformatRule, headingLevel }) => {
        it(`should call Analytics GAS v3 with heading level ${headingLevel} for autoformatting '${autoformatRule}'`, () => {
          insertAutoformatRule(autoformatRule);

          expect(createAnalyticsEvent).toHaveBeenCalledWith(
            createHeadingPayload(headingLevel, 'autoformatting'),
          );
        });
      });
    });
    it('should convert "# " to heading 1', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h1()));
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.heading1.autoformatting',
      );
    });

    it('should convert "# " after shift+enter to heading 1', () => {
      const { editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(p('test'), h1()));
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.heading1.autoformatting',
      );
    });

    it('should not convert "# " to heading 1 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '# ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('# ')));
    });

    it('should convert "## " to heading 2', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '## ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h2()));
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.heading2.autoformatting',
      );
    });

    it('should not convert "## " to heading 1 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '## ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('## ')));
    });

    it('should convert "### " to heading 3', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '### ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(h3()));
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.heading3.autoformatting',
      );
    });

    it('should not convert "### " to heading 3 when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '### ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('### ')));
    });

    describe('from quickinsert menu', () => {
      it('should insert when no existing text', () => {
        const { editorView, sel } = editor(doc(p('{<>}')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');
        expect(editorView.state.doc).toEqualDocument(doc(h1()));
      });

      it('should insert below when in paragraph', () => {
        const { editorView, sel } = editor(doc(p('hello {<>}world')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');
        expect(editorView.state.doc).toEqualDocument(
          doc(p('hello world'), h1()),
        );
      });

      it('should send analytics v3', () => {
        const { editorView, sel } = editor(doc(p('{<>}')));
        insertText(editorView, '/h1', sel);
        sendKeyToPm(editorView, 'Enter');

        const expectedPayload = {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'heading',
          attributes: {
            inputMethod: 'quickInsert',
            newHeadingLevel: 1,
          },
        };
        expect(createAnalyticsEvent).toHaveBeenCalledWith(expectedPayload);
      });
    });
  });

  describe('blockquote rule', () => {
    describe('Analytics', () => {
      it(`should call analytics v3 with blockquote for autoformatting '>'`, () => {
        const greatherThanRule = '>';
        const expectedPayload = {
          action: 'formatted',
          actionSubject: 'text',
          eventType: 'track',
          actionSubjectId: 'blockQuote',
          attributes: {
            inputMethod: 'autoformatting',
          },
        };

        insertAutoformatRule(greatherThanRule);

        expect(createAnalyticsEvent).toHaveBeenCalledWith(expectedPayload);
      });
    });

    it('should convert "> " to a blockquote', () => {
      const { editorView, sel } = editor(doc(p('{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(blockquote(p())));
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.blockquote.autoformatting',
      );
    });

    it('should convert "> " to a blockquote after shift+enter', () => {
      const { editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test'), blockquote(p())),
      );
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.blockquote.autoformatting',
      );
    });

    it('should convert "> " to a blockquote after multiple shift+enter', () => {
      const { editorView, sel } = editor(
        doc(p('test', hardBreak(), hardBreak(), '{<>}test')),
      );

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test', hardBreak()), blockquote(p('test'))),
      );
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.blockquote.autoformatting',
      );
    });

    it('should convert "> " after shift+enter to blockquote for only current line', () => {
      const { editorView, sel } = editor(
        doc(p('test1', hardBreak(), '{<>}test2', hardBreak(), 'test3')),
      );

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p('test1'), blockquote(p('test2')), p('test3')),
      );
      expect(trackEvent).toHaveBeenCalledWith(
        'atlassian.editor.format.blockquote.autoformatting',
      );
    });

    it('should not convert "> " inside code mark to blockquote', () => {
      const { editorView, sel } = editor(doc(p(code('>{<>}'))));

      insertText(editorView, ' ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(p(code('> '))));
    });

    it('should not convert "> " inside link to blockquote', () => {
      const { editorView, sel } = editor(
        doc(p(link({ href: 'http://www.atlassian.com' })('>{<>}'))),
      );
      insertText(editorView, ' ', sel);
      expect(editorView.state.doc).toEqualDocument(
        doc(p(link({ href: 'http://www.atlassian.com' })('>'), ' ')),
      );
    });

    it('should not convert "> " to a blockquote when inside a code_block', () => {
      const { editorView, sel } = editor(doc(code_block()('{<>}')));

      insertText(editorView, '> ', sel);
      expect(editorView.state.doc).toEqualDocument(doc(code_block()('> ')));
    });
  });

  describe('codeblock rule', () => {
    const analyticsV2Event = 'atlassian.editor.format.codeblock.autoformatting';
    const analyticsV3Payload = {
      action: 'inserted',
      actionSubject: 'document',
      actionSubjectId: 'codeBlock',
      attributes: { inputMethod: 'autoformatting' },
      eventType: 'track',
    };
    let editorView: EditorView;
    let sel: number;

    it('should remove indentation and convert "```" to a code block', () => {
      ({ editorView, sel } = editor(
        doc(indentation({ level: 3 })(p('{<>}hello', br(), 'world'))),
      ));
      insertText(editorView, '```', sel);

      expect(editorView.state.doc).toEqualDocument(
        doc(code_block()('hello\nworld')),
      );
    });

    describe('typing "```" after text', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('{<>}hello', br(), 'world'))));
        insertText(editorView, '```', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(code_block()('hello\nworld')),
        );
      });

      it('should fire analytics event', () => {
        expect(trackEvent).toHaveBeenCalledWith(analyticsV2Event);
        expect(createAnalyticsEvent).toHaveBeenCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" after shift+enter', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('test', hardBreak(), '{<>}'))));
        insertText(editorView, '```', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('test'), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(trackEvent).toHaveBeenCalledWith(analyticsV2Event);
        expect(createAnalyticsEvent).toHaveBeenCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" in middle of paragraph', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('code ``{<>}block!'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('code '), code_block()('block!')),
        );
      });

      it('should fire analytics event', () => {
        expect(trackEvent).toHaveBeenCalledWith(analyticsV2Event);
        expect(createAnalyticsEvent).toHaveBeenCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" at end of paragraph', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p('code ``{<>}'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block without preceeding content', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p('code '), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(trackEvent).toHaveBeenCalledWith(analyticsV2Event);
        expect(createAnalyticsEvent).toHaveBeenCalledWith(analyticsV3Payload);
      });
    });

    describe('typing "```" after space', () => {
      beforeEach(() => {
        ({ editorView, sel } = editor(doc(p(' ``{<>}'))));
        insertText(editorView, '`', sel);
      });

      it('should convert "```" to a code block without first character', () => {
        expect(editorView.state.doc).toEqualDocument(
          doc(p(' '), code_block()()),
        );
      });

      it('should fire analytics event', () => {
        expect(trackEvent).toHaveBeenCalledWith(analyticsV2Event);
        expect(createAnalyticsEvent).toHaveBeenCalledWith(analyticsV3Payload);
      });
    });
  });
});
