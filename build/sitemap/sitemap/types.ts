export type File = {
  type: 'file';
  id: string;
  exports: () => Promise<Object>;
  contents: () => Promise<string>;
};

export type Directory = {
  type: 'dir';
  id: string;
  children: Array<any>;
};
