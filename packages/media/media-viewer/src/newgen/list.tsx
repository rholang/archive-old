import * as React from 'react';
import { MediaClient, Identifier } from '@atlaskit/media-client';
import {
  hideControlsClassName,
  WithShowControlMethodProp,
} from '@atlaskit/media-ui';
import { ItemViewer } from './item-viewer';
import { HeaderWrapper, ListWrapper } from './styled';
import { Navigation } from './navigation';
import Header from './header';

export type Props = Readonly<
  {
    onClose?: () => void;
    onNavigationChange?: (selectedItem: Identifier) => void;
    defaultSelectedItem: Identifier;
    items: Identifier[];
    mediaClient: MediaClient;
  } & WithShowControlMethodProp
>;

export type State = {
  selectedItem: Identifier;
  previewCount: number;
};

export class List extends React.Component<Props, State> {
  state: State = {
    selectedItem: this.props.defaultSelectedItem,
    previewCount: 0,
  };

  render() {
    const { items } = this.props;

    return this.renderContent(items);
  }

  renderContent(items: Identifier[]) {
    const { mediaClient, onClose, showControls } = this.props;
    const { selectedItem } = this.state;

    return (
      <ListWrapper>
        <HeaderWrapper className={hideControlsClassName}>
          <Header
            mediaClient={mediaClient}
            identifier={selectedItem}
            onClose={onClose}
          />
        </HeaderWrapper>
        <ItemViewer
          mediaClient={mediaClient}
          identifier={selectedItem}
          showControls={showControls}
          onClose={onClose}
          previewCount={this.state.previewCount}
        />
        <Navigation
          items={items}
          selectedItem={selectedItem}
          onChange={this.onNavigationChange}
        />
      </ListWrapper>
    );
  }

  onNavigationChange = (selectedItem: Identifier) => {
    const { onNavigationChange, showControls } = this.props;
    if (onNavigationChange) {
      onNavigationChange(selectedItem);
    }
    if (showControls) {
      showControls();
    }

    this.setState({ selectedItem, previewCount: this.state.previewCount + 1 });
  };
}
