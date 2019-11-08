import { __assign, __rest } from "tslib";
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import React, { forwardRef } from 'react';
import { useTheme } from '../../theme';
import { getIconButtonTheme } from './styles';
export var IconButton = forwardRef(function (props, ref) {
    var icon = props.icon, testId = props.testId, tooltip = props.tooltip, buttonProps = __rest(props, ["icon", "testId", "tooltip"]);
    var theme = useTheme();
    var button = (React.createElement(Button, __assign({ appearance: "primary", "data-testid": testId, iconBefore: icon, ref: ref, theme: getIconButtonTheme(theme) }, buttonProps)));
    if (tooltip) {
        return (React.createElement(Tooltip, { content: tooltip, hideTooltipOnClick: true }, button));
    }
    return button;
});
//# sourceMappingURL=index.js.map