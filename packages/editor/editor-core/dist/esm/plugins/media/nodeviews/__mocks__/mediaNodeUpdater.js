import { __awaiter, __generator } from "tslib";
var MediaNodeUpdater = /** @class */ (function () {
    function MediaNodeUpdater() {
        var mockOverrides = MediaNodeUpdater.mockOverrides;
        this.updateContextId =
            mockOverrides['updateContextId'] ||
                jest.fn().mockResolvedValue(undefined);
        this.getAttrs = mockOverrides['getAttrs'] || jest.fn();
        this.getObjectId =
            mockOverrides['getObjectId'] || jest.fn().mockResolvedValue(undefined);
        this.getCurrentContextId =
            mockOverrides['getCurrentContextId'] || jest.fn();
        this.updateDimensions = mockOverrides['updateDimensions'] || jest.fn();
        this.getRemoteDimensions =
            mockOverrides['getRemoteDimensions'] ||
                jest.fn().mockResolvedValue(undefined);
        this.isNodeFromDifferentCollection =
            mockOverrides['isNodeFromDifferentCollection'] ||
                jest.fn().mockResolvedValue(true);
        this.copyNode =
            mockOverrides['copyNode'] || jest.fn().mockResolvedValue(undefined);
        this.updateFileAttrs = mockOverrides['updateFileAttrs'] || jest.fn();
        MediaNodeUpdater.instances.push(this);
        this.uploadExternalMedia =
            mockOverrides['uploadExternalMedia'] ||
                jest.fn().mockResolvedValue(undefined);
        this.isMediaBlobUrl =
            mockOverrides['isMediaBlobUrl'] || jest.fn().mockResolvedValue(undefined);
        this.copyNodeFromBlobUrl =
            mockOverrides['copyNodeFromBlobUrl'] ||
                jest.fn().mockResolvedValue(undefined);
    }
    MediaNodeUpdater.mockReset = function () {
        this.instances.length = 0;
        MediaNodeUpdater.mockOverrides = {};
    };
    MediaNodeUpdater.setMock = function (thisKey, value) {
        MediaNodeUpdater.mockOverrides[thisKey] = value;
    };
    MediaNodeUpdater.prototype.updateContextId = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.getAttrs = function () { };
    MediaNodeUpdater.prototype.getObjectId = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.getCurrentContextId = function () { };
    MediaNodeUpdater.prototype.updateDimensions = function () { };
    MediaNodeUpdater.prototype.getRemoteDimensions = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.isNodeFromDifferentCollection = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.copyNode = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.updateFileAttrs = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.uploadExternalMedia = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MediaNodeUpdater.prototype.isMediaBlobUrl = function () { };
    MediaNodeUpdater.prototype.copyNodeFromBlobUrl = function () { };
    MediaNodeUpdater.instances = [];
    MediaNodeUpdater.mockOverrides = {};
    return MediaNodeUpdater;
}());
export { MediaNodeUpdater };
//# sourceMappingURL=mediaNodeUpdater.js.map