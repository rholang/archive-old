import { __assign, __rest } from "tslib";
import * as React from 'react';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';
import * as colors from '@atlaskit/theme/colors';
import { gridSize } from '@atlaskit/theme/constants';
import { Transition } from 'react-transition-group';
import { injectIntl } from 'react-intl';
import Button from '@atlaskit/button';
import { messages } from '../../messages';
import { TRANSITION_DURATION_MS } from '../constants';
import { withHelp } from '../HelpContext';
import CloseButton from './CloseButton';
import { HeaderContainer, HeaderTitle, BackButtonContainer } from './styled';
var buttonTheme = {
    color: colors.N90,
};
var defaultStyle = {
    transition: "left " + TRANSITION_DURATION_MS + "ms, opacity " + TRANSITION_DURATION_MS + "ms",
    left: gridSize() * 3 + "px",
    opacity: 0,
};
var transitionStyles = {
    entered: { left: gridSize() + "px", opacity: 1 },
    exited: { left: gridSize() + "px", opacity: 0 },
};
export var HelpContent = function (props) {
    var help = props.help, formatMessage = props.intl.formatMessage;
    return (React.createElement(HeaderContainer, null,
        React.createElement(Transition, { in: help.isBackbuttonVisible(), timeout: TRANSITION_DURATION_MS, mountOnEnter: true, unmountOnExit: true }, function (state) { return (React.createElement(BackButtonContainer, { style: __assign(__assign({}, defaultStyle), transitionStyles[state]) },
            React.createElement(Button, { onClick: help.navigateBack, appearance: "subtle", theme: function (currentTheme, themeProps) {
                    var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = __rest(_a, ["buttonStyles"]);
                    return __assign({ buttonStyles: __assign(__assign({}, buttonStyles), buttonTheme) }, rest);
                }, iconBefore: React.createElement(ArrowleftIcon, { label: "back", size: "medium" }) }, formatMessage(messages.help_panel_navigation_back)))); }),
        React.createElement(HeaderTitle, null, formatMessage(messages.help_panel_header)),
        React.createElement(CloseButton, null)));
};
export default withHelp(injectIntl(HelpContent));
//# sourceMappingURL=index.js.map