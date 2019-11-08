import * as React from 'react';
import { ReactNode } from 'react';
import { AvatarPickerDialog } from '.';
import { AvatarPickerDialogProps } from './types';
export interface AsyncAvatarPickerDialogState {
    AvatarPickerDialog?: typeof AvatarPickerDialog;
}
export declare type AsyncAvatarPickerDialogProps = AvatarPickerDialogProps & {
    placeholder?: ReactNode;
};
export default class AsyncAvatarPickerDialog extends React.PureComponent<AsyncAvatarPickerDialogProps, AsyncAvatarPickerDialogState> {
    static displayName: string;
    static AvatarPickerDialog?: typeof AvatarPickerDialog;
    state: {
        AvatarPickerDialog: typeof AvatarPickerDialog | undefined;
    };
    UNSAFE_componentWillMount(): Promise<void>;
    render(): {};
}
