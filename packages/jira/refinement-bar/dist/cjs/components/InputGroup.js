"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = exports.Group = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@emotion/core");

var _common = require("./common");

/** @jsx jsx */
var Form = function Form(props) {
  return (0, _core.jsx)("form", (0, _extends2.default)({
    css: {
      '&:first-of-type': {
        marginTop: 0
      }
    }
  }, props));
};

var Label = function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutProperties2.default)(_ref, ["htmlFor"]);
  return (0, _core.jsx)("label", (0, _extends2.default)({
    htmlFor: htmlFor // because linter...
    ,
    css: {
      alignItems: 'center',
      display: 'flex',
      marginBottom: 8,
      marginTop: 8,
      ':first-of-type': {
        marginTop: 0
      },
      ':last-of-type': {
        marginBottom: 0
      },
      span: {
        marginLeft: 4
      }
    }
  }, props));
};

var Group = function Group(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
  return (0, _core.jsx)(Form, props, children, (0, _core.jsx)(_common.HiddenButton, {
    type: "submit",
    tabIndex: "-1"
  }));
};

exports.Group = Group;
var controlId = 0;

var Radio = function Radio(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children"]);
  var id = "refinement-bar-dialog-radio-".concat(++controlId);
  return (0, _core.jsx)(Label, {
    htmlFor: id
  }, (0, _core.jsx)("input", (0, _extends2.default)({
    type: "radio",
    id: id
  }, props)), (0, _core.jsx)("span", null, children));
};

exports.Radio = Radio;