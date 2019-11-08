"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var buildCommonModelParameters = function (queryVersion) {
    return [
        {
            '@type': 'queryParams',
            queryVersion: queryVersion,
        },
    ];
};
exports.buildJiraModelParams = function (queryVersion, currentContainerId) {
    return tslib_1.__spread(buildCommonModelParameters(queryVersion), (currentContainerId
        ? [
            {
                '@type': 'currentProject',
                projectId: currentContainerId,
            },
        ]
        : []));
};
exports.buildConfluenceModelParams = function (queryVersion, modelContext) {
    return tslib_1.__spread(buildCommonModelParameters(queryVersion), (modelContext.spaceKey
        ? [
            {
                '@type': 'currentSpace',
                spaceKey: modelContext.spaceKey,
            },
        ]
        : []));
};
//# sourceMappingURL=model-parameters.js.map