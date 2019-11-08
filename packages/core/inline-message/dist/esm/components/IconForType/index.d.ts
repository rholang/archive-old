import React from 'react';
import { IconType } from '../../types';
interface Props {
    isHovered: boolean;
    isOpen: boolean;
    type: IconType;
}
export default class SelectedIconForType extends React.Component<Props, {}> {
    render(): JSX.Element;
}
export {};
