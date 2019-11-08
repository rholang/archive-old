import { __read } from "tslib";
import { cloneElement, useState, useRef, useLayoutEffect, Children, } from 'react';
/**
 * For a list of elements that need to animate in,
 * this should be used in conjunction with entering components.
 * This does not need Javascript to execute so it will run immediately for any SSR rendered React apps before the JS has executed.
 *
 * Will dynamically add delay to each child entering component.
 * Unfortunately all entering components _NEED_ to be a direct descendant.
 */
var StaggeredEntrance = function (_a) {
    var children = _a.children, column = _a.column, _b = _a.columns, columns = _b === void 0 ? 'responsive' : _b, _c = _a.delayStep, delayStep = _c === void 0 ? 50 : _c;
    var elementRefs = useRef([]);
    var _d = __read(useState(function () {
        if (typeof columns === 'number') {
            // A hardcoded columns is set so bail out and set it to that!
            return columns;
        }
        if (typeof column === 'number') {
            // A hardcoded column is set so we will set actualColumns to be 1.
            return 1;
        }
        // We are in "responsive" mode.
        // So we will be calculating when the Javascript executes on the client how many columns there will be.
        return 0;
    }), 2), actualColumns = _d[0], setActualColumns = _d[1];
    useLayoutEffect(function () {
        // We want to only run this code when we are in "responsive" mode.
        // It is assumed we are in responsive mode if `columns` is "responsive",
        // we have children element refs ready to be read (i.e. if there are no children this won't run as well)
        // and finally that `actualColumns` is `0` - this is because for the first render cycle `actualColumns` will be `0` (set above)
        // and then after this layout effect runs the value for `actualColumns` will then be calculated and set.
        if (columns === 'responsive' &&
            elementRefs.current.length &&
            actualColumns === 0) {
            var currentTop = 0;
            var numberColumns = 0;
            if (elementRefs.current.length <= 1) {
                setActualColumns(1);
                return;
            }
            // We set the current top to the first elements.
            // We will be comparing this and incrementing the column count
            // until we hit an element that has a different offset top (or we run out of elements).
            currentTop = elementRefs.current[0]
                ? elementRefs.current[0].offsetTop
                : 0;
            for (var i = 0; i < elementRefs.current.length; i++) {
                var child = elementRefs.current[i];
                if (!child) {
                    break;
                }
                if (currentTop === child.offsetTop) {
                    numberColumns += 1;
                    if (elementRefs.current.length - 1 === i) {
                        setActualColumns(numberColumns);
                    }
                    continue;
                }
                setActualColumns(numberColumns);
                break;
            }
        }
        // We only want this effect to run once - on initial mount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return Children.toArray(children).map(function (child, index) {
        var currentColumn = column || index % actualColumns;
        var currentRow = Math.floor(index / actualColumns);
        var distanceFromTopLeftElement = currentRow + currentColumn;
        // We don't want loads of elements to have the same staggered delay as it ends up looking slow for users.
        // To get around that we calculate the logarithm using `distanceFromTopLeftElement` which ends making
        // elements appear faster the further away from the top left element.
        var delay = Math.ceil(Math.log(distanceFromTopLeftElement + 1) * delayStep * 1.5);
        return cloneElement(child, {
            delay: delay,
            isPaused: actualColumns === 0,
            ref: function (element) {
                return (elementRefs.current[index] = element);
            },
        });
        // Types don't support returning an array unfortunately.
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
    });
};
export default StaggeredEntrance;
//# sourceMappingURL=staggered-entrance.js.map