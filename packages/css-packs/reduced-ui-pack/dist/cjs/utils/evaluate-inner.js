"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = evaluateInner;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _hyphenateStyleName = _interopRequireDefault(require("fbjs/lib/hyphenateStyleName"));

/**
 * The below code is inspired by the css function in styled components
 * https://github.com/styled-components/styled-components/blob/master/src/constructors/css.js
 */
function evaluateInner(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(styles, interpolations)).join('');
}

function interleave(strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
}

function flatten(chunks) {
  var executionContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    theme: {
      __ATLASKIT_THEME__: {
        mode: 'light'
      }
    }
  };
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */


    if (Array.isArray(chunk)) {
      ruleSet.push.apply(ruleSet, (0, _toConsumableArray2.default)(flatten(chunk, executionContext)));
      return ruleSet;
    }
    /* Either execute or defer the function */


    if (typeof chunk === 'function') {
      if (executionContext) {
        var nextChunk = chunk(executionContext);
        ruleSet.push.apply(ruleSet, (0, _toConsumableArray2.default)(flatten([nextChunk], executionContext)));
      } else ruleSet.push(chunk);

      return ruleSet;
    } //$FlowFixMe


    ruleSet.push(isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
    return ruleSet;
  }, []);
}

function isPlainObject(x) {
  return (0, _typeof2.default)(x) === 'object' && x.constructor === Object;
}

function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return "".concat((0, _hyphenateStyleName.default)(key), ": ").concat(obj[key], ";");
  }).join(' ');
  return prevKey ? "".concat(prevKey, " {\n    ").concat(css, "\n  }") : css;
}