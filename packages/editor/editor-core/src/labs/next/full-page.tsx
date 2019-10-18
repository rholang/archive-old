import rafSchedule from 'raf-schd';
import * as React from 'react';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import {
  Editor,
  EditorContent,
  EditorSharedConfigConsumer,
  EditorSharedConfig,
} from './Editor';
import { BaseTheme, akEditorMenuZIndex } from '@atlaskit/editor-common';
import ContentStyles from '../../ui/ContentStyles';
import { scrollbarStyles } from '../../ui/styles';
import { tableFullPageEditorStyles } from '../../plugins/table/ui/styles';
import { akEditorToolbarKeylineHeight } from '../../styles';
import { Toolbar } from './Toolbar';
import { ContentComponents } from './ContentComponents';
import { ClickAreaBlock } from '../../ui/Addon';
import Avatars from '../../plugins/collab-edit/ui/avatars';
import WidthEmitter from '../../ui/WidthEmitter';
import { EditorProps } from '../../types';

const FullPageEditorWrapper = styled.div`
  min-width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
FullPageEditorWrapper.displayName = 'FullPageEditorWrapper';

const ScrollContainer = styled(ContentStyles)`
  flex-grow: 1;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  ${scrollbarStyles};
`;
ScrollContainer.displayName = 'ScrollContainer';

const GUTTER_PADDING = 32;

const ContentArea = styled.div`
  line-height: 24px;
  height: 100%;
  width: 100%;
  max-width: ${({ theme }: any) => theme.layoutMaxWidth + GUTTER_PADDING * 2}px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 55px;

  & .ProseMirror {
    flex-grow: 1;
    box-sizing: border-box;
  }

  && .ProseMirror {
    & > * {
      clear: both;
    }
    > p,
    > ul,
    > ol,
    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      clear: none;
    }
  }
  ${tableFullPageEditorStyles};
`;
ContentArea.displayName = 'ContentArea';

interface MainToolbarProps {
  showKeyline: boolean;
}

const MainToolbar: React.ComponentClass<
  React.HTMLAttributes<{}> & MainToolbarProps
> = styled.div`
  position: relative;
  align-items: center;
  box-shadow: ${(props: MainToolbarProps) =>
    props.showKeyline
      ? `0 ${akEditorToolbarKeylineHeight}px 0 0 ${colors.N30}`
      : 'none'};
  transition: box-shadow 200ms;
  z-index: ${akEditorMenuZIndex};
  display: flex;
  height: 80px;
  flex-shrink: 0;

  & object {
    height: 0 !important;
  }
`;
MainToolbar.displayName = 'MainToolbar';

const MainToolbarCustomComponentsSlot = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;
MainToolbarCustomComponentsSlot.displayName = 'MainToolbar';

const SecondaryToolbar = styled.div`
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  display: flex;
  padding: 24px 0;
`;
SecondaryToolbar.displayName = 'SecondaryToolbar';

interface State {
  showKeyline: boolean;
  containerWidth?: number;
}

export class FullPage extends React.Component<EditorProps, State> {
  state = { showKeyline: false };

  static displayName = 'FullPageEditor';
  private scrollContainer: HTMLElement | undefined;
  private scheduledKeylineUpdate: number | undefined;

  scrollContainerRef = (ref: HTMLElement | null) => {
    const previousScrollContainer = this.scrollContainer;

    // remove existing handler
    if (previousScrollContainer) {
      previousScrollContainer.removeEventListener(
        'scroll',
        this.scheduleUpdateToolbarKeyline,
      );
    }

    this.scrollContainer = ref ? ref : undefined;

    if (this.scrollContainer) {
      this.scrollContainer.addEventListener(
        'scroll',
        this.scheduleUpdateToolbarKeyline,
        false,
      );
      this.updateToolbarKeyline();
    }
  };

  updateToolbarKeyline = () => {
    if (!this.scrollContainer) {
      return false;
    }

    const { scrollTop } = this.scrollContainer;
    this.setState({ showKeyline: scrollTop > akEditorToolbarKeylineHeight });

    return false;
  };

  private scheduleUpdateToolbarKeyline = rafSchedule(this.updateToolbarKeyline);

  componentDidMount() {
    window.addEventListener('resize', this.scheduleUpdateToolbarKeyline, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.scheduleUpdateToolbarKeyline);

    if (this.scheduledKeylineUpdate) {
      cancelAnimationFrame(this.scheduledKeylineUpdate);
    }
  }

  render() {
    const {
      primaryToolbarComponents,
      contentComponents,
      allowDynamicTextSizing,
      collabEdit,
    } = this.props;

    return (
      // TODO: fix this type
      <Editor {...this.props as any}>
        <BaseTheme dynamicTextSizing={allowDynamicTextSizing}>
          <FullPageEditorWrapper className="akEditor">
            <MainToolbar showKeyline={this.state.showKeyline}>
              <Toolbar />
              <MainToolbarCustomComponentsSlot>
                <EditorSharedConfigConsumer>
                  {config =>
                    !config ? null : (
                      <Avatars
                        editorView={config.editorView}
                        eventDispatcher={config.eventDispatcher}
                        inviteToEditHandler={
                          collabEdit && collabEdit.inviteToEditHandler
                        }
                        isInviteToEditButtonSelected={
                          collabEdit && collabEdit.isInviteToEditButtonSelected
                        }
                      />
                    )
                  }
                </EditorSharedConfigConsumer>
                {primaryToolbarComponents}
              </MainToolbarCustomComponentsSlot>
            </MainToolbar>
            <ScrollContainer
              innerRef={this.scrollContainerRef}
              className="fabric-editor-popup-scroll-parent"
            >
              <EditorSharedConfigConsumer>
                {config => (
                  <ClickAreaBlock
                    editorView={
                      (config || ({} as EditorSharedConfig)).editorView
                    }
                  >
                    <ContentArea>
                      <div
                        style={{ padding: `0 ${GUTTER_PADDING}px` }}
                        className="ak-editor-content-area"
                      >
                        {contentComponents}
                        <EditorContent />
                        <ContentComponents />
                      </div>
                    </ContentArea>
                  </ClickAreaBlock>
                )}
              </EditorSharedConfigConsumer>
            </ScrollContainer>
            <EditorSharedConfigConsumer>
              {config => (
                <WidthEmitter
                  editorView={
                    (config || ({} as EditorSharedConfig)).editorView!
                  }
                  contentArea={this.scrollContainer}
                />
              )}
            </EditorSharedConfigConsumer>
          </FullPageEditorWrapper>
        </BaseTheme>
      </Editor>
    );
  }
}
