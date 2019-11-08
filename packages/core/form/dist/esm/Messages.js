import React from 'react';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { h200 } from '@atlaskit/theme/typography';
import { multiply } from '@atlaskit/theme/math';
import { R400, G400, N200 } from '@atlaskit/theme/colors';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import SuccessIcon from '@atlaskit/icon/glyph/editor/success';
import { FieldId } from './Field';
var Message = styled.div.withConfig({
  displayName: "Messages__Message",
  componentId: "sc-12itvq1-0"
})(["\n  ", " font-weight: normal;\n  color: ", ";\n  margin-top: ", "px;\n  display: flex;\n  justify-content: baseline;\n"], h200, function (props) {
  if (props.error) {
    return R400;
  }

  if (props.valid) {
    return G400;
  }

  return N200;
}, multiply(gridSize, 0.5));
var IconWrapper = styled.span.withConfig({
  displayName: "Messages__IconWrapper",
  componentId: "sc-12itvq1-1"
})(["\n  display: flex;\n"]);
export var HelperMessage = function HelperMessage(_ref) {
  var children = _ref.children;
  return React.createElement(FieldId.Consumer, null, function (fieldId) {
    return React.createElement(Message, {
      id: fieldId ? "".concat(fieldId, "-helper") : null
    }, children);
  });
};
export var ErrorMessage = function ErrorMessage(_ref2) {
  var children = _ref2.children;
  return React.createElement(FieldId.Consumer, null, function (fieldId) {
    return React.createElement(Message, {
      error: true,
      id: fieldId ? "".concat(fieldId, "-error") : null
    }, React.createElement(IconWrapper, null, React.createElement(ErrorIcon, {
      size: "small"
    })), children);
  });
};
export var ValidMessage = function ValidMessage(_ref3) {
  var children = _ref3.children;
  return React.createElement(FieldId.Consumer, null, function (fieldId) {
    return React.createElement(Message, {
      valid: true,
      id: fieldId ? "".concat(fieldId, "-valid") : null
    }, React.createElement(IconWrapper, null, React.createElement(SuccessIcon, {
      size: "small"
    })), children);
  });
};