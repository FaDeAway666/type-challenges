# 基本概念

## 关键字

- typeof

  直接将 value 转为 type

- extends

  条件类型关键字,`T extends U`表示类型 T 为 U 的子集

- infer

  定义一个`类型变量`，这个变量指代一个不确定的类型，仅能和 extends 关键字连用，且仅能在判断为 true 的语句处使用

  ```ts
  // 获取返回值类型
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  // 获取Promise<xx>的xx类型
  type PromiseType<T> = T extends Promise<infer R> ? R : never;
  ```

  infer 的几个应用场景：

  1. 解包
  2. 推断返回值
  3. 推断联合类型
     当同一个类型变量可能有多种类型结果的时候，会推断为这些结果的联合类型
     ```ts
     type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
     type T10 = Foo<{ a: string; b: string }>; // T10 类型为 string
     type T11 = Foo<{ a: string; b: number }>; // T11 类型为 string | number
     ```

- keyof

  获取一个类型的索引集合

# 技巧

1. 获取 array 类型的值: `T[number]`

```ts
type OneOf<T extends readonly any[]> = T[number];

const arr = ["aa", "bb", "cc"] as const;

type result = OneOf<typeof arr>; // "aa" | "bb" | "cc"
```

2. const 断言

为表达式推断出它能推断出的最窄或最特定的类型，如果不使用它，编译器将使用其默认类型推断行为，这可能会导致更广泛或更一般的类型。

例如

```ts
const arr = ["aa", "bb", "cc"] as const;
// typeof arr: readonly ["aa", "bb", "cc"]
```
