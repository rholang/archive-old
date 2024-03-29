"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyPreset(preset) {
    switch (preset) {
        case 'editor':
            return [
                '@atlaskit/editor-core',
                '@atlaskit/editor-common',
                '@atlaskit/renderer',
                '@atlaskit/adf-utils',
                '@atlsakit/adf-schema',
                '@atlaskit/editor-json-transformer',
                '@atlaskit/editor-jira-transformer',
                '@atlaskit/editor-bitbucket-transformer',
                '@atlaskit/editor-markdown-transformer',
                '@atlaskit/editor-wikimarkup-transformer',
            ];
        default:
            return [];
    }
}
exports.applyPreset = applyPreset;
//# sourceMappingURL=apply-preset.js.map