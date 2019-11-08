/// <reference types="react" />
export default function getProps<Props extends Record<string, any>>(component: React.Component<Props>): {
    onBlur: any;
    onClick: any;
    onFocus: any;
    onKeyDown: any;
    onKeyUp: any;
    onMouseDown: any;
    onMouseEnter: any;
    onMouseLeave: any;
    onMouseUp: any;
    tabIndex: any;
    appearance: any;
    backgroundColor: any;
    borderColor: any;
    groupAppearance: any;
    isActive: any;
    isDisabled: any;
    isFocus: any;
    isHover: any;
    isInteractive: any;
    isSelected: any;
    size: any;
    stackIndex: any;
};
