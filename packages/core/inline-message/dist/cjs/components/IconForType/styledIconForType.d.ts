/// <reference types="react" />
/// <reference types="@emotion/core" />
import { IconType } from '../../types';
interface Props {
    appearance: IconType;
    isHovered?: boolean;
    isOpen?: boolean;
}
declare const IconWrapper: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & Props, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & Props>;
export default IconWrapper;
