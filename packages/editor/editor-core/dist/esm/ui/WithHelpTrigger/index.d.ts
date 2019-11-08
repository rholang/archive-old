import * as React from 'react';
import * as PropTypes from 'prop-types';
export default class WithHelpTrigger extends React.Component<{
    render: (openHelp: () => void) => React.ReactNode;
}, any> {
    static contextTypes: {
        editorActions: PropTypes.Validator<any>;
    };
    openHelp: () => void;
    render(): React.ReactNode;
}
