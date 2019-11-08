import * as React from 'react';
import { LinkInputType } from './HyperlinkAddToolbar';
import { ProviderFactory } from '@atlaskit/editor-common';
export interface Props {
    providerFactory: ProviderFactory;
    onBlur?: (type: string, url: string, text: string, isTabPressed?: boolean) => void;
    onSubmit: (href: string, text: string, inputMethod: LinkInputType) => void;
    displayText: string;
    displayUrl?: string;
}
export default class Toolbar extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
