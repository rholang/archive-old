"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _Field = require("./styled/Field");

var FieldsetLabel = (0, _styledComponents.default)(_Field.Label).withConfig({
  displayName: "Fieldset__FieldsetLabel",
  componentId: "sc-1wgemvn-0"
})(["\n  margin-bottom: 0;\n"]);

var Fieldset = _styledComponents.default.fieldset.withConfig({
  displayName: "Fieldset",
  componentId: "sc-1wgemvn-1"
})(["\n  margin-top: ", "px;\n"], _constants.gridSize);

var _default = function _default(_ref) {
  var children = _ref.children,
      legend = _ref.legend;
  return _react.default.createElement(Fieldset, null, legend && _react.default.createElement("legend", null, _react.default.createElement(FieldsetLabel, null, legend)), children);
};

exports.default = _default;