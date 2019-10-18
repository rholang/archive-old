import * as React from 'react';
import rafSchedule from 'raf-schd';
import { browser } from '../../utils';

export const shadowClassNames = {
  RIGHT_SHADOW: 'right-shadow',
  LEFT_SHADOW: 'left-shadow',
};

export interface OverflowShadowProps {
  handleRef: (ref: HTMLElement | null) => void;
  shadowClassNames: string;
}

export interface OverflowShadowState {
  showLeftShadow: boolean;
  showRightShadow: boolean;
}

export interface OverflowShadowOptions {
  overflowSelector: string;
  scrollableSelector?: string;
}

const isIE11 = browser.ie_version === 11;

export default function overflowShadow<P>(
  Component:
    | React.ComponentType<P & OverflowShadowProps>
    | React.StatelessComponent<P & OverflowShadowProps>,
  options: OverflowShadowOptions,
) {
  return class OverflowShadow extends React.Component<P, OverflowShadowState> {
    overflowContainer?: HTMLElement | null;
    container?: HTMLElement;
    scrollable?: NodeList;
    diff?: number;

    state = {
      showLeftShadow: false,
      showRightShadow: false,
    };

    componentWillUnmount() {
      if (this.overflowContainer && !isIE11) {
        this.overflowContainer.removeEventListener(
          'scroll',
          this.handleScrollDebounced,
        );
      }

      this.handleUpdateRightShadow.cancel();
      this.handleScrollDebounced.cancel();
    }

    componentDidUpdate() {
      this.handleUpdateRightShadow();
    }

    handleScroll = (event: Event) => {
      if (!this.overflowContainer || event.target !== this.overflowContainer) {
        return;
      }

      this.setState(() => ({
        showLeftShadow:
          !!this.overflowContainer && this.overflowContainer.scrollLeft > 0,
      }));
    };

    updateRightShadow = () => {
      if (this.overflowContainer) {
        const diff = this.calcOverflowDiff();
        const showRightShadow =
          diff > 0 && diff > this.overflowContainer.scrollLeft;
        if (showRightShadow !== this.state.showRightShadow) {
          this.setState(() => ({
            showRightShadow,
          }));
        }
      }
    };

    handleUpdateRightShadow = rafSchedule(this.updateRightShadow);
    handleScrollDebounced = rafSchedule(this.handleScroll);

    calcOverflowDiff = () => {
      if (!this.overflowContainer) {
        return 0;
      }

      this.diff = this.calcScrollableWidth();

      return this.diff - this.overflowContainer.offsetWidth;
    };

    calcScrollableWidth = () => {
      if (!this.scrollable && this.overflowContainer) {
        return this.overflowContainer.scrollWidth;
      }

      if (!this.scrollable) {
        return 0;
      }

      let width = 0;
      for (let i = 0; i < this.scrollable.length; i++) {
        const scrollableElement = this.scrollable[i] as HTMLElement;
        width += scrollableElement.scrollWidth;
      }
      return width;
    };

    handleContainer = (container: HTMLElement | null): void => {
      if (!container || this.container) {
        return;
      }
      this.container = container;
      this.overflowContainer = container.querySelector(
        options.overflowSelector,
      ) as HTMLElement;

      if (!this.overflowContainer) {
        this.overflowContainer = container;
      }

      if (options.scrollableSelector) {
        this.scrollable = container.querySelectorAll(
          options.scrollableSelector,
        );
      }

      this.handleUpdateRightShadow();
      if (!isIE11) {
        this.overflowContainer.addEventListener(
          'scroll',
          this.handleScrollDebounced,
        );
      }
    };

    render() {
      const { showLeftShadow, showRightShadow } = this.state;

      const classNames = [
        showRightShadow && shadowClassNames.RIGHT_SHADOW,
        showLeftShadow && shadowClassNames.LEFT_SHADOW,
      ]
        .filter(Boolean)
        .join(' ');

      return (
        <Component
          handleRef={this.handleContainer}
          shadowClassNames={classNames}
          {...this.props}
        />
      );
    }
  };
}
