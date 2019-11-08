"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultState = {
    uploads: {},
    remoteUploads: {},
    recents: {
        items: [],
    },
    view: {
        isVisible: false,
        service: {
            name: 'upload',
            accountId: '',
        },
        hasError: false,
        isLoading: true,
        path: [],
        items: [],
        isUploading: false,
        isCancelling: false,
    },
    accounts: Promise.resolve([]),
    selectedItems: [],
    isUploading: false,
    isCancelling: false,
    lastUploadIndex: 0,
    giphy: {
        imageCardModels: [],
        totalResultCount: undefined,
    },
    onCancelUpload: function () {
        throw new Error('onCancelUpload has not been set yet.');
    },
};
exports.default = defaultState;
//# sourceMappingURL=default_state.js.map