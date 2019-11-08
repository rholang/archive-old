import { TaskState } from '@atlaskit/task-decision';
import RendererBridge, { ScrollToContentNode } from './bridge';
import WebBridge from '../../web-bridge';
import { TaskDecisionProviderImpl } from '../../providers/taskDecisionProvider';
export default class RendererBridgeImpl extends WebBridge implements RendererBridge {
    taskDecisionProvider?: TaskDecisionProviderImpl;
    containerAri?: string;
    objectAri?: string;
    /** Renderer bridge MVP to set the content */
    setContent(content: string): void;
    onPromiseResolved(uuid: string, payload: string): void;
    onPromiseRejected(uuid: string): void;
    scrollToElement(selector: string, index?: number): boolean;
    /**
     * Find a matching content node and scroll it into view.
     *
     * Usage of this method is suitable when the WebView controls scrolling (using <body /> scrolling).
     *
     * @param node The name of the content node type you wish to scroll to.
     * @param id The identifier used for the selector.
     * @param index An optional index in case the identifier isn't unique per instance.
     *
     * @return A string representation of a boolean.
     */
    scrollToContentNode(nodeType: ScrollToContentNode, id: string, index?: number): string;
    getElementScrollOffsetY(selector: string, index?: number): number;
    /**
     * Find a matching content node and return its vertical scroll offset, relative to the top of the document.
     *
     * Usage of this method is suitable when the Native app wrapper controls scrolling (e.g. WebView height matches the content height).
     * At which point the caller can use the returned value to calculate and determine the scroll position relative to the UI layer
     * containing the WebView and scroll it into view itself.
     *
     * @param node The name of the content node type you wish to scroll to.
     * @param id The identifier used for the selector.
     * @param index An optional index in case the identifier isn't unique per instance.
     *
     * @return A string representation of the pixel offset number.
     */
    getContentNodeScrollOffsetY(nodeType: ScrollToContentNode, id: string, index?: number): string;
    onTaskUpdated(taskId: string, state: TaskState): void;
    getRootElement(): HTMLElement | null;
}
