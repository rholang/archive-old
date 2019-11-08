"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dataUri;

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

function dataUri(pathT) {
  var filePath = path.join(__dirname, '..', pathT); // read binary data

  var svgImage = fs.readFileSync(filePath, 'utf-8'); // convert binary data to base64 encoded string

  var encodedImage = encodeURIComponent(svgImage).replace(/'/g, '%27').replace(/"/g, '%22');
  return "url(\"data:image/svg+xml;charset=UTF-8,".concat(encodedImage, "\")");
}