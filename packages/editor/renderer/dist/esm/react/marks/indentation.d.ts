import * as React from 'react';
import { IndentationMarkAttributes } from '@atlaskit/adf-schema';
interface Props extends IndentationMarkAttributes {
    children: React.Props<any>;
}
export default function Indentation(props: Props): JSX.Element;
export {};
