"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var MentionResource_1 = tslib_1.__importStar(require("./api/MentionResource"));
exports.MentionResource = MentionResource_1.default;
exports.AbstractMentionResource = MentionResource_1.AbstractMentionResource;
exports.isResolvingMentionProvider = MentionResource_1.isResolvingMentionProvider;
var PresenceResource_1 = tslib_1.__importStar(require("./api/PresenceResource"));
exports.PresenceResource = PresenceResource_1.default;
exports.AbstractPresenceResource = PresenceResource_1.AbstractPresenceResource;
var MentionNameResolver_1 = require("./api/MentionNameResolver");
exports.DefaultMentionNameResolver = MentionNameResolver_1.DefaultMentionNameResolver;
var types_1 = require("./types");
exports.isSpecialMention = types_1.isSpecialMention;
exports.MentionNameStatus = types_1.MentionNameStatus;
var _constants_1 = require("./_constants");
exports.ELEMENTS_CHANNEL = _constants_1.ELEMENTS_CHANNEL;
var ContextMentionResource_1 = tslib_1.__importDefault(require("./api/ContextMentionResource"));
exports.ContextMentionResource = ContextMentionResource_1.default;
//# sourceMappingURL=resource.js.map