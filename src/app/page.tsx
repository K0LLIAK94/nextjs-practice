import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Лист — главная",
  description: "Лист — простой агрегатор статей. Откройте каталог и выберите материал для чтения.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Небольшая пауза. Хорошее чтение.</p>
          <h1>Откройте<br />новый <em>лист.</em></h1>
          <p className="lead">Статьи в одном месте. Выберите заголовок, откройте материал и погрузитесь в чтение — без лишнего шума.</p>
          <Link className="button" href="/articles">В каталог статей <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="paper paper-back" />
          <div className="paper paper-front">
            <span className="paper-kicker">ЛИСТ / ДЛЯ ЧТЕНИЯ</span>
            <span className="paper-title">Есть время<br />для новой<br /><i>истории.</i></span>
            <div className="paper-lines"><span /><span /><span /></div>
            <span className="paper-number">01 — 15</span>
          </div>
          <span className="art-caption">Выберите свою следующую статью</span>
        </div>
      </section>
      <section className="home-bottom" aria-label="О каталоге">
        <div><span className="eyebrow">01 / Выберите</span><h2>15 материалов в каталоге</h2><p>Названия и короткие отрывки помогут найти статью.</p></div>
        <div><span className="eyebrow">02 / Читайте</span><h2>Всё внимание — тексту</h2><p>Каждая статья открывается на отдельной странице.</p></div>
      </section>
    </>
  );
}
