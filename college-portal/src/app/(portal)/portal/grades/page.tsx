import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Кабинет — оценки' };
const grades = [
  { name: 'Основы веб-разработки', kind: 'Лекция', grade: '5', date: '14 октября' },
  { name: 'Практикум по React', kind: 'Практика', grade: '5', date: '18 октября' },
  { name: 'Архитектура Next.js', kind: 'Лекция', grade: '4', date: '22 октября' },
];
export default function GradesPage() {
  return (
    <>
      <p className="section-kicker">УСПЕВАЕМОСТЬ / 02</p><h1 className="portal-title">Мои оценки<span aria-hidden="true">.</span></h1>
      <p className="portal-lead">Результаты текущего учебного семестра.</p>
      <div className="portal-panel table-panel"><div className="table-head"><h2>Зачётная ведомость</h2><span>ОСЕНЬ 2026</span></div>
        <div className="table-scroll"><table className="grade-table"><thead><tr><th>Предмет</th><th>Формат</th><th>Дата</th><th>Оценка</th></tr></thead>
        <tbody>{grades.map((item) => <tr key={item.name}><td>{item.name}</td><td>{item.kind}</td><td>{item.date}</td><td><span className="grade-pill">{item.grade}</span></td></tr>)}</tbody></table></div>
      </div>
    </>
  );
}
