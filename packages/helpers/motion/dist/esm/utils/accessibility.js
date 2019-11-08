/**
 * Use for any programatic motions needed at runtime.
 */
export var isReducedMotion = function () {
    var matches = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return matches;
};
/**
 * Use for any CSS based motion (animation or transition).
 * Always put at the end of your declaration for correct use of the cascade.
 */
export var prefersReducedMotion = function () { return ({
    '@media (prefers-reduced-motion: reduce)': {
        animation: 'none',
        transition: 'none',
    },
}); };
//# sourceMappingURL=accessibility.js.map