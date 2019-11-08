import { ReactNode } from 'react';
interface Props {
    actions?: Array<ReactNode>;
    errorActions?: Array<ReactNode>;
    errorIconLabel?: string;
    isError?: boolean;
    isSaving?: boolean;
}
declare const FooterItems: ({ actions, errorActions, errorIconLabel, isError, isSaving, }: Props) => JSX.Element | null;
export default FooterItems;
