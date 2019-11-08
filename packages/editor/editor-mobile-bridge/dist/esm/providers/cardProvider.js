import { __awaiter, __extends, __generator } from "tslib";
import { EditorCardProvider, Client, } from '@atlaskit/smart-card';
import { createPromise } from '../cross-platform-promise';
var EditorMobileCardProvider = /** @class */ (function (_super) {
    __extends(EditorMobileCardProvider, _super);
    function EditorMobileCardProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorMobileCardProvider.prototype.resolve = function (url, appearance) {
        return __awaiter(this, void 0, void 0, function () {
            var getLinkResolve;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createPromise('getLinkResolve', JSON.stringify({ url: url, appearance: appearance })).submit()];
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
}(EditorCardProvider));
export { EditorMobileCardProvider };
var MobileSmartCardClient = /** @class */ (function (_super) {
    __extends(MobileSmartCardClient, _super);
    function MobileSmartCardClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileSmartCardClient.prototype.fetchData = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*
                 *
                 * This is called when an inlineCard | blockCard is loaded in the document
                 * or from the renderer
                 * Response from the native side should have the shape of ResolveResponse
                 * https://atlaskit.atlassian.com/packages/media/smart-card/docs/client
                 *
                 */
                return [2 /*return*/, createPromise('getResolvedLink', JSON.stringify({ url: url }))
                        .submit()
                        .then(function (response) { return response; }, function (error) { return error; })];
            });
        });
    };
    return MobileSmartCardClient;
}(Client));
export { MobileSmartCardClient };
export var cardProvider = new EditorMobileCardProvider();
export var cardClient = new MobileSmartCardClient();
//# sourceMappingURL=cardProvider.js.map