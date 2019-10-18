import { nextTick } from '@atlaskit/media-test-helpers';

const removeOnCloseListener = jest.fn();
const spies = {} as any;

const mockMediaPickerFacade = jest.fn(pickerType => {
  const picker: any = {
    on: jest.fn(),
    onClose: jest.fn().mockReturnValue(removeOnCloseListener),
    onNewMedia: jest.fn(),
    onMediaEvent: jest.fn(),
    onDrag: jest.fn(),
    hide: jest.fn(),
    setUploadParams: jest.fn(),
    show: jest.fn(),
    deactivate: jest.fn(),
    activate: jest.fn(),
    destroy: jest.fn(),
    type: 'popup',
  };
  picker.init = jest.fn().mockReturnValue(picker);
  spies[pickerType] = picker;
  return picker;
});
jest.mock(
  '../../../../plugins/media/picker-facade',
  () => mockMediaPickerFacade,
);

import { ProviderFactory } from '@atlaskit/editor-common';
import {
  doc,
  p,
  randomId,
  createEditorFactory,
  storyMediaProviderFactory,
} from '@atlaskit/editor-test-helpers';

import {
  stateKey as mediaPluginKey,
  MediaPluginState,
} from '../../../../plugins/media/pm-plugins/main';
import { waitForAllPickersInitialised } from './_utils';

const testCollectionName = `media-plugin-mock-collection-${randomId()}`;

const getFreshMediaProvider = () =>
  storyMediaProviderFactory({
    collectionName: testCollectionName,
    includeUserAuthProvider: true,
  });

describe('Media with mock facade', () => {
  const createEditor = createEditorFactory<MediaPluginState>();
  const mediaProvider = getFreshMediaProvider();
  const providerFactory = ProviderFactory.create({ mediaProvider });

  const editor = (
    doc: any,
    editorProps = {},
    dropzoneContainer: HTMLElement = document.body,
  ) =>
    createEditor({
      doc,
      editorProps: {
        ...editorProps,
        media: {
          provider: mediaProvider,
          allowMediaSingle: true,
          customDropzoneContainer: dropzoneContainer,
        },
      },
      providerFactory,
      pluginKey: mediaPluginKey,
    });

  it('should add an onClose event listener in popupPicker', async () => {
    const { pluginState } = editor(doc(p('{<>}')));
    await waitForAllPickersInitialised(pluginState);

    await mediaProvider;

    expect(spies.popup.onClose).toHaveBeenCalledTimes(1);
    expect(spies.popup.onClose).toHaveBeenCalledWith(
      pluginState.onPopupPickerClose,
    );
    pluginState.destroy();
  });

  it('should call popupPicker.show when showMediaPicker is called', async () => {
    const { pluginState } = editor(doc(p('{<>}')));
    await waitForAllPickersInitialised(pluginState);

    await mediaProvider;

    pluginState.showMediaPicker();
    expect(spies.popup.show).toHaveBeenCalledTimes(1);
  });

  it('should call onPopupPickerOpen(true) callback when showMediaPicker is called', async () => {
    const { pluginState } = editor(doc(p('{<>}')));
    const onPopupPickerOpenMock = jest.fn();
    await waitForAllPickersInitialised(pluginState);

    await mediaProvider;

    pluginState.onPopupToggle(onPopupPickerOpenMock);
    pluginState.showMediaPicker();
    expect(onPopupPickerOpenMock).toHaveBeenCalledTimes(1);
    expect(onPopupPickerOpenMock).toHaveBeenCalledWith(true);
  });

  it('should call onPopupPickerOpen(false) callback when onPopupPickerClose is called', async () => {
    const { pluginState } = editor(doc(p('{<>}')));
    const onPopupPickerOpenMock = jest.fn();
    await waitForAllPickersInitialised(pluginState);

    await mediaProvider;

    pluginState.onPopupToggle(onPopupPickerOpenMock);
    pluginState.onPopupPickerClose();
    expect(onPopupPickerOpenMock).toHaveBeenCalledTimes(1);
    expect(onPopupPickerOpenMock).toHaveBeenCalledWith(false);
  });

  it('should cleanup properly on destroy', async () => {
    removeOnCloseListener.mockClear();
    const { pluginState } = editor(doc(p('{<>}')));
    await waitForAllPickersInitialised(pluginState);

    await mediaProvider;

    pluginState.destroy();
    expect(removeOnCloseListener).toHaveBeenCalledTimes(1);
  });

  it('should cleanup properly on destroy when pickers arent completely initialised.', async () => {
    spies.popup.destroy.mockClear();
    const { pluginState } = editor(doc(p('{<>}')));

    await mediaProvider;
    await nextTick();

    pluginState.destroy();
    await Promise.all(pluginState.pickerPromises);

    expect(spies.popup.destroy).toHaveBeenCalledTimes(1);
  });
});
