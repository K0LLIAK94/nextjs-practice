import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses, getCourseById, getCourseTypeLabel } from '@/data/courses';

type CoursePageProps = { params: Promise<{ id: string }> };

// Next.js creates HTML for /courses/1, /courses/2 and /courses/3 at build time.
export function generateStaticParams(): { id: string }[] {
  return courses.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);
  return { title: course?.title ?? 'Курс не найден' };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params; // params is a Promise in Next.js 16.
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <section className="container content-section">
      <Link href="/courses" className="back-link">← Все курсы</Link>
      <div className="detail-grid">
        <div>
          <p className="section-kicker">КУРС / {id.padStart(2, '0')}</p>
          <h1 className="page-heading">{course.title}</h1>
          <span className="type-tag larger">{getCourseTypeLabel(course.type)}</span>
          <p className="lead detail-description">{course.description}</p>
          <Link href="/login" className="button button-primary">Перейти в кабинет ↗</Link>
        </div>
        <aside className="detail-aside" aria-label="Информация о курсе">
          <p className="section-kicker">ИНФОРМАЦИЯ</p>
          <div className="info-row"><span>ID курса</span><strong>{course.id}</strong></div>
          <div className="info-row"><span>Формат</span><strong>{getCourseTypeLabel(course.type)}</strong></div>
          <div className="info-row"><span>Преподаватель</span><strong>{course.teacher}</strong></div>
          <div className="info-row"><span>Объём программы</span><strong>{course.duration}</strong></div>
          <div className="aside-note">Учись, пробуй, создавай — каждый новый навык имеет значение.</div>
        </aside>
      </div>
    </section>
  );
}
