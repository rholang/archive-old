import * as React from 'react';
import ResultBase from './ResultBase';
import { CommonResultProps } from './types';
import Page24Icon from '@atlaskit/icon-object/glyph/page/24';

export type Props = CommonResultProps & {
  /** Name of the container. Provides the main text to be displayed as the item. */
  name: React.ReactNode;
  /** Text to appear to the right of the text. It has a lower font-weight. */
  caption?: string;
  /** Name of the container to which the object belongs. Displayed alongside the name */
  containerName?: React.ReactNode;
  /** Set whether to display a lock on the result's icon */
  isPrivate?: boolean;
  /** A key or identifier of the object. Ajoined to the `containerName` when provided. */
  objectKey?: React.ReactNode;
};

/**
 * Generic result type for Atlassian objects.
 */
export default class ObjectResult extends React.PureComponent<Props> {
  getAvatar = () => {
    if (this.props.avatar) {
      return this.props.avatar;
    }

    return (
      <Page24Icon label="Search"/>
    );
  };

  getSubtext() {
    const { containerName } = this.props;
    if (containerName) {
      return (
        <span>
          {containerName}
        </span>
      );
    }

    return containerName ;
  }

  render() {
    const {
      name,
      containerName,
      isPrivate,
      objectKey,
      type = 'object',
      ...commonResultProps
    } = this.props;

    return (
      <ResultBase
        {...commonResultProps}
        type={type}
        text={name}
        subText={this.getSubtext()}
        icon={this.getAvatar()}
      />
    );
  }
}
