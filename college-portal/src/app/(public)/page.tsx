import Link from 'next/link';
import { courses, getCourseTypeLabel } from '@/data/courses';

export default function HomePage() {
  return (
    <>
      <h1>Портал колледжа</h1>
      <p>Курсы по веб-разработке, оценки и расписание занятий.</p>
      <p><Link href="/courses">Все курсы</Link> · <Link href="/portal/dashboard">Личный кабинет</Link></p>
      <h2>Учебные курсы</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}><Link href={`/courses/${course.id}`}>{course.title}</Link> — {getCourseTypeLabel(course.type)}</li>
        ))}
      </ul>
    </>
  );
}
