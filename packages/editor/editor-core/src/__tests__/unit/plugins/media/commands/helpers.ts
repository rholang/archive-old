import {
  doc,
  media,
  mediaGroup,
  mediaSingle,
  testMediaFileId,
} from '@atlaskit/editor-test-helpers';
import {
  findMediaNode,
  findAllMediaSingleNodes,
} from '../../../../../plugins/media/commands/helpers';
import { MediaPluginState } from '../../../../../plugins/media/pm-plugins/main';
import { mediaEditor, testCollectionName } from '../_utils';

const mediaImage = media({
  id: testMediaFileId,
  type: 'file',
  collection: testCollectionName,
})();

describe('Media commands helpers', () => {
  let pluginState: MediaPluginState;

  beforeEach(() => {
    ({ pluginState } = mediaEditor(
      doc(
        mediaSingle({
          layout: 'center',
        })(mediaImage),
        mediaSingle({
          layout: 'center',
        })(mediaImage),
        mediaGroup(mediaImage),
      ),
    ));
  });

  describe('Find media node', () => {
    it('should find media single node', () => {
      const node = findMediaNode(pluginState, testMediaFileId, true);

      expect(node).not.toBeNull();
    });

    it('should find first stored media single node (We stored in reverse order)', () => {
      const node = findMediaNode(pluginState, testMediaFileId, true);

      expect(node!.getPos()).toBe(4);
    });

    it('should find first media group node', () => {
      const node = findMediaNode(pluginState, testMediaFileId, false);

      expect(node).not.toBeNull();
    });
  });

  describe('Find all media single nodes', () => {
    it('should find all two media single nodes', () => {
      const nodes = findAllMediaSingleNodes(pluginState, testMediaFileId);

      expect(nodes).toHaveLength(2);
    });

    it('should return it in inverse order', () => {
      const nodes = findAllMediaSingleNodes(pluginState, testMediaFileId);

      expect(nodes.map(({ getPos }) => getPos())).toEqual([4, 1]);
    });
  });
});
