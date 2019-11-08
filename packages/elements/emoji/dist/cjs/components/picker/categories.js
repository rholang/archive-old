"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var activity_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/activity"));
var custom_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/custom"));
var flags_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/flags"));
var food_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/food"));
var frequent_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/frequent"));
var nature_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/nature"));
var objects_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/objects"));
var people_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/people"));
var symbols_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/symbols"));
var travel_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/travel"));
var productivity_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/emoji/productivity"));
var constants_1 = require("../../util/constants");
exports.CategoryDescriptionMap = {
    SEARCH: {
        id: 'SEARCH',
        name: 'categoriesSearchResults',
        icon: undefined,
        order: 0,
    },
    FREQUENT: {
        id: 'FREQUENT',
        name: 'frequentCategory',
        icon: frequent_1.default,
        order: 1,
    },
    PEOPLE: {
        id: 'PEOPLE',
        name: 'peopleCategory',
        icon: people_1.default,
        order: 2,
    },
    NATURE: {
        id: 'NATURE',
        name: 'natureCategory',
        icon: nature_1.default,
        order: 3,
    },
    FOODS: {
        id: 'FOODS',
        name: 'foodsCategory',
        icon: food_1.default,
        order: 4,
    },
    ACTIVITY: {
        id: 'ACTIVITY',
        name: 'activityCategory',
        icon: activity_1.default,
        order: 5,
    },
    PLACES: {
        id: 'PLACES',
        name: 'placesCategory',
        icon: travel_1.default,
        order: 6,
    },
    OBJECTS: {
        id: 'OBJECTS',
        name: 'objectsCategory',
        icon: objects_1.default,
        order: 7,
    },
    SYMBOLS: {
        id: 'SYMBOLS',
        name: 'symbolsCategory',
        icon: symbols_1.default,
        order: 8,
    },
    FLAGS: {
        id: 'FLAGS',
        name: 'flagsCategory',
        icon: flags_1.default,
        order: 9,
    },
    ATLASSIAN: {
        id: 'ATLASSIAN',
        name: 'productivityCategory',
        icon: productivity_1.default,
        order: 10,
    },
    USER_CUSTOM: {
        id: constants_1.customCategory,
        name: constants_1.userCustomTitle,
        icon: custom_1.default,
        order: 11,
    },
    CUSTOM: {
        id: constants_1.customCategory,
        name: constants_1.customTitle,
        icon: custom_1.default,
        order: 12,
    },
};
//# sourceMappingURL=categories.js.map