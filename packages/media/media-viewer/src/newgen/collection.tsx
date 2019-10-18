import * as React from 'react';
import {
  MediaClient,
  FileIdentifier,
  Identifier,
  isExternalImageIdentifier,
} from '@atlaskit/media-client';
import { Outcome } from './domain';
import ErrorMessage, { createError, MediaViewerError } from './error';
import { List } from './list';
import { Subscription } from 'rxjs/Subscription';
import { toIdentifier } from './utils';
import { Spinner } from './loading';
import { MediaCollectionItem } from '@atlaskit/media-store';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';

export type Props = Readonly<
  {
    onClose?: () => void;
    defaultSelectedItem?: Identifier;
    collectionName: string;
    mediaClient: MediaClient;
    pageSize: number;
  } & WithShowControlMethodProp
>;

export type State = {
  items: Outcome<MediaCollectionItem[], MediaViewerError>;
};

const initialState: State = { items: Outcome.pending() };

export class Collection extends React.Component<Props, State> {
  state: State = initialState;

  private subscription?: Subscription;

  UNSAFE_componentWillUpdate(nextProps: Props) {
    if (this.needsReset(this.props, nextProps)) {
      this.release();
      this.init(nextProps);
    }
  }

  componentWillUnmount() {
    this.release();
  }

  componentDidMount() {
    this.init(this.props);
  }

  render() {
    const {
      defaultSelectedItem,
      mediaClient,
      onClose,
      collectionName,
      showControls,
    } = this.props;

    return this.state.items.match({
      pending: () => <Spinner />,
      successful: items => {
        const identifiers = items.map(x => toIdentifier(x, collectionName));
        const item = defaultSelectedItem
          ? { ...defaultSelectedItem, collectionName }
          : identifiers[0];

        return (
          <List
            items={identifiers}
            defaultSelectedItem={item}
            mediaClient={mediaClient}
            onClose={onClose}
            onNavigationChange={this.onNavigationChange}
            showControls={showControls}
          />
        );
      },
      failed: err => <ErrorMessage error={err} />,
    });
  }

  private init(props: Props) {
    this.setState(initialState);
    const {
      collectionName,
      mediaClient,
      defaultSelectedItem,
      pageSize,
    } = props;
    this.subscription = mediaClient.collection
      .getItems(collectionName, { limit: pageSize })
      .subscribe({
        next: items => {
          this.setState({
            items: Outcome.successful(items),
          });
          if (defaultSelectedItem && this.shouldLoadNext(defaultSelectedItem)) {
            mediaClient.collection.loadNextPage(collectionName, {
              limit: pageSize,
            });
          }
        },
        error: () => {
          this.setState({
            items: Outcome.failed(createError('metadataFailed')),
          });
        },
      });
  }

  private release() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private needsReset(propsA: Props, propsB: Props) {
    return (
      propsA.collectionName !== propsB.collectionName ||
      propsA.mediaClient !== propsB.mediaClient
    );
  }

  private onNavigationChange = (item: Identifier) => {
    const { mediaClient, collectionName, pageSize } = this.props;
    if (this.shouldLoadNext(item)) {
      mediaClient.collection.loadNextPage(collectionName, {
        limit: pageSize,
      });
    }
  };

  private shouldLoadNext(selectedItem: Identifier): boolean {
    if (isExternalImageIdentifier(selectedItem)) {
      return false;
    }
    const { items } = this.state;
    return items.match({
      pending: () => false,
      failed: () => false,
      successful: items =>
        items.length !== 0 && this.isLastItem(selectedItem, items),
    });
  }

  private isLastItem(
    selectedItem: FileIdentifier,
    items: MediaCollectionItem[],
  ) {
    const lastItem = items[items.length - 1];

    const isLastItem =
      selectedItem.id === lastItem.id &&
      selectedItem.occurrenceKey === lastItem.occurrenceKey;
    return isLastItem;
  }
}
