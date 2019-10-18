import React, {
  Children,
  Component,
  SyntheticEvent,
  Fragment,
  ReactNode,
  FC,
} from 'react';
import { canUseDOM } from 'exenv';
import Portal from '@atlaskit/portal';
import { ThemeProvider } from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import {
  createAndFireEvent,
  withAnalyticsEvents,
  withAnalyticsContext,
  CreateUIAnalyticsEvent,
} from '@atlaskit/analytics-next';
import Blanket from '@atlaskit/blanket';
import {
  name as packageName,
  version as packageVersion,
} from '../version.json';
import drawerItemTheme from '../theme/drawer-item-theme';
import FocusLock from './focus-lock';
import DrawerPrimitive from './primitives';
import { Fade } from './transitions';
import { CloseTrigger, DrawerProps, DrawerWidth } from './types';

const OnlyChild: FC<any> = ({ children }) =>
  Children.toArray(children)[0] || null;

const createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');

const createAndFireOnClick = (
  createAnalyticsEvent: CreateUIAnalyticsEvent,
  trigger: CloseTrigger,
) =>
  createAndFireEventOnAtlaskit({
    action: 'dismissed',
    actionSubject: 'drawer',
    attributes: {
      componentName: 'drawer',
      packageName,
      packageVersion,
      trigger,
    },
  })(createAnalyticsEvent);

export class DrawerBase extends Component<
  DrawerProps,
  { renderPortal: boolean }
> {
  static defaultProps = {
    width: 'narrow' as DrawerWidth,
    isFocusLockEnabled: true,
    shouldReturnFocus: true,
    autoFocusFirstElem: false,
  };

  state = {
    renderPortal: false,
  };

  body = canUseDOM ? document.querySelector('body') : undefined;

  componentDidMount() {
    const { isOpen } = this.props;

    if (isOpen) {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps: DrawerProps) {
    const { isOpen } = this.props;
    if (isOpen !== prevProps.isOpen) {
      if (isOpen) {
        window.addEventListener('keydown', this.handleKeyDown);
      } else {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }

  private handleBlanketClick = (event: SyntheticEvent<HTMLElement>) => {
    this.handleClose(event, 'blanket');
  };

  private handleBackButtonClick = (event: SyntheticEvent<HTMLElement>) => {
    this.handleClose(event, 'backButton');
  };

  private handleClose = (event: SyntheticEvent<any>, trigger: CloseTrigger) => {
    const { createAnalyticsEvent, onClose } = this.props;

    const analyticsEvent =
      createAnalyticsEvent &&
      createAndFireOnClick(createAnalyticsEvent, trigger);

    if (onClose) {
      onClose(event, analyticsEvent);
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    const { isOpen, onKeyDown } = this.props;

    if (event.key === 'Escape' && isOpen) {
      this.handleClose((event as unknown) as React.KeyboardEvent, 'escKey');
    }
    if (onKeyDown) {
      onKeyDown((event as unknown) as React.KeyboardEvent);
    }
  };

  render() {
    if (!this.body) {
      return null;
    }
    const {
      isOpen,
      children,
      icon,
      width,
      shouldUnmountOnExit,
      onCloseComplete,
      autoFocusFirstElem,
      isFocusLockEnabled,
      shouldReturnFocus,
    } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={{ enter: 0, exit: 220 }}
        mountOnEnter
        unmountOnExit
      >
        <Portal zIndex="unset">
          <TransitionGroup component={OnlyChild}>
            <Fragment>
              <Fade in={isOpen}>
                <Blanket isTinted onBlanketClicked={this.handleBlanketClick} />
              </Fade>
              <FocusLock
                autoFocusFirstElem={autoFocusFirstElem}
                isFocusLockEnabled={isFocusLockEnabled}
                shouldReturnFocus={shouldReturnFocus}
              >
                <DrawerPrimitive
                  icon={icon}
                  in={isOpen}
                  onClose={this.handleBackButtonClick}
                  onCloseComplete={onCloseComplete}
                  width={width}
                  shouldUnmountOnExit={shouldUnmountOnExit}
                >
                  {children}
                </DrawerPrimitive>
              </FocusLock>
            </Fragment>
          </TransitionGroup>
        </Portal>
      </Transition>
    );
  }
}

export const DrawerItemTheme = (props: { children: ReactNode }) => (
  <ThemeProvider theme={drawerItemTheme}>{props.children}</ThemeProvider>
);

export * from './skeletons';
export * from './item-group';
export * from './item';

export default withAnalyticsContext({
  componentName: 'drawer',
  packageName,
  packageVersion,
})(withAnalyticsEvents()(DrawerBase));
