import React, { Fragment, useLayoutEffect } from 'react';
export var RepositionOnUpdate = function (_a) {
    var children = _a.children, scheduleUpdate = _a.scheduleUpdate, content = _a.content;
    useLayoutEffect(function () {
        // callback function from popper that repositions pop-up on content Update
        scheduleUpdate();
    }, [content, scheduleUpdate]);
    // wrapping in fragment to make TS happy (known issue with FC returning children)
    return React.createElement(Fragment, null, children);
};
//# sourceMappingURL=RepositionOnUpdate.js.map