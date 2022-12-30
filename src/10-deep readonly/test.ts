type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type DeepReadonlyTodo = DeepReadonly<X>; // should be same as `Expected`

let a: DeepReadonlyTodo;
// a.x.a = 1 // readonly, 无法修改

type TestDeepReadonly = {
  foo: [1, 2];
  bar: "1";
  fn: () => {};
};

type TestDeepReadonly2 = DeepReadonly<TestDeepReadonly>;

let b: TestDeepReadonly2;
// b.foo[0] = 2 // readonly, 无法修改
// b.fn = () => {}
