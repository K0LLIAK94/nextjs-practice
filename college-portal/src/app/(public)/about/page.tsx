import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'О колледже' };

export default function AboutPage() {
  return (
    <section className="container content-section">
      <p className="section-kicker">О НАС / 01</p>
      <h1 className="page-heading">Место, где теория<br /><em>встречается с практикой.</em></h1>
      <p className="lead narrower">Campus — демонстрационный учебный портал колледжа. Здесь студенты изучают современные цифровые технологии, видят свои оценки и управляют расписанием.</p>
      <div className="feature-grid">
        <div className="feature"><span>01</span><h2>Осмысленные знания</h2><p>Изучаем основу и сразу проверяем её на реальных задачах.</p></div>
        <div className="feature"><span>02</span><h2>Своя траектория</h2><p>Лекции и практикумы дополняют друг друга.</p></div>
        <div className="feature"><span>03</span><h2>Удобный кабинет</h2><p>Доступ к учебной информации в понятной структуре.</p></div>
      </div>
      <Link href="/courses" className="button button-primary">Перейти к курсам ↗</Link>
    </section>
  );
}
