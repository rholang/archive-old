import * as React from 'react';
interface Props {
    avatarUrl: string | null;
    fallbackComponent: React.ReactNode;
}
interface State {
    imageLoadFailed: boolean;
}
export default class Avatar extends React.Component<Props, State> {
    state: {
        imageLoadFailed: boolean;
    };
    render(): JSX.Element;
    private onError;
}
export {};
