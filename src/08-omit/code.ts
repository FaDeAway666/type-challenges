/**
 * solution
 * 1. 接受两个参数，T是初始接口，K是T的key的子集
 * 2. 返回去除掉K的T的属性
 */
type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};
