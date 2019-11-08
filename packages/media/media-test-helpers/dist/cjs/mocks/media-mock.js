"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var kakapo_1 = require("kakapo");
var exenv = tslib_1.__importStar(require("exenv"));
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var routers_1 = require("./routers");
var database_1 = require("./database");
var utils_1 = require("../utils");
var MediaMock = /** @class */ (function () {
    function MediaMock(collections) {
        this.collections = collections;
        this.server = new kakapo_1.Server();
    }
    MediaMock.prototype.enable = function () {
        if (!exenv.canUseDOM) {
            return;
        }
        this.server.use(database_1.createDatabase(this.collections));
        this.server.use(routers_1.createMediaPlaygroundRouter());
        this.server.use(routers_1.createApiRouter());
    };
    MediaMock.prototype.disable = function () {
        // TODO: add teardown logic to kakapo server
        /* eslint-disable no-console */
        console.warn('Disabling logic is not implemented in MediaMock');
    };
    return MediaMock;
}());
exports.MediaMock = MediaMock;
function generateFilesFromTestData(files) {
    return files.map(function (file) {
        var blob = utils_1.mapDataUriToBlob(file.dataUri);
        var id = file.id || v4_1.default();
        var name = file.name || "test-file-" + id;
        return {
            id: id,
            blob: blob,
            mimeType: blob.type,
            mediaType: 'image',
            name: name,
            size: blob.size,
            artifacts: {},
            representations: {
                image: {},
            },
        };
    });
}
exports.generateFilesFromTestData = generateFilesFromTestData;
exports.mediaMock = new MediaMock();
//# sourceMappingURL=media-mock.js.map