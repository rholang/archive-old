declare namespace jest {
  /** Returns the actual module instead of a mock, bypassing all checks on whether the module should receive a mock implementation or not. */
  function requireActual(moduleName: string): any;

  interface StyleRuleOptions {
    target?: string;
    media?: string;
  }

  interface Matchers<R> {
    /**
     * Compare two ProseMirror Node objects (documents) for equality.
     * Two documents are equal if they have the same JSON representation (same structure of nodes and marks)
     */
    toEqualDocument(expected: any): R;
    toEqualDocumentAndSelection(expected: any): R;
    toMatchDocSnapshot(): R;
    toMatchProdImageSnapshot(): R;
    toMatchCustomSnapshot(testName: string): R;
    toMatchCustomDocSnapshot(testName: string): R;
    toHaveStyleDeclaration(
      property: string,
      value: string | number,
      options?: StyleRuleOptions,
    ): R;

    toBeInTheDocument(): R;
    toHaveFocus(): R;

    /**
     * Jest Styled Components Matchers
     */
    toMatchStyledComponentsSnapshot(): void;
    toHaveStyleRule(property: string, value: any): void;
  }
}
