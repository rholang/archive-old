import styled from 'styled-components';
import { borderRadius, colors, elevation, typography } from '@atlaskit/theme';
import gridSizeTimes from '../../util/gridSizeTimes';

interface SectionCardProps {
  isSelected: boolean;
}

const getSelectedCardColor = (props: SectionCardProps) => {
  return props.isSelected && `${colors.B50}`;
};

export const Screen = styled.div`
  width: 640px;
  margin-bottom: ${gridSizeTimes(4)}px;
`;

export const Title = styled.div`
  ${typography.h700};
  margin-bottom: ${gridSizeTimes(4)}px;
  margin-top: 0;
`;

export const SectionCard = styled.div`
  position: relative;
  display: flex;
  padding: ${gridSizeTimes(2.5)}px;
  width: 100%;
  background-color: ${(props: SectionCardProps) => getSelectedCardColor(props)};
  border-radius: ${borderRadius()}px;
  ${elevation.e200};
  margin-top: ${gridSizeTimes(2)}px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${gridSizeTimes(2.5)}px;
  margin-right: ${gridSizeTimes(1)}px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${gridSizeTimes(1.5)}px;
  font-weight: 600;
  color: ${colors.B400};
`;
