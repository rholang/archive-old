import React, { Ref } from 'react';
export declare const fadeInAnimation: () => {
    from: {
        opacity: number;
        transform: string;
    };
    to: {
        opacity: number;
        transform: string;
    };
};
interface FadeInProps {
    /**
     * Delay in ms.
     * The animation will be delayed this long before running.
     * Defaults to `0`.
     */
    delay?: number;
    /**
     * Duration in ms.
     * How long the animation will take.
     * Defaults to `largeDurationMs`.
     */
    duration?: number;
    /**
     * Use to pause the animation.
     */
    isPaused?: boolean;
    /**
     * Children as function.
     * Will be passed `props` for you to hook up.
     */
    children: (props: {
        className: string;
        ref: Ref<any>;
    }) => JSX.Element;
}
/**
 * For a single element that needs a fade in entering animation.
 * This does not need Javascript to execute so it will run immediately for any SSR rendered React apps before the JS has executed.
 *
 * Will add a `className` to the direct child.
 */
declare const FadeIn: React.FC<FadeInProps>;
export default FadeIn;
