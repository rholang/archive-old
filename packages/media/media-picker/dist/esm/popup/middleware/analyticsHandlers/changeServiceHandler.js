import { __assign } from "tslib";
import { isChangeServiceAction } from '../../actions/changeService';
import { buttonClickPayload } from '.';
import { SCREEN_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
export default (function (action) {
    if (isChangeServiceAction(action)) {
        if (action.serviceName === 'upload') {
            return [
                __assign(__assign({}, buttonClickPayload), { actionSubjectId: 'uploadButton' }),
                {
                    name: 'recentFilesBrowserModal',
                    eventType: SCREEN_EVENT_TYPE,
                },
            ];
        }
        else {
            return [
                __assign(__assign({}, buttonClickPayload), { actionSubjectId: 'cloudBrowserButton', attributes: {
                        cloudType: action.serviceName,
                    } }),
            ];
        }
    }
});
//# sourceMappingURL=changeServiceHandler.js.map