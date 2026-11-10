import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { courses, getCourseTypeLabel } from '@/data/courses';
import { CourseFilter } from '@/components/CourseFilter';
import { getCourseFilter } from '@/lib/course-filter';

export const metadata: Metadata = { title: 'Курсы' };
type CoursesPageProps = {
  searchParams: Promise<{ type?: string | string[] }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const type = getCourseFilter((await searchParams).type);
  const filtered = courses.filter((course) => type === 'all' || course.type === type);

  return (
    <section>
      <h1>Курсы</h1>
      <Suspense fallback={<p>Загрузка фильтра…</p>}>
        <CourseFilter />
      </Suspense>
      <p>Найдено курсов: {filtered.length}</p>
      <ul className="course-list">
        {filtered.map((course) => (
          <li key={course.id}>
            <h2><Link href={`/courses/${course.id}`}>{course.title}</Link></h2>
            <p>{getCourseTypeLabel(course.type)} · {course.duration}</p>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
