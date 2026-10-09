import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Лист — агрегатор статей",
  description: "Читайте статьи в удобном каталоге с серверной загрузкой данных.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#content">Перейти к содержимому</a>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="Лист — главная">
              <span className="brand-mark" aria-hidden="true">л.</span> лист
            </Link>
            <nav aria-label="Основная навигация">
              <Link href="/">Главная</Link>
              <Link href="/articles">Статьи <span aria-hidden="true">↗</span></Link>
            </nav>
          </div>
        </header>
        <main id="content" className="container main-content">{children}</main>
        <footer className="site-footer container">
          <span>Лист · Пространство для чтения</span>
          <span>Данные: JSONPlaceholder</span>
        </footer>
      </body>
    </html>
  );
}
