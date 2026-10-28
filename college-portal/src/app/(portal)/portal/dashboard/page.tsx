import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Кабинет — обзор' };

export default function DashboardPage() {
  return (
    <>
      <p className="section-kicker">ОБЗОР / 01</p>
      <h1 className="portal-title">С возвращением, Алексей <span aria-hidden="true">✳</span></h1>
      <p className="portal-lead">Вот что происходит в твоём учебном пространстве.</p>
      <div className="metrics">
        <div className="metric"><span>Средний балл</span><strong>4,7</strong><small>За текущий семестр</small></div>
        <div className="metric"><span>Завершено модулей</span><strong>12<span>/16</span></strong><small>75% учебного плана</small></div>
        <div className="metric"><span>Занятий на неделе</span><strong>8</strong><small>Лекции и практика</small></div>
      </div>
      <div className="panel-grid">
        <Link href="/portal/schedule" className="portal-panel"><span className="section-kicker">БЛИЖАЙШЕЕ ЗАНЯТИЕ</span><h2>Практикум по React</h2><p>Понедельник · 10:00–11:30 · Аудитория 305</p><span className="panel-link">Расписание ↗</span></Link>
        <Link href="/portal/grades" className="portal-panel"><span className="section-kicker">УСПЕВАЕМОСТЬ</span><h2>Твои результаты</h2><p>Посмотри оценки за пройденные модули.</p><span className="panel-link">Все оценки ↗</span></Link>
      </div>
    </>
  );
}
