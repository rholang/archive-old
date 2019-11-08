export declare function startMeasure(measureName: string): void;
export declare function stopMeasure(measureName: string, onMeasureComplete: (duration: number, startTime: number) => void): void;
export declare function clearMeasure(measureName: string): void;
