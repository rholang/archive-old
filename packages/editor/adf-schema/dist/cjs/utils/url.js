"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var linkify_it_1 = tslib_1.__importDefault(require("linkify-it"));
var whitelistedURLPatterns = [
    /^https?:\/\//im,
    /^ftps?:\/\//im,
    /^\//im,
    /^mailto:/im,
    /^skype:/im,
    /^callto:/im,
    /^facetime:/im,
    /^git:/im,
    /^irc6?:/im,
    /^news:/im,
    /^nntp:/im,
    /^feed:/im,
    /^cvs:/im,
    /^svn:/im,
    /^mvn:/im,
    /^ssh:/im,
    /^scp:\/\//im,
    /^sftp:\/\//im,
    /^itms:/im,
    /^notes:/im,
    /^hipchat:\/\//im,
    /^sourcetree:/im,
    /^urn:/im,
    /^tel:/im,
    /^xmpp:/im,
    /^telnet:/im,
    /^vnc:/im,
    /^rdp:/im,
    /^whatsapp:/im,
    /^slack:/im,
    /^sips?:/im,
    /^magnet:/im,
];
exports.isSafeUrl = function (url) {
    return whitelistedURLPatterns.some(function (p) { return p.test(url.trim()) === true; });
};
var linkify = linkify_it_1.default();
linkify.add('sourcetree:', 'http:');
function getLinkMatch(str) {
    var match = str && linkify.match(str);
    return match && match[0];
}
exports.getLinkMatch = getLinkMatch;
/**
 * Adds protocol to url if needed.
 */
function normalizeUrl(url) {
    var match = getLinkMatch(url);
    return (match && match.url) || url;
}
exports.normalizeUrl = normalizeUrl;
//# sourceMappingURL=url.js.map