"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_helpers_1 = require("./util/type-helpers");
exports.toEmojiId = type_helpers_1.toEmojiId;
exports.toOptionalEmojiId = type_helpers_1.toOptionalEmojiId;
var EmojiUtils_1 = require("./api/EmojiUtils");
exports.denormaliseEmojiServiceResponse = EmojiUtils_1.denormaliseEmojiServiceResponse;
var UsageFrequencyTracker_1 = require("./api/internal/UsageFrequencyTracker");
exports.UsageFrequencyTracker = UsageFrequencyTracker_1.UsageFrequencyTracker;
//# sourceMappingURL=utils.js.map