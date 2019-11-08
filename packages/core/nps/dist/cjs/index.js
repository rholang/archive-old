"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NPS", {
  enumerable: true,
  get: function get() {
    return _NPS.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _DefaultNPS.default;
  }
});
Object.defineProperty(exports, "getDefaultRoles", {
  enumerable: true,
  get: function get() {
    return _DefaultNPS.getDefaultRoles;
  }
});
Object.defineProperty(exports, "getDefaultMessages", {
  enumerable: true,
  get: function get() {
    return _DefaultNPS.getDefaultMessages;
  }
});
Object.defineProperty(exports, "FeedbackPage", {
  enumerable: true,
  get: function get() {
    return _Feedback.default;
  }
});
Object.defineProperty(exports, "FollowupPage", {
  enumerable: true,
  get: function get() {
    return _Followup.default;
  }
});
Object.defineProperty(exports, "ThankyouPage", {
  enumerable: true,
  get: function get() {
    return _Thankyou.default;
  }
});

var _NPS = _interopRequireDefault(require("./components/NPS"));

var _DefaultNPS = _interopRequireWildcard(require("./components/DefaultNPS"));

var _Feedback = _interopRequireDefault(require("./components/Feedback"));

var _Followup = _interopRequireDefault(require("./components/Followup"));

var _Thankyou = _interopRequireDefault(require("./components/Thankyou"));