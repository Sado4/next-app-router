import Link from 'next/link';
import type { Todo } from '@/types/todo';

interface Props {
  todos: Todo[];
}

export default function TodoPresentation({ todos }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      {todos.length > 0 ? (
        <ul className="list-inside list-disc space-y-2">
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>Todoはありません</p>
      )}
      <div>
        <Link className="underline hover:no-underline" href="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
