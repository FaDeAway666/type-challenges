/**
 * 获取返回值类型
 * solution：
 * 1. 接收一个类型参数
 * 2. 判断这个参数是否为函数类型，如果不是，返回never
 * 3. 将这个函数类型的返回值类型定义为变量并返回
 */

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
