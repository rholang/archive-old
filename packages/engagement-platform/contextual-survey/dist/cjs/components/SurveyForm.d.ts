import { FormValues } from '../types';
interface Props {
    question: string;
    statement?: string;
    textPlaceholder: string;
    textLabel: string;
    onSubmit: (formValues: FormValues, formApi: any, callback: (err?: Object) => void) => void;
}
declare const _default: ({ question, statement, textPlaceholder, textLabel, onSubmit, }: Props) => JSX.Element;
export default _default;
