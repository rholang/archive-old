"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// StyledComponentClass and React types are imported to prevent a typescript error caused by inferred types sourced
// from external modules - https://github.com/styled-components/styled-components/issues/1063#issuecomment-320344957
// @ts-ignore: unused variable
// prettier-ignore
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var media_ui_1 = require("@atlaskit/media-ui");
var overlayZindex = constants_1.layers.modal() + 10;
exports.mediaTypeIconColors = {
    image: colors_1.Y200,
    audio: colors_1.P200,
    video: '#ff7143',
    doc: colors_1.B300,
    unknown: '#3dc7dc',
};
exports.blanketColor = colors_1.DN30;
exports.Blanket = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"])), exports.blanketColor, overlayZindex);
exports.HeaderWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 98px;\n  opacity: 0.85;\n  background-image: linear-gradient(to bottom, #0e1624, rgba(14, 22, 36, 0));\n  color: #b8c7e0;\n  font-weight: 500;\n  padding-top: 15px;\n  padding: 24px;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 98px;\n  opacity: 0.85;\n  background-image: linear-gradient(to bottom, #0e1624, rgba(14, 22, 36, 0));\n  color: #b8c7e0;\n  font-weight: 500;\n  padding-top: 15px;\n  padding: 24px;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: ", ";\n"])), overlayZindex + 1);
exports.HeaderWrapper.displayName = 'HeaderWrapper';
exports.ListWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([""], [""])));
exports.ListWrapper.displayName = 'ListWrapper';
exports.ArrowsWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n"], ["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n"])));
exports.CloseButtonWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 24px;\n  right: 20px;\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 24px;\n  right: 20px;\n  z-index: ", ";\n"])), overlayZindex + 2);
exports.ZoomWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  height: 98px;\n  background-image: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  opacity: 0.85;\n  pointer-events: none;\n"], ["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  height: 98px;\n  background-image: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  opacity: 0.85;\n  pointer-events: none;\n"])));
exports.ZoomControlsWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  bottom: 10px;\n  button {\n    margin-right: 10px;\n  }\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  bottom: 10px;\n  button {\n    margin-right: 10px;\n  }\n  > * {\n    pointer-events: all;\n  }\n"])));
exports.ZoomLevelIndicator = styled_components_1.default.span(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  right: 24px;\n  bottom: 22px;\n  color: #b8c7e0;\n  pointer-events: all;\n"], ["\n  position: absolute;\n  right: 24px;\n  bottom: 22px;\n  color: #b8c7e0;\n  pointer-events: all;\n"])));
exports.ErrorMessageWrapper = styled_components_1.default.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  text-align: center;\n  color: #b8c7e0;\n  p {\n    line-height: 100%;\n  }\n"], ["\n  text-align: center;\n  color: #b8c7e0;\n  p {\n    line-height: 100%;\n  }\n"])));
exports.ErrorImage = styled_components_1.default.img(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  margin-bottom: 10px;\n  user-select: none;\n"], ["\n  margin-bottom: 10px;\n  user-select: none;\n"])));
exports.Video = styled_components_1.default.video(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n"], ["\n  width: 100vw;\n  height: 100vh;\n"])));
exports.PDFWrapper = styled_components_1.default.div(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
exports.Arrow = styled_components_1.default.span(templateObject_13 || (templateObject_13 = tslib_1.__makeTemplateObject(["\n  cursor: pointer;\n  button {\n    height: inherit;\n  }\n  > span {\n    color: rgba(27, 38, 56, 0.5);\n    fill: #9fb0cc;\n    filter: drop-shadow(1px 1px 1px rgba(27, 38, 56, 0.2));\n\n    &:hover {\n      color: #fff;\n    }\n  }\n"], ["\n  cursor: pointer;\n  button {\n    height: inherit;\n  }\n  > span {\n    color: rgba(27, 38, 56, 0.5);\n    fill: #9fb0cc;\n    filter: drop-shadow(1px 1px 1px rgba(27, 38, 56, 0.2));\n\n    &:hover {\n      color: #fff;\n    }\n  }\n"])));
var ArrowWrapper = styled_components_1.default.div(templateObject_14 || (templateObject_14 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 20px;\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 20px;\n"])));
exports.LeftWrapper = styled_components_1.default(ArrowWrapper)(templateObject_15 || (templateObject_15 = tslib_1.__makeTemplateObject(["\n  text-align: left;\n  left: 0;\n"], ["\n  text-align: left;\n  left: 0;\n"])));
exports.RightWrapper = styled_components_1.default(ArrowWrapper)(templateObject_16 || (templateObject_16 = tslib_1.__makeTemplateObject(["\n  text-align: right;\n  right: 0;\n"], ["\n  text-align: right;\n  right: 0;\n"])));
// header.tsx
exports.Header = styled_components_1.default.div(templateObject_17 || (templateObject_17 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.LeftHeader = styled_components_1.default.div(templateObject_18 || (templateObject_18 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  overflow: hidden;\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  flex: 1;\n  overflow: hidden;\n  > * {\n    pointer-events: all;\n  }\n"])));
exports.ImageWrapper = styled_components_1.default.div(templateObject_19 || (templateObject_19 = tslib_1.__makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"], ["\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"])));
exports.BaselineExtend = styled_components_1.default.div(templateObject_20 || (templateObject_20 = tslib_1.__makeTemplateObject(["\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n"])));
exports.Img = styled_components_1.default.img(templateObject_21 || (templateObject_21 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: ", ";\n  ", "\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: ",
    ";\n  ",
    "\n"])), function (_a) {
    var canDrag = _a.canDrag, isDragging = _a.isDragging;
    if (canDrag && isDragging) {
        return 'grabbing';
    }
    else if (canDrag) {
        return 'grab';
    }
    else {
        return 'auto';
    }
}, function (_a) {
    var shouldPixelate = _a.shouldPixelate;
    return shouldPixelate
        ? "/* Prevent images from being smoothed when scaled up */\n    image-rendering: optimizeSpeed; /* Legal fallback */\n    image-rendering: -moz-crisp-edges; /* Firefox        */\n    image-rendering: -o-crisp-edges; /* Opera          */\n    image-rendering: -webkit-optimize-contrast; /* Safari         */\n    image-rendering: optimize-contrast; /* CSS3 Proposed  */\n    image-rendering: crisp-edges; /* CSS4 Proposed  */\n    image-rendering: pixelated; /* CSS4 Proposed  */\n    -ms-interpolation-mode: nearest-neighbor; /* IE8+           */"
        : "";
});
exports.MedatadataTextWrapper = styled_components_1.default.div(templateObject_22 || (templateObject_22 = tslib_1.__makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
exports.MetadataWrapper = styled_components_1.default.div(templateObject_23 || (templateObject_23 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.MetadataFileName = styled_components_1.default.div(templateObject_24 || (templateObject_24 = tslib_1.__makeTemplateObject(["\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  ", ";\n"], ["\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  ", ";\n"])), media_ui_1.ellipsis());
exports.MetadataSubText = styled_components_1.default.div(templateObject_25 || (templateObject_25 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  ", ";\n"], ["\n  color: ", ";\n  ", ";\n"])), colors_1.DN400, media_ui_1.ellipsis());
exports.MetadataIconWrapper = styled_components_1.default.div(templateObject_26 || (templateObject_26 = tslib_1.__makeTemplateObject(["\n  padding-top: 4px;\n  padding-right: 12px;\n"], ["\n  padding-top: 4px;\n  padding-right: 12px;\n"])));
exports.IconWrapper = styled_components_1.default.div(templateObject_27 || (templateObject_27 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  color: ",
    ";\n"])), function (_a) {
    var type = _a.type;
    return exports.mediaTypeIconColors[type] || exports.mediaTypeIconColors.unknown;
});
exports.RightHeader = styled_components_1.default.div(templateObject_28 || (templateObject_28 = tslib_1.__makeTemplateObject(["\n  text-align: right;\n  margin-right: 40px;\n  min-width: 200px;\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  text-align: right;\n  margin-right: 40px;\n  min-width: 200px;\n  > * {\n    pointer-events: all;\n  }\n"])));
exports.CustomAudioPlayerWrapper = styled_components_1.default.div(templateObject_29 || (templateObject_29 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"])));
exports.AudioPlayer = styled_components_1.default.div(templateObject_30 || (templateObject_30 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"])), exports.blanketColor, constants_1.borderRadius());
exports.AudioPlayer.displayName = 'AudioPlayer';
exports.Audio = styled_components_1.default.audio(templateObject_31 || (templateObject_31 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"], ["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"])));
exports.AudioCover = styled_components_1.default.img(templateObject_32 || (templateObject_32 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n  background-color: #000000;\n"], ["\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n  background-color: #000000;\n"])));
exports.DefaultCoverWrapper = styled_components_1.default.div(templateObject_33 || (templateObject_33 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > * {\n    transform: scale(2);\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > * {\n    transform: scale(2);\n  }\n"])));
exports.DownloadButtonWrapper = styled_components_1.default.div(templateObject_34 || (templateObject_34 = tslib_1.__makeTemplateObject(["\n  margin-top: 28px;\n  text-align: center;\n\n  button {\n    font-weight: bold;\n  }\n"], ["\n  margin-top: 28px;\n  text-align: center;\n\n  button {\n    font-weight: bold;\n  }\n"])));
exports.CustomVideoPlayerWrapper = styled_components_1.default.div(templateObject_35 || (templateObject_35 = tslib_1.__makeTemplateObject(["\n  video {\n    flex: 1;\n    width: 100vw;\n    height: 100vh;\n    max-height: 100vh;\n  }\n"], ["\n  video {\n    flex: 1;\n    width: 100vw;\n    height: 100vh;\n    max-height: 100vh;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35;
//# sourceMappingURL=styled.js.map