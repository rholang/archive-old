/* eslint-disable no-console */

import styled from 'styled-components';
import * as React from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import { borderRadius } from '@atlaskit/theme';
import { ShareDialogContainer } from '@atlaskit/share';

import {
  mention,
  emoji,
  taskDecision,
  userPickerData,
} from '@atlaskit/util-data-test';
import { EmojiProvider } from '@atlaskit/emoji/resource';
import { OptionData, User } from '@atlaskit/user-picker';
import { customInsertMenuItems } from '@atlaskit/editor-test-helpers';

import Editor, { EditorProps } from './../src/editor';
import EditorContext from './../src/ui/EditorContext';
import WithEditorActions from './../src/ui/WithEditorActions';
import {
  storyMediaProviderFactory,
  storyContextIdentifierProviderFactory,
  extensionHandlers,
} from '@atlaskit/editor-test-helpers';

import {
  akEditorCodeBackground,
  akEditorCodeBlockPadding,
  akEditorCodeFontFamily,
} from '../src/styles';

import { collabEditProvider } from '../example-helpers/mock-collab-provider';
import { TitleInput } from '../example-helpers/PageElements';
import { EditorActions, MediaProvider, MentionProvider } from '../src';
import { InviteToEditComponentProps } from '../src/plugins/collab-edit/types';
import { ResolvingMentionProvider } from '@atlaskit/mention/resource';

export const Content = styled.div`
  padding: 0 20px;
  height: 100vh;
  background: #fff;
  box-sizing: border-box;

  & .ProseMirror {
    & pre {
      font-family: ${akEditorCodeFontFamily};
      background: ${akEditorCodeBackground};
      padding: ${akEditorCodeBlockPadding};
      border-radius: ${borderRadius()}px;
    }
  }
`;
Content.displayName = 'Content';

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  flex: 1 1 0;
`;

const analyticsHandler = (actionName: string, props?: {}) =>
  console.log(actionName, props);

const SaveAndCancelButtons = (props: { editorActions: EditorActions }) => (
  <ButtonGroup>
    <Button
      appearance="primary"
      onClick={() =>
        props.editorActions.getValue().then(value => console.log(value))
      }
    >
      Publish
    </Button>
    <Button appearance="subtle" onClick={() => props.editorActions.clear()}>
      Close
    </Button>
  </ButtonGroup>
);

const shareClient = {
  getConfig: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          allowComment: true,
          allowedDomains: [],
          mode: 'ANYONE',
        });
      }, 1000);
    }),
  share: () =>
    new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            shareRequestId: 'c41e33e5-e622-4b38-80e9-a623c6e54cdd',
          }),
        3000,
      );
    }),
};

const userPropertiesToSearch: (keyof Pick<
  User,
  'id' | 'name' | 'publicName'
>)[] = ['id', 'name', 'publicName'];

const loadUserOptions = (searchText?: string): OptionData[] => {
  if (!searchText) {
    return userPickerData;
  }

  return userPickerData
    .map((user: User) => ({
      ...user,
      type: user.type || 'user',
    }))
    .filter((user: User) => {
      const searchTextInLowerCase = searchText.toLowerCase();
      return userPropertiesToSearch.some(property => {
        const value = property && user[property];
        return !!(value && value.toLowerCase().includes(searchTextInLowerCase));
      });
    });
};

const mockOriginTracing = {
  id: 'id',
  addToUrl: (l: string) => `${l}&atlOrigin=mockAtlOrigin`,
  toAnalyticsAttributes: () => ({
    originIdGenerated: 'id',
    originProduct: 'product',
  }),
};

export const InviteToEditButton = (props: InviteToEditComponentProps) => {
  return (
    <ShareDialogContainer
      cloudId="cloudId"
      // @ts-ignore
      shareClient={shareClient}
      loadUserOptions={loadUserOptions}
      originTracingFactory={() => mockOriginTracing}
      productId="confluence"
      renderCustomTriggerButton={({ isSelected, onClick }: any): any =>
        React.cloneElement(props.children, {
          onClick,
          selected: isSelected,
        })
      }
      shareAri="ari"
      shareContentType="draft"
      shareLink={window && window.location.href}
      shareTitle="title"
      showFlags={() => {}}
    />
  );
};

interface DropzoneEditorWrapperProps {
  children: (container: HTMLElement) => React.ReactNode;
}

class DropzoneEditorWrapper extends React.Component<
  DropzoneEditorWrapperProps,
  {}
> {
  dropzoneContainer: HTMLElement | null = null;

  handleRef = (node: HTMLElement) => {
    this.dropzoneContainer = node;
    this.forceUpdate();
  };

  render() {
    return (
      <Content innerRef={this.handleRef}>
        {this.dropzoneContainer
          ? this.props.children(this.dropzoneContainer)
          : null}
      </Content>
    );
  }
}

const mediaProvider1 = storyMediaProviderFactory();
const mediaProvider2 = storyMediaProviderFactory();
const mentionProvider2 = Promise.resolve<ResolvingMentionProvider>(
  mention.storyData.resourceProviderWithResolver2,
);
export type Props = {};

interface PropOptions {
  sessionId: string;
  mediaProvider: Promise<MediaProvider>;
  mentionProvider?: Promise<MentionProvider>;
  inviteHandler?: (event: React.MouseEvent<HTMLElement>) => void;
  parentContainer: any;
  inviteToEditComponent?: React.ComponentType<InviteToEditComponentProps>;
}

const editorProps = ({
  sessionId,
  mediaProvider,
  mentionProvider,
  inviteHandler,
  inviteToEditComponent,
  parentContainer,
}: PropOptions): EditorProps => ({
  appearance: 'full-page',
  analyticsHandler,
  allowAnalyticsGASV3: true,
  allowCodeBlocks: true,
  allowBreakout: true,
  allowLayouts: {
    allowBreakout: true,
    UNSAFE_addSidebarLayouts: true,
  },
  allowStatus: true,
  allowLists: true,
  allowTextColor: true,
  allowDate: true,
  allowPanel: true,
  allowTables: {
    advanced: true,
  },
  allowTemplatePlaceholders: { allowInserting: true },
  media: {
    provider: mediaProvider,
    allowMediaSingle: true,
    customDropzoneContainer: parentContainer,
  },
  emojiProvider: emoji.storyData.getEmojiResource() as Promise<EmojiProvider>,
  mentionProvider: Promise.resolve(
    mentionProvider || mention.storyData.resourceProviderWithResolver,
  ),

  taskDecisionProvider: Promise.resolve(
    taskDecision.getMockTaskDecisionResource(),
  ),
  contextIdentifierProvider: storyContextIdentifierProviderFactory(),
  collabEdit: {
    provider: collabEditProvider(sessionId),
    inviteToEditHandler: inviteHandler,
    inviteToEditComponent,
  },
  sanitizePrivateContent: true,
  placeholder: 'Write something...',
  shouldFocus: false,
  quickInsert: true,
  contentComponents: <TitleInput innerRef={ref => ref && ref.focus()} />,
  primaryToolbarComponents: (
    <WithEditorActions
      render={actions => <SaveAndCancelButtons editorActions={actions} />}
    />
  ),
  allowExtension: true,
  insertMenuItems: customInsertMenuItems,
  extensionHandlers: extensionHandlers,
});

export default class Example extends React.Component<Props> {
  render() {
    return (
      <div>
        <Columns>
          <Column>
            <DropzoneEditorWrapper>
              {parentContainer => (
                <EditorContext>
                  <Editor
                    {...editorProps({
                      sessionId: 'rick',
                      mediaProvider: mediaProvider1,
                      parentContainer,
                      inviteToEditComponent: InviteToEditButton,
                    })}
                  />
                </EditorContext>
              )}
            </DropzoneEditorWrapper>
          </Column>
          <Column>
            <DropzoneEditorWrapper>
              {parentContainer => (
                <EditorContext>
                  <Editor
                    {...editorProps({
                      sessionId: 'morty',
                      mediaProvider: mediaProvider2,
                      mentionProvider: mentionProvider2,
                      parentContainer,
                      inviteToEditComponent: InviteToEditButton,
                    })}
                  />
                </EditorContext>
              )}
            </DropzoneEditorWrapper>
          </Column>
        </Columns>
      </div>
    );
  }
}
