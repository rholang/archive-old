import * as React from 'react';
var PresetContext = React.createContext([]);
var PresetProvider = PresetContext.Provider;
var usePresetContext = function () { return React.useContext(PresetContext); };
export { PresetProvider, usePresetContext };
//# sourceMappingURL=preset-context.js.map