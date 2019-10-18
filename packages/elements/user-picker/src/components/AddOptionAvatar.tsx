import InviteTeamIcon from '@atlaskit/icon/glyph/invite-team';
import { colors } from '@atlaskit/theme';
import * as React from 'react';
import styled from 'styled-components';

const AddOptionAvatarWrapper = styled.span`
  color: black;
  padding: 2px;

  > span[class^='Icon__IconWrapper'] {
    background-color: ${colors.N50};
    border-radius: 50%;
  }
`;

export type AddOptionAvatarProps = {
  label: string;
  size?: 'small' | 'large';
};

export const AddOptionAvatar: React.StatelessComponent<
  AddOptionAvatarProps
> = ({ size, label }) => (
  <AddOptionAvatarWrapper>
    <InviteTeamIcon label={label} size={size} primaryColor="white" />
  </AddOptionAvatarWrapper>
);

AddOptionAvatar.defaultProps = {
  size: 'large',
};
