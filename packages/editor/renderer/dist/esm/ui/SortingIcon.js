import { __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { SortOrder } from '@atlaskit/editor-common';
import Tooltip from '@atlaskit/tooltip';
export var StatusClassNames;
(function (StatusClassNames) {
    StatusClassNames["ASC"] = "sorting-icon-svg__asc";
    StatusClassNames["DESC"] = "sorting-icon-svg__desc";
    StatusClassNames["SORTING_NOT_ALLOWED"] = "sorting-icon-svg__not-allowed";
})(StatusClassNames || (StatusClassNames = {}));
var Wrapper = styled.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 2px solid #fff;\n  background-color: #f4f5f7;\n  align-items: center;\n  display: flex;\n  height: 23px;\n  justify-content: center;\n  margin: 8px;\n  padding: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  &.", " {\n    cursor: not-allowed;\n  }\n\n  svg {\n    transition: transform 0.3s cubic-bezier(0.15, 1, 0.3, 1);\n    transform-origin: 50% 50%;\n  }\n\n  svg.", " {\n    transform: rotate(-180deg);\n  }\n"], ["\n  border: 2px solid #fff;\n  background-color: #f4f5f7;\n  align-items: center;\n  display: flex;\n  height: 23px;\n  justify-content: center;\n  margin: 8px;\n  padding: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  &.", " {\n    cursor: not-allowed;\n  }\n\n  svg {\n    transition: transform 0.3s cubic-bezier(0.15, 1, 0.3, 1);\n    transform-origin: 50% 50%;\n  }\n\n  svg.", " {\n    transform: rotate(-180deg);\n  }\n"])), StatusClassNames.SORTING_NOT_ALLOWED, StatusClassNames.DESC);
var getClassName = function (status) {
    switch (status) {
        case SortOrder.ASC:
            return StatusClassNames.ASC;
        case SortOrder.DESC:
            return StatusClassNames.DESC;
    }
    return '';
};
var getTooltipTitle = function (status) {
    switch (status) {
        case SortOrder.NO_ORDER:
            return 'Sort column A → Z';
        case SortOrder.ASC:
            return 'Sort column A → Z';
        case SortOrder.DESC:
            return 'Sort column Z → A';
    }
    return '';
};
var notAllowedTooltip = "\u26A0\uFE0F  You can't sort a table with merged cell";
var SortingIcon = function (_a) {
    var isSortingAllowed = _a.isSortingAllowed, sortOrdered = _a.sortOrdered;
    var activated = sortOrdered !== SortOrder.NO_ORDER;
    var wrapperClassName = !isSortingAllowed
        ? StatusClassNames.SORTING_NOT_ALLOWED
        : '';
    var content = isSortingAllowed
        ? getTooltipTitle(sortOrdered)
        : notAllowedTooltip;
    return (React.createElement(Tooltip, { delay: 0, content: content, position: "top" },
        React.createElement(Wrapper, { className: wrapperClassName },
            React.createElement("svg", { width: 8, height: 12, className: getClassName(sortOrdered), fillOpacity: activated ? 1 : 0.5 },
                React.createElement("g", { fill: "none", fillRule: "evenodd" },
                    React.createElement("path", { d: "M-8-6h24v24H-8z" }),
                    React.createElement("path", { d: "M3 8.509V1c0-.552.449-1 1-1 .552 0 1 .448 1 1V8.51l1.217-1.206a1.05 1.05 0 011.477 0 1.03 1.03 0 01.004 1.463l-.003.002-2.956 2.93a1.053 1.053 0 01-1.478 0L.305 8.767a1.03 1.03 0 01.001-1.464 1.05 1.05 0 011.477 0L3 8.508z", fill: "#42526E" }))))));
};
export default SortingIcon;
var templateObject_1;
//# sourceMappingURL=SortingIcon.js.map