'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/portal/dashboard', label: 'Обзор' },
  { href: '/portal/grades', label: 'Оценки' },
  { href: '/portal/schedule', label: 'Расписание' },
];

export function PortalNav() {
  const pathname = usePathname();

  return (
    <nav className="sidebar-nav" aria-label="Навигация личного кабинета">
      {links.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return <Link key={href} href={href} aria-current={active ? 'page' : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
