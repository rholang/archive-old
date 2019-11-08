import React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
interface Props extends WithAnalyticsEventsProps {
    /** Whether mouse events can pierce the blanket. If true, onBlanketClicked will not be fired */
    canClickThrough?: boolean;
    /** Whether the blanket has a tinted background color. */
    isTinted?: boolean;
    /** Handler function to be called when the blanket is clicked */
    onBlanketClicked?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
declare class Blanket extends React.Component<Props, {}> {
    static defaultProps: {
        canClickThrough: boolean;
        isTinted: boolean;
        onBlanketClicked: () => void;
    };
    render(): JSX.Element;
}
export { Blanket as BlanketWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "canClickThrough" | "isTinted" | "onBlanketClicked">, never> & Partial<Pick<Pick<Props, "canClickThrough" | "isTinted" | "onBlanketClicked">, "canClickThrough" | "isTinted" | "onBlanketClicked">> & Partial<Pick<{
    canClickThrough: boolean;
    isTinted: boolean;
    onBlanketClicked: () => void;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "canClickThrough" | "isTinted" | "onBlanketClicked" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
