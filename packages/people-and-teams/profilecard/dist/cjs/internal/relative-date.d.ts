import { RelativeDateKeyType } from '../types';
export declare function isValidDate(date: Date, today?: Date): boolean;
export default function getRelativeDateKey(date?: Date | null, today?: Date): RelativeDateKeyType;
