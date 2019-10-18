import React from 'react';

import { CardProps } from '../Card/types';
import { CardWithDataContent as CardWithDataContentType } from './component';

export class CardWithDataRenderer extends React.PureComponent<CardProps> {
  static CardContent: typeof CardWithDataContentType | null = null;

  static moduleImporter(target: CardWithDataRenderer) {
    import(/* webpackChunkName:"@atlaskit-internal-smartcard-datacardcontent" */ './component').then(
      module => {
        CardWithDataRenderer.CardContent = module.CardWithDataContent;
        target.forceUpdate();
      },
    );
  }

  componentDidMount() {
    if (CardWithDataRenderer.CardContent === null) {
      (this.props.importer || CardWithDataRenderer.moduleImporter)(this);
    }
  }

  render() {
    const { appearance, data, isSelected, onClick, onResolve } = this.props;
    if (!data) {
      throw new Error(
        '@atlaskit/smart-cards: you are trying to render a card with data, but does not provide any',
      );
    }
    if (CardWithDataRenderer.CardContent) {
      return (
        <CardWithDataRenderer.CardContent
          appearance={appearance}
          data={data}
          isSelected={isSelected}
          onClick={onClick}
          onResolve={onResolve}
        />
      );
    }
    return <div data-card-with-data />;
  }
}
