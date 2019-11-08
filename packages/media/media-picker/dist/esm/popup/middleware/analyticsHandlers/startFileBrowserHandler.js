import { __assign } from "tslib";
import { SCREEN_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
import { buttonClickPayload } from '.';
import { isStartFileBrowserAction } from '../../actions/startFileBrowser';
export default (function (action) {
    if (isStartFileBrowserAction(action)) {
        return [
            {
                name: 'localFileBrowserModal',
                eventType: SCREEN_EVENT_TYPE,
            },
            __assign(__assign({}, buttonClickPayload), { actionSubjectId: 'localFileBrowserButton' }),
        ];
    }
});
//# sourceMappingURL=startFileBrowserHandler.js.map