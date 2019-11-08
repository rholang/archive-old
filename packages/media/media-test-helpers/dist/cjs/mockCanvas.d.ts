/// <reference types="jest" />
export declare function mockCanvas(width?: number, height?: number): {
    canvas: {
        width: number;
        height: number;
        toDataURL: jest.Mock<unknown>;
        getContext: jest.Mock<unknown>;
    };
    context: Partial<CanvasRenderingContext2D>;
};
