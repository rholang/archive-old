import { findChangedNodesFromTransaction, validateNodes, } from '../../../../../utils/nodes';
export function createDispatchTransaction(editorSharedConfig) {
    return function dispatchTransaction(transaction) {
        var editorView = editorSharedConfig.editorView;
        if (!editorView) {
            return;
        }
        var nodes = findChangedNodesFromTransaction(transaction);
        if (validateNodes(nodes)) {
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
//# sourceMappingURL=create-dispatch-transaction.js.map