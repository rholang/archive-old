import * as React from 'react';
import { bulletListSelector } from '@atlaskit/adf-schema';
export default function BulletList(props) {
    return React.createElement("ul", { className: bulletListSelector.substr(1) }, props.children);
}
//# sourceMappingURL=bulletList.js.map