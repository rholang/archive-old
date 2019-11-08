import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
export interface Props {
    showMoreToggeled: boolean;
    toggleRelatedArticles: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
export declare class ShowMoreArticlesButton extends React.Component<Props & InjectedIntlProps> {
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
