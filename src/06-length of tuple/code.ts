/**
 * 获取tuple的长度
 * solution：
 * 1. 接收一个tuple作为参数
 * 2. 返回tuple的length
 */

type Length<T extends readonly any[]> = T["length"];
