interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// add MyPick type
type TodoPreview = MyPick<Todo, "title" | "completed">;

export const todo: TodoPreview = {
  title: "Clear",
  completed: false,
};
