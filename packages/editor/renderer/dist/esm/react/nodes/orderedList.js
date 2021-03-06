import * as React from 'react';
import { orderedListSelector } from '@atlaskit/adf-schema';
export default function OrderedList(props) {
    return (React.createElement("ol", { className: orderedListSelector.substr(1), start: props.start }, props.children));
}
//# sourceMappingURL=orderedList.js.map