import { __assign, __rest } from "tslib";
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import React, { forwardRef } from 'react';
import { useTheme } from '../../theme';
import { getPrimaryButtonTheme } from './styles';
export var PrimaryButton = forwardRef(function (props, ref) {
    var children = props.children, testId = props.testId, tooltip = props.tooltip, buttonProps = __rest(props, ["children", "testId", "tooltip"]);
    var theme = useTheme();
    var button = (React.createElement(Button, __assign({ appearance: "primary", "data-testid": testId, ref: ref, theme: getPrimaryButtonTheme(theme) }, buttonProps), children));
    if (tooltip) {
        return (React.createElement(Tooltip, { content: tooltip, hideTooltipOnClick: true }, button));
    }
    return button;
});
//# sourceMappingURL=index.js.map