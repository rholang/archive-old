import styled, { css } from 'styled-components';
import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import rocket from '../../assets/Rocket.png';
import { colors } from '@atlaskit/theme';
import {
  MOBILE_BREAKPOINT_MAX,
  TABLET_BREAKPOINT_MIN,
  TABLET_BREAKPOINT_MAX,
} from '../../constants';
import debounce from 'lodash.debounce';
import * as R from 'ramda';
import { ThemeProvider } from 'styled-components';

import dag from '../../assets/home/graph.svg';
import blockchain from '../../assets/home/blockchain.svg';
import group from '../../assets/home/group.svg';
import nodes from '../../assets/home/nodes.svg';
import launch from '../../assets/home/launch.svg';

export const fonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const Title = styled.h1`
  color: ${colors.N900};
  font-family: 'Charlie_Display_Semibold', ${fonts}; /* stylelint-disable-line */
  font-size: 52px;
  margin: 80px 0 0 !important;
  letter-spacing: 0;
  display: block;
  text-align: center;
`;

export const Text = styled.p`
  color: ${colors.N900};
  font-family: ${fonts}; /* stylelint-disable-line */
  font-size: 14px;
  letter-spacing: 0;
`;

export const MissionContainer = styled.div`
  margin: 15px;
  margin-top: 60px;
  max-width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 58, // rem
      lg: 58, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const misionItems = [
  {
    title: "The language you've been waiting for ",
    text:
      'Rholang is build on the latest research on concurrent languages. Up to now all functional languages are build on the lambda calculus. With Rholang we built a new language on top of the reflective high order calculus (rho-calculus). This leads to a full concurrent language, with a very simple an safe way for developer to write concurrent code. Rholang is a new calculus from research led by Greg Meredith inspired from the pi-calculus.',
  },
  {
    image: launch,
    title: 'The language you ve been waiting for ',
  },
  {
    image: nodes,
    title: 'A new consensus layer',
  },
  {
    title: 'A new consensus layer',
    text:
      'Most blockchains are running serial like a chain, with that, thoughput is very limited. Rchain is using DAGs (directed acyclic graphs) that have a tree like structure and scale massively. Further Rchain uses proof of stake from research led by Greg Meredith, Kent Shikama, Christian Williams and Vlad Zamfir. The research solves current problems in Pos algorithms. Additionaly Rholang code is fully verified and the whole Rchain project code is written in scala. With that Rholang is currently the only language, where the DAO Bug with Ethereum would have not happened.',
  },
  {
    title: 'A large community',
    text:
      'The community for Rholang is the Rchain community. Rchain is founded as a cooperative with the democratic thinking in mind - one member - one vote. With more than 1500 registed members, Rchain elects new board seats and functions as a decentralized cooperation.',
  },
  {
    image: group,
    title: 'A large community',
  },
  {
    image: blockchain,
    title: 'Build for dApp developers',
  },
  {
    title: 'Build for dApp developers',
    text:
      'The Rholang developer ecosystem is growing. With a new typesafe api, dApps can be written for Rchain. Many dApps like RChain-Status, Dappy, MyRchainWallet, nth-caller-game, RSign, RCat and many more are developed by the community. Tutorials and an upgraded RNode API makes it easy for new developer to come onboard.',
  },
];

export type MissionProps = {
  image?: string;
  title: string;
  text?: string;
};
class MissionItem extends React.Component<MissionProps> {
  render() {
    const { text, title, image } = this.props;

    return image ? (
      <MissionContainer>
        <img width="150px" src={image} alt="Logo" />;
      </MissionContainer>
    ) : (
      <MissionContainer>
        <h1>{title}</h1>
        <Text>{text}</Text>
      </MissionContainer>
    );
  }
}

/* eslint-disable react/no-multi-comp */
export default class Mission extends React.Component {
  state = {
    columnCount: 3,
  };
  debouncedDetect?: () => void;

  componentDidMount() {
    console.log('width');
    this.debouncedDetect = debounce(this.detectColumns, 500);
    window.addEventListener('resize', this.debouncedDetect!);
    this.detectColumns();
  }

  componentWillUnmount() {
    if (this.debouncedDetect) {
      window.removeEventListener('resize', this.debouncedDetect);
    }
  }

  detectColumns = () => {
    const width = window.innerWidth;
    console.log('width2');
    console.log(width);
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
    console.log(columnCount);
    if (columnCount === 1) {
      return [0, 1, 3, 2, 4, 5, 7, 6];
    } else if (columnCount === 2) {
      return [0, 1, 2, 3, 4, 5, 6, 7];
    }
    return [0, 1, 2, 3, 4, 5, 6, 7];
  };

  transformItems = () => {
    const columns = this.columnIndexes();

    return columns.map((item, index) => {
      const props = misionItems[item];

      return <MissionItem key={props.title} {...props} />;
    });
  };

  pairItems = (missionItems: any[]) => {
    return R.splitEvery(4, missionItems);
  };

  render() {
    const columns = this.transformItems();
    const columnsPairs = this.pairItems(columns);

    return (
      <ThemeProvider theme={theme}>
        <Grid>
          {columnsPairs.map(([first, second, third, fourth]) => {
            return (
              <div>
                <Row>
                  <Col xs={12} sm={8} md={8} lg={9}>
                    <Row center="xs">{first}</Row>
                  </Col>
                  <Col xs={12} sm={4} md={4} lg={3}>
                    <Row center="xs">{second}</Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={4} md={4} lg={3}>
                    <Row center="xs">{third}</Row>
                  </Col>
                  <Col xs={12} sm={8} md={8} lg={9}>
                    <Row center="xs">{fourth}</Row>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Grid>
      </ThemeProvider>
    );
  }
}
