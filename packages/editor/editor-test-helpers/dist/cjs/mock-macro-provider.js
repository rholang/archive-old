"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_extension_data_1 = require("./mock-extension-data");
var getMacroADFNode = function (macroName, macroParams) {
    return {
        type: 'inlineExtension',
        attrs: {
            extensionType: 'com.atlassian.confluence.macro.core',
            extensionKey: macroName,
            parameters: {
                macroParams: macroParams,
                macroMetadata: {
                    macroId: { value: 12345 },
                    placeholder: [
                        {
                            data: { url: '' },
                            type: 'icon',
                        },
                    ],
                },
            },
        },
    };
};
var MockMacroProvider = /** @class */ (function () {
    function MockMacroProvider(mockExtensionData) {
        this.config = {};
        this.mockExtensionData = mockExtensionData;
    }
    MockMacroProvider.prototype.openMacroBrowser = function (_macroNode) {
        return Promise.resolve(this.mockExtensionData);
    };
    MockMacroProvider.prototype.autoConvert = function (link) {
        if (link.match('https://jdog.jira-dev.com/browse')) {
            return getMacroADFNode('jira', {
                paramA: { value: link },
            });
        }
        switch (link) {
            case 'http://www.dumbmacro.com?paramA=CFE':
            case 'https://www.dumbmacro.com?paramA=CFE':
            case 'www.dumbmacro.com?paramA=CFE':
                return getMacroADFNode('dumbMacro', {
                    paramA: { value: 'CFE' },
                });
            case 'http://www.smartmacro.com?paramB=CFE':
            case 'https://www.smartmacro.com?paramB=CFE':
            case 'www.smartmacro.com?paramB=CFE':
                return getMacroADFNode('smartMacro', {
                    paramB: { value: 'CFE' },
                });
            default:
                return null;
        }
    };
    return MockMacroProvider;
}());
exports.MockMacroProvider = MockMacroProvider;
exports.macroProvider = new MockMacroProvider(mock_extension_data_1.bodiedExtensionData[0]);
//# sourceMappingURL=mock-macro-provider.js.map