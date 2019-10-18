import { ProviderFactory } from '@atlaskit/editor-common';
import {
  createEditorFactory,
  doc,
  mediaSingle,
  media,
  storyContextIdentifierProviderFactory,
  testMediaFileId,
} from '@atlaskit/editor-test-helpers';
import { MediaPluginState } from '../../../../../plugins/media/pm-plugins/main';
import { stateKey as mediaPluginKey } from '../../../../../plugins/media/pm-plugins/main';
import { getFreshMediaProvider, testCollectionName } from '../_utils';
import {
  updateMediaNodeAttrs,
  updateAllMediaNodesAttrs,
} from '../../../../../plugins/media/commands';
import { MediaAttributes } from '@atlaskit/adf-schema';

describe('Media plugin commands', () => {
  const createEditor = createEditorFactory<MediaPluginState>();
  const contextIdentifierProvider = storyContextIdentifierProviderFactory();
  const mediaProvider = getFreshMediaProvider();
  const providerFactory = ProviderFactory.create({
    mediaProvider,
    contextIdentifierProvider,
  });

  const mediaPluginOptions = (dropzoneContainer: HTMLElement) => ({
    provider: mediaProvider,
    allowMediaSingle: true,
    customDropzoneContainer: dropzoneContainer,
  });

  const editor = (
    doc: any,
    editorProps = {},
    dropzoneContainer: HTMLElement = document.body,
  ) => {
    return createEditor({
      doc,
      editorProps: {
        ...editorProps,
        media: mediaPluginOptions(dropzoneContainer),
        contextIdentifierProvider,
        allowAnalyticsGASV3: true,
      },
      providerFactory,
      pluginKey: mediaPluginKey,
    });
  };

  describe('Update Media Node Attributes', () => {
    const createMediaNode = (attrs: Partial<MediaAttributes>) =>
      media({
        id: testMediaFileId,
        type: 'file',
        collection: testCollectionName,
        __fileName: 'foo.jpg',
        __fileSize: 100,
        __fileMimeType: 'image/jpeg',
        ...attrs,
      })();
    const originalDimensions = {
      height: 100,
      width: 100,
    };

    const newDimensions = {
      height: 200,
      width: 200,
    };
    it('should update media attributes for media single', () => {
      const { editorView } = editor(
        doc(
          mediaSingle({
            layout: 'center',
          })(createMediaNode(originalDimensions)),
        ),
      );

      updateMediaNodeAttrs(testMediaFileId, newDimensions, true)(
        editorView.state,
        editorView.dispatch,
      );

      expect(editorView.state.doc).toEqualDocument(
        doc(
          mediaSingle({
            layout: 'center',
          })(createMediaNode(newDimensions)),
        ),
      );
    });

    it('should update media attributes for all media single nodes in the document with the same id', () => {
      const { editorView } = editor(
        doc(
          mediaSingle({
            layout: 'center',
          })(createMediaNode(originalDimensions)),
          mediaSingle({
            layout: 'center',
          })(createMediaNode(originalDimensions)),
          mediaSingle({
            layout: 'center',
          })(createMediaNode(originalDimensions)),
        ),
      );

      updateAllMediaNodesAttrs(
        testMediaFileId,
        {
          height: 200,
          width: 200,
        },
        true,
      )(editorView.state, editorView.dispatch);

      expect(editorView.state.doc).toEqualDocument(
        doc(
          mediaSingle({
            layout: 'center',
          })(createMediaNode(newDimensions)),
          mediaSingle({
            layout: 'center',
          })(createMediaNode(newDimensions)),
          mediaSingle({
            layout: 'center',
          })(createMediaNode(newDimensions)),
        ),
      );
    });
  });
});
