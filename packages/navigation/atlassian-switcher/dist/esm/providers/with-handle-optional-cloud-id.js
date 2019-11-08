import { __assign } from "tslib";
import * as React from 'react';
import { Status } from './as-data-provider';
/**
 * Inject the ability to handle cases when cloudID is missing into the provided component.
 *
 * When cloud ID is available, this HOC will wrap {children} with the given provided component.
 * Otherwise, {children} is executed with the provided fallback result.
 *
 * @param ProviderComponent component to wrap
 * @param fallbackProviderResult result used to execute children if cloud id is missing
 *
 * @type P component props
 * @type U provider result type
 */
function withHandleOptionalCloudId(ProviderComponent, fallbackProviderResult) {
    return function (props) {
        var cloudId = props.cloudId, children = props.children;
        if (cloudId) {
            return React.createElement(ProviderComponent, __assign({}, props), children);
        }
        else {
            var resultComplete = {
                status: Status.COMPLETE,
                data: fallbackProviderResult,
            };
            return React.createElement(React.Fragment, null, children(resultComplete));
        }
    };
}
export default withHandleOptionalCloudId;
//# sourceMappingURL=with-handle-optional-cloud-id.js.map