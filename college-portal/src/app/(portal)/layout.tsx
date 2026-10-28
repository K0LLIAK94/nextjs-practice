import Link from 'next/link';

const navigation = [
  { href: '/portal/dashboard', label: 'Обзор', icon: '▦' },
  { href: '/portal/grades', label: 'Оценки', icon: '◉' },
  { href: '/portal/schedule', label: 'Расписание', icon: '▤' },
];

export default function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <Link href="/" className="brand portal-brand" aria-label="Campus — главная">
          <span className="brand-mark">C</span><span>campus<span className="brand-dot">.</span></span>
        </Link>
        <div className="sidebar-caption">УЧЕБНОЕ ПРОСТРАНСТВО</div>
        <nav aria-label="Навигация личного кабинета" className="sidebar-nav">
          {navigation.map(({ href, label, icon }) => <Link key={href} href={href}><span aria-hidden="true">{icon}</span>{label}<span aria-hidden="true" className="nav-chevron">↗</span></Link>)}
        </nav>
        <div className="sidebar-bottom"><span className="student-avatar">АС</span><div><strong>Алексей Смирнов</strong><small>Студент · ИТ-21</small></div></div>
      </aside>
      <div className="portal-content">
        <header className="portal-topbar"><span>ЛИЧНЫЙ КАБИНЕТ / 2026–2027</span><Link href="/">← На сайт колледжа</Link></header>
        <main className="portal-main">{children}</main>
      </div>
    </div>
  );
}
