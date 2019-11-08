import { FC } from 'react';
interface Props {
    /** The number to format. */
    children?: number | string;
    /** The maximum value to display. If value is 100, and max is 50, "50+" will be displayed */
    max?: number;
}
declare const Format: FC<Props>;
export default Format;
