import { PureComponent } from 'react';
import { AppearanceType, SizeType } from '../types';
export declare function DefaultImage({ appearance, size, title, isLoading, }: {
    appearance: AppearanceType;
    size: SizeType;
    title?: string;
    isLoading: boolean;
}): JSX.Element;
interface Props {
    appearance: AppearanceType;
    size: SizeType;
    alt?: string;
    src?: string;
}
declare type State = {
    hasError: boolean;
    isLoading: boolean;
};
export default class AvatarImage extends PureComponent<Props, State> {
    state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    handleLoadSuccess: () => void;
    handleLoadError: () => void;
    render(): JSX.Element;
}
export {};
