import { __assign, __read, __rest, __spread } from "tslib";
/** @jsx jsx */
import Spinner from '@atlaskit/spinner';
import { jsx } from '@emotion/core';
import { Fragment, useEffect, useState, useRef } from 'react';
import { iframeCSS, spinnerCSS } from './styles';
import { getNotificationsSrc } from './utils';
export var Notifications = function (props) {
    var locale = props.locale, product = props.product, testId = props.testId, iframeProps = __rest(props, ["locale", "product", "testId"]);
    var ref = useRef(null);
    var _a = __read(useState(true), 2), loading = _a[0], setLoading = _a[1];
    var onMessage = function (event) {
        if (!ref.current || !event.source) {
            return;
        }
        if (event.source.window === ref.current.contentWindow &&
            event.data === 'readyForUser') {
            setLoading(false);
        }
    };
    useEffect(function () {
        window.addEventListener('message', onMessage);
        return function () {
            window.removeEventListener('message', onMessage);
        };
    }, []);
    var onLoad = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setLoading(false);
        if (iframeProps.onLoad) {
            iframeProps.onLoad.apply(iframeProps, __spread(args));
        }
    };
    return (jsx(Fragment, null,
        loading && (jsx("div", { css: spinnerCSS },
            jsx(Spinner, { size: "large", isCompleting: !loading }))),
        jsx("iframe", __assign({}, iframeProps, { css: iframeCSS({ loading: loading }), "data-testid": testId, onLoad: onLoad, ref: ref, src: getNotificationsSrc({ locale: locale, product: product }) }))));
};
//# sourceMappingURL=Notifications.js.map