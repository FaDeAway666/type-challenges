interface Todo {
  title: string;
  description: string;
}

export const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// Error is OK
todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
