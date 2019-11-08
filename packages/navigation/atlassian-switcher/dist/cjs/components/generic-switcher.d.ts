import { Messages } from 'react-intl';
import { Product, FeatureMap, DiscoverMoreCallback, TriggerXFlowCallback } from '../types';
import { AvailableProductsDataProvider } from '../providers/products-data-provider';
import { WithTheme } from '../theme/types';
declare type GenericSwitcherProps = WithTheme & {
    cloudId?: string;
    messages: Messages;
    features: FeatureMap;
    triggerXFlow: TriggerXFlowCallback;
    onDiscoverMoreClicked: DiscoverMoreCallback;
    product: Exclude<Product, Product.JIRA | Product.CONFLUENCE>;
    availableProductsDataProvider?: AvailableProductsDataProvider;
};
declare const _default: (props: GenericSwitcherProps) => JSX.Element;
export default _default;
