import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { Card as SmartCard } from '@atlaskit/smart-card';
import * as PropTypes from 'prop-types';
import { EditorView } from 'prosemirror-view';
import rafSchedule from 'raf-schd';

import { SmartCardProps, Card } from './genericCard';
import UnsupportedBlockNode from '../../unsupported-content/nodeviews/unsupported-block';
import {
  SelectionBasedNodeView,
  getPosHandler,
} from '../../../nodeviews/ReactNodeView';
import { registerCard } from '../pm-plugins/actions';

export interface Props {
  children?: React.ReactNode;
  node: PMNode;
  view: EditorView;
  selected?: boolean;
  getPos: getPosHandler;
}
export class BlockCardComponent extends React.PureComponent<SmartCardProps> {
  onClick = () => {};

  static contextTypes = {
    contextAdapter: PropTypes.object,
  };

  onResolve = (data: { url?: string; title?: string }) => {
    const { getPos, view } = this.props;
    if (!getPos) {
      return;
    }

    const { title, url } = data;

    // don't dispatch immediately since we might be in the middle of
    // rendering a nodeview
    rafSchedule(() =>
      view.dispatch(
        registerCard({
          title,
          url,
          pos: getPos(),
        })(view.state.tr),
      ),
    );
  };

  render() {
    const { node, selected, cardContext } = this.props;
    const { url, data } = node.attrs;

    // render an empty span afterwards to get around Webkit bug
    // that puts caret in next editable text element
    const cardInner = (
      <>
        <SmartCard
          url={url}
          data={data}
          appearance="block"
          isSelected={selected}
          onClick={this.onClick}
          onResolve={this.onResolve}
        />
        <span contentEditable={true} />
      </>
    );

    return (
      <div>
        {cardContext ? (
          <cardContext.Provider value={cardContext.value}>
            {cardInner}
          </cardContext.Provider>
        ) : (
          cardInner
        )}
      </div>
    );
  }
}

const WrappedBlockCard = Card(BlockCardComponent, UnsupportedBlockNode);

export class BlockCard extends SelectionBasedNodeView {
  render() {
    return (
      <WrappedBlockCard
        node={this.node}
        selected={this.insideSelection()}
        view={this.view}
        getPos={this.getPos}
      />
    );
  }
}
