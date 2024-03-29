type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends {} ? DeepReadonly<T[P]> : T[P];
};
