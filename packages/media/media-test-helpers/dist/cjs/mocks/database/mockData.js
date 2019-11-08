"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hackerNouns = [
    'system',
    'protocol',
    'microchip',
    'alarm',
    'protocol',
    'panel',
    'pixel',
];
exports.getHackerNoun = function () {
    return hackerNouns[Math.round(Math.random() * hackerNouns.length)];
};
var commonFileName = [
    'kwanza_industrial_neural',
    'quality',
    'timor_leste',
    'cambridgeshire_transmitting_e_business',
    'greens_unbranded_soft_shirt_manager',
    'music_moratorium',
];
exports.imageFileTypes = ['.svgz', '.svg'];
exports.textFileTypes = ['.txt', '.in', '.ini', '.text', '.conf', '.list'];
exports.getTextFileType = function () {
    return exports.textFileTypes[Math.floor(Math.random() * exports.textFileTypes.length)];
};
exports.getFakeFileName = function (ext) {
    if (ext === void 0) { ext = exports.imageFileTypes[Math.round(Math.random())]; }
    return "" + commonFileName[Math.floor(Math.random() * commonFileName.length)] + ext;
};
// This fake image was generated using faker. It never changes so we are just
// using the output exact call Faker.image.dataUri(320, 240)
exports.fakeImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImZ1bGwiIHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIj4gPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iZ3JleSIvPiAgPHRleHQgeD0iMCIgeT0iMjAiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJzdGFydCIgZmlsbD0id2hpdGUiPjMyMHgyNDA8L3RleHQ+IDwvc3ZnPg==';
exports.getDateWithOffset = function (offset) {
    var time = new Date();
    time.setTime(time.getTime() + offset);
    return time;
};
exports.getPastDate = function () {
    var offset = 0 - Math.round(Math.random() * 10000);
    return exports.getDateWithOffset(offset);
};
exports.getFutureDate = function () {
    var offset = 100000 + Math.round(Math.random() * 10000);
    return exports.getDateWithOffset(offset);
};
// This function is taken directly from Faker
exports.mockDataUri = function (width, height) {
    var rawPrefix = 'data:image/svg+xml;base64,';
    var svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" baseProfile=\"full\" width=\"" + width + "\" height=\"" + height + "\"> <rect width=\"100%\" height=\"100%\" fill=\"grey\"/>  <text x=\"0\" y=\"20\" font-size=\"20\" text-anchor=\"start\" fill=\"white\">" + width + "x" + height + "</text> </svg>";
    return rawPrefix + btoa(svgString);
};
//# sourceMappingURL=mockData.js.map