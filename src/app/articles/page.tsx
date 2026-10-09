import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Статьи — Лист",
  description: "Каталог из 15 статей: выберите заголовок и прочитайте полный материал.",
};

// Серверный компонент: данные загружаются до отправки контента в браузер.
export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Каталог / Материалы для чтения</p>
        <div className="heading-row"><h1>Статьи<span className="title-dot">.</span></h1><span className="count">{articles.length} материалов</span></div>
        <p className="lead">Выберите историю, с которой начнётся ваша пауза.</p>
      </section>
      {articles.length === 0 ? <p className="empty-state">Статей пока нет.</p> : (
        <ul className="article-grid">
          {articles.map((article, index) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`} className="article-card">
                <span className="card-top"><span>МАТЕРИАЛ</span><span>{String(index + 1).padStart(2, "0")}</span></span>
                <h2>{article.title}</h2>
                <p>{article.body.slice(0, 120)}{article.body.length > 120 ? "…" : ""}</p>
                <span className="card-bottom">Читать статью <span aria-hidden="true">↗</span></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
