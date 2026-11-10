import type { Metadata } from 'next';
import { LoginForm } from '@/components/LoginForm';
import { getPortalRedirect } from '@/lib/portal-redirect';

export const metadata: Metadata = { title: 'Вход в кабинет' };

export default async function LoginPage({ searchParams }: {
  searchParams: Promise<{ redirect?: string | string[] }>;
}) {
  const { redirect } = await searchParams;
  const redirectTo = getPortalRedirect(Array.isArray(redirect) ? redirect[0] : redirect);

  return (
    <section>
      <h1>Вход в личный кабинет</h1>
      <p>Для учебного доступа введите любой непустой PIN. Это демонстрация работы cookie.</p>
      <LoginForm redirectTo={redirectTo} />
    </section>
  );
}
