import { __assign } from "tslib";
import { isStartAuthAction } from '../../actions/startAuth';
import { buttonClickPayload } from '.';
export default (function (action) {
    if (isStartAuthAction(action)) {
        return [
            __assign(__assign({}, buttonClickPayload), { actionSubjectId: 'linkCloudAccountButton', attributes: {
                    cloudType: action.serviceName,
                } }),
        ];
    }
});
//# sourceMappingURL=startAuthHandler.js.map