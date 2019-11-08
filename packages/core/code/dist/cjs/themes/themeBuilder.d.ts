export declare type ThemeModes = 'light' | 'dark';
export declare type ThemeProps = {
    __ATLASKIT_THEME__: {
        mode: ThemeModes;
    };
};
export declare type Theme = {
    lineNumberColor?: string | number;
    lineNumberBgColor?: string | number;
    backgroundColor?: string | number;
    textColor?: string | number;
    substringColor?: string | number;
    keywordColor?: string | number;
    attributeColor?: string | number;
    selectorTagColor?: string | number;
    docTagColor?: string | number;
    nameColor?: string | number;
    builtInColor?: string | number;
    literalColor?: string | number;
    bulletColor?: string | number;
    codeColor?: string | number;
    additionColor?: string | number;
    regexpColor?: string | number;
    symbolColor?: string | number;
    variableColor?: string | number;
    templateVariableColor?: string | number;
    linkColor?: string | number;
    selectorAttributeColor?: string | number;
    selectorPseudoColor?: string | number;
    typeColor?: string | number;
    stringColor?: string | number;
    selectorIdColor?: string | number;
    selectorClassColor?: string | number;
    quoteColor?: string | number;
    templateTagColor?: string | number;
    deletionColor?: string | number;
    titleColor?: string | number;
    sectionColor?: string | number;
    commentColor?: string | number;
    metaKeywordColor?: string | number;
    metaColor?: string | number;
    functionColor?: string | number;
    numberColor?: string | number;
};
export declare function applyTheme(theme?: ThemeProps | Theme): {
    lineNumberContainerStyle: {
        fontSize: string;
        lineHeight: number;
        color: string | number | undefined;
        backgroundColor: string | number | undefined;
        flexShrink: number;
        padding: any;
        textAlign: string;
        userSelect: string;
    };
    codeBlockStyle: {
        key: {
            color: string | number | undefined;
            fontWeight: string;
        };
        keyword: {
            color: string | number | undefined;
            fontWeight: string;
        };
        'attr-name': {
            color: string | number | undefined;
        };
        selector: {
            color: string | number | undefined;
        };
        comment: {
            color: string | number | undefined;
            fontFamily: string;
            fontStyle: string;
        };
        'block-comment': {
            color: string | number | undefined;
            fontFamily: string;
            fontStyle: string;
        };
        'function-name': {
            color: string | number | undefined;
        };
        'class-name': {
            color: string | number | undefined;
        };
        doctype: {
            color: string | number | undefined;
        };
        substr: {
            color: string | number | undefined;
        };
        namespace: {
            color: string | number | undefined;
        };
        builtin: {
            color: string | number | undefined;
        };
        entity: {
            color: string | number | undefined;
        };
        bullet: {
            color: string | number | undefined;
        };
        code: {
            color: string | number | undefined;
        };
        addition: {
            color: string | number | undefined;
        };
        regex: {
            color: string | number | undefined;
        };
        symbol: {
            color: string | number | undefined;
        };
        variable: {
            color: string | number | undefined;
        };
        url: {
            color: string | number | undefined;
        };
        'selector-attr': {
            color: string | number | undefined;
        };
        'selector-pseudo': {
            color: string | number | undefined;
        };
        type: {
            color: string | number | undefined;
        };
        string: {
            color: string | number | undefined;
        };
        quote: {
            color: string | number | undefined;
        };
        tag: {
            color: string | number | undefined;
        };
        deletion: {
            color: string | number | undefined;
        };
        title: {
            color: string | number | undefined;
        };
        section: {
            color: string | number | undefined;
        };
        'meta-keyword': {
            color: string | number | undefined;
        };
        meta: {
            color: string | number | undefined;
        };
        italic: {
            fontStyle: string;
        };
        bold: {
            fontWeight: string;
        };
        function: {
            color: string | number | undefined;
        };
        number: {
            color: string | number | undefined;
        };
        'pre[class*="language-"]': {
            fontFamily: () => string;
            fontSize: string;
            background: string | number | undefined;
            color: string | number | undefined;
            borderRadius: number;
            display: string;
            lineHeight: number;
            overflowX: string;
            whiteSpace: string;
        };
    };
    inlineCodeStyle: {
        key: {
            color: string | number | undefined;
            fontWeight: string;
        };
        keyword: {
            color: string | number | undefined;
            fontWeight: string;
        };
        'attr-name': {
            color: string | number | undefined;
        };
        selector: {
            color: string | number | undefined;
        };
        comment: {
            color: string | number | undefined;
            fontFamily: string;
            fontStyle: string;
        };
        'block-comment': {
            color: string | number | undefined;
            fontFamily: string;
            fontStyle: string;
        };
        'function-name': {
            color: string | number | undefined;
        };
        'class-name': {
            color: string | number | undefined;
        };
        doctype: {
            color: string | number | undefined;
        };
        substr: {
            color: string | number | undefined;
        };
        namespace: {
            color: string | number | undefined;
        };
        builtin: {
            color: string | number | undefined;
        };
        entity: {
            color: string | number | undefined;
        };
        bullet: {
            color: string | number | undefined;
        };
        code: {
            color: string | number | undefined;
        };
        addition: {
            color: string | number | undefined;
        };
        regex: {
            color: string | number | undefined;
        };
        symbol: {
            color: string | number | undefined;
        };
        variable: {
            color: string | number | undefined;
        };
        url: {
            color: string | number | undefined;
        };
        'selector-attr': {
            color: string | number | undefined;
        };
        'selector-pseudo': {
            color: string | number | undefined;
        };
        type: {
            color: string | number | undefined;
        };
        string: {
            color: string | number | undefined;
        };
        quote: {
            color: string | number | undefined;
        };
        tag: {
            color: string | number | undefined;
        };
        deletion: {
            color: string | number | undefined;
        };
        title: {
            color: string | number | undefined;
        };
        section: {
            color: string | number | undefined;
        };
        'meta-keyword': {
            color: string | number | undefined;
        };
        meta: {
            color: string | number | undefined;
        };
        italic: {
            fontStyle: string;
        };
        bold: {
            fontWeight: string;
        };
        function: {
            color: string | number | undefined;
        };
        number: {
            color: string | number | undefined;
        };
        'pre[class*="language-"]': {
            padding: string;
            display: string;
            whiteSpace: string;
            fontFamily: () => string;
            fontSize: string;
            background: string | number | undefined;
            color: string | number | undefined;
            borderRadius: number;
            lineHeight: number;
            overflowX: string;
        };
    };
    codeContainerStyle: {
        fontFamily: () => string;
        fontSize: string;
        lineHeight: number;
        padding: any;
    };
};
