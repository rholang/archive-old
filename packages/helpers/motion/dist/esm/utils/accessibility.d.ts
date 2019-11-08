/**
 * Use for any programatic motions needed at runtime.
 */
export declare const isReducedMotion: () => boolean;
/**
 * Use for any CSS based motion (animation or transition).
 * Always put at the end of your declaration for correct use of the cascade.
 */
export declare const prefersReducedMotion: () => {
    '@media (prefers-reduced-motion: reduce)': {
        animation: string;
        transition: string;
    };
};
