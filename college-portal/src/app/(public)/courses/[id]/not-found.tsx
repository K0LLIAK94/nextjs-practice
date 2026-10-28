import Link from 'next/link';

export default function CourseNotFound() {
  return (
    <section className="container content-section not-found-view">
      <p className="section-kicker">ОШИБКА 404</p>
      <h1 className="page-heading">Такого курса <em>не существует.</em></h1>
      <p className="lead narrower">Проверь адрес или вернись к списку доступных программ.</p>
      <Link href="/courses" className="button button-primary">К списку курсов ↗</Link>
    </section>
  );
}
