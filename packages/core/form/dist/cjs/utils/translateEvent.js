"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// gets called with a sythetic event and pulls the relevent value of of it
var translate = function translate(e) {
  if (e && e.target) {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        return e.target.value || true;
      }

      return e.target.value ? undefined : false;
    }

    return e.target.value;
  }

  return e;
};

var _default = translate;
exports.default = _default;