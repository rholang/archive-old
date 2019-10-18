import React from 'react';
import * as ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import InlineEditableTextfield from '../../InlineEditableTextfield';
import InlineEdit from '../../InlineEdit';
import InlineEditUncontrolled from '../../InlineEditUncontrolled';

import ContentWrapper from '../../../styled/ContentWrapper';
import EditButton from '../../../styled/EditButton';
import ReadViewContainer from '../../../styled/ReadViewContainer';
import ReadViewContentWrapper from '../../../styled/ReadViewContentWrapper';
import ReadViewWrapper from '../../../styled/ReadViewWrapper';

const noop = () => {};

describe('@atlaskit/inline-edit core', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('renders a label when label prop is passed', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        label="test"
        placeholder=""
      />,
    );
    expect(wrapper.find('label').length).toBe(1);
  });

  it('does not render a label when label prop is not passed', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    expect(wrapper.find('label').length).toBe(0);
  });

  it('keeps edit view open on blur when keepEditViewOpenOnBlur prop is true', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={spy}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
        keepEditViewOpenOnBlur
      />,
    );
    const div = wrapper.find(ContentWrapper);
    div.simulate('blur');
    jest.runOnlyPendingTimers();
    expect(wrapper.find('input').length).toBe(1);
    expect(spy).not.toBeCalled();
  });

  it('renders action buttons', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    expect(wrapper.find('button').length).toBe(2);
  });

  it('does not render action buttons when hideActionButtons prop is true', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
        hideActionButtons
      />,
    );
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button')).toHaveStyleRule('display', 'none');
  });

  it('stretches to container width in read mode if readViewFitContainerWidth prop is true', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder="test"
        readViewFitContainerWidth
      />,
    );
    expect(wrapper.find(ReadViewContentWrapper)).toHaveStyleRule(
      'width',
      '100%',
    );
  });

  it('displays readView', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    expect(wrapper.find(ReadViewContainer).length).toBe(1);
  });

  it('renders a button as a sibling to the read view', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    expect(wrapper.find(ReadViewWrapper).find('button').length).toBe(1);
    expect(wrapper.find(ReadViewContentWrapper).find('button').length).toBe(0);
  });

  it('displays editView with correct initial value when isEditing prop is true', () => {
    /**
     * This test uses the startWithEditViewOpen prop to set the isEditing prop
     * to true within InlineEditableTextfield
     */
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue="test"
        placeholder=""
        startWithEditViewOpen
      />,
    );
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('value')).toBe('test');
  });

  it('switches to editView when the read view is clicked', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    expect(wrapper.find(InlineEditUncontrolled).prop('isEditing')).toBe(false);
    wrapper.find(ReadViewContentWrapper).simulate('click');
    expect(wrapper.find(InlineEditUncontrolled).prop('isEditing')).toBe(true);
  });

  it('switches to editView when the edit button is focused and enter is pressed', () => {
    /** This test uses simulate('click') to simulate a keydown of Enter on the edit button */
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    expect(wrapper.find(InlineEditUncontrolled).prop('isEditing')).toBe(false);
    wrapper.find(EditButton).simulate('click');
    expect(wrapper.find(InlineEditUncontrolled).prop('isEditing')).toBe(true);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={spy}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
    wrapper.find('form').simulate('submit');
    expect(spy).toBeCalled();
    expect(wrapper.find('input').length).toBe(0);
  });

  it('cancels the edit and returns to the initial value when cancel button is pressed', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={spy}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    wrapper.find('input').simulate('change', { target: { value: 'Hello' } });
    wrapper.find('button[aria-label="Cancel"]').simulate('click');
    expect(wrapper.find(ReadViewContainer).length).toBe(1);
    expect(spy).not.toBeCalled();
    wrapper.find(EditButton).simulate('click');
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('cancels the edit and return to the initial value when Escape key is pressed', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={spy}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hello' } });
    input.simulate('keyDown', { key: 'Esc' });
    expect(wrapper.find(ReadViewContainer).length).toBe(1);
    expect(spy).not.toBeCalled();
    wrapper.find(EditButton).simulate('click');
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('calls onConfirm on blur', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={spy}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    const div = wrapper.find(ContentWrapper);
    div.simulate('blur');
    jest.runOnlyPendingTimers();
    expect(spy).toBeCalled();
  });

  it('has default aria tags', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    const button = wrapper.find(EditButton);
    expect(button.prop('aria-label')).toBe('Edit');
    button.simulate('click');
    expect(wrapper.find('button[aria-label="Confirm"]').length).toBe(1);
    expect(wrapper.find('button[aria-label="Cancel"]').length).toBe(1);
  });

  it('passes through label props to aria tags', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
        editButtonLabel="test-edit"
        confirmButtonLabel="test-confirm"
        cancelButtonLabel="test-cancel"
      />,
    );
    const button = wrapper.find(EditButton);
    expect(button.prop('aria-label')).toBe('test-edit');
    button.simulate('click');
    expect(wrapper.find('button[aria-label="test-confirm"]').length).toBe(1);
    expect(wrapper.find('button[aria-label="test-cancel"]').length).toBe(1);
  });
});

describe('@atlaskit/inline-editable-textfield', () => {
  it('displays placeholder when value is empty', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder="test-empty-value"
      />,
    );
    expect(wrapper.find(ReadViewContentWrapper).text()).toBe(
      'test-empty-value',
    );
  });

  it('focuses on the input when the read view is clicked', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    wrapper.find(EditButton).simulate('click');
    expect(document.activeElement).toEqual(
      ReactDOM.findDOMNode(wrapper.find('input').instance()),
    );
  });

  it('focuses on the input when starting with edit view open', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
        startWithEditViewOpen
      />,
    );
    expect(document.activeElement).toEqual(
      ReactDOM.findDOMNode(wrapper.find('input').instance()),
    );
  });

  it('shows the correct value in the read view when not empty', () => {
    const wrapper = mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue="test-value"
        placeholder=""
      />,
    );
    expect(wrapper.find(ReadViewContentWrapper).text()).toBe('test-value');
  });
});

describe('@atlaskit/inline-edit', () => {
  it('renders the component passed in via the readView prop', () => {
    const wrapper = mount(
      <InlineEdit
        onConfirm={noop}
        defaultValue=""
        readView={() => <div id="test" />}
        editView={() => <div />}
      />,
    );
    expect(wrapper.find('#test').length).toBe(1);
  });

  it('renders the component passed in via the editView prop', () => {
    const wrapper = mount(
      <InlineEdit
        onConfirm={noop}
        defaultValue=""
        readView={() => <div />}
        editView={() => <div id="test" />}
        startWithEditViewOpen
      />,
    );
    expect(wrapper.find('#test').length).toBe(1);
  });
});

describe('@atlaskit/inline-edit', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'warn');
    jest.spyOn(global.console, 'error');
  });
  afterEach(() => {
    (global.console.warn as jest.Mock).mockRestore();
    (global.console.error as jest.Mock).mockRestore();
  });

  it('mounts without errors', () => {
    mount(
      <InlineEditableTextfield
        onConfirm={noop}
        defaultValue=""
        placeholder=""
      />,
    );
    /* eslint-disable no-console */
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
    /* eslint-disable no-console */
  });
});
