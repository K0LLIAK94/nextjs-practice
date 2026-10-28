import Link from 'next/link';
import { courses } from '@/data/courses';

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> ТВОЙ ПУТЬ В IT НАЧИНАЕТСЯ ЗДЕСЬ</span>
          <h1>Учись сегодня.<br /><em>Создавай завтра.</em></h1>
          <p className="lead">Практические навыки, сильные преподаватели и пространство, где идеи превращаются в настоящие проекты.</p>
          <div className="actions">
            <Link className="button button-primary" href="/courses">Смотреть курсы <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">Узнать о колледже <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-stats"><div><b>03</b><span>учебных курса</span></div><div><b>02</b><span>формата занятий</span></div><div><b>100%</b><span>практика маршрутизации</span></div></div>
        </div>
        <div className="hero-art" aria-label="Абстрактная графика Campus" role="img">
          <div className="art-grid" /><div className="orb orb-one" /><div className="orb orb-two" /><div className="art-label">CAMPUS / LEARN / BUILD</div>
          <div className="art-card"><span>НАПРАВЛЕНИЕ 01</span><strong>Digital<br />Future<span>.</span></strong><small>ПРОЕКТИРУЙ • ИССЛЕДУЙ • СОЗДАВАЙ</small></div>
        </div>
      </section>
      <section className="container section-space">
        <div className="section-heading"><div><p className="section-kicker">ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</p><h2>Курсы, с которых <em>всё начинается</em></h2></div><Link className="text-link" href="/courses">Все курсы →</Link></div>
        <div className="course-grid">{courses.map((course, index) => (
          <Link key={course.id} href={`/courses/${course.id}`} className="course-card">
            <span className="card-index">0{index + 1} / {course.type === 'lecture' ? 'ЛЕКЦИЯ' : 'ПРАКТИКА'}</span>
            <span className="course-symbol" aria-hidden="true">{['✳', '⌘', '◈'][index]}</span>
            <h3>{course.title}</h3><p>{course.description}</p>
            <span className="card-footer">Изучить курс <span aria-hidden="true">↗</span></span>
          </Link>
        ))}</div>
      </section>
    </>
  );
}
