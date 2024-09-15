import Link from 'next/link';

interface Props {
  message: string;
}

export function HomePresentation({ message }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{message}</h1>
      <div>
        <Link href="/todos" className="underline hover:no-underline">
          Go to Todo List
        </Link>
      </div>
      <button>
        ボタン
      </button>
    </div>
  );
}

export default HomePresentation;
