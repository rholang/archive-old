"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function valueOf(state) {
    var states = [
        {
            name: 'strong',
            active: state.strongActive || false,
            enabled: !state.strongDisabled,
        },
        {
            name: 'em',
            active: state.emActive || false,
            enabled: !state.emDisabled,
        },
        {
            name: 'code',
            active: state.codeActive || false,
            enabled: !state.codeDisabled,
        },
        {
            name: 'underline',
            active: state.underlineActive || false,
            enabled: !state.underlineDisabled,
        },
        {
            name: 'strike',
            active: state.strikeActive || false,
            enabled: !state.strongDisabled,
        },
        {
            name: 'sup',
            active: state.superscriptActive || false,
            enabled: !state.superscriptDisabled,
        },
        {
            name: 'sub',
            active: state.subscriptActive || false,
            enabled: !state.subscriptDisabled,
        },
    ];
    return states;
}
exports.valueOf = valueOf;
//# sourceMappingURL=markState.js.map