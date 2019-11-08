"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var version_json_1 = require("../version.json");
exports.createAndFireEventInElementsChannel = analytics_next_1.createAndFireEvent('fabric-elements');
exports.createAndFireSafe = function (createAnalyticsEvent, creator) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (createAnalyticsEvent) {
        exports.createAndFireEventInElementsChannel(creator.apply(void 0, tslib_1.__spread(args)))(createAnalyticsEvent);
    }
};
var createPayload = function (action, actionSubject, eventType, actionSubjectId) { return function (attributes) { return ({
    action: action,
    actionSubject: actionSubject,
    eventType: eventType,
    actionSubjectId: actionSubjectId,
    attributes: tslib_1.__assign(tslib_1.__assign({}, attributes), { packageName: version_json_1.name,
        packageVersion: version_json_1.version }),
}); }; };
var calculateDuration = function (startTime) {
    return startTime ? Date.now() - startTime : undefined;
};
var getPreviousState = function (reaction) {
    if (reaction) {
        if (reaction.reacted) {
            return 'existingReacted';
        }
        return 'existingNotReacted';
    }
    return 'new';
};
exports.createReactionsRenderedEvent = function (startTime) {
    return createPayload('rendered', 'reactionView', analytics_gas_types_1.OPERATIONAL_EVENT_TYPE)({
        duration: calculateDuration(startTime),
    });
};
exports.createPickerButtonClickedEvent = function (reactionEmojiCount) {
    return createPayload('clicked', 'reactionPickerButton', analytics_gas_types_1.UI_EVENT_TYPE)({
        reactionEmojiCount: reactionEmojiCount,
    });
};
exports.createPickerCancelledEvent = function (startTime) {
    return createPayload('cancelled', 'reactionPicker', analytics_gas_types_1.UI_EVENT_TYPE)({
        duration: calculateDuration(startTime),
    });
};
exports.createPickerMoreClickedEvent = function (startTime) {
    return createPayload('clicked', 'reactionPicker', analytics_gas_types_1.UI_EVENT_TYPE, 'more')({
        duration: calculateDuration(startTime),
    });
};
exports.createReactionSelectionEvent = function (source, emojiId, reaction, startTime) {
    return createPayload('clicked', 'reactionPicker', analytics_gas_types_1.UI_EVENT_TYPE, 'emoji')({
        duration: calculateDuration(startTime),
        source: source,
        previousState: getPreviousState(reaction),
        emojiId: emojiId,
    });
};
exports.createReactionHoveredEvent = function (startTime) {
    return createPayload('hovered', 'existingReaction', analytics_gas_types_1.UI_EVENT_TYPE)({
        duration: calculateDuration(startTime),
    });
};
exports.createReactionClickedEvent = function (added, emojiId) {
    return createPayload('clicked', 'existingReaction', analytics_gas_types_1.UI_EVENT_TYPE)({
        added: added,
        emojiId: emojiId,
    });
};
//# sourceMappingURL=index.js.map