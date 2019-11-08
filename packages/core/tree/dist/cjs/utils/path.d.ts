export declare const isSamePath: (a: number[], b: number[]) => boolean;
export declare const hasSameParent: (a: number[], b: number[]) => boolean;
export declare const getParentPath: (child: number[]) => number[];
export declare const isTopOfSubtree: (belowPath: number[], abovePath?: number[] | undefined) => boolean;
export declare const getIndexAmongSiblings: (path: number[]) => number;
export declare const getPathOnLevel: (path: number[], level: number) => number[];
export declare const moveAfterPath: (after: number[], from: number[]) => number[];
export declare const isLowerSibling: (a: number[], other: number[]) => boolean;
