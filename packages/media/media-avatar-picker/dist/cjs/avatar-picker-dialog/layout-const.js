"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
var media_ui_1 = require("@atlaskit/media-ui");
exports.DEFAULT_VISIBLE_PREDEFINED_AVATARS = 5;
exports.AVATAR_DIALOG_WIDTH = 375;
exports.AVATAR_DIALOG_HEIGHT = 470;
exports.PREDEFINED_AVATARS_VIEW_WIDTH = 343;
exports.PREDEFINED_AVATARS_VIEW_HEIGHT = 290;
exports.CONTAINER_SIZE = constants_1.gridSize() * 32;
exports.CONTAINER_INNER_SIZE = constants_1.gridSize() * 25;
exports.CONTAINER_PADDING = (exports.CONTAINER_SIZE - exports.CONTAINER_INNER_SIZE) / 2;
exports.CONTAINER_RECT = new media_ui_1.Rectangle(exports.CONTAINER_SIZE, exports.CONTAINER_SIZE);
//# sourceMappingURL=layout-const.js.map