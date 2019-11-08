import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ak-button {\n    align-items: baseline;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border-width: 0;\n    display: inline-flex;\n    font-style: normal;\n    font-size: inherit;\n    height: 2.28571429em;\n    line-height: 2.28571429em;\n    margin: 0;\n    outline: none;\n    padding: 0 12px;\n    text-align: center;\n    transition: background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n  .ak-button:hover {\n    cursor: pointer;\n    transition: background 0s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n  }\n  .ak-button:active {\n    transition-duration: 0s;\n  }\n  .ak-button:focus {\n    outline: none;\n    transition-duration: 0s, 0.2s;\n  }\n  .ak-button[disabled] {\n    cursor: not-allowed;\n  }\n  .ak-button__appearance-default {\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-default:hover {\n    background: ", ";\n  }\n  .ak-button__appearance-default:active {\n    background: ", ";\n    color: ", ";\n  }\n  .ak-button__appearance-default:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-default[disabled],\n  .ak-button__appearance-default[disabled]:active,\n  .ak-button__appearance-default[disabled]:hover {\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-default[disabled]:focus,\n  .ak-button__appearance-default[disabled]:active:focus,\n  .ak-button__appearance-default[disabled]:hover:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-subtle {\n    background: none;\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-subtle:hover {\n    background: ", ";\n  }\n  .ak-button__appearance-subtle:active {\n    background: ", ";\n    color: ", ";\n  }\n  .ak-button__appearance-subtle:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-subtle[disabled],\n  .ak-button__appearance-subtle[disabled]:active,\n  .ak-button__appearance-subtle[disabled]:hover {\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-subtle[disabled]:focus,\n  .ak-button__appearance-subtle[disabled]:active:focus,\n  .ak-button__appearance-subtle[disabled]:hover:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-primary {\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-primary:hover {\n    background: ", ";\n  }\n  .ak-button__appearance-primary:active {\n    background: ", ";\n    color: ", ";\n  }\n  .ak-button__appearance-primary:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-primary[disabled],\n  .ak-button__appearance-primary[disabled]:active,\n  .ak-button__appearance-primary[disabled]:hover {\n    background: ", ";\n    color: rgba(255, 255, 255, 0.5);\n    text-decoration: none;\n  }\n  .ak-button__appearance-primary[disabled]:focus,\n  .ak-button__appearance-primary[disabled]:active:focus,\n  .ak-button__appearance-primary[disabled]:hover:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-link {\n    background: none;\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-link:hover {\n    background: none;\n    color: ", ";\n    text-decoration: underline;\n  }\n  .ak-button__appearance-link:active {\n    text-decoration: none;\n    background: none;\n    color: ", ";\n  }\n  .ak-button__appearance-link:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-link[disabled],\n  .ak-button__appearance-link[disabled]:active,\n  .ak-button__appearance-link[disabled]:hover {\n    background: none;\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-link[disabled]:focus,\n  .ak-button__appearance-link[disabled]:active:focus,\n  .ak-button__appearance-link[disabled]:hover:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-subtle-link {\n    background: none;\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-subtle-link:hover {\n    background: none;\n    color: ", ";\n    text-decoration: underline;\n  }\n  .ak-button__appearance-subtle-link:active {\n    text-decoration: none;\n    background: none;\n    color: ", ";\n  }\n  .ak-button__appearance-subtle-link:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__appearance-subtle-link[disabled],\n  .ak-button__appearance-subtle-link[disabled]:active,\n  .ak-button__appearance-subtle-link[disabled]:focus {\n    background: none;\n    color: ", ";\n    text-decoration: none;\n  }\n  .ak-button__appearance-subtle-link[disabled]:focus,\n  .ak-button__appearance-subtle-link[disabled]:active:focus,\n  .ak-button__appearance-subtle-link[disabled]:focus:focus {\n    box-shadow: 0 0 0 2px ", ";\n  }\n  .ak-button__spacing-compact {\n    height: 1.71428571em;\n    line-height: 1.71428571em;\n  }\n  .ak-button__spacing-none {\n    height: auto;\n    line-height: normal;\n    padding: 0;\n  }\n  .ak-button::-moz-focus-inner {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { colors } from '@atlaskit/theme';
import evaluateInner from './utils/evaluate-inner';
/**
 * This exits as @ak-color-B75A: fade(@ak-color-B75, 60%);
 * but theme does not have B75A color
 */

var colorB75A = 'rgba(179, 212, 255, 0.6)';
/**
 * This exits as @ak-color-B200A: fade(@ak-color-B200, 60%);
 * but theme does not have B75A color
 */

var colorB200A = 'rgba(38, 132, 255, 0.6)';
export default evaluateInner(_templateObject(), colors.N20A, colors.N400, colors.N30A, colorB75A, colors.B400, colorB200A, colors.N20A, colors.N70, colorB200A, colors.N400, colors.N30A, colorB75A, colors.B400, colorB200A, colors.N20A, colors.N70, colorB200A, colors.B400, colors.N0, colors.B300, colors.B500, colors.N0, colorB200A, colors.B400, colorB200A, colors.B400, colors.B300, colors.B500, colorB200A, colors.N70, colorB200A, colors.N500, colors.B300, colors.B500, colorB200A, colors.N70, colorB200A);