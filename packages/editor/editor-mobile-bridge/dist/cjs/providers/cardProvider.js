"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var smart_card_1 = require("@atlaskit/smart-card");
var cross_platform_promise_1 = require("../cross-platform-promise");
var EditorMobileCardProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EditorMobileCardProvider, _super);
    function EditorMobileCardProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorMobileCardProvider.prototype.resolve = function (url, appearance) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getLinkResolve;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cross_platform_promise_1.createPromise('getLinkResolve', JSON.stringify({ url: url, appearance: appearance })).submit()];
                    case 1:
                        getLinkResolve = _a.sent();
                        if (typeof getLinkResolve === 'object') {
                            return [2 /*return*/, getLinkResolve];
                        }
                        else {
                            return [2 /*return*/, _super.prototype.resolve.call(this, url, appearance)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EditorMobileCardProvider;
}(smart_card_1.EditorCardProvider));
exports.EditorMobileCardProvider = EditorMobileCardProvider;
var MobileSmartCardClient = /** @class */ (function (_super) {
    tslib_1.__extends(MobileSmartCardClient, _super);
    function MobileSmartCardClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileSmartCardClient.prototype.fetchData = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                /*
                 *
                 * This is called when an inlineCard | blockCard is loaded in the document
                 * or from the renderer
                 * Response from the native side should have the shape of ResolveResponse
                 * https://atlaskit.atlassian.com/packages/media/smart-card/docs/client
                 *
                 */
                return [2 /*return*/, cross_platform_promise_1.createPromise('getResolvedLink', JSON.stringify({ url: url }))
                        .submit()
                        .then(function (response) { return response; }, function (error) { return error; })];
            });
        });
    };
    return MobileSmartCardClient;
}(smart_card_1.Client));
exports.MobileSmartCardClient = MobileSmartCardClient;
exports.cardProvider = new EditorMobileCardProvider();
exports.cardClient = new MobileSmartCardClient();
//# sourceMappingURL=cardProvider.js.map