import "server-only";
import { cache } from "react";

export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function isArticle(value: unknown): value is Article {
  if (typeof value !== "object" || value === null) return false;
  const article = value as Record<string, unknown>;
  return (
    Number.isInteger(article.id) &&
    Number.isInteger(article.userId) &&
    typeof article.title === "string" &&
    typeof article.body === "string"
  );
}

// Выполняется только на сервере. no-store обеспечивает SSR при каждом запросе.
async function fetchArticles(path: string): Promise<Response> {
  return fetch(`${API_URL}${path}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
}

export async function getArticles(): Promise<Article[]> {
  const response = await fetchArticles("?_limit=15");
  if (!response.ok) throw new Error("Не удалось загрузить список статей.");
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isArticle)) {
    throw new Error("Сервис вернул некорректный список статей.");
  }
  return data;
}

// Один результат для страницы и generateMetadata в пределах одного рендера.
export const getArticle = cache(async (id: string): Promise<Article | null> => {
  if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id))) return null;
  const response = await fetchArticles(`/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Не удалось загрузить статью.");
  const data: unknown = await response.json();
  if (!isArticle(data)) throw new Error("Сервис вернул некорректную статью.");
  return data;
});
