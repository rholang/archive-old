// @flow

import React, { Fragment, Component } from 'react';
import Button from '@atlaskit/button';
import { AkFieldRadioGroup as StatelessRadioGroup } from '@atlaskit/field-radio-group';
import { AtlassianIcon } from '@atlaskit/logo';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { Checkbox } from '@atlaskit/checkbox';
import { LayoutManager, NavigationProvider } from '@atlaskit/navigation-next';
import { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import { ToggleStateless } from '@atlaskit/toggle';
import Lorem from 'react-lorem-component';

import GlobalNavigation from '../src';

const DEFAULT_NOTIFICATION_COUNT = 5;

const DrawerContent = ({
  drawerTitle,
  drawerBody,
}: {
  drawerTitle: string,
  drawerBody: string,
}) => (
  <div>
    <h1>{drawerTitle}</h1>
    <div>{drawerBody}</div>

    <label htmlFor="textbox" css={{ display: 'block' }}>
      Type something in the textarea below and see if it is retained
    </label>
    <textarea input="textbox" type="text" rows="50" cols="50" />
  </div>
);

type State = {
  isCreateModalOpen: boolean,
  isSearchDrawerOpen: boolean,
};

type Props = {
  createItemOpens: 'drawer' | 'modal',
  helpItemOpens: 'drawer' | 'menu',
  notificationCount: number,
  onNotificationDrawerOpen: () => void,
  unmountOnExit: boolean,
  isRecentDrawerFocusLockEnabled: boolean,
  isStarredDrawerFocusLockEnabled: boolean,
  isSearchDrawerFocusLockEnabled: boolean,
  isCreateDrawerFocusLockEnabled: boolean,
  isNotificationDrawerFocusLockEnabled: boolean,
  isInviteDrawerFocusLockEnabled: boolean,
  isHelpDrawerFocusLockEnabled: boolean,
  isSettingsDrawerFocusLockEnabled: boolean,
};

const HelpDropdown = () => (
  <DropdownItemGroup title="Heading">
    <DropdownItem>Hello it with some really quite long text here.</DropdownItem>
    <DropdownItem>Some text 2</DropdownItem>
    <DropdownItem isDisabled>Some disabled text</DropdownItem>
    <DropdownItem>Some more text</DropdownItem>
    <DropdownItem href="//atlassian.com" target="_new">
      A link item
    </DropdownItem>
  </DropdownItemGroup>
);

class GlobalNavWithDrawers extends Component<Props, State> {
  state = {
    isCreateModalOpen: false,
    isSearchDrawerOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboardShortcut);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboardShortcut);
  }

  handleKeyboardShortcut = e => {
    if (e.key === '\\') {
      if (this.state.isSearchDrawerOpen) return this.closeSearchDrawer();

      return this.openSearchDrawer();
    }
    return null;
  };

  openCreateModal = () => this.setState({ isCreateModalOpen: true });

  closeCreateModal = () => this.setState({ isCreateModalOpen: false });

  openSearchDrawer = () => this.setState({ isSearchDrawerOpen: true });

  closeSearchDrawer = () => {
    this.setState({ isSearchDrawerOpen: false });
  };

  secondaryAction = ({ target }: Object) => console.log(target.innerText);

  onCloseComplete = (node: HTMLElement) => console.log('onCloseComplete', node);

  renderCreateDrawerContents = () => (
    <DrawerContent
      drawerTitle="Create drawer"
      drawerBody="You can toggle between a search drawer and the search modal"
    />
  );

  renderSearchDrawerContents = () => (
    <DrawerContent
      drawerTitle="Controlled Search drawer"
      drawerBody="Can be controlled by passing the onSearchClick prop"
    />
  );

  renderStarredDrawerContents = () => (
    <DrawerContent
      drawerTitle="Starred drawer"
      drawerBody="Can be controlled by passing the onStarredClick prop"
    />
  );

  renderHelpDrawerContents = () => (
    <DrawerContent
      drawerTitle="Help drawer"
      drawerBody="Can be controlled by passing the onHelpClick prop"
    />
  );

  renderNotificationDrawerContents = () => (
    <DrawerContent
      drawerTitle="Notification drawer"
      drawerBody="Resets notification count in `onNotificationDrawerOpen` callback"
    />
  );

  renderSettingsDrawerContents = () => (
    <DrawerContent
      drawerTitle="Settings drawer"
      drawerBody="Can be controlled by passing the onSettingsClick prop"
    />
  );

  renderRecentDrawerContents = () => (
    <DrawerContent
      drawerTitle="Recent drawer"
      drawerBody="Can be controlled by passing the onRecentClick prop"
    />
  );

  renderInviteDrawerContents = () => (
    <DrawerContent
      drawerTitle="Invite drawer"
      drawerBody="Can be controlled by passing the onInviteClick prop"
    />
  );

  render() {
    const actions = [
      { text: 'Close', onClick: this.closeCreateModal },
      { text: 'Secondary Action', onClick: this.secondaryAction },
    ];

    const {
      createItemOpens,
      helpItemOpens,
      notificationCount,
      onNotificationDrawerOpen,
      isRecentDrawerFocusLockEnabled,
      isStarredDrawerFocusLockEnabled,
      isSearchDrawerFocusLockEnabled,
      isCreateDrawerFocusLockEnabled,
      isNotificationDrawerFocusLockEnabled,
      isInviteDrawerFocusLockEnabled,
      isHelpDrawerFocusLockEnabled,
      isSettingsDrawerFocusLockEnabled,
      unmountOnExit,
    } = this.props;

    return (
      <Fragment>
        <GlobalNavigation
          // Product
          productIcon={() => <AtlassianIcon label="Atlassian" size="medium" />}
          onProductClick={() => console.log('product clicked')}
          // Starred
          starredDrawerContents={this.renderStarredDrawerContents}
          onStarredDrawerCloseComplete={this.onCloseComplete}
          shouldStarredDrawerUnmountOnExit={unmountOnExit}
          isStarredDrawerFocusLockEnabled={isStarredDrawerFocusLockEnabled}
          // Create
          onCreateClick={
            createItemOpens === 'modal' ? this.openCreateModal : null
          }
          onCreateDrawerCloseComplete={this.onCloseComplete}
          createDrawerContents={this.renderCreateDrawerContents}
          shouldCreateDrawerUnmountOnExit={unmountOnExit}
          isCreateDrawerFocusLockEnabled={isCreateDrawerFocusLockEnabled}
          // Search
          onSearchClick={this.openSearchDrawer}
          searchTooltip="Search (\)"
          isSearchDrawerOpen={this.state.isSearchDrawerOpen}
          searchDrawerContents={this.renderSearchDrawerContents}
          onSearchDrawerClose={this.closeSearchDrawer}
          onSearchDrawerCloseComplete={this.onCloseComplete}
          shouldSearchDrawerUnmountOnExit={unmountOnExit}
          isSearchDrawerFocusLockEnabled={isSearchDrawerFocusLockEnabled}
          // Notifications
          notificationDrawerContents={this.renderNotificationDrawerContents}
          onNotificationDrawerOpen={onNotificationDrawerOpen}
          onNotificationDrawerCloseComplete={this.onCloseComplete}
          notificationCount={notificationCount}
          shouldNotificationDrawerUnmountOnExit={unmountOnExit}
          isNotificationDrawerFocusLockEnabled={
            isNotificationDrawerFocusLockEnabled
          }
          // Help
          helpItems={HelpDropdown}
          helpDrawerContents={this.renderHelpDrawerContents}
          onHelpDrawerCloseComplete={this.onCloseComplete}
          shouldHelpDrawerUnmountOnExit={unmountOnExit}
          isHelpDrawerFocusLockEnabled={isHelpDrawerFocusLockEnabled}
          enableHelpDrawer={helpItemOpens === 'drawer'}
          // Settings
          settingsDrawerContents={this.renderSettingsDrawerContents}
          onSettingsDrawerCloseComplete={this.onCloseComplete}
          shouldSettingsDrawerUnmountOnExit={unmountOnExit}
          isSettingsDrawerFocusLockEnabled={isSettingsDrawerFocusLockEnabled}
          // Recent drawer
          recentDrawerContents={this.renderRecentDrawerContents}
          onRecentDrawerCloseComplete={this.onCloseComplete}
          shouldRecentDrawerUnmountOnExit={unmountOnExit}
          isRecentDrawerFocusLockEnabled={isRecentDrawerFocusLockEnabled}
          // Invite drawer
          inviteDrawerContents={this.renderInviteDrawerContents}
          onInviteDrawerCloseComplete={this.onCloseComplete}
          shouldInviteDrawerUnmountOnExit={unmountOnExit}
          isInviteDrawerFocusLockEnabled={isInviteDrawerFocusLockEnabled}
          // define drawer back icon
          drawerBackIcon={CrossIcon}
        />
        <ModalTransition>
          {this.state.isCreateModalOpen && (
            <Modal
              actions={actions}
              onClose={this.closeCreateModal}
              heading="Modal Title"
            >
              <Lorem count={2} />
            </Modal>
          )}
        </ModalTransition>
      </Fragment>
    );
  }
}

type NavState = {
  createItemOpens: 'drawer' | 'modal',
  helpItemOpens: 'drawer' | 'menu',
  notificationCount: number,
  shouldUnmountOnExit: boolean,
  isRecentDrawerFocusLockEnabled: boolean,
  isStarredDrawerFocusLockEnabled: boolean,
  isSearchDrawerFocusLockEnabled: boolean,
  isCreateDrawerFocusLockEnabled: boolean,
  isNotificationDrawerFocusLockEnabled: boolean,
  isInviteDrawerFocusLockEnabled: boolean,
  isHelpDrawerFocusLockEnabled: boolean,
  isSettingsDrawerFocusLockEnabled: boolean,
};

// Need two components because both have state
// eslint-disable-next-line react/no-multi-comp
export default class extends Component<{||}, NavState> {
  state = {
    createItemOpens: 'modal',
    helpItemOpens: 'menu',
    notificationCount: DEFAULT_NOTIFICATION_COUNT,
    shouldUnmountOnExit: false,
    isRecentDrawerFocusLockEnabled: true,
    isStarredDrawerFocusLockEnabled: true,
    isSearchDrawerFocusLockEnabled: true,
    isCreateDrawerFocusLockEnabled: true,
    isNotificationDrawerFocusLockEnabled: true,
    isInviteDrawerFocusLockEnabled: true,
    isHelpDrawerFocusLockEnabled: true,
    isSettingsDrawerFocusLockEnabled: true,
  };

  handleCreateChange = (e: *) => {
    this.setState({ createItemOpens: e.currentTarget.value });
  };

  handleHelpChange = (e: *) => {
    this.setState({ helpItemOpens: e.currentTarget.value });
  };

  toggleUnmountBehaviour = () => {
    this.setState(({ shouldUnmountOnExit: unmountOnExitValue }) => ({
      shouldUnmountOnExit: !unmountOnExitValue,
    }));
  };

  clearNotificationCount = () => this.setState({ notificationCount: 0 });

  resetNotificationCount = () =>
    this.setState({ notificationCount: DEFAULT_NOTIFICATION_COUNT });

  toggleFocusLock = (ev: SyntheticMouseEvent<*>) => {
    const propName = `is${
      (ev.target: window.HTMLInputElement).id
    }FocusLockEnabled`;
    this.setState(state => ({
      [propName]: !state[propName],
    }));
  };

  renderGlobalNavigation = () => {
    const {
      createItemOpens,
      helpItemOpens,
      notificationCount,
      shouldUnmountOnExit,
      isRecentDrawerFocusLockEnabled,
      isStarredDrawerFocusLockEnabled,
      isSearchDrawerFocusLockEnabled,
      isCreateDrawerFocusLockEnabled,
      isNotificationDrawerFocusLockEnabled,
      isInviteDrawerFocusLockEnabled,
      isHelpDrawerFocusLockEnabled,
      isSettingsDrawerFocusLockEnabled,
    } = this.state;
    return (
      <GlobalNavWithDrawers
        createItemOpens={createItemOpens}
        helpItemOpens={helpItemOpens}
        notificationCount={notificationCount}
        onNotificationDrawerOpen={this.clearNotificationCount}
        unmountOnExit={shouldUnmountOnExit}
        isRecentDrawerFocusLockEnabled={isRecentDrawerFocusLockEnabled}
        isStarredDrawerFocusLockEnabled={isStarredDrawerFocusLockEnabled}
        isSearchDrawerFocusLockEnabled={isSearchDrawerFocusLockEnabled}
        isCreateDrawerFocusLockEnabled={isCreateDrawerFocusLockEnabled}
        isNotificationDrawerFocusLockEnabled={
          isNotificationDrawerFocusLockEnabled
        }
        isInviteDrawerFocusLockEnabled={isInviteDrawerFocusLockEnabled}
        isHelpDrawerFocusLockEnabled={isHelpDrawerFocusLockEnabled}
        isSettingsDrawerFocusLockEnabled={isSettingsDrawerFocusLockEnabled}
      />
    );
  };

  render() {
    const {
      createItemOpens,
      helpItemOpens,
      notificationCount,
      shouldUnmountOnExit,
    } = this.state;
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={this.renderGlobalNavigation}
          productNavigation={() => null}
          containerNavigation={() => null}
        >
          <div css={{ padding: '32px 40px' }}>
            <div>
              <StatelessRadioGroup
                items={[
                  {
                    value: 'modal',
                    label: 'Modal',
                    isSelected: createItemOpens === 'modal',
                  },
                  {
                    value: 'drawer',
                    label: 'Drawer',
                    isSelected: createItemOpens === 'drawer',
                  },
                ]}
                label="Create item opens a:"
                onRadioChange={this.handleCreateChange}
              />
            </div>
            <div>
              <StatelessRadioGroup
                items={[
                  {
                    value: 'menu',
                    label: 'Menu',
                    isSelected: helpItemOpens === 'menu',
                  },
                  {
                    value: 'drawer',
                    label: 'Drawer',
                    isSelected: helpItemOpens === 'drawer',
                  },
                ]}
                label="Help opens a:"
                onRadioChange={this.handleHelpChange}
              />
            </div>
            <div css={{ display: 'block', paddingTop: '1rem' }}>
              <ToggleStateless
                isChecked={!shouldUnmountOnExit}
                onChange={this.toggleUnmountBehaviour}
              />{' '}
              Retain drawer contents after closing the drawer.
            </div>
            <h6>Toggle focus lock for:</h6>
            <div
              css={{ display: 'flex', flexDirection: 'row', marginTop: '1rem' }}
            >
              <Checkbox
                label="Recent drawer"
                id="RecentDrawer"
                value="column"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Star drawer"
                id="StarredDrawer"
                value="column"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Search drawer"
                id="SearchDrawer"
                value="column"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Create drawer"
                id="CreateDrawer"
                value="row"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Invite drawer"
                id="InviteDrawer"
                value="row"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Notification drawer"
                id="NotificationDrawer"
                value="row"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Help drawer"
                id="HelpDrawer"
                value="row"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
              <Checkbox
                label="Settings drawer"
                id="SettingsDrawer"
                value="row"
                onChange={this.toggleFocusLock}
                defaultChecked
              />
            </div>
            <p>
              <Button
                isDisabled={notificationCount === DEFAULT_NOTIFICATION_COUNT}
                onClick={this.resetNotificationCount}
              >
                Reset notifications count
              </Button>
            </p>
          </div>
        </LayoutManager>
      </NavigationProvider>
    );
  }
}
