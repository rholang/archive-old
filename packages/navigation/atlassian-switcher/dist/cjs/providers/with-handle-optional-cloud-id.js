"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var as_data_provider_1 = require("./as-data-provider");
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
            return React.createElement(ProviderComponent, tslib_1.__assign({}, props), children);
        }
        else {
            var resultComplete = {
                status: as_data_provider_1.Status.COMPLETE,
                data: fallbackProviderResult,
            };
            return React.createElement(React.Fragment, null, children(resultComplete));
        }
    };
}
exports.default = withHandleOptionalCloudId;
//# sourceMappingURL=with-handle-optional-cloud-id.js.map