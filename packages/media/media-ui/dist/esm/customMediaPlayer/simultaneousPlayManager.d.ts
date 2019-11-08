export interface Pausable {
    pause: () => any;
}
declare const _default: {
    pauseOthers: (player: Pausable) => void;
    subscribe: (player: Pausable) => void;
    unsubscribe: (player: Pausable) => void;
};
export default _default;
