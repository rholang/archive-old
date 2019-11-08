/// <reference types="jest" />
/// <reference types="react" />
import { State } from '@atlaskit/media-picker/src/popup/domain';
import { Store } from 'react-redux';
export declare const mockState: State;
export declare const mockStore: (state?: Partial<State> | undefined) => {
    dispatch: jest.Mock<unknown>;
    getState: () => State;
    subscribe: jest.Mock<unknown>;
    replaceReducer: jest.Mock<unknown>;
};
export declare const mockChannel: () => {
    listen: jest.Mock<unknown>;
    send: jest.Mock<unknown>;
    ready: jest.Mock<unknown>;
    destroy: jest.Mock<unknown>;
};
export declare const mockProvider: jest.Mock<{
    observable: () => any;
}>;
export declare const mockAuthProvider: jest.Mock<unknown>;
export declare const mockFetcher: () => {
    fetchCloudAccountFolder: jest.Mock<unknown>;
    pollFile: jest.Mock<unknown>;
    getPreview: jest.Mock<unknown>;
    getImage: jest.Mock<unknown>;
    getServiceList: jest.Mock<unknown>;
    getRecentFiles: jest.Mock<unknown>;
    unlinkCloudAccount: jest.Mock<unknown>;
    fetchCloudAccountFile: jest.Mock<unknown>;
    copyFile: jest.Mock<unknown>;
    fetchTrendingGifs: jest.Mock<unknown>;
    fetchGifsRelevantToSearch: jest.Mock<unknown>;
};
export declare const mockIsWebGLNotAvailable: () => void;
export declare const mockWsConnectionHolder: () => {
    openConnection: jest.Mock<unknown>;
    send: jest.Mock<unknown>;
};
export declare const mockEventEmiter: () => {
    once: jest.Mock<unknown>;
    on: jest.Mock<unknown>;
    onAny: jest.Mock<unknown>;
    addListener: jest.Mock<unknown>;
    off: jest.Mock<unknown>;
    removeListener: jest.Mock<unknown>;
    removeAllListeners: jest.Mock<unknown>;
    emit: jest.Mock<unknown>;
};
export declare const mockPopupUploadEventEmitter: () => {
    emitReady: jest.Mock<unknown>;
    emitClosed: jest.Mock<unknown>;
    emitUploadsStart: jest.Mock<unknown>;
    emitUploadProgress: jest.Mock<unknown>;
    emitUploadPreviewUpdate: jest.Mock<unknown>;
    emitUploadProcessing: jest.Mock<unknown>;
    emitUploadEnd: jest.Mock<unknown>;
    emitUploadError: jest.Mock<unknown>;
};
export interface PropsWithStore {
    store?: Store<any>;
}
/**
 * Connected (react-redux) components allow to provide "store" as prop directly (without specifying
 * store Provider wrapper). But current type definition doesn't allow for that.
 * This function takes React Component class and return one identical, but with additional store prop)
 */
export declare function getComponentClassWithStore<P>(componentClass: React.ComponentClass<P>): React.ComponentClass<P & PropsWithStore>;
