import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { DeleteUserContentPreviewScreenProps, DeleteUserContentPreviewScreenState } from './types';
export declare class DeleteUserContentPreviewScreen extends React.Component<DeleteUserContentPreviewScreenProps, DeleteUserContentPreviewScreenState> {
    state: DeleteUserContentPreviewScreenState;
    componentDidMount(): void;
    handleClickSection: (userName: string, position: number) => () => void;
    isCardSelected: (position: number) => boolean;
    selectAdminOrSelfCopy: (adminCopy: FormattedMessage.MessageDescriptor, selfCopy: FormattedMessage.MessageDescriptor) => FormattedMessage.MessageDescriptor;
    render(): JSX.Element;
}
export default DeleteUserContentPreviewScreen;
