/**
 * solution
 * 1. 接收一个类型参数
 * 2. 构造一个新的类型，这个类型具有T的所有key，且这些key都是readonly
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
