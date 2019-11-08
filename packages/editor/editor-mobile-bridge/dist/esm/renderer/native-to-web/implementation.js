import { __extends } from "tslib";
import WebBridge from '../../web-bridge';
import { eventDispatcher } from '../dispatcher';
import { resolvePromise, rejectPromise } from '../../cross-platform-promise';
var RendererBridgeImpl = /** @class */ (function (_super) {
    __extends(RendererBridgeImpl, _super);
    function RendererBridgeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Renderer bridge MVP to set the content */
    RendererBridgeImpl.prototype.setContent = function (content) {
        if (eventDispatcher) {
            try {
                content = JSON.parse(content);
            }
            catch (e) {
                return;
            }
            eventDispatcher.emit('setRendererContent', { content: content });
        }
    };
    RendererBridgeImpl.prototype.onPromiseResolved = function (uuid, payload) {
        resolvePromise(uuid, JSON.parse(payload));
    };
    RendererBridgeImpl.prototype.onPromiseRejected = function (uuid) {
        rejectPromise(uuid);
    };
    RendererBridgeImpl.prototype.scrollToElement = function (selector, index) {
        if (index === void 0) { index = -1; }
        var element = !!~index
            ? document.querySelectorAll(selector)[index]
            : document.querySelector(selector);
        if (!element)
            return false;
        element.scrollIntoView();
        return true;
    };
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
    RendererBridgeImpl.prototype.scrollToContentNode = function (nodeType, id, index) {
        if (index === void 0) { index = -1; }
        var success = false;
        switch (nodeType) {
            case 'mention':
                // The omission of an index means it'll find the first match (in case the user is mentioned multiple times on the page)
                success = this.scrollToElement("span[data-mention-id='" + id + "']", index);
                break;
            case 'action':
                success = this.scrollToElement("div[data-task-local-id=\"" + id + "\"]");
                break;
            case 'decision':
                success = this.scrollToElement("li[data-decision-local-id=\"" + id + "\"]");
                break;
            default:
                /* eslint-disable-next-line no-console */
                console.warn("scrollToContentNode() doesn't support scrolling to content nodes of type '" + nodeType + "'.");
        }
        return String(success);
    };
    RendererBridgeImpl.prototype.getElementScrollOffsetY = function (selector, index) {
        if (index === void 0) { index = -1; }
        var element = !!~index
            ? document.querySelectorAll(selector)[index]
            : document.querySelector(selector);
        if (!element || !document || !document.documentElement)
            return -1;
        // Get offset from top of viewport.
        var top = element.getBoundingClientRect().top;
        // Combine with scroll offset of the page to get the position relative to the top of the document.
        return document.documentElement.scrollTop + top;
    };
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
    RendererBridgeImpl.prototype.getContentNodeScrollOffsetY = function (nodeType, id, index) {
        if (index === void 0) { index = -1; }
        var offset = -1;
        switch (nodeType) {
            case 'mention':
                // The omission of an index means it'll find the first match (in case the user is mentioned multiple times on the page)
                offset = this.getElementScrollOffsetY("span[data-mention-id='" + id + "']", index);
                break;
            case 'action':
                offset = this.getElementScrollOffsetY("div[data-task-local-id=\"" + id + "\"]");
                break;
            case 'decision':
                offset = this.getElementScrollOffsetY("li[data-decision-local-id=\"" + id + "\"]");
                break;
            default:
                /* eslint-disable-next-line no-console */
                console.warn("getContentNodeScrollOffsetY() doesn't support matching content nodes of type '" + nodeType + "'.");
        }
        return String(offset);
    };
    RendererBridgeImpl.prototype.onTaskUpdated = function (taskId, state) {
        if (this.taskDecisionProvider) {
            var key = {
                localId: taskId,
                objectAri: this.objectAri,
                containerAri: this.containerAri,
            };
            this.taskDecisionProvider.notifyUpdated(key, state);
        }
    };
    RendererBridgeImpl.prototype.getRootElement = function () {
        return document.querySelector('#renderer');
    };
    return RendererBridgeImpl;
}(WebBridge));
export default RendererBridgeImpl;
//# sourceMappingURL=implementation.js.map