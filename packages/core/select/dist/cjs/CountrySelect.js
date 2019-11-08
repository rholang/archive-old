"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _countries = require("./data/countries");

var _Select = _interopRequireDefault(require("./Select"));

/** @jsx jsx */
// custom option renderer
var labelCSS = function labelCSS() {
  return {
    alignItems: 'center',
    display: 'flex',
    lineHeight: 1.2
  };
};

var flagCSS = function flagCSS() {
  return {
    fontSize: '18px',
    marginRight: '8px'
  };
};

var Opt = function Opt(_ref) {
  var children = _ref.children,
      icon = _ref.icon;
  return (0, _core.jsx)("div", {
    css: labelCSS()
  }, (0, _core.jsx)("span", {
    css: flagCSS()
  }, icon), children);
}; // return the country name; used for searching


var getOptionLabel = function getOptionLabel(opt) {
  return opt.name;
}; // set the country's abbreviation for the option value, (also searchable)


var getOptionValue = function getOptionValue(opt) {
  return opt.abbr;
}; // the text node of the control


var controlLabel = function controlLabel(opt) {
  return (0, _core.jsx)(Opt, {
    icon: opt.icon
  }, opt.abbr.toUpperCase());
}; // the text node for an option


var optionLabel = function optionLabel(_ref2) {
  var abbr = _ref2.abbr,
      code = _ref2.code,
      icon = _ref2.icon,
      name = _ref2.name;
  return (0, _core.jsx)(Opt, {
    icon: icon
  }, name, " (", abbr.toUpperCase(), ") +", code);
}; // switch formatters based on render context (menu | value)


var formatOptionLabel = function formatOptionLabel(opt, _ref3) {
  var context = _ref3.context;
  return context === 'value' ? controlLabel(opt) : optionLabel(opt);
}; // put it all together


var CountrySelect = function CountrySelect(props) {
  return (0, _core.jsx)(_Select.default, (0, _extends2.default)({
    isClearable: false,
    formatOptionLabel: formatOptionLabel,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    isMulti: false,
    options: _countries.groupedCountries,
    styles: {
      container: function container(css) {
        return (0, _objectSpread2.default)({}, css, {
          width: 105
        });
      },
      dropdownIndicator: function dropdownIndicator(css) {
        return (0, _objectSpread2.default)({}, css, {
          paddingLeft: 0
        });
      },
      menu: function menu(css) {
        return (0, _objectSpread2.default)({}, css, {
          width: 300
        });
      }
    }
  }, props));
};

var _default = CountrySelect;
exports.default = _default;