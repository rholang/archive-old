import React from 'react';
interface StaggeredEntranceProps {
    /**
     * Delay in ms.
     * How long each element group will be staggered.
     * This will be multipled by the column and row of the element.
     * Defaults to `50`.
     */
    delayStep?: number;
    /**
     * Number of columns the children elements will be displayed over.
     * Use `"responsive"` to have it calculate dynamically on the client side.
     * **NOTE:** This has a big caveat that the elements will be invisible until the client side Javascript executes.
     * If you have a fixed grid or list, set this to a specific number.
     * Defaults to `"responsive"`.
     */
    columns?: number | 'responsive';
    /**
     * Index of the column.
     * Useful if you want to have columns inside separate containers.
     * Starts from `0`.
     */
    column?: number;
    /**
     * Child entering elements, for example the `FadeIn` component.
     */
    children: JSX.Element | JSX.Element[];
}
/**
 * For a list of elements that need to animate in,
 * this should be used in conjunction with entering components.
 * This does not need Javascript to execute so it will run immediately for any SSR rendered React apps before the JS has executed.
 *
 * Will dynamically add delay to each child entering component.
 * Unfortunately all entering components _NEED_ to be a direct descendant.
 */
declare const StaggeredEntrance: React.FC<StaggeredEntranceProps>;
export default StaggeredEntrance;
