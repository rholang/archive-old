"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PresetContext = React.createContext([]);
var PresetProvider = PresetContext.Provider;
exports.PresetProvider = PresetProvider;
var usePresetContext = function () { return React.useContext(PresetContext); };
exports.usePresetContext = usePresetContext;
//# sourceMappingURL=preset-context.js.map