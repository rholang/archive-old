"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("./types");
var parseJPEG_1 = require("./parseJPEG");
var parsePNG_1 = require("./parsePNG");
var parsePNGXMP_1 = require("./parsePNGXMP");
function readImageMetaTags(file) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var type, _a, iTXt, pHYs, xmpMetaData, e_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    type = file.type;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    if (!(type === types_1.ImageType.PNG)) return [3 /*break*/, 3];
                    return [4 /*yield*/, parsePNG_1.readPNGXMPMetaData(file)];
                case 2:
                    _a = _b.sent(), iTXt = _a.iTXt, pHYs = _a.pHYs;
                    xmpMetaData = tslib_1.__assign(tslib_1.__assign({}, parsePNGXMP_1.parseXMPMetaData(iTXt)), pHYs);
                    return [2 /*return*/, xmpMetaData];
                case 3:
                    if (!(file.type === types_1.ImageType.JPEG)) return [3 /*break*/, 5];
                    return [4 /*yield*/, parseJPEG_1.readJPEGExifMetaData(file)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
exports.readImageMetaTags = readImageMetaTags;
//# sourceMappingURL=metatags.js.map