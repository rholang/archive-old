"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodes_1 = require("../../../../../utils/nodes");
function createDispatchTransaction(editorSharedConfig) {
    return function dispatchTransaction(transaction) {
        var editorView = editorSharedConfig.editorView;
        if (!editorView) {
            return;
        }
        var nodes = nodes_1.findChangedNodesFromTransaction(transaction);
        if (nodes_1.validateNodes(nodes)) {
            // go ahead and update the state now we know the transaction is good
            var editorState = editorView.state.apply(transaction);
            editorView.updateState(editorState);
            // const onChange = editorSharedConfig.onChange;
            // if (onChange && transaction.docChanged && editorActions) {
            //   // TODO we should re-visit this, this should NOT be async. Waiting for media pending tasks
            //   // should happen in teardown, not when getting the editors value.
            //   editorActions.getValue().then(value => {
            //     onChange(value);
            //   });
            // }
        }
        else {
            // TODO pipe analytics
        }
    };
}
exports.createDispatchTransaction = createDispatchTransaction;
//# sourceMappingURL=create-dispatch-transaction.js.map