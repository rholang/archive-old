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
    title: 'Documentation1',
    text:
      'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu',
  },
  {
    image: rocket,
    title: 'Documentation2',
    text: 'Everything you need to get up and running.',
  },
  {
    image: rocket,
    title: 'Documentation3',
    text: 'Everything you need to get up and running.',
  },
  {
    title: 'Documentation4',
    text:
      'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu',
  },
  {
    title: 'Documentation5',
    text:
      'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu',
  },
  {
    image: rocket,
    title: 'Documentation6',
    text: 'Everything you need to get up and running.',
  },
  {
    image: rocket,
    title: 'Documentation7',
    text: 'Everything you need to get up and running.',
  },
  {
    title: 'Documentation8',
    text:
      'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu',
  },
];

export type MissionProps = {
  image?: string;
  title: string;
  text: string;
};
class MissionItem extends React.Component<MissionProps> {
  render() {
    const { text, title, image } = this.props;

    return image ? (
      <MissionContainer>
        <img width="200px" src={image} alt="Logo" />;
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
