"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyDisabledProperties = applyDisabledProperties;

function applyDisabledProperties(disableInteraction) {
  return disableInteraction ? {
    pointerEvents: 'none',
    userSelect: 'none'
  } : null;
}