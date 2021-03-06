import { __assign, __rest } from "tslib";
/**  @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';
export default forwardRef(function (
// @ts-ignore - createAnalyticsEvent is injected from WithAnalyticsEvents HOC
_a, ref) {
    var createAnalyticsEvent = _a.createAnalyticsEvent, attributesFn = _a.attributesFn, testId = _a.testId, props = __rest(_a, 
    // @ts-ignore - createAnalyticsEvent is injected from WithAnalyticsEvents HOC
    ["createAnalyticsEvent", "attributesFn", "testId"]);
    return (jsx("input", __assign({ type: "checkbox" }, attributesFn({
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