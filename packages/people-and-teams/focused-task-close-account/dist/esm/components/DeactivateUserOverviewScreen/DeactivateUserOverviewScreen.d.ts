import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { DeactivateUserOverviewScreenProps } from './types';
export declare class DeactivateUserOverviewScreen extends React.Component<DeactivateUserOverviewScreenProps> {
    static defaultProps: Partial<DeactivateUserOverviewScreenProps>;
    selectAdminOrSelfCopy: (adminCopy: FormattedMessage.MessageDescriptor, selfCopy: FormattedMessage.MessageDescriptor) => FormattedMessage.MessageDescriptor;
    renderLoseAccessListElement: () => JSX.Element;
    renderPersonalDataListElement: () => JSX.Element;
    renderBillingListElement: () => JSX.Element;
    render(): JSX.Element;
}
export default DeactivateUserOverviewScreen;
