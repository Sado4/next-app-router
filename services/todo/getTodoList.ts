import { Todo } from "@/types/todo";
import { apiEndpoint } from "@/constants/apiEndpoint";

export default async function getTodoList(): Promise<Todo[]> {
  const response = await fetch(`${apiEndpoint}/todos`);
  if (!response.ok) throw new Error("Failed to fetch");
  return await response.json();
}
