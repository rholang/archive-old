"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
var FabricElementsListener_1 = require("./FabricElementsListener");
var FabricEditorListener_1 = require("./FabricEditorListener");
var extractFieldsFromContext = function (fieldsToPick) { return function (contexts) {
    return contexts
        .map(function (ctx) {
        return fieldsToPick.reduce(function (result, key) {
            var _a;
            return ctx[key] ? lodash_merge_1.default(result, (_a = {}, _a[key] = ctx[key], _a)) : result;
        }, {});
    })
        .reduce(function (result, item) { return lodash_merge_1.default(result, item); }, {});
}; };
var fieldExtractor = function (contextKey) {
    return extractFieldsFromContext([
        'source',
        'objectType',
        'objectId',
        'containerType',
        'containerId',
        contextKey,
    ]);
};
var getContextKey = function (tag) {
    switch (tag) {
        case FabricElementsListener_1.ELEMENTS_TAG:
            return analytics_namespaced_context_1.ELEMENTS_CONTEXT;
        case FabricEditorListener_1.EDITOR_TAG:
            return analytics_namespaced_context_1.EDITOR_CONTEXT;
        default:
            return '';
    }
};
var updatePayloadWithContext = function (tag, event) {
    if (event.context.length === 0) {
        return tslib_1.__assign({ source: analytics_gas_types_1.DEFAULT_SOURCE }, event.payload);
    }
    var contextKey = getContextKey(tag) || 'attributes';
    var _a = fieldExtractor(contextKey)(event.context), _b = contextKey, attributes = _a[_b], fields = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    if (attributes) {
        event.payload.attributes = lodash_merge_1.default(attributes, event.payload.attributes || {});
    }
    return tslib_1.__assign(tslib_1.__assign({ source: analytics_gas_types_1.DEFAULT_SOURCE }, fields), event.payload);
};
var addTag = function (tag, originalTags) {
    var tags = new Set(originalTags || []);
    tags.add(tag);
    return Array.from(tags);
};
exports.processEventPayload = function (event, tag) {
    return tslib_1.__assign(tslib_1.__assign({}, updatePayloadWithContext(tag, event)), { tags: addTag(tag, event.payload.tags) });
};
//# sourceMappingURL=process-event-payload.js.map