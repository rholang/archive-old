export default function collapseRange<T>(pages: Array<T>, current: number, { max, ellipsis, }: {
    max: number;
    ellipsis: (arg: {
        key: string;
    }) => T;
}): Array<T>;
