import {
  Emoji,
  EmojiDescription,
  EmojiId,
  EmojiProvider,
  OnEmojiEvent,
  toEmojiId,
} from '@atlaskit/emoji';
import { waitUntil } from '@atlaskit/util-common-test';
import { emoji } from '@atlaskit/util-data-test';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { EmojiButton } from '../../../components/EmojiButton';
import { hasSelector } from '../_test-utils';

const { getEmojiResourcePromise, newEmojiRepository } = emoji.testData;
const emojiRepository = newEmojiRepository();

const smiley: EmojiDescription = emojiRepository.findByShortName(
  ':smiley:',
) as EmojiDescription;
const emojiId: EmojiId = toEmojiId(smiley);

const renderEmojiButton = (onClick: OnEmojiEvent = () => {}) => {
  return (
    <EmojiButton
      onClick={onClick}
      emojiId={emojiId}
      emojiProvider={getEmojiResourcePromise() as Promise<EmojiProvider>}
    />
  );
};

describe('@atlaskit/reactions/emoji-button', () => {
  it('should render a button', () => {
    const emojiButton = shallow(renderEmojiButton());
    expect(emojiButton.find('button').length).toEqual(1);
  });

  it('should render an emoji', () => {
    const emojiButton = mount(renderEmojiButton());
    return waitUntil(() => hasSelector(emojiButton, Emoji)).then(() => {
      const emoji = emojiButton.find(Emoji);
      expect(emoji.length).toEqual(1);
      expect(emoji.first().prop('emoji').id).toEqual(emojiId.id);
    });
  });

  it('should call "onClick" when clicked', () => {
    const onClick = jest.fn();
    const emojiButton = mount(renderEmojiButton(onClick));
    emojiButton.simulate('mouseup', { button: 0 });
    expect(onClick).toHaveBeenCalled();
  });
});
