import { Server } from 'kakapo';
import * as exenv from 'exenv';
import uuid from 'uuid/v4';
import { createApiRouter, createMediaPlaygroundRouter } from './routers';
import { createDatabase } from './database';
import { mapDataUriToBlob } from '../utils';
var MediaMock = /** @class */ (function () {
    function MediaMock(collections) {
        this.collections = collections;
        this.server = new Server();
    }
    MediaMock.prototype.enable = function () {
        if (!exenv.canUseDOM) {
            return;
        }
        this.server.use(createDatabase(this.collections));
        this.server.use(createMediaPlaygroundRouter());
        this.server.use(createApiRouter());
    };
    MediaMock.prototype.disable = function () {
        // TODO: add teardown logic to kakapo server
        /* eslint-disable no-console */
        console.warn('Disabling logic is not implemented in MediaMock');
    };
    return MediaMock;
}());
export { MediaMock };
export function generateFilesFromTestData(files) {
    return files.map(function (file) {
        var blob = mapDataUriToBlob(file.dataUri);
        var id = file.id || uuid();
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
export var mediaMock = new MediaMock();
//# sourceMappingURL=media-mock.js.map