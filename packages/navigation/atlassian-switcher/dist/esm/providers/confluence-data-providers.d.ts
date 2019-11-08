import React from 'react';
import { ProviderResult } from './as-data-provider';
import { CustomLink } from '../types';
export declare const MANAGE_HREF = "/wiki/plugins/servlet/customize-application-navigator";
export declare const CustomLinksProvider: ({ disableCustomLinks, children, }: {
    disableCustomLinks?: boolean | undefined;
    children: (customLinks: ProviderResult<CustomLink[]>) => React.ReactNode;
}) => JSX.Element;
