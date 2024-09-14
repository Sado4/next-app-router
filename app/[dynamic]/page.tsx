import Client from "@/features/client/components/Client";

export default function Page() {
  const res = 'fetch';
  console.log('da');
  const res2 = 'fetch2';
  // const window2 = window;
  return (
    <main>
      <button>
        動的なページ
      </button>
      <Client />
    </main>
  );
}
