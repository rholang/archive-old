import * as React from 'react';
import { CardProps } from '../Card/types';
import { LazyCardWithUrlContent as CardWithUrlContentType } from './component';
export declare class CardWithURLRenderer extends React.PureComponent<CardProps> {
    static CardContent: typeof CardWithUrlContentType | null;
    static moduleImporter(target: CardWithURLRenderer): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
