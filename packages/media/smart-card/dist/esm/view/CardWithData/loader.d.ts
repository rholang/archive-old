import React from 'react';
import { CardProps } from '../Card/types';
import { CardWithDataContent as CardWithDataContentType } from './component';
export declare class CardWithDataRenderer extends React.PureComponent<CardProps> {
    static CardContent: typeof CardWithDataContentType | null;
    static moduleImporter(target: CardWithDataRenderer): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
