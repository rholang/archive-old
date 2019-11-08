"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderButtons = HeaderButtons;
exports.Header = Header;
exports.Description = Description;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireWildcard(require("@atlaskit/button"));

var _cross = _interopRequireDefault(require("@atlaskit/icon/glyph/cross"));

var _common = require("./styled/common");

function HeaderButtons(_ref) {
  var optOutLabel = _ref.optOutLabel,
      canClose = _ref.canClose,
      onClose = _ref.onClose,
      canOptOut = _ref.canOptOut,
      onOptOut = _ref.onOptOut;
  var buttons = [];

  if (canOptOut) {
    buttons.push(_react.default.createElement(_button.default, {
      key: "opt-out",
      onClick: onOptOut,
      appearance: "subtle"
    }, optOutLabel));
  }

  if (canClose) {
    buttons.push(_react.default.createElement(_button.default, {
      key: "close",
      appearance: "subtle",
      onClick: onClose,
      iconBefore: _react.default.createElement(_cross.default, {
        label: "Close",
        size: "small"
      })
    }));
  }

  return _react.default.createElement(_button.ButtonGroup, null, buttons);
}

function Header(_ref2) {
  var title = _ref2.title,
      canClose = _ref2.canClose,
      onClose = _ref2.onClose,
      canOptOut = _ref2.canOptOut,
      onOptOut = _ref2.onOptOut,
      optOutLabel = _ref2.optOutLabel;
  return _react.default.createElement(_common.Header, null, _react.default.createElement(_common.Title, null, title), _react.default.createElement(HeaderButtons, {
    canClose: canClose,
    canOptOut: canOptOut,
    onClose: onClose,
    onOptOut: onOptOut,
    optOutLabel: optOutLabel
  }));
}

function Description(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement(_common.Wrapper, null, _react.default.createElement(_common.Description, null, children));
}