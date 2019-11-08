"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customCategory = 'CUSTOM';
exports.frequentCategory = 'FREQUENT';
exports.customType = 'SITE';
exports.customTitle = 'allUploadsCustomCategory';
exports.userCustomTitle = 'userUploadsCustomCategory';
exports.dataURLPrefix = 'data:';
exports.deleteEmojiLabel = 'delete-emoji';
/**
 * A constant used in sorting/ordering to represent a number 'obviously much bigger than any item in the set being handled'.
 * This is used instead of Number.MAX_VALUE since subtraction of MAX_VALUE from itself occassionaly doesn't equal zero exactly :-(
 */
exports.MAX_ORDINAL = 100000;
exports.defaultEmojiHeight = 20;
exports.emojiPickerWidth = 350;
exports.emojiPickerHeight = 295;
exports.localStoragePrefix = 'fabric.emoji';
exports.selectedToneStorageKey = exports.localStoragePrefix + ".selectedTone";
exports.defaultCategories = [
    'PEOPLE',
    'NATURE',
    'FOODS',
    'ACTIVITY',
    'PLACES',
    'OBJECTS',
    'SYMBOLS',
    'FLAGS',
];
exports.defaultListLimit = 50;
exports.migrationUserId = 'hipchat_migration_emoticons';
exports.analyticsEmojiPrefix = 'atlassian.fabric.emoji.picker';
//# sourceMappingURL=constants.js.map