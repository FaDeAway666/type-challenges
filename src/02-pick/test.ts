interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// add MyPick type
type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clear",
  completed: false,
};
