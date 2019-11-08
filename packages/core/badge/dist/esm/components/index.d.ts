import { FC } from 'react';
import { ThemeProp } from '@atlaskit/theme/components';
import { ThemeAppearance, ThemeProps, ThemeTokens } from '../theme';
export interface BadgeProps {
    /** Affects the visual style of the badge. */
    appearance?: ThemeAppearance;
    /**
     * Supersedes the `value` props. The value displayed within the badge. A string can be provided for
     * custom-formatted numbers, however badge should only be used in cases where you want to represent
     * a number.
     */
    children?: number | string;
    /** The maximum value to display. If value is 100, and max is 50, "50+" will be displayed */
    max?: number;
    /** The theme the component should use. */
    theme?: ThemeProp<ThemeTokens, ThemeProps>;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
