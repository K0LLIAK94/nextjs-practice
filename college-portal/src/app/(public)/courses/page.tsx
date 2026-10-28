import type { Metadata } from 'next';
import Link from 'next/link';
import { courses, getCourseTypeLabel } from '@/data/courses';
export const metadata: Metadata = { title: 'Курсы' };

export default function CoursesPage() {
  return (
    <section className="container content-section">
      <p className="section-kicker">ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ / 02</p>
      <h1 className="page-heading">Выбери свой <em>следующий шаг.</em></h1>
      <p className="lead narrower">Три курса: теоретические основы и практические занятия. Каждый курс имеет собственный динамический URL.</p>
      <div className="catalog-list">{courses.map((course, index) => (
        <Link href={`/courses/${course.id}`} key={course.id} className="catalog-row">
          <span className="catalog-number">0{index + 1}</span>
          <span className="catalog-info"><strong>{course.title}</strong><small>{course.description}</small></span>
          <span className="type-tag">{getCourseTypeLabel(course.type)}</span><span className="round-arrow" aria-hidden="true">↗</span>
        </Link>
      ))}</div>
    </section>
  );
}
