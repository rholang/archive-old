import { __assign, __rest } from "tslib";
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import React, { forwardRef } from 'react';
import { useTheme } from '../../theme';
import { IconButton } from '../IconButton';
export var Help = forwardRef(function (props, ref) {
    var tooltip = props.tooltip, iconButtonProps = __rest(props, ["tooltip"]);
    var navigation = useTheme().mode.navigation;
    return (React.createElement(IconButton, __assign({ icon: React.createElement(QuestionCircleIcon, { label: tooltip, secondaryColor: navigation.backgroundColor }), ref: ref, tooltip: tooltip }, iconButtonProps)));
});
//# sourceMappingURL=index.js.map