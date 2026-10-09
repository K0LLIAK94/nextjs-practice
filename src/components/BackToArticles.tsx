"use client";

import { useRouter } from "next/navigation";

export default function BackToArticles() {
  const router = useRouter();

  return (
    <button className="back-link" type="button" onClick={() => router.push("/articles")}>
      <span aria-hidden="true">←</span> Назад к списку
    </button>
  );
}
