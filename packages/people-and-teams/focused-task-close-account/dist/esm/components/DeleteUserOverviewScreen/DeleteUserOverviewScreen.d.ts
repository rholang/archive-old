import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { DeleteUserOverviewScreenProps } from './types';
export declare class DeleteUserOverviewScreen extends React.Component<DeleteUserOverviewScreenProps> {
    static defaultProps: Partial<DeleteUserOverviewScreenProps>;
    selectAdminOrSelfCopy: (adminCopy: FormattedMessage.MessageDescriptor, selfCopy: FormattedMessage.MessageDescriptor) => FormattedMessage.MessageDescriptor;
    displayFirstListElement: () => JSX.Element | null;
    displaySecondListElement: () => JSX.Element;
    displayThirdListElement: () => JSX.Element;
    displayFourthListElement: () => JSX.Element;
    render(): JSX.Element;
}
export default DeleteUserOverviewScreen;
