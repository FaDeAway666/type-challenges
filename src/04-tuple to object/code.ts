/**
 * solution：使用T[number]
 */
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type OneOf<T extends readonly any[]> = T[number];

const arr = ["aa", "bb", "cc"] as const;

type test = OneOf<typeof arr>;
