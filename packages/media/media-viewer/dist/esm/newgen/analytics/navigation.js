import { __assign } from "tslib";
import { isFileIdentifier } from '@atlaskit/media-client';
import { packageAttributes } from './index';
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
    fileId: isFileIdentifier(identifier) && typeof identifier.id === 'string'
        ? identifier.id
        : '',
}); };
export function createNavigationEvent(direction, source, newItem) {
    return {
        eventType: 'ui',
        action: 'navigated',
        actionSubject: 'file',
        actionSubjectId: actionFromDirection(direction),
        attributes: __assign(__assign(__assign({}, packageAttributes), fileDetailsFromIdentifier(newItem)), { input: inputFromSource(source) }),
    };
}
//# sourceMappingURL=navigation.js.map