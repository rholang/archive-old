import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import Select from './Select';
import { RadioOption } from './components/input-options';

var RadioSelect = function RadioSelect(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return ___EmotionJSX(Select, _extends({}, props, {
    isMulti: false,
    components: _objectSpread({}, components, {
      Option: RadioOption
    })
  }));
};

export default RadioSelect;