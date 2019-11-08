// @flow
import React, { PureComponent, type Node } from 'react';
import { Link as BaseLink } from 'react-router-dom';
import type { IconAppearance } from '../../types';

type Props = {
  children?: Node,
  className?: string,
  href?: string,
  onClick?: () => mixed,
  onMouseDown?: () => mixed,
  onMouseEnter?: () => mixed,
  onMouseLeave?: () => mixed,
  tabIndex?: number,
  appearance?: IconAppearance,
  isSelected?: boolean,
};

export default class DefaultLinkComponent extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      href,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      tabIndex,
      appearance, // eslint-disable-line no-unused-vars
      isSelected, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;

    return href ? (
      <BaseLink className={className} to={href} {...otherProps}>
        {children}
      </BaseLink>
    ) : (
      children
    );
  }
}
