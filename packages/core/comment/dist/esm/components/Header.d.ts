import { ReactNode } from 'react';
interface Props {
    author?: ReactNode;
    restrictedTo?: ReactNode;
    isSaving?: boolean;
    savingText?: string;
    time?: ReactNode;
    type?: string;
    edited?: ReactNode;
    isError?: boolean;
}
declare const HeaderItems: ({ author, edited, isError, isSaving, restrictedTo, savingText, time, type, }: Props) => JSX.Element | null;
export default HeaderItems;
