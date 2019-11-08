"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Heuristically check whether an element is a react element or not.
 * React elements have constructors for their type property but native elements use strings.
 */
exports.default = (function (element) {
    var type = element && element.type;
    var hasFunctionAsType = !!type && typeof type === 'function';
    var hasProps = element && element.props;
    return hasFunctionAsType && hasProps;
});
//# sourceMappingURL=isReactElement.js.map