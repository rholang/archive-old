/// <reference types="react" />
/// <reference types="@emotion/core" />
declare type ImageProps = {
    height?: number;
    maxHeight: number;
    maxWidth: number;
};
declare const Image: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLImageElement> & import("react").ImgHTMLAttributes<HTMLImageElement> & ImageProps, any, import("react").ClassAttributes<HTMLImageElement> & import("react").ImgHTMLAttributes<HTMLImageElement> & ImageProps>;
export default Image;
