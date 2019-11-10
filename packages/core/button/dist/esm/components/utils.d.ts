import * as React from 'react';
import { ButtonProps } from '../types';
export declare const mapAttributesToState: ({ isDisabled, isActive, isFocus, isHover, isSelected, }: {
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isFocus?: boolean | undefined;
    isHover?: boolean | undefined;
    isSelected?: boolean | undefined;
}) => "default" | "disabled" | "focusSelected" | "selected" | "active" | "hover" | "focus";
export declare const filterProps: ({ createAnalyticsEvent, ...props }: Partial<ButtonProps>, type: React.ReactNode) => {
    accept?: string | undefined;
    acceptCharset?: string | undefined;
    action?: string | undefined;
    allowFullScreen?: boolean | undefined;
    allowTransparency?: boolean | undefined;
    alt?: string | undefined;
    as?: string | undefined;
    async?: boolean | undefined;
    autoComplete?: string | undefined;
    autoPlay?: boolean | undefined;
    capture?: string | boolean | undefined;
    cellPadding?: string | number | undefined;
    cellSpacing?: string | number | undefined;
    charSet?: string | undefined;
    challenge?: string | undefined;
    checked?: boolean | undefined;
    cite?: string | undefined;
    classID?: string | undefined;
    cols?: number | undefined;
    colSpan?: number | undefined;
    content?: string | undefined;
    controls?: boolean | undefined;
    coords?: string | undefined;
    crossOrigin?: string | undefined;
    data?: string | undefined;
    dateTime?: string | undefined;
    default?: boolean | undefined;
    defer?: boolean | undefined;
    disabled?: boolean | undefined;
    download?: any;
    encType?: string | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    frameBorder?: string | number | undefined;
    headers?: string | undefined;
    height?: string | number | undefined;
    high?: number | undefined;
    hrefLang?: string | undefined;
    htmlFor?: string | undefined;
    httpEquiv?: string | undefined;
    integrity?: string | undefined;
    keyParams?: string | undefined;
    keyType?: string | undefined;
    kind?: string | undefined;
    label?: string | undefined;
    list?: string | undefined;
    loop?: boolean | undefined;
    low?: number | undefined;
    manifest?: string | undefined;
    marginHeight?: number | undefined;
    marginWidth?: number | undefined;
    max?: string | number | undefined;
    maxLength?: number | undefined;
    media?: string | undefined;
    mediaGroup?: string | undefined;
    method?: string | undefined;
    min?: string | number | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    muted?: boolean | undefined;
    name?: string | undefined;
    nonce?: string | undefined;
    noValidate?: boolean | undefined;
    open?: boolean | undefined;
    optimum?: number | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    playsInline?: boolean | undefined;
    poster?: string | undefined;
    preload?: string | undefined;
    readOnly?: boolean | undefined;
    rel?: string | undefined;
    required?: boolean | undefined;
    reversed?: boolean | undefined;
    rows?: number | undefined;
    rowSpan?: number | undefined;
    sandbox?: string | undefined;
    scope?: string | undefined;
    scoped?: boolean | undefined;
    scrolling?: string | undefined;
    seamless?: boolean | undefined;
    selected?: boolean | undefined;
    shape?: string | undefined;
    size?: number | undefined;
    sizes?: string | undefined;
    span?: number | undefined;
    src?: string | undefined;
    srcDoc?: string | undefined;
    srcLang?: string | undefined;
    srcSet?: string | undefined;
    start?: number | undefined;
    step?: string | number | undefined;
    summary?: string | undefined;
    type?: string | undefined;
    useMap?: string | undefined;
    value?: string | number | string[] | undefined;
    width?: string | number | undefined;
    wmode?: string | undefined;
    wrap?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    contentEditable?: boolean | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    inputMode?: string | undefined;
    is?: string | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "false" | "true" | undefined;
    'aria-autocomplete'?: "list" | "none" | "inline" | "both" | undefined;
    'aria-busy'?: boolean | "false" | "true" | undefined;
    'aria-checked'?: boolean | "false" | "true" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "step" | "time" | "false" | "true" | "page" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "false" | "true" | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "false" | "true" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "false" | "true" | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid" | undefined;
    'aria-hidden'?: boolean | "false" | "true" | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "false" | "true" | undefined;
    'aria-multiline'?: boolean | "false" | "true" | undefined;
    'aria-multiselectable'?: boolean | "false" | "true" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "false" | "true" | "mixed" | undefined;
    'aria-readonly'?: boolean | "false" | "true" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
    'aria-required'?: boolean | "false" | "true" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "false" | "true" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onChange?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onReset?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onKeyDown?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUp?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOver?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLElement>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<HTMLElement>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    css?: import("@emotion/core").InterpolationWithTheme<any>;
    appearance?: "default" | "danger" | "link" | "primary" | "subtle" | "subtle-link" | "warning" | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    component?: "symbol" | "object" | "cite" | "data" | "form" | "label" | "pattern" | "span" | "summary" | "style" | "title" | "link" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "code" | "col" | "colgroup" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "strong" | "sub" | "sup" | "table" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "template" | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    consumerRef?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
    iconAfter?: string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | undefined;
    iconBefore?: string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | undefined;
    isDisabled?: boolean | undefined;
    isLoading?: boolean | undefined;
    isSelected?: boolean | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onClick?: ((e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: import("@atlaskit/analytics-next").UIAnalyticsEvent) => void) | undefined;
    onMouseDown?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    spacing?: "default" | "compact" | "none" | undefined;
    shouldFitContainer?: boolean | undefined;
    theme?: ((current: (props: import("../types").ThemeProps) => import("../types").ThemeTokens, props: import("../types").ThemeProps) => import("../types").ThemeTokens) | undefined;
    children?: React.ReactNode;
    testId?: string | undefined;
    ref?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
};
export declare const getLoadingStyle: (isLoading?: boolean | undefined) => {
    transition: string;
    opacity: number;
};
export declare const composeRefs: (...refs: any[]) => (x: HTMLElement) => void;
/**
 * Convert a hex colour code to RGBA.
 * @param {String} hex Hex colour code.
 * @param {Number} alpha Optional alpha value (defaults to 1).
 */
export declare function hex2rgba(hex: string, alpha?: number): string;