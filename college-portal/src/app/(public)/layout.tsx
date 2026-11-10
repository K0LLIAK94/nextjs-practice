import Link from 'next/link';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <p><Link href="/">Campus College</Link></p>
        <nav aria-label="Основная навигация">
          <Link href="/">Главная</Link>
          <Link href="/about">О колледже</Link>
          <Link href="/courses">Курсы</Link>
          <Link href="/login">Войти</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2026 Campus College · Учебный проект</footer>
    </>
  );
}
