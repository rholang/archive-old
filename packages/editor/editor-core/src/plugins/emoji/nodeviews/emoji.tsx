import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView, NodeView } from 'prosemirror-view';
import { ProviderFactory } from '@atlaskit/editor-common';
import Emoji from '../ui/Emoji';
import { ReactNodeView, getPosHandler } from '../../../nodeviews';
import InlineNodeWrapper, {
  createMobileInlineDomRef,
} from '../../../ui/InlineNodeWrapper';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { ZeroWidthSpace } from '../../../utils';
import { EmojiPluginOptions } from '../index';

export interface Props {
  providerFactory: ProviderFactory;
  options?: EmojiPluginOptions;
}

export class EmojiNodeView extends ReactNodeView<Props> {
  createDomRef() {
    if (
      this.reactComponentProps.options &&
      this.reactComponentProps.options.useInlineWrapper
    ) {
      return createMobileInlineDomRef();
    }

    return super.createDomRef();
  }

  render(props: Props) {
    const { providerFactory, options } = props;
    const { shortName, id, text } = this.node.attrs;

    return (
      <InlineNodeWrapper useInlineWrapper={options && options.useInlineWrapper}>
        <Emoji
          providers={providerFactory}
          id={id}
          shortName={shortName}
          fallback={text}
        />
        {options && options.allowZeroWidthSpaceAfter && ZeroWidthSpace}
      </InlineNodeWrapper>
    );
  }
}

export default function emojiNodeView(
  portalProviderAPI: PortalProviderAPI,
  providerFactory: ProviderFactory,
  options?: EmojiPluginOptions,
) {
  return (node: PMNode, view: EditorView, getPos: getPosHandler): NodeView =>
    new EmojiNodeView(node, view, getPos, portalProviderAPI, {
      providerFactory,
      options,
    }).init();
}
