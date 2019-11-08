import { ButtonAppearances } from '@atlaskit/button';
import * as React from 'react';
export declare type Props = {
    appearance?: ButtonAppearances;
    iconBefore?: React.ReactChild;
    isLoading?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    text?: React.ReactNode;
};
export declare const ShareButton: React.StatelessComponent<Props>;
export default ShareButton;
