"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_client_1 = require("@atlaskit/media-client");
var index_1 = require("./index");
function actionFromDirection(direction) {
    switch (direction) {
        case 'next':
            return 'next';
        case 'prev':
            return 'previous';
    }
}
function inputFromSource(source) {
    switch (source) {
        case 'mouse':
            return 'button';
        case 'keyboard':
            return 'keys';
    }
}
var fileDetailsFromIdentifier = function (identifier) { return ({
    fileId: media_client_1.isFileIdentifier(identifier) && typeof identifier.id === 'string'
        ? identifier.id
        : '',
}); };
function createNavigationEvent(direction, source, newItem) {
    return {
        eventType: 'ui',
        action: 'navigated',
        actionSubject: 'file',
        actionSubjectId: actionFromDirection(direction),
        attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, index_1.packageAttributes), fileDetailsFromIdentifier(newItem)), { input: inputFromSource(source) }),
    };
}
exports.createNavigationEvent = createNavigationEvent;
//# sourceMappingURL=navigation.js.map