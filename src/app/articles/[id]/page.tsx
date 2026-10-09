import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToArticles from "@/components/BackToArticles";
import { getArticle } from "@/lib/articles";

export const dynamic = "force-dynamic";

type ArticlePageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) notFound();
  return { title: article.title, description: article.body.slice(0, 160) };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) notFound();

  return (
    <div className="reading-page">
      <BackToArticles />
      <article className="reading-article">
        <p className="eyebrow">Материал {String(article.id).padStart(2, "0")} / Автор {article.userId}</p>
        <h1>{article.title}</h1>
        <div className="reading-divider" />
        <div className="article-body">{article.body.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        <p className="source-note">Материал из учебного API JSONPlaceholder.</p>
      </article>
    </div>
  );
}
