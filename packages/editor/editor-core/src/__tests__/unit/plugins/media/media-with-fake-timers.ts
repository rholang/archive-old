import { ProviderFactory } from '@atlaskit/editor-common';
import {
  doc,
  createEditorFactory,
  p,
  storyMediaProviderFactory,
  randomId,
} from '@atlaskit/editor-test-helpers';

import {
  stateKey as mediaPluginKey,
  MediaPluginState,
  MediaState,
} from '../../../../plugins/media/pm-plugins/main';

const testCollectionName = `media-plugin-mock-collection-${randomId()}`;

const getFreshMediaProvider = () =>
  storyMediaProviderFactory({
    collectionName: testCollectionName,
    includeUserAuthProvider: true,
    includeUploadMediaClientConfig: true,
  });

describe('Media plugin', () => {
  const createEditor = createEditorFactory<MediaPluginState>();
  const mediaProvider = getFreshMediaProvider();
  const providerFactory = ProviderFactory.create({ mediaProvider });

  const editor = (doc: any, editorProps = {}) =>
    createEditor({
      doc,
      editorProps: {
        ...editorProps,
        media: {
          provider: mediaProvider,
        },
      },
      providerFactory,
      pluginKey: mediaPluginKey,
    });

  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  afterAll(() => {
    providerFactory.destroy();
  });

  describe('updateUploadState', () => {
    it('should change upload state to unfinished when uploads start', async () => {
      const { pluginState } = editor(doc(p('')));
      await mediaProvider;

      pluginState.insertFile(
        {
          id: 'foo',
          fileMimeType: 'image/jpeg',
        },
        () => {},
      );
      jest.runOnlyPendingTimers();
      expect(pluginState.allUploadsFinished).toBe(false);
    });

    it('should change upload state to finished once an upload finishes', async () => {
      const { pluginState } = editor(doc(p('')));
      await mediaProvider;

      const evts: Array<(state: MediaState) => void> = [];
      pluginState.insertFile(
        {
          id: 'foo',
          fileMimeType: 'image/jpeg',
          status: 'preview',
        },
        evt => evts.push(evt),
      );
      jest.runOnlyPendingTimers();
      evts.forEach(cb =>
        cb({
          id: 'foo',
          fileName: 'foo.jpg',
          fileSize: 100,
          fileMimeType: 'image/jpeg',
          status: 'ready',
          dimensions: { height: 100, width: 100 },
        }),
      );
      jest.runOnlyPendingTimers();
      await pluginState.waitForPendingTasks();
      expect(pluginState.allUploadsFinished).toBe(true);
    });

    it('should change upload state to finished once multiple uploads have finished', async () => {
      const { pluginState } = editor(doc(p('')));
      await mediaProvider;

      const fooEvents: Array<(state: MediaState) => void> = [];
      const barEvents: Array<(state: MediaState) => void> = [];
      pluginState.insertFile(
        {
          id: 'foo',
          fileMimeType: 'image/jpeg',
          status: 'preview',
        },
        evt => fooEvents.push(evt),
      );
      pluginState.insertFile(
        {
          id: 'bar',
          fileMimeType: 'image/jpeg',
          status: 'preview',
        },
        evt => barEvents.push(evt),
      );

      expect(pluginState.allUploadsFinished).toBe(false);
      jest.runOnlyPendingTimers();
      expect(pluginState.allUploadsFinished).toBe(false);

      fooEvents.forEach(cb =>
        cb({
          id: 'foo',
          fileName: 'foo.jpg',
          fileSize: 100,
          fileMimeType: 'image/jpeg',
          status: 'ready',
          dimensions: { height: 100, width: 100 },
        }),
      );

      jest.runOnlyPendingTimers();
      expect(pluginState.allUploadsFinished).toBe(false);

      barEvents.forEach(cb =>
        cb({
          id: 'bar',
          fileName: 'bar.jpg',
          fileSize: 100,
          fileMimeType: 'image/jpeg',
          status: 'ready',
          dimensions: { height: 100, width: 100 },
        }),
      );

      jest.runOnlyPendingTimers();
      expect(pluginState.allUploadsFinished).toBe(false);

      await pluginState.waitForPendingTasks();
      expect(pluginState.allUploadsFinished).toBe(true);
    });
  });
});
