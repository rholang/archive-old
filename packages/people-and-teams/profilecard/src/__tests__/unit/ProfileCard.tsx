import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '@atlaskit/button';
import ProfileCardResourced, { ProfileCard, ProfileClient } from '../..';
import ErrorMessage from '../../components/ErrorMessage';

import { ProfilecardProps } from '../../types';

import {
  FullNameLabel,
  ActionButtonGroup,
  SpinnerContainer,
  CardElevationWrapper,
} from '../../styled/Card';
import mockGlobalDate from './helper/_mock-global-date';

describe('Profilecard', () => {
  const defaultProps: ProfilecardProps = {
    fullName: 'full name test',
    status: 'active',
    nickname: 'jscrazy',
    companyName: 'Atlassian',
  };

  const TODAY = new Date(2018, 10, 19, 17, 30, 0, 0);

  beforeAll(() => {
    mockGlobalDate.setToday(TODAY);
  });

  afterAll(() => {
    mockGlobalDate.reset();
  });

  const renderShallow = (props = {}) =>
    shallow(<ProfileCard {...defaultProps} {...props} />);

  it('should export default ProfileCardResourced', () => {
    expect(ProfileCardResourced).toBeInstanceOf(Object);
  });

  it('should export named ProfileCard and ProfileClient', () => {
    expect(ProfileCard).toBeInstanceOf(Object);
    expect(ProfileClient).toBeInstanceOf(Object);
  });

  describe('ProfileCard', () => {
    it('should be possible to create a component', () => {
      const card = shallow(<ProfileCard />);
      expect(card.length).toBeGreaterThan(0);
    });

    describe('fullName property', () => {
      const fullName = 'This is an avatar!';
      const card = shallow(<ProfileCard fullName={fullName} />);

      it('should show the full name on the card if property is set', () => {
        const el = card.find(FullNameLabel).dive();
        expect(el.text()).toBe(fullName);
      });

      it('should not render a card if full name is not set', () => {
        card.setProps({ fullName: undefined });
        expect(card.find(ProfileCard).children()).toHaveLength(0);
      });

      it('should match snapshot when fullName and nickName are equal', () => {
        const wrapper = renderShallow({
          fullName: 'Same Same',
          nickname: 'Same Same',
        });
        expect(wrapper).toMatchSnapshot();
      });

      it('should match snapshot when fullName and nickName are set', () => {
        const wrapper = renderShallow();
        expect(wrapper).toMatchSnapshot();
      });

      it('should match snapshot when nickName is missing', () => {
        const wrapper = renderShallow({ nickname: undefined });
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('isLoading property', () => {
      it('should render the LoadingMessage component', () => {
        const card = shallow(<ProfileCard isLoading />);
        expect(card.find(SpinnerContainer).exists()).toBe(true);
      });
    });

    describe('hasError property', () => {
      it('should render the ErrorMessage component', () => {
        const card = shallow(<ProfileCard hasError />);
        expect(card.find(ErrorMessage).exists()).toBe(true);
      });

      it('should render the ErrorMessage component with retry button if clientFetchProfile is provided', () => {
        const card = mount(<ProfileCard hasError />);

        const errorComponent = card.find(ErrorMessage);
        expect(errorComponent.length).toBe(1);
        // expect(errorComponent.find(CrossCircleIcon).length).toBe(1);
        expect(errorComponent.find(Button).length).toBe(1);
      });
    });

    describe('actions property', () => {
      const actions = [
        {
          id: 'one',
          label: 'one',
        },
        {
          id: 'two',
          label: 'two',
        },
        {
          id: 'three',
          label: 'three',
        },
      ];
      const card = mount(<ProfileCard fullName="name" actions={actions} />);

      it('should render an action button for every item in actions property', () => {
        const actionsWrapper = card.find(ActionButtonGroup);
        const buttonTexts = card
          .find(Button)
          .children()
          .map(node => node.text());

        expect(
          actionsWrapper
            .children()
            .first()
            .children(),
        ).toHaveLength(actions.length);
        expect(buttonTexts).toEqual(actions.map(action => action.label));
      });

      it('should call callback handler when action button is clicked', () => {
        const spy = jest.fn().mockImplementation(() => {}); // eslint-disable-line no-undef
        card.setProps({
          actions: [
            {
              label: 'test',
              callback: spy,
            },
          ],
        });
        const actionsWrapper = card.find(ActionButtonGroup);
        actionsWrapper
          .find(Button)
          .first()
          .simulate('click');
        expect(spy.mock.calls.length).toBe(1);
      });

      it('should not render any action buttons if actions property is not set', () => {
        card.setProps({ actions: undefined });
        const actionsWrapper = card.find(ActionButtonGroup);
        expect(actionsWrapper.children().length).toBe(0);
      });
    });

    describe('status property', () => {
      it('should match snapshot when status=inactive and status modified date is unknown', () => {
        const card = renderShallow({
          status: 'inactive',
          statusModifiedDate: undefined,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=inactive and status modified date is defined', () => {
        const card = renderShallow({
          status: 'inactive',
          statusModifiedDate: 1542608651819,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=closed and status modified date is unknown', () => {
        const card = renderShallow({
          fullName: undefined,
          status: 'closed',
          statusModifiedDate: undefined,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=closed and status modified date is defined', () => {
        const card = renderShallow({
          fullName: undefined,
          status: 'closed',
          statusModifiedDate: 1542608651819,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=closed and hasDisabledAccountLozenge=false', () => {
        const card = renderShallow({
          status: 'closed',
          hasDisabledAccountLozenge: false,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=inactive and hasDisabledAccountLozenge=false', () => {
        const card = renderShallow({
          status: 'inactive',
          hasDisabledAccountLozenge: false,
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=closed and disabledAccountMessage is defined', () => {
        const card = renderShallow({
          status: 'closed',
          disabledAccountMessage: (
            <p>this is a custom message for closed account</p>
          ),
        });

        expect(card).toMatchSnapshot();
      });

      it('should match snapshot when status=inactive and disabledAccountMessage is defined', () => {
        const card = renderShallow({
          status: 'inactive',
          disabledAccountMessage: (
            <p>this is a custom message for inactive account</p>
          ),
        });

        expect(card).toMatchSnapshot();
      });
    });

    describe('customElevation', () => {
      it('should have correct customElevation', () => {
        const wrapper = shallow(<ProfileCard customElevation="e400" />);
        expect(
          wrapper.find(CardElevationWrapper).props().customElevation,
        ).toEqual('e400');
      });
    });
  });
});
