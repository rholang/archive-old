import { __assign } from "tslib";
/** @jsx jsx */
import ChevronIcon from '@atlaskit/icon/glyph/chevron-down';
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { chevronIconCSS } from './styles';
export var PrimaryDropdownButton = forwardRef(function (props, ref) {
    return (jsx(PrimaryButton, __assign({ iconAfter: jsx("span", { css: chevronIconCSS },
            jsx(ChevronIcon, { label: "" })), ref: ref }, props)));
});
//# sourceMappingURL=index.js.map