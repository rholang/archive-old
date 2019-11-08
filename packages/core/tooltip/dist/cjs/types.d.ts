export declare type PositionTypeBase = 'bottom' | 'left' | 'right' | 'top';
export declare type PositionType = PositionTypeBase | 'mouse';
export interface FakeMouseElement {
    getBoundingClientRect: () => {
        top: number;
        left: number;
        bottom: number;
        right: number;
        width: number;
        height: number;
    };
    clientWidth: number;
    clientHeight: number;
}
