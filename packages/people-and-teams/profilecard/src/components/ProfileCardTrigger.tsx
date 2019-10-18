import * as React from 'react';
import { Popper } from '@atlaskit/popper';
import Portal from '@atlaskit/portal';
import { layers } from '@atlaskit/theme';
// @ts-ignore
import NodeResolver from 'react-node-resolver';

import LoadingState from './LoadingState';
import Profilecard from './ProfileCard';
import withOuterListeners from './withOuterListeners';
import filterActions from '../internal/filterActions';

import { CardElevationWrapper, CardTriggerWrapper } from '../styled/Card';

const CardElevationWrapperWithOuter = withOuterListeners(CardElevationWrapper);

import {
  ProfileCardTriggerProps,
  ProfileCardTriggerState,
  ProfileCardAction,
  ProfilecardProps,
  ProfileCardClientData,
} from '../types';

export const DELAY_MS_SHOW = 800;
export const DELAY_MS_HIDE = 200;

class ProfilecardTrigger extends React.PureComponent<
  ProfileCardTriggerProps,
  ProfileCardTriggerState
> {
  static defaultProps: Partial<ProfileCardTriggerProps> = {
    actions: [],
    trigger: 'hover',
    customElevation: 'e200',
  };

  targetRef?: HTMLElement;

  _isMounted: boolean = false;
  showDelay: number = this.props.trigger === 'click' ? 0 : DELAY_MS_SHOW;
  hideDelay: number = this.props.trigger === 'click' ? 0 : DELAY_MS_HIDE;
  showTimer: number = 0;
  hideTimer: number = 0;

  hideProfilecard = () => {
    clearTimeout(this.showTimer);

    this.hideTimer = window.setTimeout(() => {
      this.setState({ visible: false });
    }, this.hideDelay);
  };

  showProfilecard = () => {
    clearTimeout(this.hideTimer);

    this.showTimer = window.setTimeout(() => {
      if (!this.state.visible) {
        this.clientFetchProfile();
        this.setState({ visible: true });
      }
    }, this.showDelay);
  };

  containerListeners =
    this.props.trigger === 'hover'
      ? {
          onMouseEnter: this.showProfilecard,
          onMouseLeave: this.hideProfilecard,
        }
      : {
          onClick: this.showProfilecard,
        };

  layerListeners = {
    handleClickOutside: this.hideProfilecard,
    handleEscapeKeydown: this.hideProfilecard,
  };

  state: ProfileCardTriggerState = {
    visible: false,
    isLoading: undefined,
    hasError: false,
    error: null,
    data: null,
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps: ProfileCardTriggerProps) {
    const { userId, cloudId } = this.props;
    if (userId !== prevProps.userId || cloudId !== prevProps.cloudId) {
      this.setState(
        {
          isLoading: undefined,
        },
        this.clientFetchProfile,
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearTimeout(this.showTimer);
    clearTimeout(this.hideTimer);
  }

  clientFetchProfile = () => {
    const { cloudId, userId } = this.props;
    const { isLoading } = this.state;

    if (isLoading === true) {
      // don't fetch data when fetching is in process
      return;
    }

    this.setState(
      {
        isLoading: true,
        hasError: false,
        data: null,
      },
      () => {
        this.props.resourceClient
          .getProfile(cloudId, userId)
          .then(
            res => this.handleClientSuccess(res),
            err => this.handleClientError(err),
          )
          .catch(err => this.handleClientError(err));
      },
    );
  };

  handleClientSuccess(res: ProfileCardClientData) {
    if (!this._isMounted) {
      return;
    }

    this.setState({
      isLoading: false,
      hasError: false,
      data: res,
    });
  }

  handleClientError(err: any) {
    if (!this._isMounted) {
      return;
    }

    this.setState({
      isLoading: false,
      hasError: true,
      error: err,
    });
  }

  filterActions(): ProfileCardAction[] {
    return filterActions(this.props.actions, this.state.data);
  }

  renderProfileCard() {
    const newProps: ProfilecardProps = {
      clientFetchProfile: this.clientFetchProfile,
      analytics: this.props.analytics,
      ...this.state.data,
    };

    return (
      <Profilecard
        {...newProps}
        actions={this.filterActions()}
        customElevation="none"
        hasError={this.state.hasError}
        errorType={this.state.error}
      />
    );
  }

  renderWithPopper(element: React.ReactNode) {
    return (
      <Popper referenceElement={this.targetRef} placement={this.props.position}>
        {({ ref, style }: { ref: any; style: any }) => (
          <CardElevationWrapperWithOuter
            style={style}
            innerRef={ref}
            {...this.containerListeners}
            {...this.layerListeners}
            customElevation={this.props.customElevation}
          >
            {element}
          </CardElevationWrapperWithOuter>
        )}
      </Popper>
    );
  }

  renderLoading() {
    const { isLoading, visible } = this.state;
    const isFetchingOrNotStartToFetchYet =
      isLoading === true || isLoading === undefined;

    return visible && isFetchingOrNotStartToFetchYet && this.targetRef
      ? this.renderWithPopper(<LoadingState />)
      : null;
  }

  renderProfileCardLoaded() {
    const { isLoading, visible } = this.state;

    return visible && isLoading === false && this.targetRef
      ? this.renderWithPopper(this.renderProfileCard())
      : null;
  }

  setRef = (targetRef: HTMLElement) => {
    this.targetRef = targetRef;
  };

  renderWithTrigger() {
    return (
      <>
        <CardTriggerWrapper {...this.containerListeners}>
          <NodeResolver innerRef={this.setRef}>
            {this.props.children}
          </NodeResolver>
        </CardTriggerWrapper>
        <Portal zIndex={layers.tooltip()}>
          {this.renderLoading()}
          {this.renderProfileCardLoaded()}
        </Portal>
      </>
    );
  }

  render() {
    if (this.props.children) {
      return this.renderWithTrigger();
    } else {
      throw new Error(
        'Component "ProfileCardTrigger" must have "children" property',
      );
    }
  }
}

export default ProfilecardTrigger;
