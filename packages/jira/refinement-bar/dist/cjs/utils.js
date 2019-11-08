"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringCompare = exports.objectMap = exports.cloneObj = exports.isEmptyObj = exports.cloneArr = exports.isEqualArr = exports.diffArr = exports.uniqueArr = exports.isEmptyString = exports.isPromise = exports.isObject = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

// Type Helpers
// ------------------------------
var isObject = function isObject(o) {
  return (0, _typeof2.default)(o) === 'object' && o !== null && !Array.isArray(o);
};

exports.isObject = isObject;

var isPromise = function isPromise(p) {
  return p.then && typeof p.then === 'function';
};

exports.isPromise = isPromise;

var isEmptyString = function isEmptyString(str) {
  return typeof str === 'string' && str.length === 0;
};

exports.isEmptyString = isEmptyString;

// Array Helpers
// ------------------------------
var uniqueArr = function uniqueArr(arr) {
  return (0, _toConsumableArray2.default)(new Set(arr));
};

exports.uniqueArr = uniqueArr;

var diffArr = function diffArr(a, b) {
  return a.filter(function (i) {
    return b.indexOf(i) < 0;
  });
}; // NOTE: only use `isEqualArr` for primitives (string, number etc.) like "keys"


exports.diffArr = diffArr;

var stringifyArr = function stringifyArr(a) {
  return a.filter(Boolean).sort().join(',');
};

var isEqualArr = function isEqualArr(a, b) {
  return stringifyArr(a) === stringifyArr(b);
};

exports.isEqualArr = isEqualArr;

var cloneArr = function cloneArr(arr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var add = options.add,
      remove = options.remove,
      sort = options.sort;
  var array = (0, _toConsumableArray2.default)(arr);
  if (Array.isArray(add)) array = [].concat((0, _toConsumableArray2.default)(array), (0, _toConsumableArray2.default)(add));else if (add) array.push(add);
  if (remove) array = array.filter(function (v) {
    return v !== remove;
  });
  return sort ? array.sort() : array;
}; // Object Helpers
// ------------------------------


exports.cloneArr = cloneArr;

var isEmptyObj = function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
};

exports.isEmptyObj = isEmptyObj;

var cloneObj = function cloneObj(obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var add = options.add,
      remove = options.remove; // add key/value pair

  if (add) {
    return (0, _objectSpread2.default)({}, obj, add);
  } // remove by key


  if (remove) {
    var n = (0, _objectSpread2.default)({}, obj);
    delete n[remove];
    return n;
  }

  return (0, _objectSpread2.default)({}, obj);
};

exports.cloneObj = cloneObj;

var objectMap = function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (res, key) {
    var result = cloneObj(res);
    var value = mapFn(object[key], key);

    if (value) {
      result[key] = value;
      return result;
    }

    return res;
  }, {});
}; // String Helpers
// ------------------------------


exports.objectMap = objectMap;

var stringCompare = function stringCompare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

exports.stringCompare = stringCompare;