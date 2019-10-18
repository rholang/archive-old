/**
 * General utility functions/classes
 */

/* A simple defined check with type guard that works well with Array.prototype.filter */
export function isDefined<T>(arg: T | undefined): arg is T {
  return arg !== undefined;
}

/* Allow us to handle validation errors specifically */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
