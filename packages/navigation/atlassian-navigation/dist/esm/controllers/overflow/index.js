import { __read } from "tslib";
import React, { useState, useRef, useCallback, useEffect, useContext, createContext, useMemo, } from 'react';
import throttle from 'lodash.throttle';
var THROTTLE_INTERVAL = 100;
var ITEM_APPROX_MINWIDTH = 60;
var calculateHash = function (w, n) { return w + '#' + n; };
var OverflowContext = createContext({
    isVisible: true,
});
export var OverflowProvider = function (_a) {
    var children = _a.children, isVisible = _a.isVisible;
    var Provider = OverflowContext.Provider;
    var value = useMemo(function () { return ({ isVisible: isVisible }); }, [isVisible]);
    return React.createElement(Provider, { value: value }, children);
};
export var useOverflowStatus = function () { return useContext(OverflowContext); };
export var useOverflowController = function (nodes) {
    var items = React.Children.toArray(nodes);
    var _a = __read(useState(9999), 2), width = _a[0], setWidth = _a[1];
    var _b = __read(useState(items.length), 2), itemsLimit = _b[0], setItemsLimit = _b[1];
    var _c = __read(useState({}), 2), forceEffectValue = _c[0], triggerForceEffect = _c[1];
    var itemsWidths = useRef([]).current;
    var hashRef = useRef('');
    var throttleSetWidth = useCallback(throttle(setWidth, THROTTLE_INTERVAL), [
        setWidth,
    ]);
    useEffect(function () {
        var lastItemWidth = itemsWidths[itemsLimit];
        var wasJustLimited = lastItemWidth < 0;
        var currentHash = calculateHash(width, itemsLimit);
        if (hashRef.current === currentHash) {
            // after removing an item, if width has not changed yet we shedule a force update
            // to handle case where removing an item does not actually trigger width change
            var t_1 = setTimeout(function () {
                hashRef.current = '';
                triggerForceEffect({});
            }, THROTTLE_INTERVAL + 50);
            return function () { return clearTimeout(t_1); };
        }
        if (wasJustLimited) {
            // width was updated either via resize or after changing the limit
            // we cap the width between ITEM_APPROX_MINWIDTH and 2*ITEM_APPROX_MINWIDTH
            // because width is throttled so when expanding/resizing it fast, partialWidth
            // will not be reliable (edge case)
            var partialWidth = Math.max(Math.min(width + lastItemWidth, ITEM_APPROX_MINWIDTH * 2), ITEM_APPROX_MINWIDTH);
            itemsWidths[itemsLimit] = partialWidth;
        }
        if (width < ITEM_APPROX_MINWIDTH * 0.9 && itemsLimit) {
            // if current width is less than an item approx width we remove an item
            // marking the width as negative so we will calculate it on width update
            // plus we set the has to stabilise not removing more than one element
            // until we are sure width was updated
            setItemsLimit(itemsLimit - 1);
            itemsWidths[itemsLimit - 1] = -(width || 1);
            hashRef.current = calculateHash(width, itemsLimit - 1);
            return;
        }
        if (width - itemsWidths[itemsLimit] > ITEM_APPROX_MINWIDTH * 1.1 &&
            itemsLimit < items.length) {
            // if we have enough room to accomodate next item width we increase the limit
            setItemsLimit(itemsLimit + 1);
            hashRef.current = calculateHash(width, itemsLimit + 1);
            return;
        }
    }, [width, hashRef, itemsLimit, itemsWidths, forceEffectValue, items.length]);
    return {
        visibleItems: items.slice(0, itemsLimit),
        overflowItems: items.slice(itemsLimit),
        updateWidth: throttleSetWidth,
    };
};
//# sourceMappingURL=index.js.map