import Link from 'next/link';
import { PortalNav } from '@/components/PortalNav';
import { LogoutButton } from '@/components/LogoutButton';

// Layout остаётся серверным. Хуки используются только в дочерних компонентах.
export default function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <p><Link href="/">Campus College</Link></p>
        <PortalNav />
        <p className="student-info">Алексей Смирнов<br />Студент · ИТ-21</p>
        <LogoutButton />
      </aside>
      <div className="portal-content">
        <header className="portal-topbar"><Link href="/">На сайт колледжа</Link> · Личный кабинет</header>
        <main>{children}</main>
      </div>
    </div>
  );
}
