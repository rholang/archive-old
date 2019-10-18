import styled from 'styled-components';
import { HTMLAttributes, ComponentClass } from 'react';
import {
  editorFontSize,
  whitespaceSharedStyles,
  paragraphSharedStyles,
  listsSharedStyles,
  indentationSharedStyles,
  blockMarksSharedStyles,
  shadowSharedStyle,
  inlineNodeSharedStyle,
  dateSharedStyle,
  akEditorDeleteBackground,
  akEditorDeleteBorder,
  akEditorSelectedBorderBoldSize,
  tasksAndDecisionsStyles,
} from '@atlaskit/editor-common';

import { telepointerStyle } from '../../plugins/collab-edit/styles';
import { gapCursorStyles } from '../../plugins/gap-cursor/styles';
import { tableStyles } from '../../plugins/table/ui/styles';
import { placeholderStyles } from '../../plugins/placeholder/styles';
import { blocktypeStyles } from '../../plugins/block-type/styles';
import { codeBlockStyles } from '../../plugins/code-block/styles';
import { listsStyles } from '../../plugins/lists/styles';
import { ruleStyles } from '../../plugins/rule/styles';
import { mediaStyles } from '../../plugins/media/styles';
import { layoutStyles } from '../../plugins/layout/styles';
import { panelStyles } from '../../plugins/panel/styles';
import { fakeCursorStyles } from '../../plugins/fake-text-cursor/styles';
import { mentionsStyles } from '../../plugins/mentions/styles';
import { textFormattingStyles } from '../../plugins/text-formatting/styles';
import { placeholderTextStyles } from '../../plugins/placeholder-text/styles';
import { gridStyles } from '../../plugins/grid/styles';
import { linkStyles } from '../../plugins/hyperlink/styles';
import { extensionStyles } from '../../plugins/extension/ui/styles';

const ContentStyles: ComponentClass<
  HTMLAttributes<{}> & { theme: any; allowAnnotation?: boolean }
> = styled.div`
  /* Hack for ie11 that is being used in code block.
   * https://bitbucket.org/atlassian/atlaskit/src/ad09f6361109ece1aab316c8cbd8116ffb7963ef/packages/editor-core/src/schema/nodes/code-block.ts?fileviewer=file-view-default#code-block.ts-110
   */
  & .ie11 {
    overflow: visible;
    word-wrap: break-word;
  }

  .ProseMirror {
    outline: none;
    font-size: ${editorFontSize}px;

    ${whitespaceSharedStyles};
    ${paragraphSharedStyles};
    ${listsSharedStyles};
    ${indentationSharedStyles};
    ${shadowSharedStyle};
    ${inlineNodeSharedStyle};
  }

  .ProseMirror-hideselection *::selection {
    background: transparent;
  }

  .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }

  .ProseMirror-selectednode {
    outline: none;
  }

  .ProseMirror-selectednode:empty {
    outline: 2px solid #8cf;
  }

  .inlineCardView-content-wrap {
    max-width: calc(100% - 20px);
    vertical-align: top;
    word-break: break-all;
  }

  .inlineCardView-content-wrap .card {
    padding-left: 2px;
    padding-right: 2px;
  }

  .blockCardView-content-wrap {
    display: inline-block;
  }

  /* fix cursor alignment */
  .ProseMirror .emoji-common-node {
    display: inline;
    vertical-align: baseline;

    img {
      display: inline-block;
      vertical-align: middle;
    }
  }

  ${blocktypeStyles}
  ${textFormattingStyles}
  ${placeholderTextStyles}
  ${placeholderStyles}
  ${codeBlockStyles}
  ${listsStyles}
  ${ruleStyles}
  ${mediaStyles}
  ${layoutStyles}
  ${telepointerStyle}
  ${gapCursorStyles};
  ${tableStyles};
  ${panelStyles}
  ${fakeCursorStyles}
  ${mentionsStyles}
  ${tasksAndDecisionsStyles}
  ${gridStyles}
  ${linkStyles}
  ${blockMarksSharedStyles}
  ${dateSharedStyle}
  ${extensionStyles}

  /** Global selector for extensions, as .danger tag is assigned to root level node which is unaccessible from triggered child node **/
  /* Danger when nested node */
  .danger .extension-container {
    background: rgb(255, 189, 173, 0.5); /* R75 with 50% opactiy */
    transition: opacity 0s;
  }

  /* Danger when top level node */
  .danger > span > .extension-container {
    background: ${akEditorDeleteBackground};
    box-shadow: 0 0 0 ${akEditorSelectedBorderBoldSize}px ${akEditorDeleteBorder};
  }

  .panelView-content-wrap {
    box-sizing: border-box;
  }

  .mediaGroupView-content-wrap ul {
    padding: 0;
  }

  /** Needed to override any cleared floats, e.g. image wrapping */

  span.fabric-editor-annotation {
    /* Y200 with 40% opacity */
    background-color: ${({ allowAnnotation }: any) =>
      allowAnnotation ? 'rgba(255, 196, 0, 0.4)' : 'transparent'};
  }

  div.fabric-editor-block-mark[class^='fabric-editor-align'] {
    clear: none !important;
  }

  .fabric-editor-align-end {
    text-align: right;
  }

  .fabric-editor-align-start {
    text-align: left;
  }

  .fabric-editor-align-center {
    text-align: center;
  }

  .hyperlink-floating-toolbar {
    padding: 0;
  }

  /* Link icon in the Atlaskit package 
     is bigger than the others
  */
  .hyperlink-open-link {
    svg {
      max-width: 18px;
    }
    &[href] {
      padding: 0 4px;
    }
  }

`;

export default ContentStyles;
