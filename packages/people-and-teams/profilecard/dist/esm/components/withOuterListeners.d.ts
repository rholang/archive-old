import * as React from 'react';
export interface WithOuterListenersProps {
    handleClickOutside?: () => void;
    handleEscapeKeydown?: () => void;
}
export default function withOuterListeners<P>(Component: React.ComponentClass<P> | React.StatelessComponent<P>): React.ComponentClass<P & WithOuterListenersProps>;
