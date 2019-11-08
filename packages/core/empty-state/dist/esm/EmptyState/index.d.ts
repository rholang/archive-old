import { ReactNode } from 'react';
export declare type Sizes = 'narrow' | 'wide';
interface Props {
    /** Title that briefly describes the page to the user. */
    header: string;
    /** The main block of text that holds some additional information. */
    description?: string;
    /** It affects the width of the main container of this component, "wide" is a default one. */
    size?: Sizes;
    /** Image that will be shown above the title. The larger side of this image will be shrunk to 160px. */
    imageUrl?: string;
    /** Maximum width (in pixels) of the image, default value is 160. */
    maxImageWidth?: number;
    /** Maximum height (in pixels) of the image, default value is 160. */
    maxImageHeight?: number;
    /** Primary action button for the page, usually it will be something like "Create" (or "Retry" for error pages). */
    primaryAction?: ReactNode;
    /** Secondary action button for the page. */
    secondaryAction?: ReactNode;
    /** Button with link to some external resource like documentation or tutorial, it will be opened in a new tab. */
    tertiaryAction?: ReactNode;
    /** Shows spinner next to the action buttons. Primary and secondary action buttons are disabled when this prop is set to true. */
    isLoading?: boolean;
    /** Width of the image that is rendered in EmptyState component. It is useful when you want image to be of exact width to stop it bouncing around when loading in. Only set `height` if you want the image to resize down on smaller devices. */
    imageWidth?: number;
    /** Height of the image that is rendered in EmptyState component. It is useful when you want image to be of exact height to stop it bouncing around when loading in. Only set `height` if you want the image to resize down on smaller devices. */
    imageHeight?: number;
}
declare const EmptyState: ({ description, header, imageHeight, imageUrl, imageWidth, isLoading, maxImageHeight, maxImageWidth, primaryAction, secondaryAction, size, tertiaryAction, }: Props) => JSX.Element;
export default EmptyState;
