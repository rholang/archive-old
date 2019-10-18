export const asMock = (fn: Function): jest.Mock => fn as jest.Mock;

export const asMockReturnValue = <T extends (...args: any[]) => any>(
  fn: T,
  returnValue: ReturnType<T>,
) => asMock(fn).mockReturnValue(returnValue);

export const expectToEqual = <T>(actual: T, expected: T) =>
  expect(actual).toEqual(expected);

export type ExpectFunctionToHaveBeenCalledWith = <
  T extends (...args: any[]) => any
>(
  func: T,
  expectedArgs: Parameters<T>,
) => void;
export type ExpectConstructorToHaveBeenCalledWith = <
  T extends new (...args: any[]) => any
>(
  func: T,
  expectedArgs: ConstructorParameters<T>,
) => void;

export const expectConstructorToHaveBeenCalledWith: ExpectConstructorToHaveBeenCalledWith = (
  func,
  expectedArgs,
) => expect(func).toHaveBeenCalledWith(...expectedArgs);
export const expectFunctionToHaveBeenCalledWith: ExpectFunctionToHaveBeenCalledWith = (
  func,
  expectedArgs,
) => expect(func).toHaveBeenCalledWith(...expectedArgs);
