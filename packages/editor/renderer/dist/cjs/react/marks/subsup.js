"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var isSub = function (type) {
    return type === 'sub';
};
function SubSup(props) {
    if (isSub(props.type)) {
        return React.createElement("sub", null, props.children);
    }
    return React.createElement("sup", null, props.children);
}
exports.default = SubSup;
//# sourceMappingURL=subsup.js.map