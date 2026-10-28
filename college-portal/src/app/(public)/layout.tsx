import Link from 'next/link';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-shell">
      <header className="public-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Campus — главная">
            <span className="brand-mark">C</span><span>campus<span className="brand-dot">.</span></span>
          </Link>
          <nav className="public-nav" aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href="/about">О колледже</Link>
            <Link href="/courses">Курсы</Link>
          </nav>
          <Link href="/login" className="button button-outline button-small">Войти <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <main className="public-main">{children}</main>
      <footer className="site-footer container"><span>© 2026 Campus College</span><span>Знания становятся возможностями.</span></footer>
    </div>
  );
}
