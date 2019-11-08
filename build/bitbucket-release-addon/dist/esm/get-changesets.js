import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function getDiffStatUrl(user, repo, sourcehash, destinationhash) {
  return "/2.0/repositories/".concat(user, "/").concat(repo, "/diffstat/").concat(sourcehash, "..").concat(destinationhash);
}

function getFileUrl(user, repo, hash, filePath) {
  return "/2.0/repositories/".concat(user, "/").concat(repo, "/src/").concat(hash, "/").concat(filePath);
}

function promisifyAPRequest(url) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  return new Promise(function (resolve, reject) {
    window.AP.require('request', function (request) {
      request({
        url: url,
        responseType: type,
        success: function success(response) {
          resolve(response);
        },
        error: function error(_error) {
          reject(_error);
        }
      });
    });
  });
}

function getFullDiffStat(url) {
  var allValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return promisifyAPRequest(url).then(function (res) {
    var values = [].concat(_toConsumableArray(allValues), _toConsumableArray(res.values));

    if (res.next) {
      return getFullDiffStat(res.next, values);
    }

    return values;
  });
}
/**
 * If we ever need to make this faster for large PRs, we could calculate the full
 * number of requests after the first request and make serveral at a time in
 * parallel.
 */


export default function getChangesetInfo(user, repo, sourcehash, destinationhash, v2) {
  var diffstatUrl = getDiffStatUrl(user, repo, sourcehash, destinationhash);
  return getFullDiffStat(diffstatUrl).then(function (allDiffStats) {
    var relevantDiffs = allDiffStats.filter(function (diff) {
      return diff.status !== 'removed';
    }).filter(function (diff) {
      return diff.new && diff.new.path && // V2: .changeset/big-new-change.md
      // V1: .changeset/big-new-change/changes.json
      diff.new.path.match(v2 ? /\.changeset\/[^/]+?\.md$/ : /\.changeset\/.+?\/changes.json$/);
    }).map(function (diff) {
      return getFileUrl(user, repo, sourcehash, diff.new.path);
    }).map(function (url) {
      return promisifyAPRequest(url, v2 ? 'text' : 'json');
    });
    return Promise.all(relevantDiffs);
  });
}