/**
 * resolution:
 * 1. 确定有两个类型参数：T、K
 * 2. K应该是属于T的属性集合的子集
 * 3. 返回的类型是一个类似于接口的类型，属性集合为K，属性值集合为T取K集合对应的属性值
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
