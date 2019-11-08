import { NavigationTheme } from '../../theme';
import { AtlassianNavigationProps } from './types';
export declare const AtlassianNavigation: {
    (props: AtlassianNavigationProps & {
        theme: NavigationTheme;
    }): JSX.Element;
    defaultProps: {
        primaryItems: never[];
        moreLabel: string;
        theme: NavigationTheme;
    };
};
