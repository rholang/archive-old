var FileFetcher = /** @class */ (function () {
    function FileFetcher() {
        this.getFileState = jest.fn();
        this.getCurrentState = jest.fn();
        this.getArtifactURL = jest.fn();
        this.touchFiles = jest.fn();
        this.upload = jest.fn();
        this.downloadBinary = jest.fn();
    }
    return FileFetcher;
}());
export { FileFetcher };
//# sourceMappingURL=file-fetcher.js.map