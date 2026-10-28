import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Демо-доступ' };

export default function LoginPage() {
  return (
    <section className="container content-section login-section">
      <p className="section-kicker">ЛИЧНЫЙ КАБИНЕТ</p>
      <h1 className="page-heading">Вход в <em>Campus.</em></h1>
      <p className="lead narrower">Это учебный демонстрационный проект. Авторизация не реализована; личный кабинет открыт для просмотра без пароля.</p>
      <Link href="/portal/dashboard" className="button button-primary">Открыть демо-кабинет ↗</Link>
    </section>
  );
}
