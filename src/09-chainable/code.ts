/**
 * Chainable需要实现：
 * 1. 包含两个方法，option和get
 * 2. option的key参数不能接受相同的值
 * 3. Chainable需要带有一个返回值参数，每次option执行结束后，需要返回出添加过的K/V类型
 */

type Chainable<Result = {}> = {
  option: <K extends string, V>(
    key: K extends keyof Result ? never : K, // 防止接收重复的key值
    value: V
  ) => Chainable<Omit<Result, K> & { [k in K]: V }>; // 过滤掉已经添加过的key值，但是之前添加的map需要能够访问
  get: () => Result;
};
