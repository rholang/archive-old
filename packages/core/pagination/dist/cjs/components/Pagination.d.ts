import React from 'react';
import renderDefaultEllipsis from './renderEllipsis';
import collapseRangeHelper from '../util/collapseRange';
import { PaginationPropTypes } from '../types';
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<PaginationPropTypes, "max" | "onChange" | "collapseRange" | "components" | "defaultSelectedIndex" | "getPageLabel" | "i18n" | "innerStyles" | "pages" | "selectedIndex" | "renderEllipsis">, "getPageLabel" | "pages" | "selectedIndex"> & Partial<Pick<Pick<PaginationPropTypes, "max" | "onChange" | "collapseRange" | "components" | "defaultSelectedIndex" | "getPageLabel" | "i18n" | "innerStyles" | "pages" | "selectedIndex" | "renderEllipsis">, "max" | "onChange" | "collapseRange" | "components" | "defaultSelectedIndex" | "i18n" | "innerStyles" | "renderEllipsis">> & Partial<Pick<{
    collapseRange: typeof collapseRangeHelper;
    components: {};
    defaultSelectedIndex: number;
    i18n: {
        prev: string;
        next: string;
    };
    innerStyles: {};
    max: number;
    onChange: () => void;
    renderEllipsis: typeof renderDefaultEllipsis;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "max" | "onChange" | "key" | "analyticsContext" | "collapseRange" | "components" | "defaultSelectedIndex" | "getPageLabel" | "i18n" | "innerStyles" | "pages" | "selectedIndex" | "renderEllipsis"> & React.RefAttributes<any>>;
export default _default;
