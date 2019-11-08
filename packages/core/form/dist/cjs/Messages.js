"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidMessage = exports.ErrorMessage = exports.HelperMessage = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _typography = require("@atlaskit/theme/typography");

var _math = require("@atlaskit/theme/math");

var _colors = require("@atlaskit/theme/colors");

var _error = _interopRequireDefault(require("@atlaskit/icon/glyph/error"));

var _success = _interopRequireDefault(require("@atlaskit/icon/glyph/editor/success"));

var _Field = require("./Field");

var Message = _styledComponents.default.div.withConfig({
  displayName: "Messages__Message",
  componentId: "sc-12itvq1-0"
})(["\n  ", " font-weight: normal;\n  color: ", ";\n  margin-top: ", "px;\n  display: flex;\n  justify-content: baseline;\n"], _typography.h200, function (props) {
  if (props.error) {
    return _colors.R400;
  }

  if (props.valid) {
    return _colors.G400;
  }

  return _colors.N200;
}, (0, _math.multiply)(_constants.gridSize, 0.5));

var IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Messages__IconWrapper",
  componentId: "sc-12itvq1-1"
})(["\n  display: flex;\n"]);

var HelperMessage = function HelperMessage(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_Field.FieldId.Consumer, null, function (fieldId) {
    return _react.default.createElement(Message, {
      id: fieldId ? "".concat(fieldId, "-helper") : null
    }, children);
  });
};

exports.HelperMessage = HelperMessage;

var ErrorMessage = function ErrorMessage(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(_Field.FieldId.Consumer, null, function (fieldId) {
    return _react.default.createElement(Message, {
      error: true,
      id: fieldId ? "".concat(fieldId, "-error") : null
    }, _react.default.createElement(IconWrapper, null, _react.default.createElement(_error.default, {
      size: "small"
    })), children);
  });
};

exports.ErrorMessage = ErrorMessage;

var ValidMessage = function ValidMessage(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement(_Field.FieldId.Consumer, null, function (fieldId) {
    return _react.default.createElement(Message, {
      valid: true,
      id: fieldId ? "".concat(fieldId, "-valid") : null
    }, _react.default.createElement(IconWrapper, null, _react.default.createElement(_success.default, {
      size: "small"
    })), children);
  });
};

exports.ValidMessage = ValidMessage;