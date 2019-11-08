/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import { useTheme } from '../../theme';
import { IconButton } from '../IconButton';
import { createButtonCSS, createIconCSS, getCreateButtonTheme } from './styles';
export var Create = function (_a) {
    var onClick = _a.onClick, text = _a.text;
    var theme = useTheme();
    return (jsx(Fragment, null,
        jsx(Button, { css: createButtonCSS, onClick: onClick, theme: getCreateButtonTheme(theme) }, text),
        jsx(IconButton, { css: createIconCSS, icon: jsx(AddIcon, { label: text }), onClick: onClick, tooltip: text })));
};
//# sourceMappingURL=index.js.map