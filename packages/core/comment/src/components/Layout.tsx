import React, { Component, ReactNode } from 'react';
import {
  AvatarSectionDiv,
  Container,
  ContentSectionDiv,
  Highlight,
  NestedCommentsDiv,
} from '../styled/LayoutStyles';

interface Props {
  /** The element to display as the Comment avatar - generally an Atlaskit Avatar */
  avatar?: ReactNode;
  /** Nested comments to render */
  children?: ReactNode;
  /** The main content of the Comment */
  content?: ReactNode;
  /** Whether this comment should appear highlighted */
  highlighted?: boolean;
  /** Optional ID for the comment */
  id?: string;
}

export default class Layout extends Component<Props> {
  renderAvatar() {
    const { avatar } = this.props;
    return avatar ? <AvatarSectionDiv>{avatar}</AvatarSectionDiv> : null;
  }

  renderNestedComments() {
    const { children } = this.props;
    return children ? <NestedCommentsDiv>{children}</NestedCommentsDiv> : null;
  }

  render() {
    const { content, highlighted, id } = this.props;

    return (
      <Container id={id}>
        {this.renderAvatar()}
        <ContentSectionDiv>{content}</ContentSectionDiv>
        {this.renderNestedComments()}
        {highlighted && <Highlight />}
      </Container>
    );
  }
}
