import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ArticleFeedback } from '../../../model/Article';
import { HelpContextInterface } from '../../HelpContext';
interface Props {
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
}
interface State {
    wasHelpful: boolean | null;
}
export declare class ArticleWasHelpfulForm extends React.Component<Props & InjectedIntlProps & HelpContextInterface, State> {
    state: {
        wasHelpful: null;
    };
    onWasHelpfulOptionClicked: (wasHelpful: boolean) => void;
    onRateSubmit: (articleFeedback: ArticleFeedback) => void;
    onRateSubmitCancel: () => void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<any, string | number | symbol>, string | number | symbol> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, string | number | symbol> & React.RefAttributes<any>>;
export default _default;
