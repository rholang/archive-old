"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
exports.RepositionOnUpdate = function (_a) {
    var children = _a.children, scheduleUpdate = _a.scheduleUpdate, content = _a.content;
    react_1.useLayoutEffect(function () {
        // callback function from popper that repositions pop-up on content Update
        scheduleUpdate();
    }, [content, scheduleUpdate]);
    // wrapping in fragment to make TS happy (known issue with FC returning children)
    return react_1.default.createElement(react_1.Fragment, null, children);
};
//# sourceMappingURL=RepositionOnUpdate.js.map