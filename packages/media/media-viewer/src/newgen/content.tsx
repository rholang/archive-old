import * as React from 'react';
import { Component, ReactElement } from 'react';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import {
  MediaButton,
  hideControlsClassName,
  InactivityDetector,
} from '@atlaskit/media-ui';
import { CloseButtonWrapper } from './styled';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';

export interface ContentProps {
  onClose?: () => void;
  children: ReactElement<WithShowControlMethodProp>;
}

export class Content extends Component<ContentProps> {
  /*
   * Here we get called by InactivityDetector and given a function we
   * pass down as "showControls" to out children.
   */
  render() {
    const { onClose } = this.props;

    return (
      <InactivityDetector>
        {triggerActivityCallback => {
          const children = React.cloneElement(this.props.children, {
            showControls: triggerActivityCallback,
          });
          return (
            <>
              <CloseButtonWrapper className={hideControlsClassName}>
                <MediaButton
                  appearance={'toolbar' as any}
                  onClick={onClose}
                  iconBefore={<CrossIcon label="Close" />}
                />
              </CloseButtonWrapper>
              {children}
            </>
          );
        }}
      </InactivityDetector>
    );
  }
}
