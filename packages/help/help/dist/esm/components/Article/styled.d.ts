/** @jsx jsx */
/// <reference types="react" />
/// <reference types="@emotion/core" />
interface ArticleContainerProps {
    isSearchVisible: boolean;
}
export declare const ArticleContainer: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ArticleContainerProps, any>;
/**
 * Loading container
 */
declare type LoadingRectangleProps = {
    contentWidth?: string;
    contentHeight?: string;
    marginTop?: string;
};
export declare const LoadingRectangle: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LoadingRectangleProps, any>;
export {};
