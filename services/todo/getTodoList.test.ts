import getTodoList from "./getTodoList";

describe("getTodoList", () => {
  test("todo一覧を取得できる", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ],
    } as Response);
    const result = await getTodoList();
    expect(result).toEqual([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    ]);
  });
  test("通信が失敗した場合はエラーを投げる", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => [],
    } as Response);
    expect.assertions(1);
    try {
      await getTodoList();
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch"));
    }
  });
});
