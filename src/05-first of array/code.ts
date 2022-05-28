/**
 * 获取array的第一个元素的类型
 * solution:
 * 1. 接收一个数组类型作为参数
 * 2. 返回第一个元素的类型
 * 3. 注意判定当前数组是否存在第一个元素
 */

type First<T extends any[]> = T extends [] ? never : T[0];
