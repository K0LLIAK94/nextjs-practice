import Link from "next/link";

export default function NotFound() {
  return (
    <section className="state-page">
      <p className="eyebrow">404 / Страница не найдена</p>
      <h1>Этот лист<br />ещё не написан.</h1>
      <p className="lead">Такой страницы или статьи нет. Вернитесь в каталог и выберите другой материал.</p>
      <div className="state-actions"><Link className="button" href="/articles">К списку статей <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/">На главную</Link></div>
    </section>
  );
}
