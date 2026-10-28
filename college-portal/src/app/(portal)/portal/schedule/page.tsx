import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Кабинет — расписание' };
const schedule = [
  { day: 'Понедельник', date: '02.11', lessons: [{ time: '10:00 – 11:30', title: 'Практикум по React', detail: 'Практика · Аудитория 305' }, { time: '12:00 – 13:30', title: 'Основы веб-разработки', detail: 'Лекция · Аудитория 201' }] },
  { day: 'Вторник', date: '03.11', lessons: [{ time: '09:00 – 10:30', title: 'Архитектура Next.js', detail: 'Лекция · Аудитория 405' }, { time: '11:00 – 12:30', title: 'Практикум по React', detail: 'Практика · Аудитория 305' }] },
  { day: 'Среда', date: '04.11', lessons: [{ time: '11:00 – 12:30', title: 'Основы веб-разработки', detail: 'Лекция · Аудитория 201' }] },
];
export default function SchedulePage() {
  return (
    <>
      <p className="section-kicker">УЧЁБНЫЙ ПЛАН / 03</p><h1 className="portal-title">Расписание<span aria-hidden="true">.</span></h1>
      <p className="portal-lead">Пример занятий на неделю 2–4 ноября 2026 года.</p>
      <div className="schedule-list">{schedule.map((day) => <section className="portal-panel schedule-day" key={day.date}>
        <div className="schedule-date"><span>{day.date}</span><h2>{day.day}</h2></div><div className="schedule-lessons">{day.lessons.map((lesson) => <div className="lesson" key={lesson.time}><time>{lesson.time}</time><div><strong>{lesson.title}</strong><small>{lesson.detail}</small></div></div>)}</div>
      </section>)}</div>
    </>
  );
}
