import Avatar from '@atlaskit/avatar';
import LockCircleIcon from '@atlaskit/icon/glyph/lock-circle';
import Lozenge from '@atlaskit/lozenge';
import { colors } from '@atlaskit/theme';
import * as React from 'react';
import {
  isRestricted,
  MentionDescription,
  OnMentionEvent,
  Presence,
} from '../../types';
import { NoAccessLabel } from '../../util/i18n';
import { leftClick } from '../../util/mouse';
import { NoAccessTooltip } from '../NoAccessTooltip';
import {
  AccessSectionStyle,
  AvatarStyle,
  FullNameStyle,
  InfoSectionStyle,
  MentionItemStyle,
  NameSectionStyle,
  RowStyle,
  TimeStyle,
} from './styles';
import { renderHighlight } from './MentionHighlightHelpers';
import MentionDescriptionByline from '../MentionDescriptionByline';

function renderLozenge(lozenge?: string) {
  if (lozenge) {
    return <Lozenge>{lozenge}</Lozenge>;
  }
  return null;
}

function renderTime(time?: string) {
  if (time) {
    return <TimeStyle>{time}</TimeStyle>;
  }
  return null;
}

export interface Props {
  mention: MentionDescription;
  selected?: boolean;
  // TODO: Remove onMouseMove -> https://product-fabric.atlassian.net/browse/FS-3897
  onMouseMove?: OnMentionEvent;
  onMouseEnter?: OnMentionEvent;
  onSelection?: OnMentionEvent;
}

export default class MentionItem extends React.PureComponent<Props, {}> {
  // internal, used for callbacks
  private onMentionSelected = (event: React.MouseEvent<any>) => {
    if (leftClick(event) && this.props.onSelection) {
      event.preventDefault();
      this.props.onSelection(this.props.mention, event);
    }
  };

  private onMentionMenuItemMouseMove = (event: React.MouseEvent<any>) => {
    if (this.props.onMouseMove) {
      this.props.onMouseMove(this.props.mention, event);
    }
  };

  private onMentionMenuItemMouseEnter = (event: React.MouseEvent<any>) => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(this.props.mention, event);
    }
  };

  render() {
    const { mention, selected } = this.props;
    const {
      id,
      highlight,
      avatarUrl,
      presence,
      name,
      mentionName,
      lozenge,
      accessLevel,
    } = mention;
    const { status, time } = presence || ({} as Presence);
    const restricted = isRestricted(accessLevel);

    const nameHighlights = highlight && highlight.name;

    const borderColor = selected ? colors.N30 : undefined;

    return (
      <MentionItemStyle
        selected={selected}
        onMouseDown={this.onMentionSelected}
        onMouseMove={this.onMentionMenuItemMouseMove}
        onMouseEnter={this.onMentionMenuItemMouseEnter}
        data-mention-id={id}
        data-mention-name={mentionName}
      >
        <RowStyle>
          <AvatarStyle restricted={restricted}>
            <Avatar
              src={avatarUrl}
              size="medium"
              presence={status}
              borderColor={borderColor}
            />
          </AvatarStyle>
          <NameSectionStyle restricted={restricted}>
            {renderHighlight(FullNameStyle, name, nameHighlights)}
            <MentionDescriptionByline mention={mention} />
          </NameSectionStyle>
          <InfoSectionStyle restricted={restricted}>
            {renderLozenge(lozenge)}
            {renderTime(time)}
          </InfoSectionStyle>
          {restricted ? (
            <NoAccessTooltip name={name!}>
              <AccessSectionStyle>
                <NoAccessLabel>
                  {text => (
                    <LockCircleIcon label={text as string} />
                  ) /* safe to cast to string given there is no value binding */}
                </NoAccessLabel>
              </AccessSectionStyle>
            </NoAccessTooltip>
          ) : null}
        </RowStyle>
      </MentionItemStyle>
    );
  }
}
