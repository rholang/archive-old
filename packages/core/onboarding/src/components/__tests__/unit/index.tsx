import React from 'react';
import { mount } from 'enzyme';

import { Spotlight, SpotlightManager, SpotlightTarget } from '../../..';
import Clone from '../../Clone';

// TODO: https://ecosystem.atlassian.net/browse/DS-6664
// Those tests are randomly failing in CI but not locally...
test.skip('should show spotlight', () => {
  const ref = jest.fn();
  const wrapper = mount(
    <SpotlightManager>
      <SpotlightTarget name="target">
        <div ref={ref}>target</div>
      </SpotlightTarget>
      <Spotlight target="target">Check this out</Spotlight>
    </SpotlightManager>,
  );
  const clone = wrapper.find(Clone);
  expect(clone).toHaveLength(1);
  expect(ref).toHaveBeenCalledWith(clone.prop('targetNode'));
});

test.skip('should spotlight different targets', () => {
  const ref = jest.fn();
  const NextButton = (props: { onClick: () => void }) => <button {...props} />;
  class SpotlightDemo extends React.Component<{}, { target: string }> {
    state = {
      target: 'target-one',
    };

    render() {
      return (
        <SpotlightManager>
          <SpotlightTarget name="target-one">
            <div>target</div>
          </SpotlightTarget>
          <SpotlightTarget name="target-two">
            <div ref={ref}>target</div>
          </SpotlightTarget>
          <Spotlight target={this.state.target}>Check this out</Spotlight>
          <NextButton onClick={() => this.setState({ target: 'target-two' })} />
        </SpotlightManager>
      );
    }
  }
  const wrapper = mount(<SpotlightDemo />);
  wrapper.find(NextButton).simulate('click');
  const clone = wrapper.find(Clone);
  expect(clone).toHaveLength(1);
  expect(ref).toHaveBeenCalledWith(clone.prop('targetNode'));
});

test.skip('should be able to render a SpotlightTarget without SpotlightManager', () => {
  expect(() =>
    mount(
      <SpotlightTarget name="target">
        <div>Hi</div>
      </SpotlightTarget>,
    ),
  ).not.toThrowError();
});

test.skip('should be able to render a Spotlight without SpotlightManager', () => {
  expect(() =>
    mount(
      <Spotlight>
        <div>Hi</div>
      </Spotlight>,
    ),
  ).not.toThrowError();
});

test.skip('should ensure key is set correctly on spotlight action', () => {
  jest.spyOn(console, 'error').mockImplementation(e => {
    throw new Error(e);
  });
  expect(() =>
    mount(
      <SpotlightManager>
        <SpotlightTarget name="target">
          <div>target</div>
        </SpotlightTarget>
        <Spotlight
          target="target"
          actions={[
            { text: <p>Got it</p>, key: 'got-it' },
            { text: <p>Cancel</p>, key: 'cancel' },
          ]}
        >
          Check this out
        </Spotlight>
      </SpotlightManager>,
    ),
  ).not.toThrowError();
});

test.skip('should set "fixed" position for the clone if the target a "fixed" position', () => {
  const ref = jest.fn();
  const wrapper = mount(
    <SpotlightManager>
      <SpotlightTarget name="target">
        <div style={{ position: 'fixed' }} ref={ref}>
          target
        </div>
      </SpotlightTarget>
      <Spotlight target="target">Check this out</Spotlight>
    </SpotlightManager>,
  );
  const clone = wrapper.find(Clone);
  expect(clone).toHaveLength(1);
  const { position } = clone.prop('style');
  expect(position).toBe('fixed');
});
