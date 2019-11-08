import { __read, __spread } from "tslib";
var buildCommonModelParameters = function (queryVersion) {
    return [
        {
            '@type': 'queryParams',
            queryVersion: queryVersion,
        },
    ];
};
export var buildJiraModelParams = function (queryVersion, currentContainerId) {
    return __spread(buildCommonModelParameters(queryVersion), (currentContainerId
        ? [
            {
                '@type': 'currentProject',
                projectId: currentContainerId,
            },
        ]
        : []));
};
export var buildConfluenceModelParams = function (queryVersion, modelContext) {
    return __spread(buildCommonModelParameters(queryVersion), (modelContext.spaceKey
        ? [
            {
                '@type': 'currentSpace',
                spaceKey: modelContext.spaceKey,
            },
        ]
        : []));
};
//# sourceMappingURL=model-parameters.js.map