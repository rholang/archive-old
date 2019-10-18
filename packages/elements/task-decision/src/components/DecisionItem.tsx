import * as React from 'react';
import { PureComponent } from 'react';

import DecisionIcon from '@atlaskit/icon/glyph/editor/decision';

import { EditorIconWrapper } from '../styled/DecisionItem';
import Item from './Item';
import { Appearance, ContentRef } from '../types';

export interface Props {
  children?: any;
  contentRef?: ContentRef;
  placeholder?: string;
  showPlaceholder?: boolean;
  appearance?: Appearance;
}

export default class DecisionItem extends PureComponent<Props, {}> {
  public static defaultProps: Partial<Props> = {
    appearance: 'inline',
  };

  render() {
    const {
      appearance,
      children,
      contentRef,
      placeholder,
      showPlaceholder,
    } = this.props;

    const icon = (
      <EditorIconWrapper showPlaceholder={showPlaceholder}>
        <DecisionIcon label="Decision" size="large" />
      </EditorIconWrapper>
    );

    return (
      <Item
        appearance={appearance}
        contentRef={contentRef}
        icon={icon}
        placeholder={placeholder}
        showPlaceholder={showPlaceholder}
      >
        {children}
      </Item>
    );
  }
}
