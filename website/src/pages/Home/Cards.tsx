import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from '../../components/WrappedLink';
import { gridSize, colors, math } from '@atlaskit/theme';
import debounce from 'lodash.debounce';

import { AtlassianIcon, BitbucketIcon } from '@atlaskit/logo';
import PackagesIcon from '@atlaskit/icon/glyph/component';
import PageFilledIcon from '@atlaskit/icon/glyph/page-filled';
import BlogIcon from '@atlaskit/icon/glyph/component';
import MediaDocIcon from '@atlaskit/icon/glyph/media-services/document';
import CodeIcon from '@atlaskit/icon/glyph/code';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import VidCameraOnIcon from '@atlaskit/icon/glyph/vid-camera-on';
import BitbucketReposIcon from '@atlaskit/icon/glyph/bitbucket/repos';
import FeedbackIcon from '@atlaskit/icon/glyph/feedback';
import MediaServicesDocumentIcon from '@atlaskit/icon/glyph/media-services/document';

import documentation from '../../assets/home/documentation.svg';
import tutorial from '../../assets/home/tutorial.svg';
import developer from '../../assets/home/developer.svg';

import {
  MOBILE_BREAKPOINT_MAX,
  TABLET_BREAKPOINT_MIN,
  TABLET_BREAKPOINT_MAX,
} from '../../constants';

const CardIcon = styled.span`
  align-items: center;
  background-color: ${p => p.color};
  border-radius: 4px;
  border: 2px solid ${colors.N0};
  display: flex;
  height: 24px;
  justify-content: center;
  margin-right: 8px;
  width: 24px;
`;

const cardVerticalAnimationDistance = math.multiply(gridSize, 7.5);

const loadInAnimation = keyframes`
  0% {
    top: ${cardVerticalAnimationDistance}px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 0;
    opacity: 1;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: start;
  max-width: 980px;
  justify-content: start;
  margin: 0 auto;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: ${MOBILE_BREAKPOINT_MAX}px) {
    margin-top: 0;
  }
`;

export const CardColumn = styled.div`
  display: flex;
`;

const BaseCardStyles = css`
  display: inline-block;
  width: 300px;
  border-radius: 0px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: ${colors.N0};
  margin: ${gridSize}px;
  background-repeat: no-repeat;
  opacity: 0;
  top: ${cardVerticalAnimationDistance}px;
  color: ${colors.N900};
  animation: ${loadInAnimation} 0.6s cubic-bezier(0.15, 1, 0.33, 1) forwards;
  box-sizing: border-box;
  text-align: left;

  z-index: 100;
  transition: all 0.3s cubic-bezier(0.15, 1, 0.33, 1);

  @media (max-width: ${TABLET_BREAKPOINT_MIN}px) {
    display: block;
    margin: ${math.multiply(gridSize, 3)}px ${gridSize}px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px -2px rgba(23, 43, 77, 0.32),
      0 0 1px rgba(23, 43, 77, 0.25);
    text-decoration: none;
    color: ${colors.N900};
  }

  animation-delay: ${({ index }: { index?: number }) =>
    0.5 + 0.03 * (index || 0)}s;
  background-size: contain;
  background-position: bottom;
`;

const InternalCard = styled(Link)`
  ${BaseCardStyles};
`;

const ExternalCard = styled('a')`
  ${BaseCardStyles};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const Img = ({ src, alt = '' }: { src: string; alt?: string }) => (
  <img
    alt={alt}
    style={{
      margin: '0 auto 10px auto',
      height: '150px',
      display: 'block',
    }}
    src={src}
  />
);

export type CardProps = {
  icon: React.ComponentType;
  index?: number;
  text: string;
  title: string;
  image?: string;
  alt?: string;
  to: string;
  href?: string;
};

class Card extends React.Component<CardProps> {
  render() {
    const { icon: Icon, text, title, image, alt, ...props } = this.props;

    const LinkComponent = props.href ? ExternalCard : InternalCard;

    return (
      <LinkComponent {...props}>
        <div style={{ padding: '16px 24px', marginBottom: 'auto' }}>
          <TitleRow>
            <Icon />
            {title}
          </TitleRow>
          {text ? <p>{text}</p> : null}
        </div>
        {image ? <Img src={image} alt={alt} /> : null}
      </LinkComponent>
    );
  }
}

const cards = [
  {
    to: '/content/guide',
    icon: () => (
      <CardIcon color={colors.R400}>
        <PageFilledIcon
          label="Documentation"
          primaryColor={colors.N0}
          secondaryColor={colors.Y400}
          size="small"
        />
      </CardIcon>
    ),
    image: documentation,
    title: 'Documentation',
    text: 'Everything you need to get up and running.',
  },
  {
    to: '/content/tutorials',
    title: 'Tutorials',
    image: tutorial,
    icon: () => (
      <CardIcon color={colors.Y400}>
        <MediaDocIcon
          label="Tutorials"
          primaryColor={colors.N0}
          secondaryColor={colors.Y400}
          size="small"
        />
      </CardIcon>
    ),
    text: 'Read tutorials from the community and learn Rholang',
  },
  {
    href: 'https://rchain.atlassian.net/wiki/spaces/CORE/overview',
    to: '',
    title: 'Development updates',
    image: developer,
    icon: () => (
      <CardIcon color={colors.B400}>
        <FeedbackIcon
          label="Development updates"
          primaryColor={colors.N0}
          secondaryColor={colors.Y400}
          size="small"
        />
      </CardIcon>
    ),
    text: 'Read the latest development updates',
  },
  {
    href: 'https://developer.rchain.coop/',
    to: '',
    title: 'Rchain Developer Page',
    icon: () => (
      <CardIcon color={colors.R400}>
        <MediaDocIcon
          label="Developer Page"
          primaryColor={colors.N0}
          secondaryColor={colors.R400}
          size="small"
        />
      </CardIcon>
    ),
    text: 'Get information about blocks',
  },

  {
    href: 'https://github.com/rchain/rchain',
    to: '',
    title: 'Rchain Github Repository',
    icon: () => (
      <CardIcon color={colors.Y400}>
        <BitbucketReposIcon
          label="Rchain Repository"
          primaryColor={colors.N0}
          secondaryColor={colors.Y400}
          size="small"
        />
      </CardIcon>
    ),
    text: 'Want to dive straight into the code? Check out our repo on Github.',
  },
  {
    href: 'https://blog.rchain.coop/',
    to: '',
    title: 'Rchain Blog',
    icon: () => (
      <CardIcon color={colors.N0}>
        <BlogIcon
          label="Rchain Developer Blog"
          primaryColor={colors.P400}
          size="medium"
        />
      </CardIcon>
    ),
    text: 'Keep up to date with new blog posts',
  },

  {
    href: 'https://www.rchain.coop/community',
    to: '',
    title: 'Discord Community',
    icon: () => (
      <CardIcon color={colors.N0}>
        <PeopleGroupIcon
          label="Rchain Developer Blog"
          primaryColor={colors.P400}
          size="medium"
        />
      </CardIcon>
    ),
    text:
      'Join our large community on Discord and become a member in the Rchain Coop',
  },

  {
    href: 'https://www.youtube.com/channel/UCSS3jCffMiz574_q64Ukj_w',
    to: '',
    title: 'Youtube Development Updates',
    icon: () => (
      <CardIcon color={colors.N0}>
        <VidCameraOnIcon
          label="Youtube Development Updates"
          primaryColor={colors.P400}
          size="medium"
        />
      </CardIcon>
    ),
    text: 'Watch every wednesday the development updates from Rchain',
  },
  {
    href: 'http://revdefine.io/',
    to: '',
    title: 'Rchain Block Explorer',
    icon: () => (
      <CardIcon color={colors.R400}>
        <MediaDocIcon
          label="Rchain Block Explorer"
          primaryColor={colors.N0}
          secondaryColor={colors.R400}
          size="small"
        />
      </CardIcon>
    ),
    text: 'Get information about blocks',
  },
];

/* eslint-disable react/no-multi-comp */
export default class Cards extends React.Component {
  state = {
    columnCount: 3,
  };
  debouncedDetect?: () => void;

  componentDidMount() {
    this.debouncedDetect = debounce(this.detectColumns, 500);
    window.addEventListener('resize', this.debouncedDetect!);
  }

  componentWillUnmount() {
    if (this.debouncedDetect) {
      window.removeEventListener('resize', this.debouncedDetect);
    }
  }

  detectColumns = () => {
    const width = window.innerWidth;
    if (width <= MOBILE_BREAKPOINT_MAX) {
      this.setState({ columnCount: 1 });
    } else if (width <= TABLET_BREAKPOINT_MAX) {
      this.setState({ columnCount: 2 });
    } else {
      this.setState({ columnCount: 3 });
    }
  };

  columnIndexes = () => {
    const { columnCount } = this.state;
    if (columnCount === 1) {
      return [0, 1, 2, 3, 4, 5, 6, 7];
    } else if (columnCount === 2) {
      return [0, 1, 2, 3, 4, 5, 6, 7];
    }
    return [0, 1, 2, 3, 4, 5, 6, 7];
  };

  render() {
    const columns = this.columnIndexes();

    return (
      <CardsWrapper innerRef={this.detectColumns}>
        {columns.map((cardIndex, index) => {
          const props = cards[cardIndex];
          return <Card index={index} key={props.title} {...props} />;
        })}
      </CardsWrapper>
    );
  }
}
