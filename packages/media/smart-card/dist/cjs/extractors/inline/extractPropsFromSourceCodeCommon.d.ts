/// <reference types="react" />
/// <reference types="@emotion/core" />
import { InlineCardResolvedViewProps } from '@atlaskit/media-ui';
export declare const isRepositoryResource: (json: any) => boolean;
export declare const buildName: (props: InlineCardResolvedViewProps, json: any) => {
    icon?: import("react").ReactNode;
    title: string;
    lozenge?: import("@atlaskit/media-ui").LozengeViewModel | undefined;
    isSelected?: boolean | undefined;
    link?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void) | undefined;
};
