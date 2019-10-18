import React, { Component } from 'react';
import { DropdownItem } from '@atlaskit/dropdown-menu';
import Avatar, {
  withPseudoState,
  getProps,
  AvatarClickType,
} from '@atlaskit/avatar';

interface Props {
  avatar: Record<string, any>;
  isActive?: boolean;
  isHover?: boolean;
  index?: number;
  onAvatarClick?: AvatarClickType;
}

class AvatarGroupItem extends Component<Props> {
  render() {
    const { avatar, onAvatarClick } = this.props;
    const { href, ...rest } = avatar;
    const enhancedProps = getProps(this);
    return (
      <DropdownItem
        isInteractive
        {...enhancedProps}
        elemBefore={
          <Avatar
            {...rest}
            borderColor="transparent"
            enableTooltip={false}
            size="small"
          />
        }
        href={href}
        onClick={(event: React.MouseEvent) => {
          if (typeof onAvatarClick === 'function') {
            onAvatarClick({ event, item: avatar });
          }
        }}
        rel={avatar.target ? 'noopener noreferrer' : null}
        target={avatar.target}
      >
        {avatar.name}
      </DropdownItem>
    );
  }
}

export default withPseudoState(AvatarGroupItem);
