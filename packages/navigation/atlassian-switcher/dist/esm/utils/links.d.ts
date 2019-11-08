import * as React from 'react';
import { FormattedMessage as FormattedMessageNamespace } from 'react-intl';
import { AvailableProductsResponse, WorklensProductType, Product, ProvisionedProducts, CurrentSite } from '../types';
import { CustomLink, RecentContainer, SwitcherChildItem } from '../types';
import { IconType } from './icon-themes';
interface MessagesDict {
    [index: string]: FormattedMessageNamespace.MessageDescriptor;
}
export declare type SwitcherItemType = {
    key: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    Icon: IconType;
    href: string;
    childItems?: SwitcherChildItem[];
    productType?: WorklensProductType;
    analyticsAttributes?: {
        [key: string]: string;
    };
};
export declare type RecentItemType = SwitcherItemType & {
    type: string;
    description: React.ReactNode;
};
export declare const OBJECT_TYPE_TO_LABEL_MAP: MessagesDict;
export declare const getObjectTypeLabel: (type: string) => React.ReactNode;
export declare const getFixedProductLinks: (params: {
    isDiscoverMoreForEveryoneEnabled: boolean;
}) => SwitcherItemType[];
declare type AvailableProductDetails = Pick<SwitcherItemType, 'label' | 'Icon' | 'href' | 'description'>;
export declare const AVAILABLE_PRODUCT_DATA_MAP: {
    [productKey in WorklensProductType]: AvailableProductDetails;
};
export declare const getAvailableProductLinks: (availableProducts: AvailableProductsResponse, cloudId: string | null | undefined) => SwitcherItemType[];
export declare const getAdministrationLinks: (isAdmin: boolean, isDiscoverMoreForEveryoneEnabled: boolean, isEmceeLinkEnabled: boolean, product?: Product | undefined, isDiscoverSectionEnabled?: boolean | undefined) => SwitcherItemType[];
export declare const getSuggestedProductLink: (provisionedProducts: ProvisionedProducts, productRecommendations: import("../types").RecommendationItem[], isDiscoverSectionEnabled?: boolean | undefined) => SwitcherItemType[];
export declare function getDiscoverSectionLinks({ isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, }: {
    isDiscoverMoreForEveryoneEnabled: boolean;
    isEmceeLinkEnabled: boolean;
    product?: Product;
}): SwitcherItemType[];
export declare const getProvisionedProducts: (availableProducts: AvailableProductsResponse) => ProvisionedProducts;
export declare const getCustomLinkItems: (list: CustomLink[], currentSite: CurrentSite) => SwitcherItemType[];
export declare const getRecentLinkItems: (list: RecentContainer[], currentSite: CurrentSite) => RecentItemType[];
export {};
