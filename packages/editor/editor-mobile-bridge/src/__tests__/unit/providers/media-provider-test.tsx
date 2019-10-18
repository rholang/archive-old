jest.mock('@atlaskit/media-client');
import * as React from 'react';
import {
  ProviderFactory,
  ContextIdentifierProvider,
} from '@atlaskit/editor-common';
import {
  insertMediaSingleNode,
  mediaPluginKey,
  MediaOptions,
  MediaState,
  MediaProvider,
} from '@atlaskit/editor-core';

import {
  doc,
  p,
  mediaSingle,
  media,
  createEditorFactory,
  randomId,
  sleep,
} from '@atlaskit/editor-test-helpers';

import { Auth, AuthProvider, MediaClientConfig } from '@atlaskit/media-core';
import {
  getMediaClient,
  withMediaClient,
  MediaClient,
  ProcessedFileState,
} from '@atlaskit/media-client';
import uuid from 'uuid/v4';
import {
  asMock,
  asMockReturnValue,
  expectFunctionToHaveBeenCalledWith,
  fakeMediaClient,
} from '@atlaskit/media-test-helpers';
import { of } from 'rxjs/observable/of';
import { INPUT_METHOD } from '../../../../../editor-core/src/plugins/analytics';

let testFileId: string;

let testMediaAuth: Auth;

const createMediaState = (
  collection: string,
  width = 256,
  height = 128,
): MediaState => ({
  id: testFileId,
  collection,
  status: 'ready',
  dimensions: { width, height },
});

const createMedia = (collection: string, width = 256, height = 128) =>
  media({
    type: 'file',
    id: testFileId,
    collection,
    width,
    height,
  })();

describe('Mobile MediaProvider', () => {
  const createEditor = createEditorFactory();

  let promisedMediaProvider: Promise<MediaProvider>;
  let promisedIdentifierProvider: Promise<ContextIdentifierProvider>;
  let mockAuthProvider: AuthProvider;
  let providerFactory: ProviderFactory;
  let testFileState: ProcessedFileState;
  let mediaClient: MediaClient;

  beforeEach(() => {
    testFileState = {
      status: 'processed',
      id: testFileId,
      name: 'image.jpeg',
      size: 100,
      artifacts: {},
      mediaType: 'image',
      mimeType: 'image/jpeg',
      representations: {
        image: {},
      },
    };

    testFileId = uuid();
    testMediaAuth = {
      clientId: `media-plugin-mock-clientId-${randomId()}`,
      token: 'some-token',
      baseUrl: '/',
    };

    mockAuthProvider = jest.fn<AuthProvider>(() => async () => testMediaAuth);
    const mediaClientConfig: MediaClientConfig = {
      authProvider: mockAuthProvider,
    };
    mediaClient = fakeMediaClient();
    asMockReturnValue(getMediaClient, mediaClient);
    asMock(withMediaClient).mockImplementation(
      (Component: React.ComponentType) => (props: any) => (
        <Component {...props} mediaClient={mediaClient} />
      ),
    );
    asMockReturnValue(mediaClient.file.getFileState, of(testFileState));

    promisedMediaProvider = Promise.resolve({
      viewMediaClientConfig: mediaClientConfig,
      uploadMediaClientConfig: mediaClientConfig,
      uploadParams: {
        collection: '',
      },
    });

    promisedIdentifierProvider = Promise.resolve({
      containerId: 'come-container-id',
      objectId: 'some-object-id',
    });

    providerFactory = ProviderFactory.create({
      mediaProvider: promisedMediaProvider,
      contextIdentifierProvider: promisedIdentifierProvider,
    });
  });

  const editor = (doc: any, mediaOptions: MediaOptions) =>
    createEditor({
      doc,
      editorProps: {
        media: mediaOptions,
        appearance: 'mobile',
      },
      pluginKey: mediaPluginKey,
      providerFactory,
    });

  afterAll(() => {
    providerFactory.destroy();
  });

  describe('rendering mediaSingle', () => {
    describe('having collection name', () => {
      it("should call media's AuthProvider", async () => {
        const { editorView } = editor(doc(p('text{<>}')), {
          allowMediaSingle: true,
          provider: promisedMediaProvider,
        });

        const testCollectionName = `media-plugin-mock-collection-${randomId()}`;

        await promisedMediaProvider;

        insertMediaSingleNode(
          editorView,
          createMediaState(testCollectionName, 128, 256),
          INPUT_METHOD.CLIPBOARD,
          testCollectionName,
        );

        expect(editorView.state.doc).toEqualDocument(
          doc(
            p('text'),
            mediaSingle({ layout: 'center' })(
              createMedia(testCollectionName, 128, 256),
            ),
            p(),
          ),
        );

        // flushes promise resolution queue so that the async media API calls mockAuthProvider
        await sleep(0);

        expectFunctionToHaveBeenCalledWith(mediaClient.file.getFileState, [
          testFileId,
          { collectionName: testCollectionName, occurrenceKey: undefined },
        ]);
      });
    });

    describe('having empty collection name', () => {
      it("should call media's AuthProvider", async () => {
        const { editorView } = editor(doc(p('text{<>}')), {
          allowMediaSingle: true,
          provider: promisedMediaProvider,
        });

        const emptyCollectionName = '';

        await promisedMediaProvider;

        insertMediaSingleNode(
          editorView,
          createMediaState(emptyCollectionName, 128, 256),
          INPUT_METHOD.CLIPBOARD,
          emptyCollectionName,
        );

        expect(editorView.state.doc).toEqualDocument(
          doc(
            p('text'),
            mediaSingle({ layout: 'center' })(
              createMedia(emptyCollectionName, 128, 256),
            ),
            p(),
          ),
        );

        // flushes promise resolution queue so that the async media API calls mockAuthProvider
        await sleep(0);

        expectFunctionToHaveBeenCalledWith(mediaClient.file.getFileState, [
          testFileId,
          { collectionName: emptyCollectionName, occurrenceKey: undefined },
        ]);
      });
    });
  });
});
