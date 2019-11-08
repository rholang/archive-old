"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**  @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
exports.default = react_1.forwardRef(function (
// @ts-ignore - createAnalyticsEvent is injected from WithAnalyticsEvents HOC
_a, ref) {
    var createAnalyticsEvent = _a.createAnalyticsEvent, attributesFn = _a.attributesFn, testId = _a.testId, props = tslib_1.__rest(_a, 
    // @ts-ignore - createAnalyticsEvent is injected from WithAnalyticsEvents HOC
    ["createAnalyticsEvent", "attributesFn", "testId"]);
    return (core_1.jsx("input", tslib_1.__assign({ type: "checkbox" }, attributesFn({
        disabled: props.disabled,
        checked: props.checked,
        required: props.required,
    }), props, { ref: ref, css: {
            left: '50%',
            margin: 0,
            opacity: 0,
            padding: 0,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
        }, "data-testid": testId })));
});
//# sourceMappingURL=HiddenCheckbox.js.map