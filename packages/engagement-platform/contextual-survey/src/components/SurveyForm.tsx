/** @jsx jsx */
import { useState, useRef, useCallback, RefObject } from 'react';
import { Transition } from 'react-transition-group';
import { jsx, css } from '@emotion/core';
import Textarea from '@atlaskit/textarea';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { Field, FormFooter, CheckboxField } from '@atlaskit/form';
import { fontSize } from '@atlaskit/theme';

import FeedbackScoreButtons from './FeedbackScoreButtons';
import { FormValues } from '../types';

interface Props {
  question: string;
  statement?: string;
  textPlaceholder: string;
  textLabel: string;
  onSubmit: (
    formValues: FormValues,
    formApi: any,
    callback: (err?: Object) => void,
  ) => void;
}

type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';

const getExpandedHeight = (
  ref: RefObject<HTMLDivElement>,
  state: TransitionState,
): string => {
  if (!ref.current) {
    return '0';
  }

  switch (state) {
    case 'entering':
      return `${ref.current.scrollHeight}px`;
    case 'entered':
      // needed for TextField auto height expand
      return `none`;
    default:
      return '0';
  }
};

const transitionDuration = 200;

export default ({
  question,
  statement,
  textPlaceholder,
  textLabel,
  onSubmit,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [canContactDefault, setCanContactDefault] = useState(false);
  const hasAutoFilledCanContactRef = useRef(false);

  const expandedAreaRef = useRef<HTMLDivElement>(null);
  const onScoreSelect = useCallback(
    () => {
      setExpanded(true);
    },
    [setExpanded],
  );

  // On the first type the user types some feedback we auto select
  // the option for allowing feedback. This automatic selection only
  // happens once. After that it is up to the user to control
  const onFeedbackChange = useCallback(() => {
    if (hasAutoFilledCanContactRef.current) {
      return;
    }
    hasAutoFilledCanContactRef.current = true;
    setCanContactDefault(true);
  }, []);

  return (
    <section aria-labelledby="contextualSurveyQuestion">
      <h1
        id="contextualSurveyQuestion"
        css={css`
          font-size: ${fontSize()}px;
          font-weight: 600;
        `}
      >
        {question}
      </h1>
      {statement && <p id="contextualSurveyStatement">{statement}</p>}
      <Form onSubmit={onSubmit}>
        {({ formProps, submitting }: any) => (
          <form {...formProps}>
            <Field name="feedbackScore" isDisabled={submitting} isRequired>
              {({ fieldProps }: { fieldProps: any }) => (
                <FeedbackScoreButtons
                  {...fieldProps}
                  onChange={(score: number) => {
                    fieldProps.onChange(score);
                    onScoreSelect();
                  }}
                />
              )}
            </Field>
            <Transition in={expanded} timeout={transitionDuration} mountOnEnter>
              {(state: TransitionState) => (
                <div
                  css={css`
                    transition: max-height ${transitionDuration}ms ease-in-out;
                    overflow: hidden;
                    max-height: ${getExpandedHeight(expandedAreaRef, state)};
                  `}
                  ref={expandedAreaRef}
                >
                  <Field
                    name="writtenFeedback"
                    defaultValue=""
                    isDisabled={submitting}
                  >
                    {({ fieldProps }: { fieldProps: any }) => (
                      <Textarea
                        {...fieldProps}
                        aria-label={textLabel}
                        placeholder={textPlaceholder}
                        autoFocus
                        onChange={(event: Event) => {
                          fieldProps.onChange(event);
                          onFeedbackChange();
                        }}
                      />
                    )}
                  </Field>
                  <CheckboxField
                    name="canContact"
                    isDisabled={submitting}
                    defaultIsChecked={canContactDefault}
                  >
                    {({ fieldProps }: { fieldProps: any }) => (
                      <Checkbox
                        {...fieldProps}
                        label="Atlassian can contact me about this feedback"
                      />
                    )}
                  </CheckboxField>
                  <FormFooter>
                    <Button
                      type="submit"
                      appearance="primary"
                      isLoading={submitting}
                    >
                      Submit
                    </Button>
                  </FormFooter>
                </div>
              )}
            </Transition>
          </form>
        )}
      </Form>
    </section>
  );
};
