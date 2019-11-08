declare global {
    interface Window {
        jQuery: any;
        ATL_JQ_PAGE_PROPS: any;
    }
}
declare const loadJiraCollectorDialogScript: (labels: string[], packageName: string, coreVersion: string, packageVersion: string) => Promise<() => void>;
export default loadJiraCollectorDialogScript;
