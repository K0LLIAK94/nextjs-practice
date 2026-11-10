import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'О колледже' };

export default function AboutPage() {
  return (
    <section>
      <h1>О колледже</h1>
      <p>Campus College — демонстрационный портал для изучения Next.js.</p>
      <ul>
        <li>Лекции и практические занятия по веб-разработке.</li>
        <li>Отдельная страница для каждого курса.</li>
        <li>Личный кабинет с оценками и расписанием.</li>
      </ul>
      <Link href="/courses">Перейти к курсам</Link>
    </section>
  );
}
