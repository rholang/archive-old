"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editorCommon = tslib_1.__importStar(require("@atlaskit/editor-common"));
var Platforms;
(function (Platforms) {
    Platforms[Platforms["Mac"] = 0] = "Mac";
    Platforms[Platforms["Window"] = 1] = "Window";
})(Platforms = exports.Platforms || (exports.Platforms = {}));
function simulatePlatform(platform) {
    var originaBrowser = editorCommon.browser;
    var spyNavigator;
    beforeAll(function () {
        spyNavigator = jest.spyOn(window.navigator, 'platform', 'get');
        if (platform === Platforms.Mac) {
            // @ts-ignore: read-only
            // TODO: Find a way to mock browser without readonly error
            editorCommon.browser = {
                mac: true,
            };
            spyNavigator.mockReturnValue('MacIntel');
            return;
        }
        // @ts-ignore: read-only
        editorCommon.browser = {
            mac: false,
        };
        spyNavigator.mockReturnValue('Other');
    });
    afterAll(function () {
        // @ts-ignore: read-only
        editorCommon.browser = originaBrowser;
        spyNavigator.mockRestore();
    });
}
exports.default = simulatePlatform;
//# sourceMappingURL=simulatePlatform.js.map