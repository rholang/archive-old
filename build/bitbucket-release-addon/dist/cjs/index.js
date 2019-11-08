"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _queryString = _interopRequireDefault(require("query-string"));

var _flattenChangesets = _interopRequireDefault(require("@atlaskit/build-releases/version/flattenChangesets"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _getCommits = _interopRequireDefault(require("./get-commits"));

var _getChangesets = _interopRequireDefault(require("./get-changesets"));

var _config = require("./config");

var noChangesetMessage = "<div style=\"border: 2px solid red; padding: 10px; border-radius: 10px; display: inline-block;\">\n  <p><strong>Warning:</strong> No packages will be released with this PR</p>\n  <p>If this was not intentional make sure you have run `bolt changeset` if you are trying to release packages.</p>\n  <p>See <a href=\"https://bitbucket.org/atlassian/atlaskit-mk-2/src/HEAD/docs/guides/07-releasing-packages.md\" target=\"_parent\">this guide</a> for more details.</p>\n\n</div>";
var errorLoadingChangesetMessage = "<div style=\"color: red; border: 2px solid; padding: 10px; border-radius: 10px; display: inline-block;\">\n<p>Error loading changesets for this PR</p>\n</div>";

function releasesToHtmlList(releases) {
  return "<ul>\n    ".concat(releases.map(function (release) {
    return release.name;
  }).join(', '), "\n  </ul>");
}

var releasedPackagesMessage = function releasedPackagesMessage(releases, v2) {
  var majorReleases = releases.filter(function (release) {
    return release.type === 'major';
  });
  var minorReleases = releases.filter(function (release) {
    return release.type === 'minor';
  });
  var patchReleases = releases.filter(function (release) {
    return release.type === 'patch';
  });
  var majorReleasesSection = majorReleases.length > 0 ? "<h3>\uD83D\uDCA5 Major Releases</h3>".concat(releasesToHtmlList(majorReleases)) : '';
  var minorReleasesSection = minorReleases.length > 0 ? "<h3>\u2728 Minor Releases</h3>".concat(releasesToHtmlList(minorReleases)) : '';
  var patchReleasesSection = patchReleases.length > 0 ? "<h3>\uD83D\uDEE0 Patch Releases</h3>".concat(releasesToHtmlList(patchReleases)) : '';
  var dependentsWarningSection = v2 ? "<p style=\"color: red;\">Warning: Dependents can not currently be displayed by the Release Addon when using Changesets V2.<br>\n         <text style=\"color: rgb(80, 95, 121)\">You can check these manually by running <strong>yarn changeset status</strong> in your terminal.</text></p>\n         <p style=\"color: rgb(80, 95, 121)\">For any questions, please see the <strong>#atlaskit-build</strong> room.</p>" : '';
  return "<div style=\"color: green; border: 1px solid; padding: 10px; border-radius: 10px; display: inline-block;\">\n    ".concat(majorReleasesSection, "\n    ").concat(minorReleasesSection, "\n    ").concat(patchReleasesSection, "\n    ").concat(dependentsWarningSection, "\n  </div>");
};

var yamlToReleases = function yamlToReleases(changesets) {
  return changesets.map(function (changeset) {
    var result = /\s*---([^]*?)\n\s*---\n([^]+)/.exec(changeset);

    var _result = (0, _slicedToArray2.default)(result, 2),
        roughReleases = _result[1];

    var yamlStuff = _jsYaml.default.safeLoad(roughReleases);

    return Object.entries(yamlStuff).map(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          name = _ref2[0],
          type = _ref2[1];

      return {
        name: name,
        type: type
      };
    });
  }).flat();
};

var _queryString$parse = _queryString.default.parse(window.location.search),
    user = _queryString$parse.user,
    repo = _queryString$parse.repo,
    pullrequestid = _queryString$parse.pullrequestid,
    repoid = _queryString$parse.repoid,
    sourcehash = _queryString$parse.sourcehash,
    destinationhash = _queryString$parse.destinationhash; // Only retrieve one type of changesets. Legacy commit changesets and v2 changesets (md files with yaml frontmatter)
// are only supported in repos defined in config.js


var legacy = _config.legacyChangesetRepos.indexOf(repoid) >= 0;
var v2 = _config.v2ChangesetRepos.indexOf(repoid) >= 0;
var changesetPromise = legacy ? (0, _getCommits.default)(user, repo, pullrequestid) : (0, _getChangesets.default)(user, repo, sourcehash, destinationhash, v2);
changesetPromise.then(function (changesets) {
  if (!changesets || changesets.length === 0) {
    document.body.innerHTML = noChangesetMessage;
    return;
  } // Changesets will be in text form (from the markdown file) if V2
  // Otherwise in the JSON format that needs to be flattened


  var releases = v2 ? yamlToReleases(changesets) : (0, _flattenChangesets.default)(changesets);
  document.body.innerHTML = releasedPackagesMessage(releases, v2);
}).catch(function (e) {
  console.error('error in changeset', e);
  document.body.innerHTML = errorLoadingChangesetMessage;
});