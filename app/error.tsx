'use client';

// エラー時に表示する画面
// 型はany
const Error = ({ error, reset }: { error: any, reset: () => void }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button className="bg-blue-500 py-2 px-4 rounded" onClick={reset}>再読み込み</button>
    </div>
  );
}

export default Error;
