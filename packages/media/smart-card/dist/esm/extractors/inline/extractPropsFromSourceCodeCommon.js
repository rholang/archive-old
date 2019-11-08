import { __assign, __read } from "tslib";
export var isRepositoryResource = function (json) {
    return (json &&
        json.context &&
        json.context['@type'] === 'atlassian:SourceCodeRepository');
};
// Builds the name for Pull Requests, Branches and Commits.
export var buildName = function (props, json) {
    var nextProps = __assign({}, props);
    var link = nextProps.link || json.url;
    // Check if this is a reference to something _inside_ a Repository.
    if (link && isRepositoryResource(json)) {
        var repostoryName = (json.context && json.context.name) || '';
        // COMMIT: `repo-name: abf137c title of commit message`
        if (json['@type'] === 'atlassian:SourceCodeCommit') {
            var _a = __read((json['@id'] || '').split(':'), 2), /* hashType */ hashContent = _a[1];
            var hash = (hashContent && hashContent.substring(0, 8) + " ") || '';
            var repoName = repostoryName ? repostoryName + ": " : '';
            return { title: "" + repoName + hash + nextProps.title };
        }
        // PR: `repo-name: #42 title of pull request`
        if (json['@type'] === 'atlassian:SourceCodePullRequest') {
            var internalId = (json['atlassian:internalId'] && "#" + json['atlassian:internalId'] + " ") ||
                '';
            var repoName = repostoryName ? repostoryName + ": " : '';
            return { title: "" + repoName + internalId + nextProps.title };
        }
        // BRANCH: `repo-name/branch-name`
        if (json['@type'] === 'atlassian:SourceCodeReference') {
            var repoName = repostoryName ? repostoryName + "/" : '';
            return { title: "" + repoName + nextProps.title };
        }
    }
    return nextProps;
};
//# sourceMappingURL=extractPropsFromSourceCodeCommon.js.map