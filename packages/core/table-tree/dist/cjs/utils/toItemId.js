"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toItemId;

function toItemId(id) {
  return "tabletreeitem-".concat(id).replace(/[^-_a-zA-Z0-9]/g, '');
}