/** @jsx jsx */
import Spinner from '@atlaskit/spinner';
import { jsx } from '@emotion/core';
import { Fragment, useEffect, useState, useRef, SyntheticEvent } from 'react';

import { iframeCSS, spinnerCSS } from './styles';
import { NotificationsProps } from './types';
import { getNotificationsSrc } from './utils';

export const Notifications = (props: NotificationsProps) => {
  const { locale, product, testId, ...iframeProps } = props;
  const ref = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);

  const onMessage = (event: MessageEvent) => {
    if (!ref.current || !event.source) {
      return;
    }

    if (
      (event.source as WindowProxy).window === ref.current.contentWindow &&
      event.data === 'readyForUser'
    ) {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);

  const onLoad = (...args: [SyntheticEvent<HTMLIFrameElement>]) => {
    setLoading(false);
    if (iframeProps.onLoad) {
      iframeProps.onLoad(...args);
    }
  };

  return (
    <Fragment>
      {loading && (
        <div css={spinnerCSS}>
          <Spinner size="large" isCompleting={!loading} />
        </div>
      )}
      <iframe
        {...iframeProps}
        css={iframeCSS({ loading })}
        data-testid={testId}
        onLoad={onLoad}
        ref={ref}
        src={getNotificationsSrc({ locale, product })}
      />
    </Fragment>
  );
};
