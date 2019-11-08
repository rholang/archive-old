/// <reference types="react-intl" />
import * as PropTypes from 'prop-types';
import { PortalProviderAPI } from '../../../../ui/PortalProvider';
import { EditorProps } from '../editor-props-type';
export declare function EditorInternal(props: EditorPropsExtended, context: any): JSX.Element;
export declare namespace EditorInternal {
    var contextTypes: {
        editorActions: PropTypes.Requireable<any>;
        intl: ReactIntl.IntlShape;
    };
}
export declare type EditorPropsExtended = EditorProps & {
    portalProviderAPI: PortalProviderAPI;
};
