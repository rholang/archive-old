import * as React from 'react';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
import { SmartMediaEditorProps } from './smartMediaEditor';
declare type SmartEditorWithMediaClientConfigProps = WithMediaClientConfigProps<SmartMediaEditorProps>;
declare type SmartEditorWithMediaClientConfigComponent = React.ComponentType<SmartEditorWithMediaClientConfigProps>;
interface AsyncSmartMediaEditorState {
    SmartMediaEditor?: SmartEditorWithMediaClientConfigComponent;
}
export default class AsyncSmartMediaEditor extends React.PureComponent<SmartEditorWithMediaClientConfigProps & AsyncSmartMediaEditorState, AsyncSmartMediaEditorState & {
    isErrored: boolean;
}> {
    static displayName: string;
    static SmartMediaEditor?: SmartEditorWithMediaClientConfigComponent;
    state: {
        SmartMediaEditor: React.ComponentClass<WithMediaClientConfigProps<SmartMediaEditorProps>, any> | React.FunctionComponent<WithMediaClientConfigProps<SmartMediaEditorProps>> | undefined;
        isErrored: boolean;
    };
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element | null;
}
export {};
