/// <reference types="react" />
import { CardState } from '../../state/types';
export declare type BlockCardProps = {
    url: string;
    cardState: CardState;
    handleAuthorize: (() => void) | undefined;
    handleErrorRetry: () => void;
    handleFrameClick: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
    isSelected?: boolean;
    onResolve?: (data: {
        url?: string;
        title?: string;
    }) => void;
};
