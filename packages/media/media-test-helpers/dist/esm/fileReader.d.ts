/// <reference types="jest" />
declare class MockFileReader {
    loadEvent: () => void;
    errorEvent: (_: {}) => void;
    result: string | null | ArrayBuffer;
    constructor(result?: string | null | ArrayBuffer);
    addEventListener: jest.Mock<unknown>;
    readAsDataURL: jest.Mock<unknown>;
    readAsArrayBuffer: jest.Mock<unknown>;
}
declare const mockFileReaderError: {
    message: string;
};
declare class MockFileReaderWithError extends MockFileReader {
    readAsDataURL: jest.Mock<unknown>;
}
declare const mockFileReader: (result: string | ArrayBuffer | null) => MockFileReader;
declare const mockFileReaderWithError: () => MockFileReaderWithError;
declare const unmockFileReader: () => any;
export { mockFileReader, mockFileReaderWithError, unmockFileReader, mockFileReaderError, };
