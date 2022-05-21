# 基本概念

## 关键字

- typeof

  直接将 value 转为 type

- extends

  条件类型关键字,`T extends U`表示类型 T 为 U 的子集

- infer

  定义一个类型变量，仅能和 extends 关键字连用

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
