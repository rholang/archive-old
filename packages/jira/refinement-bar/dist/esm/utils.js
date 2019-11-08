import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _typeof from "@babel/runtime/helpers/typeof";
// Type Helpers
// ------------------------------
export var isObject = function isObject(o) {
  return _typeof(o) === 'object' && o !== null && !Array.isArray(o);
};
export var isPromise = function isPromise(p) {
  return p.then && typeof p.then === 'function';
};
export var isEmptyString = function isEmptyString(str) {
  return typeof str === 'string' && str.length === 0;
};
// Array Helpers
// ------------------------------
export var uniqueArr = function uniqueArr(arr) {
  return _toConsumableArray(new Set(arr));
};
export var diffArr = function diffArr(a, b) {
  return a.filter(function (i) {
    return b.indexOf(i) < 0;
  });
}; // NOTE: only use `isEqualArr` for primitives (string, number etc.) like "keys"

var stringifyArr = function stringifyArr(a) {
  return a.filter(Boolean).sort().join(',');
};

export var isEqualArr = function isEqualArr(a, b) {
  return stringifyArr(a) === stringifyArr(b);
};
export var cloneArr = function cloneArr(arr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var add = options.add,
      remove = options.remove,
      sort = options.sort;

  var array = _toConsumableArray(arr);

  if (Array.isArray(add)) array = [].concat(_toConsumableArray(array), _toConsumableArray(add));else if (add) array.push(add);
  if (remove) array = array.filter(function (v) {
    return v !== remove;
  });
  return sort ? array.sort() : array;
}; // Object Helpers
// ------------------------------

export var isEmptyObj = function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
};
export var cloneObj = function cloneObj(obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var add = options.add,
      remove = options.remove; // add key/value pair

  if (add) {
    return _objectSpread({}, obj, add);
  } // remove by key


  if (remove) {
    var n = _objectSpread({}, obj);

    delete n[remove];
    return n;
  }

  return _objectSpread({}, obj);
};
export var objectMap = function objectMap(object, mapFn) {
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

export var stringCompare = function stringCompare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};