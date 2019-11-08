"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
exports.createAndFireEventInElementsChannel = analytics_next_1.createAndFireEvent('fabric-elements');
var createEvent = function (eventType, action, actionSubject, actionSubjectId, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return ({
        eventType: eventType,
        action: action,
        actionSubject: actionSubject,
        actionSubjectId: actionSubjectId,
        attributes: tslib_1.__assign({ packageName: version_json_1.name,
            packageVersion: version_json_1.version }, attributes),
    });
};
var emojiPickerEvent = function (action, attributes, actionSubjectId) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('ui', action, 'emojiPicker', actionSubjectId, attributes);
};
exports.openedPickerEvent = function () { return emojiPickerEvent('opened'); };
exports.closedPickerEvent = function (attributes) {
    return emojiPickerEvent('closed', attributes);
};
var skinTones = [
    { id: '-1f3fb', skinToneModifier: 'light' },
    { id: '-1f3fc', skinToneModifier: 'mediumLight' },
    { id: '-1f3fd', skinToneModifier: 'medium' },
    { id: '-1f3fe', skinToneModifier: 'mediumDark' },
    { id: '-1f3ff', skinToneModifier: 'dark' },
];
var getSkinTone = function (emojiId) {
    var e_1, _a;
    if (!emojiId) {
        return {};
    }
    try {
        for (var skinTones_1 = tslib_1.__values(skinTones), skinTones_1_1 = skinTones_1.next(); !skinTones_1_1.done; skinTones_1_1 = skinTones_1.next()) {
            var _b = skinTones_1_1.value, id = _b.id, skinToneModifier = _b.skinToneModifier;
            if (emojiId.indexOf(id) !== -1) {
                return { skinToneModifier: skinToneModifier, baseEmojiId: emojiId.replace(id, '') };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (skinTones_1_1 && !skinTones_1_1.done && (_a = skinTones_1.return)) _a.call(skinTones_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {};
};
exports.pickerClickedEvent = function (attributes) {
    return emojiPickerEvent('clicked', tslib_1.__assign(tslib_1.__assign({}, getSkinTone(attributes.emojiId)), attributes), 'emoji');
};
exports.categoryClickedEvent = function (attributes) {
    return emojiPickerEvent('clicked', attributes, 'category');
};
exports.pickerSearchedEvent = function (attributes) { return emojiPickerEvent('searched', attributes, 'query'); };
var skintoneSelectorEvent = function (action, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('ui', action, 'emojiSkintoneSelector', undefined, attributes);
};
exports.toneSelectedEvent = function (attributes) {
    return skintoneSelectorEvent('clicked', attributes);
};
exports.toneSelectorOpenedEvent = function (attributes) { return skintoneSelectorEvent('opened', attributes); };
exports.toneSelectorClosedEvent = function () { return skintoneSelectorEvent('cancelled'); };
var emojiUploaderEvent = function (action, actionSubjectId, attributes) { return createEvent('ui', action, 'emojiUploader', actionSubjectId, attributes); };
exports.uploadBeginButton = function () {
    return emojiUploaderEvent('clicked', 'addButton');
};
exports.uploadConfirmButton = function (attributes) {
    return emojiUploaderEvent('clicked', 'confirmButton', attributes);
};
exports.uploadCancelButton = function () {
    return emojiUploaderEvent('clicked', 'cancelButton');
};
exports.uploadSucceededEvent = function (attributes) {
    return createEvent('operational', 'finished', 'emojiUploader', undefined, attributes);
};
exports.uploadFailedEvent = function (attributes) {
    return createEvent('operational', 'failed', 'emojiUploader', undefined, attributes);
};
exports.deleteBeginEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiTrigger', attributes);
};
exports.deleteConfirmEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiConfirm', attributes);
};
exports.deleteCancelEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiCancel', attributes);
};
exports.selectedFileEvent = function () {
    return createEvent('ui', 'clicked', 'emojiUploader', 'selectFile');
};
var extractCommonAttributes = function (query, emojiList) {
    return {
        queryLength: query ? query.length : 0,
        spaceInQuery: query ? query.indexOf(' ') !== -1 : false,
        emojiIds: emojiList
            ? emojiList
                .map(function (emoji) { return emoji.id; })
                .filter(Boolean)
                .slice(0, 20)
            : [],
    };
};
exports.typeaheadCancelledEvent = function (duration, query, emojiList) {
    return createEvent('ui', 'cancelled', 'emojiTypeahead', undefined, tslib_1.__assign({ duration: duration }, extractCommonAttributes(query, emojiList)));
};
var getPosition = function (emojiList, selectedEmoji) {
    if (emojiList) {
        var index = emojiList.findIndex(function (emoji) { return emoji.id === selectedEmoji.id; });
        return index === -1 ? undefined : index;
    }
    return;
};
exports.typeaheadSelectedEvent = function (pressed, duration, emoji, emojiList, query, exactMatch) {
    return createEvent('ui', pressed ? 'pressed' : 'clicked', 'emojiTypeahead', undefined, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ duration: duration, position: getPosition(emojiList, emoji) }, extractCommonAttributes(query, emojiList)), getSkinTone(emoji.id)), { emojiType: emoji.type, exactMatch: exactMatch || false }));
};
exports.typeaheadRenderedEvent = function (duration, query, emojiList) {
    return createEvent('operational', 'rendered', 'emojiTypeahead', undefined, tslib_1.__assign({ duration: duration }, extractCommonAttributes(query, emojiList)));
};
//# sourceMappingURL=analytics.js.map