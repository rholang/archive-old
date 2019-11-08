"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var lodash_throttle_1 = tslib_1.__importDefault(require("lodash.throttle"));
var THROTTLE_INTERVAL = 100;
var ITEM_APPROX_MINWIDTH = 60;
var calculateHash = function (w, n) { return w + '#' + n; };
var OverflowContext = react_1.createContext({
    isVisible: true,
});
exports.OverflowProvider = function (_a) {
    var children = _a.children, isVisible = _a.isVisible;
    var Provider = OverflowContext.Provider;
    var value = react_1.useMemo(function () { return ({ isVisible: isVisible }); }, [isVisible]);
    return react_1.default.createElement(Provider, { value: value }, children);
};
exports.useOverflowStatus = function () { return react_1.useContext(OverflowContext); };
exports.useOverflowController = function (nodes) {
    var items = react_1.default.Children.toArray(nodes);
    var _a = tslib_1.__read(react_1.useState(9999), 2), width = _a[0], setWidth = _a[1];
    var _b = tslib_1.__read(react_1.useState(items.length), 2), itemsLimit = _b[0], setItemsLimit = _b[1];
    var _c = tslib_1.__read(react_1.useState({}), 2), forceEffectValue = _c[0], triggerForceEffect = _c[1];
    var itemsWidths = react_1.useRef([]).current;
    var hashRef = react_1.useRef('');
    var throttleSetWidth = react_1.useCallback(lodash_throttle_1.default(setWidth, THROTTLE_INTERVAL), [
        setWidth,
    ]);
    react_1.useEffect(function () {
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