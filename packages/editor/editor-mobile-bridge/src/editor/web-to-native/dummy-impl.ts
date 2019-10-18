/* eslint-disable no-console */
import { Color as StatusColor } from '@atlaskit/status/element';
import { EditorBridges, EditorPluginBridges } from './index';
import NativeBridge from './bridge';
import { sendToBridge } from '../../bridge-utils';

export default class DummyBridge implements NativeBridge {
  log = (...args: any[]) => {
    console.log(...args);
  };

  showMentions(query: string) {
    this.log(`showMentions(query=${query})`);
  }
  dismissMentions() {
    this.log('dismissMentions');
  }
  updateTextFormat(markStates: string) {
    this.log(`updateTextFormat(markStates=${markStates})`);
  }
  updateText(content: string) {
    this.log(`updateText(content=${content})`);
  }
  submitPromise(name: string, uuid: string, args: string) {
    this.log(`submitPromise(name=${name}, uuid=${uuid}, args=${args})`);
  }
  updateBlockState(currentBlockType: string) {
    this.log(`updateBlockState(currentBlockType=${currentBlockType})`);
  }
  updateListState(listState: string) {
    this.log(`updateListState(listState=${listState})`);
  }
  showStatusPicker(
    text: string,
    color: StatusColor,
    uuid: string,
    isNew: boolean,
  ) {
    this.log(
      `showStatusPicker(text=${text}, color=${color}, uuid=${uuid}), isNew=${isNew})`,
    );
  }
  dismissStatusPicker(isNew: boolean) {
    this.log(`dismissStatusPicker(isNew=${isNew})`);
  }
  currentSelection(
    text: string,
    url: string,
    top: number,
    right: number,
    bottom: number,
    left: number,
  ) {
    this.log(
      `currentSelection(text=${text}, url=${url}, top=${top}, right=${right}, bottom=${bottom}, left=${left})`,
    );
  }
  stateChanged(canUndo: boolean, canRedo: boolean) {
    this.log(`stateChanged(canUndo=${canUndo}, canRedo=${canRedo})`);
  }
  trackEvent(event: string) {
    this.log(`trackEvent(${event})`);
  }

  call<T extends EditorPluginBridges>(
    bridge: T,
    event: keyof Exclude<EditorBridges[T], undefined>,
    ...args: any[]
  ) {
    sendToBridge(bridge, event, ...args);
  }

  updateTextColor() {}
}
