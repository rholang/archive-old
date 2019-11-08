import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { HiddenButton } from './common';

var Form = function Form(props) {
  return jsx("form", _extends({
    css: {
      '&:first-of-type': {
        marginTop: 0
      }
    }
  }, props));
};

var Label = function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      props = _objectWithoutProperties(_ref, ["htmlFor"]);

  return jsx("label", _extends({
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

export var Group = function Group(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return jsx(Form, props, children, jsx(HiddenButton, {
    type: "submit",
    tabIndex: "-1"
  }));
};
var controlId = 0;
export var Radio = function Radio(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  var id = "refinement-bar-dialog-radio-".concat(++controlId);
  return jsx(Label, {
    htmlFor: id
  }, jsx("input", _extends({
    type: "radio",
    id: id
  }, props)), jsx("span", null, children));
};