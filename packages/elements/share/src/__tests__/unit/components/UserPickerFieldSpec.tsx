jest.mock('../../../components/utils', () => ({
  showInviteWarning: jest.fn(),
  allowEmails: jest.fn(),
  isValidEmailUsingConfig: jest.fn(),
}));

import { shallowWithIntl } from '@atlaskit/editor-test-helpers';
import { ErrorMessage, Field, HelperMessage } from '@atlaskit/form';
import UserPicker, { OptionData } from '@atlaskit/user-picker';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Props,
  REQUIRED,
  UserPickerField,
} from '../../../components/UserPickerField';
import { allowEmails, showInviteWarning } from '../../../components/utils';
import { messages } from '../../../i18n';
import { ConfigResponse } from '../../../types';
import { renderProp } from '../_testUtils';

describe('UserPickerField', () => {
  const renderUserPicker = (userPickerFieldProps: Props, ...args: any[]) =>
    renderProp(
      shallowWithIntl(<UserPickerField {...userPickerFieldProps} />),
      'children',
      ...args,
    );

  afterEach(() => {
    (showInviteWarning as jest.Mock).mockClear();
    (allowEmails as jest.Mock).mockClear();
  });

  it('should render UserPicker', () => {
    const fieldProps = {
      onChange: jest.fn(),
      value: [],
    };
    const loadOptions = jest.fn();
    const mockIsLoading = true;
    const field = renderUserPicker(
      { loadOptions, isLoading: mockIsLoading },
      { fieldProps, meta: { valid: true } },
    );

    const formattedMessageAddMore = field.find(FormattedMessage);
    expect(formattedMessageAddMore).toHaveLength(1);
    expect(formattedMessageAddMore.props()).toMatchObject(
      messages.userPickerAddMoreMessage,
    );

    expect(field.find(ErrorMessage).exists()).toBeFalsy();

    const userPicker = renderProp(
      formattedMessageAddMore,
      'children',
      'add more',
    ).find(UserPicker);
    expect(userPicker).toHaveLength(1);
    expect(userPicker.props()).toMatchObject({
      fieldId: 'share',
      addMoreMessage: 'add more',
      onChange: fieldProps.onChange,
      value: fieldProps.value,
      placeholder: (
        <FormattedMessage {...messages.userPickerGenericPlaceholder} />
      ),
      loadOptions: expect.any(Function),
      isLoading: mockIsLoading,
    });
  });

  it('should set defaultValue', () => {
    const defaultValue: OptionData[] = [];
    const loadOptions = jest.fn();
    const component = shallowWithIntl(
      <UserPickerField loadOptions={loadOptions} defaultValue={defaultValue} />,
    );
    expect(component.find(Field).prop('defaultValue')).toBe(defaultValue);
  });

  it('should not call loadUsers on empyt query', () => {
    const loadOptions = jest.fn();
    const fieldProps = {
      onChange: jest.fn(),
      value: [],
    };
    const field = renderUserPicker(
      { loadOptions },
      { fieldProps, meta: { valid: true } },
    );
    const formattedMessageAddMore = field.find(FormattedMessage);
    const userPicker = renderProp(
      formattedMessageAddMore,
      'children',
      'add more',
    ).find(UserPicker);
    expect(userPicker).toHaveLength(1);
    userPicker.simulate('loadOptions', '');
    expect(loadOptions).not.toHaveBeenCalled();
  });

  describe('validate function', () => {
    test.each([
      ['REQUIRED', []],
      ['REQUIRED', null],
      [undefined, [{ id: 'some-id' }]],
    ])('should return "%s" when called with %p', (expected, value) => {
      const loadOptions = jest.fn();
      const component = shallowWithIntl(
        <UserPickerField loadOptions={loadOptions} />,
      );
      const validate = component.prop('validate');
      expect(validate(value)).toEqual(expected);
    });
  });

  describe('error messages', () => {
    it('should display required message', () => {
      const fieldProps = {
        onChange: jest.fn(),
        value: [],
      };
      const loadOptions = jest.fn();
      const errorMessage = renderUserPicker(
        { loadOptions },
        {
          fieldProps,
          meta: { valid: false },
          error: REQUIRED,
        },
      ).find(ErrorMessage);

      expect(errorMessage).toHaveLength(1);
      const message = errorMessage.find(FormattedMessage);
      expect(message).toHaveLength(1);
      expect(message.props()).toMatchObject(messages.userPickerRequiredMessage);
    });
  });

  describe('invite warning', () => {
    const setUpInviteWarningTest = () => {
      const loadOptions = jest.fn();
      const config: ConfigResponse = {
        mode: 'EXISTING_USERS_ONLY',
        allowComment: true,
      };
      const fieldProps = {
        onChange: jest.fn(),
        value: [],
      };
      const component = renderUserPicker(
        {
          loadOptions,
          config,
        },
        {
          fieldProps,
          meta: { valid: true },
        },
      );
      return {
        loadOptions,
        config,
        fieldProps,
        component,
      };
    };

    it('should show existing user only placeholder', () => {
      const { component } = setUpInviteWarningTest();
      const formattedMessageAddMore = component.find(FormattedMessage);
      const userPicker = renderProp(
        formattedMessageAddMore,
        'children',
        'add more',
      ).find(UserPicker);
      expect(userPicker.prop('placeholder')).toEqual(
        <FormattedMessage
          {...messages.userPickerExistingUserOnlyPlaceholder}
        />,
      );
    });

    it('should call showInviteWarning function', () => {
      const { fieldProps, config } = setUpInviteWarningTest();

      expect(showInviteWarning).toHaveBeenCalledTimes(1);
      expect(showInviteWarning).toHaveBeenCalledWith(config, fieldProps.value);
    });

    it('should not display warning message if showInviteWarning returns false', () => {
      (showInviteWarning as jest.Mock).mockReturnValueOnce(false);
      const { component } = setUpInviteWarningTest();

      expect(showInviteWarning).toHaveBeenCalledTimes(1);
      expect(component.find(HelperMessage)).toHaveLength(0);
    });

    it('should display warning message if showInviteWarning returns true', () => {
      (showInviteWarning as jest.Mock).mockReturnValueOnce(true);
      const { component } = setUpInviteWarningTest();

      expect(showInviteWarning).toHaveBeenCalledTimes(1);
      const helperMessage = component.find(HelperMessage);
      expect(helperMessage).toHaveLength(1);
      const message = helperMessage.find(FormattedMessage);
      expect(message).toHaveLength(1);
      expect(message.props()).toMatchObject(messages.capabilitiesInfoMessage);
    });
  });
});
