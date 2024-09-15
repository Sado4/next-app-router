import { render } from "@testing-library/react";
import TodoPresentation from "./TodoPresentation";
import { Todo } from "@/types/todo";

test('Todo一覧ページが表示されること', () => {
  const { getByText } = render(<TodoPresentation todos={[]} />);
  expect(getByText('Todo List')).toBeInTheDocument();
});

test('Todoが1件以上ある場合はTodo一覧が表示されること', () => {
  const mockTodos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ];
  const { getByText } = render(<TodoPresentation todos={mockTodos} />);
  expect(getByText('delectus aut autem')).toBeInTheDocument();
});

test('TODOが1件もない場合はメッセージが表示されること', () => { 
  const { getByText } = render(<TodoPresentation todos={[]} />);
  expect(getByText('Todoはありません')).toBeInTheDocument();
});
