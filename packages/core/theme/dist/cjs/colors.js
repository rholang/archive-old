"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DN600A = exports.DN700A = exports.DN800A = exports.DN0 = exports.DN10 = exports.DN20 = exports.DN30 = exports.DN40 = exports.DN50 = exports.DN60 = exports.DN70 = exports.DN80 = exports.DN90 = exports.DN100 = exports.DN200 = exports.DN300 = exports.DN400 = exports.DN500 = exports.DN600 = exports.DN700 = exports.DN800 = exports.DN900 = exports.N800A = exports.N700A = exports.N600A = exports.N500A = exports.N400A = exports.N300A = exports.N200A = exports.N100A = exports.N90A = exports.N80A = exports.N70A = exports.N60A = exports.N50A = exports.N40A = exports.N30A = exports.N20A = exports.N10A = exports.N900 = exports.N800 = exports.N700 = exports.N600 = exports.N500 = exports.N400 = exports.N300 = exports.N200 = exports.N100 = exports.N90 = exports.N80 = exports.N70 = exports.N60 = exports.N50 = exports.N40 = exports.N30 = exports.N20 = exports.N10 = exports.N0 = exports.T500 = exports.T400 = exports.T300 = exports.T200 = exports.T100 = exports.T75 = exports.T50 = exports.P500 = exports.P400 = exports.P300 = exports.P200 = exports.P100 = exports.P75 = exports.P50 = exports.B500 = exports.B400 = exports.B300 = exports.B200 = exports.B100 = exports.B75 = exports.B50 = exports.G500 = exports.G400 = exports.G300 = exports.G200 = exports.G100 = exports.G75 = exports.G50 = exports.Y500 = exports.Y400 = exports.Y300 = exports.Y200 = exports.Y100 = exports.Y75 = exports.Y50 = exports.R500 = exports.R400 = exports.R300 = exports.R200 = exports.R100 = exports.R75 = exports.R50 = void 0;
exports.colorPalette = exports.colorPalette24 = exports.colorPalette16 = exports.colorPalette8 = exports.green = exports.yellow = exports.red = exports.purple = exports.teal = exports.blue = exports.primary = exports.linkOutline = exports.linkActive = exports.linkHover = exports.link = exports.codeBlock = exports.subtleHeading = exports.heading = exports.placeholderText = exports.subtleText = exports.textActive = exports.textHover = exports.text = exports.backgroundOnLayer = exports.backgroundHover = exports.backgroundActive = exports.background = exports.DN10A = exports.DN20A = exports.DN30A = exports.DN40A = exports.DN50A = exports.DN60A = exports.DN70A = exports.DN80A = exports.DN90A = exports.DN100A = exports.DN200A = exports.DN300A = exports.DN400A = exports.DN500A = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _themed = _interopRequireDefault(require("./utils/themed"));

// Reds
var R50 = '#FFEBE6';
exports.R50 = R50;
var R75 = '#FFBDAD';
exports.R75 = R75;
var R100 = '#FF8F73';
exports.R100 = R100;
var R200 = '#FF7452';
exports.R200 = R200;
var R300 = '#FF5630';
exports.R300 = R300;
var R400 = '#DE350B';
exports.R400 = R400;
var R500 = '#BF2600'; // Yellows

exports.R500 = R500;
var Y50 = '#FFFAE6';
exports.Y50 = Y50;
var Y75 = '#FFF0B3';
exports.Y75 = Y75;
var Y100 = '#FFE380';
exports.Y100 = Y100;
var Y200 = '#FFC400';
exports.Y200 = Y200;
var Y300 = '#FFAB00';
exports.Y300 = Y300;
var Y400 = '#FF991F';
exports.Y400 = Y400;
var Y500 = '#FF8B00'; // Greens

exports.Y500 = Y500;
var G50 = '#E3FCEF';
exports.G50 = G50;
var G75 = '#ABF5D1';
exports.G75 = G75;
var G100 = '#79F2C0';
exports.G100 = G100;
var G200 = '#57D9A3';
exports.G200 = G200;
var G300 = '#36B37E';
exports.G300 = G300;
var G400 = '#00875A';
exports.G400 = G400;
var G500 = '#006644'; // Blues

exports.G500 = G500;
var B50 = '#DEEBFF';
exports.B50 = B50;
var B75 = '#B3D4FF';
exports.B75 = B75;
var B100 = '#4C9AFF';
exports.B100 = B100;
var B200 = '#2684FF';
exports.B200 = B200;
var B300 = '#0065FF';
exports.B300 = B300;
var B400 = '#0052CC';
exports.B400 = B400;
var B500 = '#354a5f'; // Purples

exports.B500 = B500;
var P50 = '#EAE6FF';
exports.P50 = P50;
var P75 = '#C0B6F2';
exports.P75 = P75;
var P100 = '#998DD9';
exports.P100 = P100;
var P200 = '#8777D9';
exports.P200 = P200;
var P300 = '#6554C0';
exports.P300 = P300;
var P400 = '#5243AA';
exports.P400 = P400;
var P500 = '#403294'; // Teals

exports.P500 = P500;
var T50 = '#E6FCFF';
exports.T50 = T50;
var T75 = '#B3F5FF';
exports.T75 = T75;
var T100 = '#79E2F2';
exports.T100 = T100;
var T200 = '#00C7E6';
exports.T200 = T200;
var T300 = '#00B8D9';
exports.T300 = T300;
var T400 = '#00A3BF';
exports.T400 = T400;
var T500 = '#008DA6'; // Neutrals

exports.T500 = T500;
var N0 = '#FFFFFF';
exports.N0 = N0;
var N10 = '#FAFBFC';
exports.N10 = N10;
var N20 = '#F4F5F7';
exports.N20 = N20;
var N30 = '#EBECF0';
exports.N30 = N30;
var N40 = '#DFE1E6';
exports.N40 = N40;
var N50 = '#C1C7D0';
exports.N50 = N50;
var N60 = '#B3BAC5';
exports.N60 = N60;
var N70 = '#A5ADBA';
exports.N70 = N70;
var N80 = '#97A0AF';
exports.N80 = N80;
var N90 = '#8993A4';
exports.N90 = N90;
var N100 = '#7A869A';
exports.N100 = N100;
var N200 = '#6B778C';
exports.N200 = N200;
var N300 = '#5E6C84';
exports.N300 = N300;
var N400 = '#505F79';
exports.N400 = N400;
var N500 = '#42526E';
exports.N500 = N500;
var N600 = '#344563';
exports.N600 = N600;
var N700 = '#253858';
exports.N700 = N700;
var N800 = '#172B4D'; // ATTENTION: update the tints if you update this

exports.N800 = N800;
var N900 = '#091E42'; // Each tint is made of N900 and an alpha channel

exports.N900 = N900;
var N10A = 'rgba(255, 255, 255, 0.00)';
exports.N10A = N10A;
var N20A = 'rgba(9, 30, 66, 0.04)';
exports.N20A = N20A;
var N30A = 'rgba(9, 30, 66, 0.08)';
exports.N30A = N30A;
var N40A = 'rgba(9, 30, 66, 0.13)';
exports.N40A = N40A;
var N50A = 'rgba(9, 30, 66, 0.25)';
exports.N50A = N50A;
var N60A = 'rgba(9, 30, 66, 0.31)';
exports.N60A = N60A;
var N70A = 'rgba(9, 30, 66, 0.36)';
exports.N70A = N70A;
var N80A = 'rgba(9, 30, 66, 0.42)';
exports.N80A = N80A;
var N90A = 'rgba(9, 30, 66, 0.48)';
exports.N90A = N90A;
var N100A = 'rgba(9, 30, 66, 0.54)';
exports.N100A = N100A;
var N200A = 'rgba(9, 30, 66, 0.60)';
exports.N200A = N200A;
var N300A = 'rgba(9, 30, 66, 0.66)';
exports.N300A = N300A;
var N400A = 'rgba(9, 30, 66, 0.71)';
exports.N400A = N400A;
var N500A = 'rgba(9, 30, 66, 0.77)';
exports.N500A = N500A;
var N600A = 'rgba(9, 30, 66, 0.82)';
exports.N600A = N600A;
var N700A = 'rgba(9, 30, 66, 0.89)';
exports.N700A = N700A;
var N800A = 'rgba(9, 30, 66, 0.95)'; // Dark Mode Neutrals

exports.N800A = N800A;
var DN900 = '#E6EDFA';
exports.DN900 = DN900;
var DN800 = '#DCE5F5';
exports.DN800 = DN800;
var DN700 = '#CED9EB';
exports.DN700 = DN700;
var DN600 = '#B8C7E0';
exports.DN600 = DN600;
var DN500 = '#ABBBD6';
exports.DN500 = DN500;
var DN400 = '#9FB0CC';
exports.DN400 = DN400;
var DN300 = '#8C9CB8';
exports.DN300 = DN300;
var DN200 = '#7988A3';
exports.DN200 = DN200;
var DN100 = '#67758F';
exports.DN100 = DN100;
var DN90 = '#56637A';
exports.DN90 = DN90;
var DN80 = '#455166';
exports.DN80 = DN80;
var DN70 = '#3B475C';
exports.DN70 = DN70;
var DN60 = '#313D52';
exports.DN60 = DN60;
var DN50 = '#283447';
exports.DN50 = DN50;
var DN40 = '#202B3D';
exports.DN40 = DN40;
var DN30 = '#1B2638';
exports.DN30 = DN30;
var DN20 = '#121A29';
exports.DN20 = DN20;
var DN10 = '#0E1624'; // ATTENTION: update the tints if you update this

exports.DN10 = DN10;
var DN0 = '#0D1424'; // Each dark tint is made of DN0 and an alpha channel

exports.DN0 = DN0;
var DN800A = 'rgba(13, 20, 36, 0.06)';
exports.DN800A = DN800A;
var DN700A = 'rgba(13, 20, 36, 0.14)';
exports.DN700A = DN700A;
var DN600A = 'rgba(13, 20, 36, 0.18)';
exports.DN600A = DN600A;
var DN500A = 'rgba(13, 20, 36, 0.29)';
exports.DN500A = DN500A;
var DN400A = 'rgba(13, 20, 36, 0.36)';
exports.DN400A = DN400A;
var DN300A = 'rgba(13, 20, 36, 0.40)';
exports.DN300A = DN300A;
var DN200A = 'rgba(13, 20, 36, 0.47)';
exports.DN200A = DN200A;
var DN100A = 'rgba(13, 20, 36, 0.53)';
exports.DN100A = DN100A;
var DN90A = 'rgba(13, 20, 36, 0.63)';
exports.DN90A = DN90A;
var DN80A = 'rgba(13, 20, 36, 0.73)';
exports.DN80A = DN80A;
var DN70A = 'rgba(13, 20, 36, 0.78)';
exports.DN70A = DN70A;
var DN60A = 'rgba(13, 20, 36, 0.81)';
exports.DN60A = DN60A;
var DN50A = 'rgba(13, 20, 36, 0.85)';
exports.DN50A = DN50A;
var DN40A = 'rgba(13, 20, 36, 0.89)';
exports.DN40A = DN40A;
var DN30A = 'rgba(13, 20, 36, 0.92)';
exports.DN30A = DN30A;
var DN20A = 'rgba(13, 20, 36, 0.95)';
exports.DN20A = DN20A;
var DN10A = 'rgba(13, 20, 36, 0.97)'; // Themed colors

exports.DN10A = DN10A;
var background = (0, _themed.default)({
  light: N0,
  dark: DN30
});
exports.background = background;
var backgroundActive = (0, _themed.default)({
  light: B50,
  dark: B75
});
exports.backgroundActive = backgroundActive;
var backgroundHover = (0, _themed.default)({
  light: N30,
  dark: DN70
});
exports.backgroundHover = backgroundHover;
var backgroundOnLayer = (0, _themed.default)({
  light: N0,
  dark: DN50
});
exports.backgroundOnLayer = backgroundOnLayer;
var text = (0, _themed.default)({
  light: N900,
  dark: DN600
});
exports.text = text;
var textHover = (0, _themed.default)({
  light: N800,
  dark: DN600
});
exports.textHover = textHover;
var textActive = (0, _themed.default)({
  light: B400,
  dark: B400
});
exports.textActive = textActive;
var subtleText = (0, _themed.default)({
  light: N200,
  dark: DN300
});
exports.subtleText = subtleText;
var placeholderText = (0, _themed.default)({
  light: N100,
  dark: DN200
});
exports.placeholderText = placeholderText;
var heading = (0, _themed.default)({
  light: N800,
  dark: DN600
});
exports.heading = heading;
var subtleHeading = (0, _themed.default)({
  light: N200,
  dark: DN300
});
exports.subtleHeading = subtleHeading;
var codeBlock = (0, _themed.default)({
  light: N20,
  dark: DN50
});
exports.codeBlock = codeBlock;
var link = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.link = link;
var linkHover = (0, _themed.default)({
  light: B300,
  dark: B200
});
exports.linkHover = linkHover;
var linkActive = (0, _themed.default)({
  light: B500,
  dark: B100
});
exports.linkActive = linkActive;
var linkOutline = (0, _themed.default)({
  light: B100,
  dark: B200
});
exports.linkOutline = linkOutline;
var primary = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.primary = primary;
var blue = (0, _themed.default)({
  light: B400,
  dark: B100
});
exports.blue = blue;
var teal = (0, _themed.default)({
  light: T300,
  dark: T200
});
exports.teal = teal;
var purple = (0, _themed.default)({
  light: P300,
  dark: P100
});
exports.purple = purple;
var red = (0, _themed.default)({
  light: R300,
  dark: R300
});
exports.red = red;
var yellow = (0, _themed.default)({
  light: Y300,
  dark: Y300
});
exports.yellow = yellow;
var green = (0, _themed.default)({
  light: G300,
  dark: G300
}); // Jira Portfolio

exports.green = green;
var colorPalette8 = [{
  background: N800,
  text: N0
}, {
  background: R400,
  text: N0
}, {
  background: P400,
  text: P50
}, {
  background: B400,
  text: B75
}, {
  background: T300,
  text: N800
}, {
  background: G400,
  text: N0
}, {
  background: Y400,
  text: N800
}, {
  background: N70,
  text: N800
}];
exports.colorPalette8 = colorPalette8;
var colorPalette16 = [].concat(colorPalette8, [{
  background: N500,
  text: N0
}, {
  background: R100,
  text: N800
}, {
  background: P75,
  text: N800
}, {
  background: B100,
  text: N800
}, {
  background: T100,
  text: N800
}, {
  background: G100,
  text: G500
}, {
  background: Y200,
  text: N800
}, {
  background: N0,
  text: N800
}]);
exports.colorPalette16 = colorPalette16;
var colorPalette24 = [].concat((0, _toConsumableArray2.default)(colorPalette16), [{
  background: N100,
  text: N0
}, {
  background: N40,
  text: N800
}, {
  background: N50,
  text: R500
}, {
  background: P50,
  text: P500
}, {
  background: B50,
  text: B500
}, {
  background: T75,
  text: N800
}, {
  background: G50,
  text: G500
}, {
  background: Y75,
  text: N800
}]);
exports.colorPalette24 = colorPalette24;

var colorPalette = function colorPalette() {
  var palette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '8';

  switch (palette) {
    case '8':
      return colorPalette8;

    case '16':
      return colorPalette16;

    case '24':
      return colorPalette24;

    default:
      throw new Error('The only available color palette is 8, 16, 24');
  }
};

exports.colorPalette = colorPalette;