"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_service_support_1 = require("@atlaskit/util-service-support");
var media_client_1 = require("@atlaskit/media-client");
var type_helpers_1 = require("../../util/type-helpers");
var MediaEmojiCache_1 = tslib_1.__importDefault(require("./MediaEmojiCache"));
var EmojiUtils_1 = require("../EmojiUtils");
var TokenManager_1 = tslib_1.__importDefault(require("./TokenManager"));
var logger_1 = tslib_1.__importDefault(require("../../util/logger"));
// Assume media is 95% of total upload time.
exports.mediaProportionOfProgress = 95 / 100;
var SiteEmojiResource = /** @class */ (function () {
    function SiteEmojiResource(siteServiceConfig, mediaApiToken) {
        var _this = this;
        this.postToEmojiService = function (upload, fileId) {
            var shortName = upload.shortName, name = upload.name;
            var width = upload.width, height = upload.height;
            var requestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    shortName: shortName,
                    name: name,
                    width: width,
                    height: height,
                    fileId: fileId,
                }),
            };
            return util_service_support_1.utils
                .requestService(_this.siteServiceConfig, {
                requestInit: requestInit,
            })
                .then(function (response) {
                var emojis = response.emojis;
                if (emojis.length) {
                    var _a = emojis[0], altRepresentations = _a.altRepresentations, emoji = tslib_1.__rest(_a, ["altRepresentations"]);
                    var response_1 = tslib_1.__assign(tslib_1.__assign({}, emoji), { representation: type_helpers_1.convertImageToMediaRepresentation(emoji.representation) });
                    var altRepresentation = EmojiUtils_1.getAltRepresentation(altRepresentations || {});
                    var imgAltRepresentation = altRepresentation
                        ? type_helpers_1.convertImageToMediaRepresentation(altRepresentation)
                        : undefined;
                    return type_helpers_1.buildEmojiDescriptionWithAltRepresentation(response_1, imgAltRepresentation);
                }
                throw new Error('No emoji returns from upload. Upload failed.');
            });
        };
        this.siteServiceConfig = siteServiceConfig;
        this.mediaApiToken = mediaApiToken;
        this.tokenManager = new TokenManager_1.default(siteServiceConfig);
        this.tokenManager.addToken('read', mediaApiToken);
        this.mediaEmojiCache = new MediaEmojiCache_1.default(this.tokenManager);
    }
    /**
     * Will load media emoji, returning a new EmojiDescription if, for example,
     * the URL has changed.
     */
    SiteEmojiResource.prototype.loadMediaEmoji = function (emoji, useAlt) {
        if (!type_helpers_1.isMediaEmoji(emoji)) {
            throw new Error('Only supported for media emoji');
        }
        return this.mediaEmojiCache.loadEmoji(emoji, useAlt);
    };
    SiteEmojiResource.prototype.optimisticRendering = function (emoji, useAlt) {
        var representation = useAlt
            ? emoji.altRepresentation
            : emoji.representation;
        if (!type_helpers_1.isMediaRepresentation(representation)) {
            throw new Error('Only supported for media emoji');
        }
        var mediaPath = representation.mediaPath;
        return this.mediaEmojiCache.optimisticRendering(mediaPath);
    };
    SiteEmojiResource.prototype.uploadEmoji = function (upload, progressCallback) {
        var _this = this;
        var startTime = Date.now();
        return this.tokenManager.getToken('upload').then(function (uploadToken) {
            var tokenLoadTime = Date.now() - startTime;
            logger_1.default('upload token load time', tokenLoadTime);
            return new Promise(function (resolve, reject) {
                var url = uploadToken.url, clientId = uploadToken.clientId, collectionName = uploadToken.collectionName;
                var mediaClient = media_client_1.getMediaClient({
                    authProvider: function () {
                        return Promise.resolve({
                            clientId: clientId,
                            token: uploadToken.jwt,
                            baseUrl: url,
                        });
                    },
                });
                var subscription = mediaClient.file
                    .upload({
                    content: upload.dataURL,
                    name: upload.filename,
                    collection: collectionName,
                })
                    .subscribe({
                    next: function (state) {
                        if (state.status === 'uploading' && progressCallback) {
                            progressCallback({
                                percent: state.progress * exports.mediaProportionOfProgress,
                            });
                        }
                        else if (state.status === 'processing') {
                            subscription.unsubscribe();
                            var totalUploadTime = Date.now() - startTime;
                            var mediaUploadTime = totalUploadTime - tokenLoadTime;
                            logger_1.default('total upload / media upload times', totalUploadTime, mediaUploadTime);
                            _this.postToEmojiService(upload, state.id)
                                .then(function (emoji) {
                                resolve(emoji);
                            })
                                .catch(function (httpError) {
                                reject(httpError.reason || httpError);
                            });
                        }
                    },
                    error: function (error) {
                        reject(error);
                    },
                });
            });
        });
    };
    /**
     * Check if the MediaEmojiResource has been able to initialise an uploadToken. Retrieving an upload token
     * is asynchronous so the Promise will need to resolve before the state is known. If the token retrieval
     * completes with failure then the Promise will resolve to false.
     */
    SiteEmojiResource.prototype.hasUploadToken = function () {
        var tokenPromise = this.tokenManager.getToken('upload');
        return tokenPromise.then(function (token) {
            return token !== undefined;
        }, function () {
            return false;
        });
    };
    SiteEmojiResource.prototype.prepareForUpload = function () {
        // make sure a token is loaded from the emoji service if we don't have one
        // as future request to uploadEmoji will use this, this to preload it, as it
        // usually takes 1-2 seconds to generate
        this.tokenManager.getToken('upload');
    };
    SiteEmojiResource.prototype.findEmoji = function (emojiId) {
        var path = "../" + emojiId.id;
        return EmojiUtils_1.emojiRequest(this.siteServiceConfig, { path: path })
            .then(function (serviceResponse) {
            var response = EmojiUtils_1.denormaliseEmojiServiceResponse(serviceResponse);
            return response.emojis[0];
        })
            .catch(function (error) {
            logger_1.default('failed to load emoji', emojiId, error);
            return undefined;
        });
    };
    /**
     * Calls to site-scoped EmojiResource to delete emoji
     * @param emoji media emoji to delete
     * @returns Promise.resolve() if success and Promise.reject() for failure
     */
    SiteEmojiResource.prototype.deleteEmoji = function (emoji) {
        if (!type_helpers_1.isMediaEmoji(emoji) && !type_helpers_1.isLoadedMediaEmoji(emoji)) {
            return Promise.reject(false);
        }
        var path = "" + emoji.id;
        var requestInit = {
            method: 'DELETE',
        };
        return (util_service_support_1.utils
            .requestService(this.siteServiceConfig, { path: path, requestInit: requestInit })
            // Successful delete on Promise.resolve
            .then(function () { return true; })
            // Unsuccessful delete on Promise.reject
            .catch(function () { return false; }));
    };
    return SiteEmojiResource;
}());
exports.default = SiteEmojiResource;
//# sourceMappingURL=SiteEmojiResource.js.map