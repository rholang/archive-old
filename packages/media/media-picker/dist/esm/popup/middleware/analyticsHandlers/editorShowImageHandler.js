import { SCREEN_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
import { isEditorShowImageAction } from '../../actions/editorShowImage';
export default (function (action) {
    if (isEditorShowImageAction(action)) {
        var _a = action.imageUrl, imageUrl = _a === void 0 ? undefined : _a, _b = action.originalFile, originalFile = _b === void 0 ? undefined : _b;
        return [
            {
                name: 'fileEditorModal',
                eventType: SCREEN_EVENT_TYPE,
                attributes: {
                    imageUrl: imageUrl,
                    originalFile: originalFile,
                },
            },
        ];
    }
});
//# sourceMappingURL=editorShowImageHandler.js.map