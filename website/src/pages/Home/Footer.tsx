/*import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />;

type Props = {
  monthLongTitle: string;
  year: number;
  handleClickNext?: () => void;
  handleClickPrev?: () => void;
  testId?: string;
};

const ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const footer = styled.footer`
  background-color: #555;
  color: #bbb;
  line-height: 1.5;
`;

const links = [
  {
    footerTitle: [
      {
        name: 'About',
        children: [
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
        ],
      },
      {
        name: 'Resources',
        children: [
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
        ],
      },
      {
        name: 'Contact',
        children: [
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
          { name: 'Services', link: 'http://' },
        ],
      },
    ],
  },
];

export default (props: Props) => (
  <Heading aria-hidden="true">
    <ArrowLeft>
      <Btn
        onClick={props.handleClickPrev}
        testId={props.testId && `${props.testId}--previous-month`}
      >
        <ArrowleftIcon label="Last month" size="medium" primaryColor={N70} />
      </Btn>
    </ArrowLeft>
    <MonthAndYear
      data-testid={props.testId && `${props.testId}--current-month-year`}
    >
      {`${props.monthLongTitle} ${props.year}`}
    </MonthAndYear>
    <ArrowRight>
      <Btn
        onClick={props.handleClickNext}
        testId={props.testId && `${props.testId}--next-month`}
      >
        <ArrowrightIcon label="Next month" size="medium" primaryColor={N70} />
      </Btn>
    </ArrowRight>
  </Heading>
);
*/
